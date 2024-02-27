import * as THREE from "three";

import { Injectable } from '@angular/core';
import { ObjectType } from "../metropolis/shared/models/object-types.enum";

@Injectable({
  providedIn: 'root'
})
export class PlaneService {

  constructor() { }

  /*
    @param color - default is white
    @param reflectivity - default 0.8
    @return PlaneGeometry
  */
  getWorldPlane(color: THREE.Color = new THREE.Color(), reflectivity: number = 0.8) {
    const planeMaterial = new THREE.MeshPhongMaterial({
      color: color,
      opacity: 0.5,
      reflectivity: reflectivity,
      flatShading: true,
      side: THREE.DoubleSide
    });

    const planeGeo = new THREE.PlaneGeometry(150, 150);

    const plane = new THREE.Mesh(planeGeo, planeMaterial);
    plane.rotation.x = Math.PI * -.5
    plane.receiveShadow = true
    plane.name = ObjectType.GROUND;

    return plane;
  }

  /*
    @param color - default id 0xe3e1e1
    @return IcosahedronGeometry
  */
  getDome(color: THREE.Color = new THREE.Color(0xe3e1e1)) {
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