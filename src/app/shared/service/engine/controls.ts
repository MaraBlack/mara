import * as THREE from "three";

import { Injectable } from '@angular/core';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Injectable({
  providedIn: 'root'
})
export class ControlsService {
  /*
    @param camera
    @param renderer
    @return OrbitControls
  */
  getControls(camera: THREE.Camera, renderer: HTMLElement | undefined) {
    const controls = new OrbitControls(camera, renderer);
    controls.screenSpacePanning = true;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 10;
    controls.maxDistance = 400;
    controls.autoRotate = false;
    controls.enablePan = true;

    // rotate 360 degree
    controls.minPolarAngle = 0.0 * Math.PI;
    controls.maxPolarAngle = 0.5 * Math.PI;

    return controls;
  }
}