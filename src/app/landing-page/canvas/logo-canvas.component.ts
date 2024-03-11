
import * as THREE from "three";

import { AfterViewInit, Component, ElementRef, ViewChild, isDevMode } from '@angular/core';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { ObjectType } from "src/app/metropolis/shared/models/object-types.enum";
import { CameraService } from "src/app/engine/camera";
import { LightsService } from "src/app/engine/light";
import { EventOptions } from "src/app/metropolis/shared/models/event-options.model";
import { ControlsService } from "src/app/engine/controls";
import { SceneActionService } from "src/app/engine/scene-actions";
import { GenerateWordService } from "../shared/generate-word.service";
import { PlaneCoordinates } from "src/app/metropolis/shared/models/plane-coordinates.model";
import { TextOrientation } from "../shared//models/text-orientation.model";

@Component({
  selector: 'app-logo-canvas',
  templateUrl: './logo-canvas.component.html',
  styleUrls: ['./logo-canvas.component.scss']
})
export class LogoCanvasComponent implements AfterViewInit {

  @ViewChild('logoCanvas', { static: false })
  rendererContainer!: ElementRef;

  absoluteAssetsPath = isDevMode() ? '../../../../assets/' : 'assets/';
  img = this.absoluteAssetsPath + 'dang.png'

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
    private controlsService: ControlsService,
    private sceneActionService: SceneActionService,
    private generateWordService: GenerateWordService
  ) {
    this.initGL();
  }


  initGL() {
    this.scene = new THREE.Scene();
    this.scene.name = ObjectType.SCENE;
    this.scene.receiveShadow = true;

    this.camera = this.cameraService.getCamera();
    this.camera.position.copy(new THREE.Vector3(0, 0, 110));

    this.pointLight = this.lightService.getPointLight();
    this.directionalLight = this.lightService.getDirectionalLight();
    this.ambientLight = this.lightService.getAmbientLight();

    this.eventOptions = {
      raycaster: this.raycaster,
      camera: this.camera,
      scene: this.scene
    }
    this.scene.add(this.camera);

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
    this.controls.minDistance = 10;
    this.controls.maxDistance = 124;

    const tanFOV = Math.tan(((Math.PI / 180) * this.camera.fov / 1.6));

    const letterHeight = 5;
    const coord_ = Math.floor((letterHeight * letterHeight) / 2);

    // const groupMara = new THREE.Group();
    // groupMara.name = 'mara'

    // const coord_M = { x: 0, y: 20, z: 0 };
    // const coord_A = { x: 0, y: 5, z: 0 };
    // const coord_R = { x: 0, y: -10, z: 0 };
    // const coord_A2 = { x: 0, y: -25, z: 0 };
    // const coord_dot = { x: -letterHeight, y: -40, z: 0 };

    // const m = this.lettersService.getLetter_M(coord_M, letterHeight);
    // const a = this.lettersService.getLetter_A(coord_A, letterHeight);
    // const r = this.lettersService.getLetter_R(coord_R, letterHeight);
    // const a2 = this.lettersService.getLetter_A(coord_A2, letterHeight);
    // const dot = this.lettersService.getLetter_Dot(coord_dot, letterHeight)

    // groupMara.add(m);
    // groupMara.add(a);
    // groupMara.add(r);
    // groupMara.add(a2);
    // groupMara.add(dot);
    // groupMara.position.x = -coord_;

    const positions: PlaneCoordinates[] = [
      { x: 0, y: 20, z: 0 }, // M
      { x: 0, y: 5, z: 0 },  // A
      { x: 0, y: -10, z: 0 },
      { x: 0, y: -25, z: 0 },
      { x: 0, y: -40, z: 0 },
      { x: 0, y: -55, z: 0 }
      // Add more positions as needed
    ];

    const wordObjects = this.generateWordService.generateWord('mara.', 5, TextOrientation.VERTICAL);
    wordObjects.position.x = -coord_;

    this.scene.add(wordObjects);

    // const groupBlack = new THREE.Group();
    // groupBlack.name = 'black';

    // const coord_B = { x: 0, y: 20, z: 0 };
    // const coord_L = { x: 0, y: 5, z: 0 };
    // const coord_A3 = { x: 0, y: -10, z: 0 };
    // const coord_C = { x: 0, y: -25, z: 0 };
    // const coord_K = { x: 0, y: -40, z: 0 };

    // const b = this.lettersService.getLetter_B(coord_B, letterHeight);
    // const l = this.lettersService.getLetter_L(coord_L, letterHeight);
    // const a3 = this.lettersService.getLetter_A(coord_A3, letterHeight);
    // const c = this.lettersService.getLetter_C(coord_C, letterHeight);
    // const k = this.lettersService.getLetter_K(coord_K, letterHeight);

    // groupBlack.add(b);
    // groupBlack.add(l);
    // groupBlack.add(a3);
    // groupBlack.add(c);
    // groupBlack.add(k);
    // groupBlack.position.x = coord_ - 10;
    // groupBlack.rotateY(Math.PI / 2)

    // this.scene.add(groupMara);
    // this.scene.add(groupBlack);

    // this.camera.aspect = window.innerWidth / window.innerHeight;

    // adjust the FOV
    // this.camera.fov = (360 / Math.PI) * Math.atan(tanFOV * (height / width) / 3);
    // this.camera.updateProjectionMatrix();
    // this.camera.lookAt(this.scene.position);
    // this.renderer.render(this.scene, this.camera);


    this.animate();
  }

  animate() {
    this.sceneActionService.animate(this.renderer, this.controls, this.scene, this.camera)
  }

  onWindowResize() {
    this.sceneActionService.onWindowResize(this.renderer, this.camera);
  }
}
