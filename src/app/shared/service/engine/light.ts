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
    light.position.set(0, 50, 0);
    light.castShadow = true;

    return light;
  }
}