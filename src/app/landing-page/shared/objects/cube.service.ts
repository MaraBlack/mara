import * as THREE from "three";

import { Injectable } from "@angular/core";
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { PlaneCoordinates } from "src/app/metropolis/shared/models/plane-coordinates.model";

@Injectable({
  providedIn: 'root'
})
export class CubeService {

  segments = 3;
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
    const cubeGeom = new RoundedBoxGeometry(localSegments, localSegments, localSegments * 1.5, 1, 0);

    // const sphereGeom = new THREE.SphereGeometry(localSegments / 2, 64, 32); 

    const material = new THREE.MeshPhongMaterial({
      color: color || [0xd3d5db, 0xffffff, 0x9fa3ab, 0xcfd0d1, 0xfcba03][Math.random() * 5 | 0],
      wireframe: wireframe ? true : false
    });

    const cube = new THREE.Mesh(cubeGeom, material);
    cube.position.set(coordinates.x, coordinates.y || 0, coordinates.z);
    cube.castShadow = true;
    cube.receiveShadow = true;
    cube.name = 'cube';

    return cube;
  }

  addCubbesVerticalRow(coordinates: PlaneCoordinates, noOfCubes: number, startingPoint: PlaneCoordinates, segments?: number) {
    const localSegments = segments || this.segments;
    const localY = coordinates.y || 0;
    const group = new THREE.Group();
    group.name = 'verical_group'

    for (let index = 0; index < noOfCubes; index++) {
      const localCoordinates = {
        x: startingPoint.x * localSegments,
        y: ((startingPoint.y || 0) * localSegments) + (index * localSegments),
        z: startingPoint.z
      }
      const cube = this.addCube(localCoordinates, new THREE.Color('#d3d5db'))
      group.add(cube);
    }

    group.position.set(coordinates.x, localY, coordinates.z);

    return group;
  }

  addCubbesHorizontalRow(coordinates: PlaneCoordinates, noOfCubes: number, startingPoint: PlaneCoordinates, segments?: number) {
    const localSegments = segments || this.segments;
    const group = new THREE.Group();
    group.name = 'verical_group'

    for (let index = 0; index < noOfCubes; index++) {
      const localCoordinates = {
        x: (startingPoint.x * localSegments) + localSegments + (index * localSegments),
        y: ((startingPoint.y || 0) * localSegments),
        z: startingPoint.z
      }
      const cube = this.addCube(localCoordinates, new THREE.Color('#d3d5db'))
      group.add(cube);
    }

    group.position.set(coordinates.x, coordinates.y || 0, coordinates.z);

    return group;
  }

  addDiagonalLRTB(coordinates: PlaneCoordinates, noOfCubes: number, startingPoint: PlaneCoordinates, segments?: number) {
    const localSegments = segments || this.segments;
    const localY = coordinates.y || 0;
    const group = new THREE.Group();
    group.name = 'diagonal_left-right-group'

    for (let index = 0; index < noOfCubes; index++) {
      const localCoordinates = {
        x: (startingPoint.x * localSegments) + localSegments + (index * localSegments),
        y: ((startingPoint.y || 0 * localSegments) * localSegments) - (index * localSegments),
        z: startingPoint.z
      }
      const cube = this.addCube(localCoordinates, new THREE.Color('#d3d5db'))
      group.add(cube);
    }

    group.position.set(coordinates.x, coordinates.y || 0, coordinates.z);

    return group;
  }

  addDiagonalLRBT(coordinates: PlaneCoordinates, noOfCubes: number, startingPoint: PlaneCoordinates, segments?: number) {
    const localSegments = segments || this.segments;
    const localY = coordinates.y || 0;
    const cubes = noOfCubes % 2 === 0 ? noOfCubes : (noOfCubes - 1)
    const startingX = (noOfCubes * localSegments) + (cubes * localSegments);

    const group = new THREE.Group();
    group.name = 'diagonal_right-left-group';

    for (let index = 0; index < noOfCubes; index++) {
      const localCoordinates = {
        x: (startingPoint.x * localSegments) - (index * localSegments),
        y: ((startingPoint.y || 0) * localSegments) - (index * localSegments),
        z: startingPoint.z
      }
      const cube = this.addCube(localCoordinates, new THREE.Color('#d3d5db'))
      group.add(cube);
    }

    group.position.set(coordinates.x, localY, coordinates.z);

    return group;
  }

  addDot(coordinates: PlaneCoordinates, startingPoint: PlaneCoordinates, noOfCubes: number, segments?: number) {
    const localSegments = segments || this.segments;
    const localY = coordinates.y || 0;

    const group = new THREE.Group();
    group.name = noOfCubes + 'R_group';

    const cubeLT = this.addCube({
      x: startingPoint.x * localSegments,
      y: (startingPoint.y || 0) * localSegments,
      z: startingPoint.z
    }, new THREE.Color('#d3d5db'));

    const cubeRT = this.addCube({
      x: (startingPoint.x * localSegments) + localSegments,
      y: (startingPoint.y || 0) * localSegments,
      z: startingPoint.z
    }, new THREE.Color('#d3d5db'));

    const cubeLB = this.addCube({
      x: (startingPoint.x * localSegments),
      y: (startingPoint.y || 0) * localSegments - localSegments,
      z: startingPoint.z
    }, new THREE.Color('#d3d5db'));

    const cubeRB = this.addCube({
      x: (startingPoint.x * localSegments) + localSegments,
      y: (startingPoint.y || 0) * localSegments - localSegments,
      z: startingPoint.z
    }, new THREE.Color('#d3d5db'));

    group.add(cubeLT);
    group.add(cubeRT);
    group.add(cubeLB);
    group.add(cubeRB);

    group.position.set(coordinates.x, localY, coordinates.z);

    return group;
  }
}
