import * as THREE from "three";

import { Injectable } from '@angular/core';
import { RoadObject } from "../../models/road.model";
import { EventOptions } from "../../models/event-options.model";
import { adjustColor } from "../../misc/utils";
import { EventsService } from "../engine/events";
import { BuildingObject } from "../../models/building.model";

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  segments = 5;

  constructor(private eventsService: EventsService) { }

  addBuilding(properties: BuildingObject, color: THREE.Color = new THREE.Color(), options: EventOptions, wireframe: boolean) {
    const height = properties.coordinates.y ? properties.coordinates.y : 10;
    let skyscraperColorMesh = null;

    if (wireframe === true) {
      skyscraperColorMesh = new THREE.MeshStandardMaterial({ color: adjustColor(color, -40), roughness: 0.2, wireframe: true });
    } else {
      skyscraperColorMesh = new THREE.MeshLambertMaterial({ color: color });
    }

    const base = new THREE.BoxGeometry(10, 0.5, 10, this.segments, this.segments, this.segments);
    const building = new THREE.BoxGeometry(8, height, 8, this.segments, this.segments, this.segments);

    const baseObject = new THREE.Mesh(base, skyscraperColorMesh);
    baseObject.position.set(properties.coordinates.x, 0, properties.coordinates.z);
    baseObject.castShadow = true;
    baseObject.receiveShadow = true;

    const buildingObject = new THREE.Mesh(building, skyscraperColorMesh);
    buildingObject.position.set(properties.coordinates.x, height / 2, properties.coordinates.z);
    buildingObject.castShadow = true;
    buildingObject.receiveShadow = true;

    const group = new THREE.Group();
    group.add(baseObject);
    group.add(buildingObject);

    group.castShadow = true;
    group.receiveShadow = true;

    const clickInfo: BuildingObject = {
      uuid: group.uuid,
      coordinates: {
        x: properties.coordinates.x,
        z: properties.coordinates.z
      },
      data: {
        name: properties.data.name,
        type: properties.data.type,
        neighborhood: properties.data.neighborhood,
        description: properties.data.description
      }
    }
    this.eventsService.addObjectClickListener(buildingObject, (objectData: any) => this.eventsService.onMouseClickFn(clickInfo, buildingObject, color), options);

    return group;
  }
}