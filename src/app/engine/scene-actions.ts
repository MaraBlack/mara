import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { cameraAnimationTime, cameraCurve, cameraDefaults, enCamAnim } from "./camera";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SceneActionService {
  animate(renderer: THREE.Renderer, controls: OrbitControls, scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
    let camPosIndex = 0;
    if (renderer) {
      window.requestAnimationFrame(() => this.animate(renderer, controls, scene, camera));
      controls.update();

      //#region CAM animation
      if (enCamAnim && camPosIndex != null && camPosIndex++ < cameraAnimationTime) {
        // ease fn
        const camPos = cameraCurve.getPoint(1 - (1 - camPosIndex / cameraAnimationTime) ** 2);
        camera.position.set(camPos.x, camPos.y, camPos.z);
        camera.lookAt(cameraDefaults.posCameraTarget);
      }

      renderer.render(scene, camera);
    }
  }

  onWindowResize(renderer: THREE.Renderer, camera: THREE.PerspectiveCamera) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }
}