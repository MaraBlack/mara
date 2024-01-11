import * as THREE from "three";

import { Injectable } from '@angular/core';
import { ObjectType } from "../../models/object-types.enum";

@Injectable({
  providedIn: 'root'
})
export class PlaneService {

  constructor() { }

  /*
    @param properties - ObjectDat interface
    @param color - default is white, preferred 0xa7a8aa
    @param reflectivity
    @return PlaneGeometry
  */
  getWorldPlane(color: THREE.Color = new THREE.Color(), reflectivity: number = 0.8) {
    const lambertMaterial = new THREE.MeshLambertMaterial({
      color: color,
      reflectivity: reflectivity
    });

    const planeGeo = new THREE.PlaneGeometry(124, 124);

    const plane = new THREE.Mesh(planeGeo, lambertMaterial);
    plane.rotation.x = Math.PI * -.5
    plane.receiveShadow = true
    plane.name = ObjectType.GROUND;

    return plane;
  }
}