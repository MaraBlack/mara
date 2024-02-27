import * as THREE from "three";

import { Component, ElementRef, ViewChild, isDevMode } from '@angular/core';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { CameraService, cameraAnimationTime, cameraCurve, cameraDefaults, enCamAnim } from "../../engine/camera";
import { RoadsDataHardcoded } from "src/app/metropolis/shared/data/roads.data.";
import { RoadObject } from "src/app/metropolis/shared/models/road.model";
import { InfoPanelService } from "src/app/metropolis/shared/info-panel.service";
import { ControlsService } from "src/app/engine/controls";
import { ObjectHelpers } from "src/app/engine/grid-helper";
import { LightsService } from "src/app/engine/light";
import { BuildingService } from "src/app/metropolis/shared/objects/building.service";
import { BuildingObject } from "src/app/metropolis/shared/models/building.model";
import { BuildingsDataHardcoded } from "src/app/metropolis/shared/data/buildings.data";
import { PlaneService } from "src/app/engine/plane";
import { EventOptions } from "src/app/metropolis/shared/models/event-options.model";
import { ObjectType } from "src/app/metropolis/shared/models/object-types.enum";
import { IntroHardcoded } from "src/app/metropolis/shared/data/intro.data";
import { RoadService } from "src/app/metropolis/shared/objects/road-tile.service";
import { LinesService } from "src/app/engine/lines";
import { SceneActionService } from "src/app/engine/scene-actions";

@Component({
  selector: 'app-metropolis-canvas',
  templateUrl: './metropolis-canvas.component.html',
  styleUrls: ['./metropolis-canvas.component.scss']
})
export class CanvasComponent {
  @ViewChild('metropolisCanvas', { static: false })
  rendererContainer!: ElementRef;

  img = isDevMode() ? '../../../assets/dang.png' : 'assets/dang.png'

  // constants
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
  directionalLight!: THREE.DirectionalLight;
  ambientLight!: THREE.AmbientLight;
  scene!: THREE.Scene;
  plane!: THREE.Mesh;
  dome!: THREE.Mesh;
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
    private linesService: LinesService,
    private lightService: LightsService,
    private planeService: PlaneService,
    private buildingService: BuildingService,
    private sceneActionService: SceneActionService
  ) {
    this.initGL();
  }

  navItemClicked($event: string) {
    console.log($event);

  }

  initGL() {
    this.scene = new THREE.Scene();
    this.scene.name = ObjectType.SCENE;
    this.scene.receiveShadow = true;

    var setcolor = 0xd3d5db;
    this.scene.fog = new THREE.Fog(setcolor, 100, 300);

    this.camera = this.cameraService.getCamera();

    this.pointLight = this.lightService.getPointLight();
    this.directionalLight = this.lightService.getDirectionalLight();
    this.ambientLight = this.lightService.getAmbientLight();

    this.plane = this.planeService.getWorldPlane();
    this.dome = this.planeService.getDome();

    this.eventOptions = {
      raycaster: this.raycaster,
      camera: this.camera,
      scene: this.scene
    }

    // this.gridHelper = this.objectHelpersService.getGridHelper();
    // this.scene.add(this.gridHelper);

    this.scene.add(this.camera);
    this.scene.add(this.plane);
    this.scene.add(this.dome);

    this.scene.add(this.pointLight);
    this.scene.add(this.directionalLight);
    this.scene.add(this.ambientLight);
  }

  getObjectInfoFromService() {
    this.infoData = this.infoPanelService.getInfoPanel();
  }

  ngAfterViewInit() {
    const element = document.getElementById('metropolis-canvas-container');
    const height = element?.offsetHeight || window.innerHeight;
    const width = element?.offsetWidth || window.innerWidth;


    this.renderer = new THREE.WebGLRenderer({ canvas: this.rendererContainer.nativeElement, antialias: true, alpha: true });
    this.renderer.setSize(width, height, true);
    (this.renderer as THREE.WebGLRenderer).shadowMap.enabled = true;

    this.controls = this.controlsService.getControls(this.camera, this.renderer.domElement);
    // rotate 360 degree
    this.controls.minPolarAngle = 0.0 * Math.PI;
    this.controls.maxPolarAngle = 0.5 * Math.PI;

    window.addEventListener("resize", this.onWindowResize, false);

    this.addRoadsToPlane();
    this.addBuildingsToPlane();
    this.addLinesToPlane();
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

    this.buildingService.generatedBuildings = group;
    this.scene.add(group);
  }

  addLinesToPlane() {
    for (var i = 0; i < 20; i++) {
      this.scene.add(this.linesService.createLines(15, 80));
    };
  }

  animate() {
    this.sceneActionService.animate(this.renderer, this.controls, this.scene, this.camera)
  }

  onWindowResize() {
    this.sceneActionService.onWindowResize(this.renderer, this.camera)
  }
}
