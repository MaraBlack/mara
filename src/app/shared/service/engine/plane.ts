import * as THREE from "three";

import { Injectable } from '@angular/core';
import { EventOptions } from "../../models/event-options.model";
import { EventsService } from "./events";
import { ObjectType } from "../../models/object-types.enum";
import { ObjectData } from "../../models/object.model";

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

    const planeGeo = new THREE.PlaneGeometry(150, 150);

    const plane = new THREE.Mesh(planeGeo, lambertMaterial);
    plane.rotation.x = Math.PI * -.5
    plane.receiveShadow = true
    plane.name = ObjectType.GROUND;

    return plane;
  }
}