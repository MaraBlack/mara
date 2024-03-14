
import * as THREE from "three";

import { AfterViewInit, Component, ElementRef, OnChanges, SimpleChange, SimpleChanges, ViewChild, isDevMode } from '@angular/core';
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
export class LogoCanvasComponent implements OnChanges, AfterViewInit {

  @ViewChild('logoCanvas', { static: false })
  rendererContainer!: ElementRef;

  absoluteAssetsPath = isDevMode() ? '../../../../assets/' : 'assets/';
  img = this.absoluteAssetsPath + 'dang.png'

  selectedWords = '';
  letterHeight = 7;

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
  wordObjects!: THREE.Group;

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

  ngOnChanges(changes: SimpleChanges): void {

  }


  initGL() {
    this.scene = new THREE.Scene();
    this.scene.name = ObjectType.SCENE;
    this.scene.receiveShadow = true;

    this.camera = this.cameraService.getCamera();
    this.camera.position.copy(new THREE.Vector3(0, 0, 200));

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
    // this.controls.autoRotate = true;
    this.controls.minDistance = 240;
    this.controls.maxDistance = 300;

    // const tanFOV = Math.tan(((Math.PI / 180) * this.camera.fov / 1.6));

    const coord_ = Math.floor((this.letterHeight * this.letterHeight) / 2);

    this.wordObjects = this.generateWordService.generateWord('hello-there', this.letterHeight, TextOrientation.VERTICAL);
    this.wordObjects.name = 'words-group';
    this.wordObjects.position.x = -coord_;

    this.scene.add(this.wordObjects);

    this.animate();
  }

  animate() {
    this.sceneActionService.animate(this.renderer, this.controls, this.scene, this.camera)
  }

  onWindowResize() {
    this.sceneActionService.onWindowResize(this.renderer, this.camera);
  }

  setWords(words: string) {
    const coord_ = Math.floor((this.letterHeight * this.letterHeight) / 2);

    // remove all the previous chars
    let children_to_remove: any = [];
    this.scene.traverse(function (child) {
      if (child.name == "words-group") {
        children_to_remove.push(child);
      }
    });
    children_to_remove.forEach((child: any) => {
      this.scene.remove(child);
    });

    // add the new chars
    this.wordObjects = this.generateWordService.generateWord(words, this.letterHeight, TextOrientation.VERTICAL);
    this.wordObjects.name = 'words-group';
    this.wordObjects.position.x = -coord_;

    this.scene.add(this.wordObjects);


  }
}
