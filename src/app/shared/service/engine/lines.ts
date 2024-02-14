import * as THREE from "three";

import { Injectable } from "@angular/core";
import { mathRandom } from "../../misc/utils";
import { TweenMax } from "gsap";

@Injectable({
  providedIn: 'root'
}) export class LinesService {

  createCarPos = false;

  createLines(cScale = 2, cPos = 20, cColor = 0xf3d17c) {
    var cMat = new THREE.MeshToonMaterial({
      color: cColor,
      side: THREE.DoubleSide,
      emissive: '#f3d17c',
      emissiveIntensity: 0.6
    });
    var cGeo = new THREE.BoxGeometry(1, cScale / 40, cScale / 40);
    var cElem = new THREE.Mesh(cGeo, cMat);
    var cAmp = 8;

    if (this.createCarPos) {
      this.createCarPos = false;
      cElem.position.x = -cPos;
      cElem.position.y = 40;

      cElem.position.z = (mathRandom(cAmp));

      TweenMax.to(cElem.position, 3, { x: cPos, repeat: -1, yoyo: true, delay: mathRandom(cAmp * 2) });
    } else {
      this.createCarPos = true;
      cElem.position.x = (mathRandom(cAmp));
      cElem.position.z = -cPos;
      cElem.position.y = 30;

      cElem.rotation.y = 90 * Math.PI / 180;

      TweenMax.to(cElem.position, 3, { z: cPos, repeat: -1, yoyo: true, delay: mathRandom(cAmp * 2) });
    };
    cElem.receiveShadow = true;
    cElem.castShadow = true;

    return cElem;
  };


}