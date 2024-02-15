import * as THREE from "three";

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightsService {
  /*
    @param color - default is 0xf5f4eb
    @return PointLight
  */
  getPointLight(color: THREE.ColorRepresentation = new THREE.Color(0xffffff)) {
    const light = new THREE.PointLight(color, 1000, 500, 2);
    light.position.set(0, 60, 0);
    light.castShadow = true;

    return light;
  }

  /*
    @param color - default is 0xd9d3e6
    @return DirectionalLight
  */
  getDirectionalLight(color: THREE.ColorRepresentation = new THREE.Color(0xd9d3e6)) {
    const light = new THREE.DirectionalLight(color);
    light.position.set(-1, -1, -1);
    return light;
  }

  /*
    @param color - default is 0xc7c5c5
    @return AmbientLight
  */
  getAmbientLight(color: THREE.ColorRepresentation = new THREE.Color(0xc7c5c5)) {
    const light = new THREE.AmbientLight(color);
    return light;
  }
}