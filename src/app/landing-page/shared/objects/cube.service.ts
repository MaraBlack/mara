import * as THREE from "three";

import { Injectable } from "@angular/core";
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { PlaneCoordinates } from "src/app/metropolis/shared/models/plane-coordinates.model";

@Injectable({
  providedIn: 'root'
})
export class CubeService {

  segments = 2;
  constructor(
  ) { }

  /*
  @param coordinates - x, y, z
  @param color - default is white, preffered is 0x4d5460
  @param wireframe - use MeshStandardMaterial with wireframe true or false
  @return tileObject
  */
  addCube(coordinates: PlaneCoordinates, color?: THREE.Color, wireframe?: boolean, segments?: number) {
    const localSegments = segments || this.segments;
    const building = new RoundedBoxGeometry(localSegments, localSegments, localSegments, 1, 0);

    const material = new THREE.MeshPhongMaterial({
      color: color || [0xd3d5db, 0xffffff, 0x9fa3ab, 0xcfd0d1][Math.random() * 4 | 0],
      wireframe: wireframe ? true : false
    });

    const cube = new THREE.Mesh(building, material);
    cube.position.set(coordinates.x, coordinates.y || 0, coordinates.z);
    cube.castShadow = true;
    cube.receiveShadow = true;
    cube.name = 'cube';

    return cube;
  }

  addCubbesInARow(coordinates: PlaneCoordinates, noOfCubes: number, segments?: number) {
    const localSegments = segments || this.segments;
    const group = new THREE.Group();
    group.name = 'verical_group'

    for (let index = 0; index < noOfCubes; index++) {
      const localCoordinates = {
        x: coordinates.x, y: (index * localSegments), z: coordinates.z
      }
      const cube = this.addCube(localCoordinates)
      group.add(cube);
    }

    group.position.set(coordinates.x, coordinates.y || 0, coordinates.z);

    return group;
  }

  addDiagonalLeftToRight(coordinates: PlaneCoordinates, startingPoint: number, noOfCubes: number, segments?: number) {
    const localSegments = segments || this.segments;
    const group = new THREE.Group();
    group.name = 'diagonal_left-right-group'

    for (let index = 0; index < noOfCubes; index++) {
      const localCoordinates = {
        x: localSegments + coordinates.x + (index * localSegments), y: (startingPoint * localSegments) - (index * localSegments), z: coordinates.z
      }
      const cube = this.addCube(localCoordinates)
      group.add(cube);
    }

    group.position.set(coordinates.x, coordinates.y || 0, coordinates.z);

    return group;
  }

  addDiagonalRightToLeft(coordinates: PlaneCoordinates, startingPoint: number, noOfCubes: number, segments?: number) {
    const localSegments = segments || this.segments;
    const group = new THREE.Group();
    group.name = 'diagonal_right-left-group'

    for (let index = noOfCubes - 1; index >= 0; index--) {
      const localCoordinates = {
        x: coordinates.x - (index * localSegments) - localSegments, y: (startingPoint * localSegments) - (index * localSegments), z: coordinates.z
      }
      const cube = this.addCube(localCoordinates)
      group.add(cube);
    }

    group.position.set(coordinates.x, coordinates.y || 0, coordinates.z);

    return group;
  }
}
