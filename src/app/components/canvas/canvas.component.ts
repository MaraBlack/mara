import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { Component, ElementRef, ViewChild } from '@angular/core';

import { cameraAnimationTime, cameraCurve, cameraDefaults, enCamAnim, getCamera } from "../../shared/engine/camera";
import { getPointLight } from "../../shared/engine/light";
import { getWorldPlane } from "../../shared/engine/plane";
import { getGridHelper } from "../../shared/engine/grid-helper";
import { setControls } from "../../shared/engine/controls";
import { RoadDataHardcoded } from "src/app/shared/data/roads";
import { addRoadTile } from "src/app/shared/objects/road-tile";


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
  roads = RoadDataHardcoded;

  constructor() {
    window.addEventListener("resize", this.onWindowResize, false);

    this.camera = getCamera();
    this.plane = getWorldPlane();
    this.pointLight = getPointLight();
    this.gridHelper = getGridHelper();

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

  ngAfterViewInit() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.rendererContainer.nativeElement, antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth - this.screenOffset, window.innerHeight - this.screenOffset, true);
    (this.renderer as THREE.WebGLRenderer).shadowMap.enabled = true;

    this.controls = setControls(this.camera, this.renderer.domElement)
    this.animate();

    const data = {
      coordinates: { x: -2.5, z: -2.5 },
      data: {
        type: 'platza',
        name: 'STR 0',
        nr: '0.1',
        description: 'Central Platza'
      }
    };
    const color = 0xf1db4b;
    const eventOptions = {
      raycaster: this.raycaster,
      camera: this.camera,
      scene: this.scene
    }

    const tile = addRoadTile(data, color, eventOptions)

    this.scene.add(tile);
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
