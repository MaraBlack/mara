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
    'A': (coordinates, noOfCubes) => { return this.getLetter_A(coordinates, noOfCubes) },
    'B': (coordinates, noOfCubes) => { return this.getLetter_B(coordinates, noOfCubes) },
    'C': (coordinates, noOfCubes) => { return this.getLetter_C(coordinates, noOfCubes) },
    'D': (coordinates, noOfCubes) => { return this.getLetter_D(coordinates, noOfCubes) },
    'E': (coordinates, noOfCubes) => { return this.getLetter_E(coordinates, noOfCubes) },
    'F': (coordinates, noOfCubes) => { return this.getLetter_F(coordinates, noOfCubes) },
    'G': (coordinates, noOfCubes) => { return this.getLetter_G(coordinates, noOfCubes) },
    'I': (coordinates, noOfCubes) => { return this.getLetter_I(coordinates, noOfCubes) },
    'K': (coordinates, noOfCubes) => { return this.getLetter_K(coordinates, noOfCubes) },
    'L': (coordinates, noOfCubes) => { return this.getLetter_L(coordinates, noOfCubes) },
    'M': (coordinates, noOfCubes) => { return this.getLetter_M(coordinates, noOfCubes) },
    'N': (coordinates, noOfCubes) => { return this.getLetter_N(coordinates, noOfCubes) },
    'O': (coordinates, noOfCubes) => { return this.getLetter_O(coordinates, noOfCubes) },
    'P': (coordinates, noOfCubes) => { return this.getLetter_P(coordinates, noOfCubes) },
    'S': (coordinates, noOfCubes) => { return this.getLetter_S(coordinates, noOfCubes) },
    'R': (coordinates, noOfCubes) => { return this.getLetter_R(coordinates, noOfCubes) },
    'V': (coordinates, noOfCubes) => { return this.getLetter_V(coordinates, noOfCubes) },
    'W': (coordinates, noOfCubes) => { return this.getLetter_W(coordinates, noOfCubes) },
    '.': (coordinates, noOfCubes) => { return this.getLetter_Dot(coordinates, noOfCubes) },
    // ... other letters
  };

  getLetter(char: string, coordinates: PlaneCoordinates, noOfCubes: number) {
    const letterFunction = this.letterFunctions[char];
    let obj: any;
    if (letterFunction) {
      obj = letterFunction(coordinates, noOfCubes);
    } else {
      console.warn(`Letter ${char} has no implementation yet!`);
    }

    return obj;
  }

  private getLetter_A(coordinates: PlaneCoordinates, noOfCubes: number) {
    const group = new THREE.Group();
    group.name = noOfCubes + 'A_group';
    const upperMid = this.findMiddlePositions(noOfCubes).upperMid;

    const cubesInARowLeft = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: 0, z: 0 });
    const cubesInARowRight = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: noOfCubes - 1, z: 0 });

    const topLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 2, { x: 0, y: noOfCubes - 1, z: 0 });
    const midLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 2, { x: 0, y: upperMid, z: 0 });

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
    const topLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 2, { x: 0, y: noOfCubes - 1, z: 0 });
    const midLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 2, { x: 0, y: upperMid, z: 0 });
    const botLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 2, { x: 0, z: 0 });

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

    const cubesInARowLeft = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: 0, z: 0 });
    const topLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 2, { x: 0, y: noOfCubes - 1, z: 0 });
    const botLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 2, { x: 0, z: 0 });

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

  private getLetter_D(coordinates: PlaneCoordinates, noOfCubes: number) {
    const group = new THREE.Group();
    group.name = noOfCubes + 'D_group';

    const cubesInARowLeft = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: 0, z: 0 });
    const topLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 2, { x: 0, y: noOfCubes - 1, z: 0 });
    const botLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 2, { x: 0, z: 0 });

    const verical = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes - 2, { x: noOfCubes - 1, y: 1, z: 0 });

    group.add(cubesInARowLeft);
    group.add(topLine);
    group.add(botLine);
    group.add(verical);

    return group;
  }

  private getLetter_E(coordinates: PlaneCoordinates, noOfCubes: number) {
    const group = new THREE.Group();
    group.name = noOfCubes + 'E_group';

    const upperMid = this.findMiddlePositions(noOfCubes).upperMid;

    const cubesInARowLeft = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: 0, z: 0 });
    const topLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 1, { x: 0, y: noOfCubes - 1, z: 0 });
    const midLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 1, { x: 0, y: upperMid, z: 0 });
    const botLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 1, { x: 0, z: 0 });

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
    const topLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 1, { x: 0, y: noOfCubes - 1, z: 0 });
    const midLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 2, { x: 0, y: upperMid, z: 0 });

    group.add(cubesInARowLeft);
    group.add(topLine);
    group.add(midLine);

    return group;
  }

  private getLetter_G(coordinates: PlaneCoordinates, noOfCubes: number) {
    const group = new THREE.Group();
    group.name = noOfCubes + 'G_group';

    const upperMid = this.findMiddlePositions(noOfCubes).upperMid;
    const lowerMid = this.findMiddlePositions(noOfCubes).lowerMid;

    const cubesInARowLeft = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: 0, z: 0 });
    const cubesInARowRight = this.cubeService.addCubbesVerticalRow(coordinates, upperMid, { x: noOfCubes - 1, z: 0 });

    const topLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 1, { x: 0, y: noOfCubes - 1, z: 0 });
    const midLine = this.cubeService.addCubbesHorizontalRow(coordinates, lowerMid, { x: lowerMid - 1, y: upperMid, z: 0 });
    const botLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 1, { x: 0, z: 0 });

    group.add(cubesInARowLeft);
    group.add(cubesInARowRight);
    group.add(topLine);
    group.add(midLine);
    group.add(botLine);


    return group;
  }

  private getLetter_I(coordinates: PlaneCoordinates, noOfCubes: number) {
    const group = new THREE.Group();
    group.name = noOfCubes + 'I_group';

    const half = noOfCubes / 2;
    const lowerMid = this.findMiddlePositions(noOfCubes).lowerMid;

    const cubesInARow = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes - lowerMid, { x: lowerMid, y: lowerMid - 2, z: 0 });

    group.add(cubesInARow);

    return group;
  }

  private getLetter_K(coordinates: PlaneCoordinates, noOfCubes: number) {
    const group = new THREE.Group();
    group.name = noOfCubes + 'K_group';

    const upperMid = this.findMiddlePositions(noOfCubes).upperMid;

    const cubesInARowLeft = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: 0, z: 0 });
    const midLine = this.cubeService.addCubbesHorizontalRow(coordinates, upperMid - 1, { x: 0, y: upperMid, z: 0 });

    const upperK = this.cubeService.addDiagonalLRBT(coordinates, upperMid, { x: noOfCubes - 1, y: noOfCubes - 1, z: 0 });
    const lowerK = this.cubeService.addDiagonalLRTB(coordinates, noOfCubes - upperMid, { x: upperMid - 1, y: noOfCubes - upperMid - 1, z: 0 });

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
    const botLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 1, { x: 0, z: 0 });

    group.add(cubesInARowLeft);
    group.add(botLine);

    return group;
  }

  private getLetter_M(coordinates: PlaneCoordinates, noOfCubes: number) {
    const group = new THREE.Group();
    group.name = noOfCubes + 'M_group';

    const cubesInARowLeft = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: 0, z: 0 });
    const cubesInARowRight = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: noOfCubes - 1, z: 0 });

    const upperMid = this.findMiddlePositions(noOfCubes).upperMid;

    const diagonalLeftRight = this.cubeService.addDiagonalLRTB(coordinates, upperMid, { x: 0, y: noOfCubes - 1, z: 0 });
    const diagonalRightLeft = this.cubeService.addDiagonalLRBT(coordinates, upperMid, { x: noOfCubes - 2, y: noOfCubes - 1, z: 0 });

    group.add(cubesInARowLeft);
    group.add(diagonalLeftRight);
    group.add(diagonalRightLeft);
    group.add(cubesInARowRight);

    return group;
  }

  private getLetter_N(coordinates: PlaneCoordinates, noOfCubes: number) {
    const group = new THREE.Group();
    group.name = noOfCubes + 'N_group';

    const cubesInARowLeft = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: 0, z: 0 });
    const cubesInARowRight = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: noOfCubes - 1, z: 0 });
    const diagonalLeftRight = this.cubeService.addDiagonalLRTB(coordinates, noOfCubes - 2, { x: 0, y: noOfCubes - 1, z: 0 });

    group.add(cubesInARowLeft);
    group.add(diagonalLeftRight);
    group.add(cubesInARowRight);

    return group;
  }

  private getLetter_O(coordinates: PlaneCoordinates, noOfCubes: number) {
    const group = new THREE.Group();
    group.name = noOfCubes + 'O_group';

    const cubesInARowLeft = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes - 2, { x: 0, y: 1, z: 0 });
    const topLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 2, { x: 0, y: noOfCubes - 1, z: 0 });
    const botLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 2, { x: 0, z: 0 });
    const cubesInARowRight = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes - 2, { x: noOfCubes - 1, y: 1, z: 0 });

    group.add(cubesInARowLeft);
    group.add(topLine);
    group.add(botLine);
    group.add(cubesInARowRight);

    return group;
  }

  private getLetter_P(coordinates: PlaneCoordinates, noOfCubes: number) {
    const group = new THREE.Group();
    group.name = noOfCubes + 'P_group';

    const upperMid = this.findMiddlePositions(noOfCubes).upperMid;

    const cubesInARowLeft = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: 0, z: 0 });
    const topLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 2, { x: 0, y: noOfCubes - 1, z: 0 });
    const midLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 2, { x: 0, y: upperMid, z: 0 });

    const noOfCubesForRight = Math.floor((noOfCubes - 2) / 2);
    const upperP = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubesForRight, { x: noOfCubes - 1, y: noOfCubes - noOfCubesForRight - 1, z: 0 });

    group.add(cubesInARowLeft);
    group.add(topLine);
    group.add(midLine);
    group.add(upperP);

    return group;
  }

  private getLetter_R(coordinates: PlaneCoordinates, noOfCubes: number) {
    const group = new THREE.Group();
    group.name = noOfCubes + 'R_group';

    const upperMid = this.findMiddlePositions(noOfCubes).upperMid;
    const lowerMid = this.findMiddlePositions(noOfCubes).lowerMid;

    const cubesInARowLeft = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes, { x: 0, z: 0 });
    const topLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 2, { x: 0, y: noOfCubes - 1, z: 0 });
    const midLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 2, { x: 0, y: upperMid, z: 0 });

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

  private getLetter_S(coordinates: PlaneCoordinates, noOfCubes: number) {
    const group = new THREE.Group();
    group.name = noOfCubes + 'S_group';

    const upperMid = this.findMiddlePositions(noOfCubes).upperMid;

    const topLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 1, { x: 0, y: noOfCubes - 1, z: 0 });
    const vericalLeft = this.cubeService.addCubbesVerticalRow(coordinates, upperMid + 1, { x: 0, y: noOfCubes - upperMid - 1, z: 0 });
    const midLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes - 1, { x: 0, y: noOfCubes - upperMid - 1, z: 0 });
    const vericalRight = this.cubeService.addCubbesVerticalRow(coordinates, upperMid, { x: noOfCubes - 1, y: 0, z: 0 });
    const botLine = this.cubeService.addCubbesHorizontalRow(coordinates, noOfCubes, { x: -1, z: 0 });

    group.add(topLine);
    group.add(vericalLeft);
    group.add(midLine);
    group.add(vericalRight);
    group.add(botLine);

    return group;
  }

  private getLetter_V(coordinates: PlaneCoordinates, noOfCubes: number) {
    const group = new THREE.Group();
    group.name = noOfCubes + 'V_group';

    const lowerMid = this.findMiddlePositions(noOfCubes).lowerMid;
    const upperMid = this.findMiddlePositions(noOfCubes).upperMid;

    const cubesInARowLeft = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes - upperMid, { x: 0, y: upperMid, z: 0 });
    const diagonal1 = this.cubeService.addDiagonalLRTB(coordinates, upperMid, { x: 0, y: lowerMid - 1, z: 0 });
    const diagonal2 = this.cubeService.addDiagonalLRBT(coordinates, upperMid, { x: noOfCubes - 1, y: lowerMid, z: 0 });
    const cubesInARowRight = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes - upperMid, { x: noOfCubes - 1, y: upperMid, z: 0 });

    group.add(cubesInARowLeft);
    group.add(diagonal1);
    group.add(diagonal2);
    group.add(cubesInARowRight);

    return group;
  }

  private getLetter_W(coordinates: PlaneCoordinates, noOfCubes: number) {
    const group = new THREE.Group();
    group.name = noOfCubes + 'W_group';

    const lowerMid = this.findMiddlePositions(noOfCubes).lowerMid;

    const cubesInARowLeft = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes - 1, { x: 0, z: 0 });
    const diagonal1 = this.cubeService.addDiagonalLRBT(coordinates, lowerMid, { x: lowerMid, y: lowerMid - 1, z: 0 });
    const diagonal2 = this.cubeService.addDiagonalLRTB(coordinates, lowerMid - 1, { x: lowerMid, y: lowerMid - 2, z: 0 });
    const cubesInARowRight = this.cubeService.addCubbesVerticalRow(coordinates, noOfCubes - 1, { x: noOfCubes - 1, z: 0 });

    group.add(cubesInARowLeft);
    group.add(diagonal1);
    group.add(diagonal2);
    group.add(cubesInARowRight);

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