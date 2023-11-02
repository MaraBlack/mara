import * as THREE from "three";

import { Component, ElementRef, ViewChild } from '@angular/core';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { CameraService, cameraAnimationTime, cameraCurve, cameraDefaults, enCamAnim } from "../../shared/service/engine/camera";
import { RoadsDataHardcoded } from "src/app/shared/data/roads.data.";
import { RoadObject } from "src/app/shared/models/road.model";
import { RoadService } from "src/app/shared/service/objects/road-tile.object";
import { InfoPanelService } from "src/app/shared/service/info-panel.service";
import { ControlsService } from "src/app/shared/service/engine/controls";
import { ObjectHelpers } from "src/app/shared/service/engine/grid-helper";
import { LightsService } from "src/app/shared/service/engine/light";
import { BuildingService } from "src/app/shared/service/objects/building.object";
import { BuildingObject } from "src/app/shared/models/building.model";
import { BuildingsDataHardcoded } from "src/app/shared/data/buildings.data";
import { PlaneService } from "src/app/shared/service/engine/plane";
import { EventOptions } from "src/app/shared/models/event-options.model";
import { ObjectType } from "src/app/shared/models/object-types.enum";
import { IntroHardcoded } from "src/app/shared/data/intro.data";

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent {
  @ViewChild('mainCanvas', { static: false })
  rendererContainer!: ElementRef;

  // constants
  screenOffset = 20.5;
  roadColor = new THREE.Color(0xf3d17c);
  buildingColor = new THREE.Color(0x4d5460);
  groundColor = new THREE.Color(0xa7a8aa);
  hasWireframeEnabled = false;

  // renderer
  renderer!: THREE.Renderer;
  raycaster = new THREE.Raycaster();

  // scene objects
  camera!: THREE.PerspectiveCamera;
  pointLight!: THREE.PointLight;
  scene!: THREE.Scene;
  plane!: THREE.Mesh;
  gridHelper!: THREE.GridHelper;
  controls!: OrbitControls;

  // data
  intro = IntroHardcoded;
  roads = RoadsDataHardcoded;
  buildings = BuildingsDataHardcoded;
  infoData!: any;


  //events
  eventOptions!: EventOptions;

  constructor(private roadService: RoadService,
    private infoPanelService: InfoPanelService,
    private cameraService: CameraService,
    private controlsService: ControlsService,
    private objectHelpersService: ObjectHelpers,
    private lightService: LightsService,
    private planeService: PlaneService,
    private buildingService: BuildingService
  ) {
    window.addEventListener("resize", this.onWindowResize, false);
    this.initGL();
  }

  initGL() {
    this.scene = new THREE.Scene();
    this.scene.name = ObjectType.SCENE;
    this.scene.receiveShadow = true;

    this.camera = this.cameraService.getCamera();
    this.pointLight = this.lightService.getPointLight();

    this.eventOptions = {
      raycaster: this.raycaster,
      camera: this.camera,
      scene: this.scene
    }

    this.plane = this.planeService.getWorldPlane(this.intro, this.groundColor, 0.8, this.eventOptions);
    // this.gridHelper = this.objectHelpersService.getGridHelper();

    this.scene.add(this.camera);
    this.scene.add(this.plane);
    this.scene.add(this.pointLight);
    // this.scene.add(this.gridHelper);
  }

  getObjectInfoFromService() {
    this.infoData = this.infoPanelService.getInfoPanel();
  }

  ngAfterViewInit() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.rendererContainer.nativeElement, antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth - this.screenOffset, window.innerHeight - this.screenOffset, true);
    (this.renderer as THREE.WebGLRenderer).shadowMap.enabled = true;

    this.controls = this.controlsService.getControls(this.camera, this.renderer.domElement);

    this.addRoadsToPlane();
    this.addBuildingsToPlane();
    this.animate();
  }

  addRoadsToPlane() {


    const group = new THREE.Object3D();
    group.name = 'Road';

    Object.entries(this.roads).forEach(([key, value]) => {
      value.forEach((road: RoadObject) => {
        const tile = this.roadService.addRoadTile(road, this.roadColor, this.eventOptions, this.hasWireframeEnabled)
        group.add(tile);
      });
    });

    this.scene.add(group);
  }

  addBuildingsToPlane() {
    const group = new THREE.Object3D();
    group.name = 'Buildings';

    Object.entries(this.buildings).forEach(([key, value]) => {
      value.forEach((building: BuildingObject) => {
        const skyscraper = this.buildingService.addBuilding(building, this.buildingColor, this.eventOptions, this.hasWireframeEnabled)
        group.add(skyscraper);
      });
    });

    this.scene.add(group);
  }

  animate() {
    let camPosIndex = 0;
    if (this.renderer) {
      window.requestAnimationFrame(() => this.animate());
      this.controls.update();

      //#region CAM animation
      if (enCamAnim && camPosIndex != null && camPosIndex++ < cameraAnimationTime) {
        // ease fn
        const camPos = cameraCurve.getPoint(1 - (1 - camPosIndex / cameraAnimationTime) ** 2);
        this.camera.position.set(camPos.x, camPos.y, camPos.z);
        this.camera.lookAt(cameraDefaults.posCameraTarget);
      }

      this.renderer.render(this.scene, this.camera);
    }
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
