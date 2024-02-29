
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
import { LettersService } from "../shared/letters.service";

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
    private sceneActionService: SceneActionService,
    private lettersService: LettersService

  ) {
    this.initGL();
  }

  initGL() {
    this.scene = new THREE.Scene();
    this.scene.name = ObjectType.SCENE;
    this.scene.receiveShadow = true;

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
    this.renderer.setSize(width, height, true);
    (this.renderer as THREE.WebGLRenderer).shadowMap.enabled = true;

    this.controls = this.controlsService.getControls(this.camera, this.renderer.domElement);

    // window.addEventListener("resize", this.onWindowResize, false);

    const letterHeight = 5;

    const coord_M = { x: -70, y: 50, z: 0};
    const coord_A = { x: -45, y: 50, z: 0};
    const coord_E = {x: -20, y: 50, z: 0};
    const coord_F = {x: 5, y: 50, z: 0};
    const coord_B = {x: 30, y: 50, z: 0};
    const coord_C = {x: 55, y: 50, z: 0};
    const coord_R = { x: -70, y: 20, z: 0};
    const coord_L = {x: -45, y: 20, z: 0};
    const coord_K = {x: -20, y: 20, z: 0};

    const coord_dot = {x: -5, y: 20, z: 0};

    const m = this.lettersService.getLetter_M(coord_M, letterHeight);
    const a = this.lettersService.getLetter_A(coord_A, letterHeight);
    const e = this.lettersService.getLetter_E(coord_E, letterHeight);
    const f = this.lettersService.getLetter_F(coord_F, letterHeight);
    const b = this.lettersService.getLetter_B(coord_B, letterHeight);
    const c = this.lettersService.getLetter_C(coord_C, letterHeight);
    const r = this.lettersService.getLetter_R(coord_R, letterHeight);
    const l = this.lettersService.getLetter_L(coord_L, letterHeight);
    const k = this.lettersService.getLetter_K(coord_K, letterHeight);

    const dot = this.lettersService.getLetter_Dot(coord_dot, letterHeight)

    this.scene.add(a);
    this.scene.add(b);
    this.scene.add(e);
    this.scene.add(f);
    this.scene.add(m);
    this.scene.add(c);
    this.scene.add(r);
    this.scene.add(l);
    this.scene.add(k);

    this.scene.add(dot);

    this.animate();
  }

  animate() {
    this.sceneActionService.animate(this.renderer, this.controls, this.scene, this.camera)
  }

  onWindowResize() {
    this.sceneActionService.onWindowResize(this.renderer, this.camera)
  }

}
