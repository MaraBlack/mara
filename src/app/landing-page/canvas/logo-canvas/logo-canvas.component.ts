
import * as THREE from "three";
import { Component, ElementRef, ViewChild, isDevMode } from '@angular/core';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { ObjectType } from "src/app/metropolis/shared/models/object-types.enum";
import { CameraService } from "src/app/engine/camera";
import { LightsService } from "src/app/engine/light";
import { PlaneService } from "src/app/engine/plane";
import { ObjectHelpers } from "src/app/engine/grid-helper";
import { EventOptions } from "src/app/metropolis/shared/models/event-options.model";
import { ControlsService } from "src/app/engine/controls";
import { SceneActionService } from "src/app/engine/scene-actions";

@Component({
  selector: 'app-logo-canvas',
  templateUrl: './logo-canvas.component.html',
  styleUrls: ['./logo-canvas.component.scss']
})
export class LogoCanvasComponent {

  @ViewChild('logoCanvas', { static: false })
  rendererContainer!: ElementRef;

  img = isDevMode() ? '../../../assets/dang.png' : 'assets/dang.png'

  buildingColor = new THREE.Color(0x4d5460);
  groundColor = new THREE.Color(0xa7a8aa);


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

  gridHelper!: THREE.GridHelper;
  controls!: OrbitControls;

  //events
  eventOptions!: EventOptions;

  constructor(
    private cameraService: CameraService,
    private lightService: LightsService,
    private planeService: PlaneService,
    private controlsService: ControlsService,
    private objectHelpersService: ObjectHelpers,
    private sceneActionService: SceneActionService

  ) {
    this.initGL();
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

    this.eventOptions = {
      raycaster: this.raycaster,
      camera: this.camera,
      scene: this.scene
    }

    this.gridHelper = this.objectHelpersService.getGridHelper();
    this.scene.add(this.gridHelper);

    this.scene.add(this.camera);
    this.scene.add(this.plane);

    this.scene.add(this.pointLight);
    this.scene.add(this.directionalLight);
    this.scene.add(this.ambientLight);
  }

  ngAfterViewInit() {
    const element = document.getElementById('logo-canvas-container');
    const height = element?.offsetHeight || window.innerHeight;
    const width = element?.offsetWidth || window.innerWidth;


    this.renderer = new THREE.WebGLRenderer({ canvas: this.rendererContainer.nativeElement, antialias: true, alpha: true });
    this.renderer.setSize(width / 2, height/1.5, true);
    (this.renderer as THREE.WebGLRenderer).shadowMap.enabled = true;

    this.controls = this.controlsService.getControls(this.camera, this.renderer.domElement);

    // window.addEventListener("resize", this.onWindowResize, false);


    this.animate();
  }

  animate() {
    this.sceneActionService.animate(this.renderer, this.controls, this.scene, this.camera)
  }

  onWindowResize() {
    this.sceneActionService.onWindowResize(this.renderer, this.camera)
  }

}
