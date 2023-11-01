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
import { PlaneService } from "src/app/shared/service/engine/plane";
import { BuildingService } from "src/app/shared/service/objects/building.object";
import { BuildingObject } from "src/app/shared/models/building.model";
import { BuildingsDataHardcoded } from "src/app/shared/data/buildings.data";

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
  roads = RoadsDataHardcoded;
  buildings = BuildingsDataHardcoded;
  infoData!: RoadObject;

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

    this.camera = this.cameraService.getCamera();
    this.plane = this.planeService.getWorldPlane();
    this.pointLight = this.lightService.getPointLight();
    this.gridHelper = this.objectHelpersService.getGridHelper();

    this.initGL();
  }

  initGL() {
    this.scene = new THREE.Scene();
    this.scene.receiveShadow = true;

    this.scene.add(this.camera);
    this.scene.add(this.plane);
    this.scene.add(this.pointLight);
    this.scene.add(this.gridHelper);
  }

  getObjectInfoFromService() {
    this.infoData = this.infoPanelService.getInfoPanel();
    console.log('canvas', this.infoData);
  }

  ngAfterViewInit() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.rendererContainer.nativeElement, antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth - this.screenOffset, window.innerHeight - this.screenOffset, true);
    (this.renderer as THREE.WebGLRenderer).shadowMap.enabled = true;

    this.controls = this.controlsService.getControls(this.camera, this.renderer.domElement)
    this.animate();

    this.addRoadsToPlane();
    this.addBuildingsToPlane();
  }

  addRoadsToPlane() {
    const eventOptions = {
      raycaster: this.raycaster,
      camera: this.camera,
      scene: this.scene
    }

    const group = new THREE.Object3D();
    group.name = 'Road';

    Object.entries(this.roads).forEach(([key, value]) => {
      value.forEach((road: RoadObject) => {
        const tile = this.roadService.addRoadTile(road, this.roadColor, eventOptions, this.hasWireframeEnabled)
        group.add(tile);
      });
    });

    this.scene.add(group);
  }

  addBuildingsToPlane() {
    const eventOptions = {
      raycaster: this.raycaster,
      camera: this.camera,
      scene: this.scene
    }

    const group = new THREE.Object3D();
    group.name = 'Buildings';

    Object.entries(this.buildings).forEach(([key, value]) => {
      value.forEach((building: BuildingObject) => {
        const skyscraper = this.buildingService.addBuilding(building, this.buildingColor, eventOptions, this.hasWireframeEnabled)
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
