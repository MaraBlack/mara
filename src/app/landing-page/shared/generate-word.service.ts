import * as THREE from "three";

import { Injectable } from "@angular/core";
import { PlaneCoordinates } from "src/app/metropolis/shared/models/plane-coordinates.model";
import { LettersService } from "./letters.service";
import { TextOrientation } from "./models/text-orientation.model";



@Injectable({
  providedIn: 'root'
})
export class GenerateWordService {

  constructor(private lettersService: LettersService) {
  }

  generateWord(word: string, noOfCubes: number, orientation: TextOrientation): THREE.Group {
    word = word.toLocaleUpperCase();
    let positions: PlaneCoordinates[] = [];

    if (orientation === TextOrientation.VERTICAL) {
      positions = this.generatePositions(word, noOfCubes);
    }

    const group = new THREE.Group();
    group.name = word;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      const charObj = this.lettersService.getLetter(char, positions[i], noOfCubes);

      group.add(charObj)
    }

    return group;
  }

  private generatePositions(word: string, noOfCubes: number): PlaneCoordinates[] {
    const positions: PlaneCoordinates[] = [];
    const totalLetters = word.length;
    const totalDistance = (totalLetters - 1);
    const startY = totalDistance / 2;

    for (let i = 0; i < totalLetters; i++) {
      const y = (totalLetters) * noOfCubes - (i * noOfCubes * 3.1);
      const position: PlaneCoordinates = { x: 0, y, z: 0 };
      positions.push(position);
    }

    return positions;
  }

}