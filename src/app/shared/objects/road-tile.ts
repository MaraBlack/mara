import * as THREE from "three";
import { RoadObject } from "../models/road.model";
import { addObjectClickListener, onMouseClickFn } from "../engine/events";
import { EventOptions } from "../models/event-options.model";

// new THREE.Color(), 0xf1db4b
export function addRoadTile(properties: RoadObject, color: THREE.ColorRepresentation = new THREE.Color(), options: EventOptions) {
  const segments = 5;

  const tileColor = new THREE.MeshLambertMaterial({ color: color });
  const tileBoxGeom = new THREE.BoxGeometry(5, 0.5, 5, segments, segments, segments);

  const tileObj = new THREE.Mesh(tileBoxGeom, tileColor);
  tileObj.position.set(properties.coordinates.x, 0, properties.coordinates.z);
  tileObj.receiveShadow = true;
  tileObj.name = properties.data.name;

  const clickInfo: RoadObject = {
    uuid: tileObj.uuid,
    coordinates: {
      x: properties.coordinates.x,
      z: properties.coordinates.z
    },
    data: {
      name: properties.data.name,
      type: properties.data.type,
      nr: properties.data.nr,
      description: properties.data.description
    }
  }

  addObjectClickListener(tileObj, (objectData: any) => onMouseClickFn(clickInfo), options);

  return tileObj;
}