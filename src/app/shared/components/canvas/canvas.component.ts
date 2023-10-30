import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { Component, ElementRef, ViewChild } from '@angular/core';

import { cameraAnimationTime, cameraCurve, cameraDefaults, enCamAnim, getCamera } from "../../engine/camera";
import { getPointLight } from "../../engine/light";
import { getWorldPlane } from "../../engine/plane";
import { getGridHelper } from "../../engine/grid-helper";
import { setControls } from "../../engine/controls";



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

  // scene objects
  camera!: THREE.PerspectiveCamera;
  pointLight!: THREE.PointLight;
  scene!: THREE.Scene;
  plane!: THREE.Mesh;
  gridHelper!: THREE.GridHelper;
  controls!: OrbitControls;




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
