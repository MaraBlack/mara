import * as THREE from "three";

import { Injectable } from '@angular/core';
import { RoadObject } from "../../models/road.model";
import { EventOptions } from "../../models/event-options.model";
import { adjustColor } from "../../misc/utils";
import { EventsService } from "../engine/events";
import { ObjectType } from "../../models/object-types.enum";

@Injectable({
  providedIn: 'root'
})
export class RoadService {

  constructor(private eventsService: EventsService) { }

  /*
    @param properties - uuid, coordinates and data, RoadObject interface
    @param color - default is white, preffered is 0xf1db4b
    @param options - raycaster, camera and scene, EventOptions interface
    @param wireframe - use MeshStandardMaterial with wireframe true or false
    @return tileObject
  */
  addRoadTile(properties: RoadObject, color: THREE.Color = new THREE.Color(), options: EventOptions, wireframe: boolean) {
    const segments = 5;
    let tileColorMesh = null;

    const tileBoxGeom = new THREE.BoxGeometry(5, 0.5, 5, segments, segments, segments);

    if (wireframe === true) {
      tileColorMesh = new THREE.MeshStandardMaterial({ color: adjustColor(color, -40), roughness: 0.2, wireframe: true });
    } else {
      tileColorMesh = new THREE.MeshLambertMaterial({ color: color });
    }

    const tileObject = new THREE.Mesh(tileBoxGeom, tileColorMesh);
    tileObject.position.set(properties.coordinates.x, 0, properties.coordinates.z);
    tileObject.receiveShadow = true;
    tileObject.name = ObjectType.ROAD + '_tile';

    const clickInfo: RoadObject = {
      uuid: tileObject.uuid,
      coordinates: {
        x: properties.coordinates.x,
        z: properties.coordinates.z
      },
      objectType: properties.objectType,
      data: {
        name: properties.data.name,
        type: properties.data.type,
        nr: properties.data.nr,
        description: properties.data.description
      }
    }
    this.eventsService.addObjectClickListener(tileObject, (objectData: any) => this.eventsService.onMouseClickFn(clickInfo, tileObject, color), options);

    return tileObject;
  }
}