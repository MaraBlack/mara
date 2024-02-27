import * as THREE from "three";

import { Injectable } from "@angular/core";
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { CubeService } from "./objects/cube.service";
import { PlaneCoordinates } from "src/app/metropolis/shared/models/plane-coordinates.model";

@Injectable({
  providedIn: 'root'
})
export class LettersService {

  constructor(private cubeService: CubeService) {

  }

  getLetter_M(coordinates: PlaneCoordinates, height: number, segments: number) {
    const coords = { x: coordinates.x + height - 1, y: coordinates.y, z: coordinates.z }

    const group = new THREE.Group();
    group.name = height + '_group'
    const cubesInARowLeft = this.cubeService.addCubbesInARow(coordinates, height);

    const upperMid = this.findMiddlePositions(height).upperMid;
    const lowerMid = this.findMiddlePositions(height).lowerMid;

    const diagonalLeftRight = this.cubeService.addDiagonalLeftToRight(coordinates, height - 1, upperMid);
    const diagonelRightLeft = this.cubeService.addDiagonalRightToLeft(coords, height - 1, lowerMid)

    const cubesInARowRight = this.cubeService.addCubbesInARow(coords, height);

    group.add(cubesInARowLeft);
    group.add(diagonalLeftRight);
    group.add(diagonelRightLeft);
    group.add(cubesInARowRight);

    return group;

  }

  private findMiddlePositions(number: number) {
    let upperMiddle = 0;
    let lowerMiddle = 0;

    let local = number - 1;
    // Ensure the number is positive
    local = Math.max(0, local);

    upperMiddle = Math.floor(number / 2);
    lowerMiddle = Math.floor(number / 2)

    console.log(upperMiddle, lowerMiddle);

    return {
      upperMid: upperMiddle,
      lowerMid: lowerMiddle,
    };
  }
}