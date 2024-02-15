import * as THREE from "three";

import { Injectable, isDevMode } from '@angular/core';
import { EventOptions } from "../../models/event-options.model";
import { EventsService } from "../engine/events";
import { BuildingObject } from "../../models/building.model";
import { ObjectType } from "../../models/object-types.enum";
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mathRandonIterval } from "../../misc/utils";
import { AdvertisingService } from "./advertising.service";
import { OrientationEnum } from "../../models/orientation.enum";

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  segments = 5;

  private _generatedBuildings!: unknown;
  set generatedBuildings(value: unknown) {
    this._generatedBuildings = value;
  }
  get generatedBuildings() {
    return this._generatedBuildings;
  }

  constructor(
    private eventsService: EventsService,
    private advertisingService: AdvertisingService
  ) { }

  /*
  @param properties - uuid, coordinates and data, BuildingObject interface
  @param color - default is white, preffered is 0x4d5460
  @param options - raycaster, camera and scene, EventOptions interface
  @param wireframe - use MeshStandardMaterial with wireframe true or false
  @return tileObject
  */
  addBuilding(properties: BuildingObject, color: THREE.Color = new THREE.Color(), options: EventOptions, wireframe: boolean) {
    const height = properties.coordinates.y ? properties.coordinates.y : 10;

    const building = new RoundedBoxGeometry(7, height, 7, 1, 1);

    const material = new THREE.MeshPhongMaterial({
      color: [0xd3d5db, 0xffffff, 0x9fa3ab, 0xcfd0d1][Math.random() * 4 | 0],
      wireframe: wireframe ? true : false
    });

    const buildingObject = new THREE.Mesh(building, material);
    buildingObject.position.set(properties.coordinates.x, height / 2, properties.coordinates.z);
    buildingObject.castShadow = true;
    buildingObject.receiveShadow = true;
    buildingObject.name = ObjectType.BUILDING + '_object_from_' + properties.data.type

    const random = height > 20 ? mathRandonIterval(6, 10) : mathRandonIterval(2, 6)

    if (Math.random() < 0.4) {
      buildingObject.add(this.advertisingService.addPanels(height, random, OrientationEnum.E));
    }

    if (Math.random() < 0.4) {
      buildingObject.add(this.advertisingService.addPanels(height, random, OrientationEnum.S));
    }

    if (Math.random() < 0.4) {
      buildingObject.add(this.advertisingService.addPanels(height, random, OrientationEnum.V));
    }

    if (Math.random() < 0.4) {
      buildingObject.add(this.advertisingService.addPanels(height, random, OrientationEnum.N));
    }


    const group = new THREE.Group();
    group.name = ObjectType.BUILDING + '_group'

    group.add(buildingObject);

    const clickInfo: BuildingObject = {
      uuid: group.uuid,
      coordinates: {
        x: properties.coordinates.x,
        z: properties.coordinates.z
      },
      objectType: properties.objectType,
      data: {
        name: properties.data.name,
        type: properties.data.type,
        color: properties.data.color,
        neighborhood: properties.data.neighborhood,
        description: properties.data.description
      }
    }
    this.eventsService.addObjectClickListener(buildingObject, (objectData: any) => this.eventsService.onMouseClickFn(clickInfo, buildingObject, new THREE.Color('#faf6eb')), options);

    return group;
  }
}