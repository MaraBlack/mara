import * as THREE from "three";

import { Injectable } from '@angular/core';
import { ObjectType } from "../../models/object-types.enum";

@Injectable({
  providedIn: 'root'
})
export class PlaneService {

  constructor() { }

  /*
    @param color - default is white, preferred 0xa7a8aa
    @param reflectivity - default 0.8
    @return PlaneGeometry
  */
  getWorldPlane(color: THREE.Color = new THREE.Color(0xf5f7fa), reflectivity: number = 0.8) {
    const planeMaterial = new THREE.MeshPhongMaterial({
      color: color,
      opacity: 0.5,
      reflectivity: reflectivity,
      flatShading: true,
      side: THREE.DoubleSide
    });

    const planeGeo = new THREE.PlaneGeometry(100, 100);

    const plane = new THREE.Mesh(planeGeo, planeMaterial);
    plane.rotation.x = Math.PI * -.5
    plane.receiveShadow = true
    plane.name = ObjectType.GROUND;

    return plane;
  }

  /*
    @param color - default id 0x9c8386
    @return IcosahedronGeometry
  */
  getDome(color: THREE.Color = new THREE.Color(0x9c8386)) {
    const domeMaterial = new THREE.MeshPhongMaterial({
      color: color,
      transparent: true,
      side: THREE.BackSide
    });
    const geometry = new THREE.IcosahedronGeometry(700, 2);
    var dome = new THREE.Mesh(geometry, domeMaterial);

    return dome;
  }
}