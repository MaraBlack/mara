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

  constructor(private eventsService: EventsService) { }

  /*
    @param properties - ObjectDat interface
    @param color - default is white, preferred 0xa7a8aa
    @param reflectivity
    @return PlaneGeometry
  */
  getWorldPlane(properties: ObjectData, color: THREE.Color = new THREE.Color(), reflectivity: number = 0.8, options: EventOptions) {
    const lambertMaterial = new THREE.MeshLambertMaterial({
      color: color,
      reflectivity: reflectivity
    });

    const planeGeo = new THREE.PlaneGeometry(150, 150);

    const plane = new THREE.Mesh(planeGeo, lambertMaterial);
    plane.rotation.x = Math.PI * -.5
    plane.receiveShadow = true
    plane.name = ObjectType.GROUND;

    const clickInfo: ObjectData = {
      type: properties.type,
      name: properties.name,
      description: properties.description
    }

    this.eventsService.addObjectClickListener(plane, (objectData: any) => this.eventsService.onMouseClickFn(clickInfo, plane, color), options);

    return plane;
  }
}