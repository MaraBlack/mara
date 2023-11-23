import * as THREE from "three";

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightsService {
  /*
    @param color - default is white, preffered is 0xF5F5F3
    @return PointLight
  */
  getPointLight(color: THREE.ColorRepresentation = new THREE.Color()) {
    const light = new THREE.PointLight(color, 1000, 400, 2);
    light.position.set(0, 60, 0);
    light.castShadow = true;

    return light;
  }

  /*
    @param color - default is 0x906f94
    @return DirectionalLight
  */
  getDirectionalLight(color: THREE.ColorRepresentation = new THREE.Color(0x906f94)) {
    const light = new THREE.DirectionalLight(color);
    light.position.set(-1, -1, -1);
    return light;
  }

  /*
    @param color - default is 0x827e7e
    @return AmbientLight
  */
  getAmbientLight(color: THREE.ColorRepresentation = new THREE.Color(0x827e7e)) {
    const light = new THREE.AmbientLight(color);
    return light;
  }
}