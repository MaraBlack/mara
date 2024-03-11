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

  private letterFunctions: { [key: string]: (coordinates: PlaneCoordinates, noOfCubes: number) => void } = {
    'A': (coordinates, noOfCubes) => { return this.getLetter_A(coordinates, noOfCubes)},
    'B': (coordinates, noOfCubes) => { return this.getLetter_B(coordinates, noOfCubes)},
    'C': (coordinates, noOfCubes) => { return this.getLetter_C(coordinates, noOfCubes)},
    'E': (coordinates, noOfCubes) => { return this.getLetter_E(coordinates, noOfCubes)},
    'F': (coordinates, noOfCubes) => { return this.getLetter_F(coordinates, noOfCubes)},
    'K': (coordinates, noOfCubes) => { return this.getLetter_K(coordinates, noOfCubes)},
    'L': (coordinates, noOfCubes) => { return this.getLetter_L(coordinates, noOfCubes)},
    'M': (coordinates, noOfCubes) => { return this.getLetter_M(coordinates, noOfCubes)},
    'R': (coordinates, noOfCubes) => { return this.getLetter_R(coordinates, noOfCubes)},
    '.': (coordinates, noOfCubes) => { return this.getLetter_Dot(coordinates, noOfCubes)},
    // ... other letters
  };

  getLetter(char: string, coordinates: PlaneCoordinates, noOfCubes: number) {
    const letterFunction = this.letterFunctions[char];
    let obj: any;
    if (letterFunction) {
      obj =  letterFunction(coordinates, noOfCubes);
    } else {
      // Handle cases where there is no function for the letter
      console.warn(`No function found for letter: ${char}`);
    }

    return obj;
  }

  private getLetter_A(coordinates: PlaneCoordinates, noOfCubes: number) {
    const group = new THREE.Group();
    group.name = noOfCubes + 'A_group';
    const upperMid = this.findMiddlePositions(noOfCubes).upperMid;

    const cubesInARowLeft = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: 0, z: 0 });
    const cubesInARowRight = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: noOfCubes - 1, z: 0 });

    const topLine = this.cubeService.addCubbesBottomAHorizontalRow(coordinates, noOfCubes - 2, noOfCubes - 1);
    const midLine = this.cubeService.addCubbesBottomAHorizontalRow(coordinates, noOfCubes - 2, upperMid);

    group.add(cubesInARowLeft);
    group.add(cubesInARowRight);
    group.add(topLine);
    group.add(midLine);

    return group;
  }

  private getLetter_B(coordinates: PlaneCoordinates, noOfCubes: number) {
    const group = new THREE.Group();
    group.name = noOfCubes + 'B_group';

    const upperMid = this.findMiddlePositions(noOfCubes).upperMid;
    const lowerMid = this.findMiddlePositions(noOfCubes).lowerMid;

    const cubesInARowLeft = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: 0, z: 0 });
    const topLine = this.cubeService.addCubbesBottomAHorizontalRow(coordinates, noOfCubes - 2, noOfCubes - 1);
    const midLine = this.cubeService.addCubbesBottomAHorizontalRow(coordinates, noOfCubes - 2, upperMid);
    const botLine = this.cubeService.addCubbesBottomAHorizontalRow(coordinates, noOfCubes - 2, 0);

    const upperB = this.cubeService.addCubbesVerticalRow(coordinates, (noOfCubes - 3) / 2, { x: noOfCubes - 1, y: noOfCubes - lowerMid, z: 0 });
    const lowerB = this.cubeService.addCubbesVerticalRow(coordinates, (noOfCubes - 3) / 2, { x: noOfCubes - 1, y: 1, z: 0 });

    group.add(cubesInARowLeft);
    group.add(topLine);
    group.add(midLine);
    group.add(botLine);

    group.add(upperB);
    group.add(lowerB);

    return group;
  }

  private getLetter_C(coordinates: PlaneCoordinates, noOfCubes: number) {
    const group = new THREE.Group();
    group.name = noOfCubes + 'C_group';

    const lowerMid = this.findMiddlePositions(noOfCubes).lowerMid;

    const cubesInARowLeft = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: 0, z: 0 });
    const topLine = this.cubeService.addCubbesBottomAHorizontalRow(coordinates, noOfCubes - 2, noOfCubes - 1);
    const botLine = this.cubeService.addCubbesBottomAHorizontalRow(coordinates, noOfCubes - 2, 0);

    const noOfCubesForRight = Math.floor((noOfCubes - 2) / 3);
    const upperC = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubesForRight, { x: noOfCubes - 1, y: noOfCubes - noOfCubesForRight - 1, z: 0 });
    const lowerC = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubesForRight, { x: noOfCubes - 1, y: 1, z: 0 });

    group.add(cubesInARowLeft);
    group.add(topLine);
    group.add(botLine);
    group.add(upperC);
    group.add(lowerC);

    return group;
  }

  private getLetter_E(coordinates: PlaneCoordinates, noOfCubes: number) {
    const group = new THREE.Group();
    group.name = noOfCubes + 'E_group';

    const upperMid = this.findMiddlePositions(noOfCubes).upperMid;

    const cubesInARowLeft = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: 0, z: 0 });
    const topLine = this.cubeService.addCubbesBottomAHorizontalRow(coordinates, noOfCubes - 1, noOfCubes - 1);
    const midLine = this.cubeService.addCubbesBottomAHorizontalRow(coordinates, noOfCubes - 1, upperMid);
    const botLine = this.cubeService.addCubbesBottomAHorizontalRow(coordinates, noOfCubes - 1, 0);

    group.add(cubesInARowLeft);
    group.add(topLine);
    group.add(midLine);
    group.add(botLine);

    return group;
  }

  private getLetter_F(coordinates: PlaneCoordinates, noOfCubes: number) {
    const group = new THREE.Group();
    group.name = noOfCubes + 'F_group';

    const upperMid = this.findMiddlePositions(noOfCubes).upperMid;

    const cubesInARowLeft = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: 0, z: 0 });
    const topLine = this.cubeService.addCubbesBottomAHorizontalRow(coordinates, noOfCubes - 1, noOfCubes - 1);
    const midLine = this.cubeService.addCubbesBottomAHorizontalRow(coordinates, noOfCubes - 2, upperMid);

    group.add(cubesInARowLeft);
    group.add(topLine);
    group.add(midLine);

    return group;
  }

  private getLetter_K(coordinates: PlaneCoordinates, noOfCubes: number) {
    const group = new THREE.Group();
    group.name = noOfCubes + 'K_group';

    const upperMid = this.findMiddlePositions(noOfCubes).upperMid;

    const half = Math.floor(noOfCubes / 2);
    const cubesInARowLeft = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: 0, z: 0 });
    const midLine = this.cubeService.addCubbesBottomAHorizontalRow(coordinates, upperMid - 1, upperMid);

    const upperK = this.cubeService.addDiagonalLRBT(coordinates, { x: noOfCubes - 1, y: noOfCubes - 1, z: 0 }, upperMid);
    const lowerK = this.cubeService.addDiagonalLRTB(coordinates, { x: upperMid - 1, y: noOfCubes - upperMid - 1, z: 0 }, noOfCubes - upperMid);

    group.add(cubesInARowLeft);
    group.add(midLine);
    group.add(upperK)
    group.add(lowerK)

    return group;
  }

  private getLetter_L(coordinates: PlaneCoordinates, noOfCubes: number) {
    const group = new THREE.Group();
    group.name = noOfCubes + 'L_group';

    const cubesInARowLeft = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: 0, z: 0 });
    const botLine = this.cubeService.addCubbesBottomAHorizontalRow(coordinates, noOfCubes - 1, 0);

    group.add(cubesInARowLeft);
    group.add(botLine);

    return group;
  }

  private getLetter_M(coordinates: PlaneCoordinates, noOfCubes: number) {

    console.log('Calling getLetter_M');

    const group = new THREE.Group();
    group.name = noOfCubes + 'M_group';

    const cubesInARowLeft = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: 0, z: 0 });
    const cubesInARowRight = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: noOfCubes - 1, z: 0 });

    const upperMid = this.findMiddlePositions(noOfCubes).upperMid;
    const lowerMid = this.findMiddlePositions(noOfCubes).lowerMid;

    const diagonalLeftRight = this.cubeService.addDiagonalLRTB(coordinates, { x: 0, y: noOfCubes - 1, z: 0 }, upperMid);
    const diagonalRightLeft = this.cubeService.addDiagonalLRBT(coordinates, { x: noOfCubes - 2, y: noOfCubes - 1, z: 0 }, upperMid);

    group.add(cubesInARowLeft);
    group.add(diagonalLeftRight);
    group.add(diagonalRightLeft);
    group.add(cubesInARowRight);

    return group;
  }

  private getLetter_R(coordinates: PlaneCoordinates, noOfCubes: number) {
    const group = new THREE.Group();
    group.name = noOfCubes + 'R_group';

    const upperMid = this.findMiddlePositions(noOfCubes).upperMid;
    const lowerMid = this.findMiddlePositions(noOfCubes).lowerMid;

    const cubesInARowLeft = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: 0, z: 0 });
    const topLine = this.cubeService.addCubbesBottomAHorizontalRow(coordinates, noOfCubes - 2, noOfCubes - 1);
    const midLine = this.cubeService.addCubbesBottomAHorizontalRow(coordinates, noOfCubes - 2, upperMid);

    const noOfCubesForRight = Math.floor((noOfCubes - 2) / 2);
    const upperR = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubesForRight, { x: noOfCubes - 1, y: noOfCubes - noOfCubesForRight - 1, z: 0 });
    const lowerR = this.cubeService.addCubbesVerticalRow(coordinates, lowerMid, { x: upperMid, y: 0, z: 0 });

    group.add(cubesInARowLeft);
    group.add(topLine);
    group.add(midLine);
    group.add(upperR);
    group.add(lowerR);

    return group;
  }

  private getLetter_Dot(coordinates: PlaneCoordinates, noOfCubes: number) {
    const half = noOfCubes / 2;
    const coords = { x: half, y: half, z: 0 }
    return this.cubeService.addDot(coordinates, coords, noOfCubes);
  }

  private findMiddlePositions(number: number) {
    let upperMiddle = 0;
    let lowerMiddle = 0;

    let local = number - 1;
    // Ensure the number is positive
    local = Math.max(0, local);

    if (local % 2 === 0) {
      upperMiddle = Math.floor(local / 2);
      lowerMiddle = Math.floor(local / 2)
    } else {
      upperMiddle = Math.floor(local / 2) + 1;
      lowerMiddle = Math.floor(local / 2)
    }

    console.log(upperMiddle, lowerMiddle);

    return {
      upperMid: upperMiddle,
      lowerMid: lowerMiddle,
    };
  }
}