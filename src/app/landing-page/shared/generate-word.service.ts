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

  generateWord(words: string, noOfCubes: number, orientation: TextOrientation): THREE.Group {
    words = words.toLocaleUpperCase();
    const splitChar = words.match(/[-]/);

    const group = new THREE.Group();
    group.name = words;

    if (splitChar) {
      words.split(splitChar![0]).forEach((w, i) => {
        let positions: PlaneCoordinates[] = [];
        const localPos = { x: i * 3.2 * noOfCubes, y: 0, z: 0 }

        if (orientation === TextOrientation.VERTICAL) {
          positions = this.generatePositions(w, noOfCubes, localPos);
        }

        for (let i = 0; i < w.length; i++) {
          const char = w[i];
          const charObj = this.lettersService.getLetter(char, positions[i], noOfCubes);

          group.add(charObj)
        }
      });
    } else {
      let positions: PlaneCoordinates[] = [];
      const localPos = { x: 0, y: 0, z: 0 }

      if (orientation === TextOrientation.VERTICAL) {
        positions = this.generatePositions(words, noOfCubes, localPos);
      }

      for (let i = 0; i < words.length; i++) {
        const char = words[i];
        const charObj = this.lettersService.getLetter(char, positions[i], noOfCubes);

        group.add(charObj)
      }
    }

    return group;
  }

  private generatePositions(word: string, noOfCubes: number, startingPoint: PlaneCoordinates): PlaneCoordinates[] {
    const positions: PlaneCoordinates[] = [];
    const totalLetters = word.length;
    const totalDistance = (totalLetters - 1);
    const startY = totalDistance / 2;

    for (let i = 0; i < totalLetters; i++) {
      const y = ((startingPoint.y || 0) * 3) + (totalLetters) * noOfCubes - (i * noOfCubes * 3.2);
      const position: PlaneCoordinates = { x: startingPoint.x, y, z: startingPoint.z };
      positions.push(position);
    }

    return positions;
  }

}