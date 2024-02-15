import * as THREE from "three";

import { Injectable } from "@angular/core";
import { mathRandom } from "../../misc/utils";
import { TweenMax } from "gsap";

@Injectable({
  providedIn: 'root'
})
export class LinesService {
  createCarPos = false;

  /*
    @param scale - how big the line should be
    @param position - where to place it
    @param color - default color is 0x86B86B
  */
  createLines(scale = 2, position = 20, color = 0x86B86B) {
    const cMat = new THREE.MeshToonMaterial({
      color: color,
      side: THREE.DoubleSide,
      emissive: '#86B86B',
      emissiveIntensity: 1
    });
    var boxGeo = new THREE.BoxGeometry(1, scale / 40, scale / 40);
    var line = new THREE.Mesh(boxGeo, cMat);
    var aplifier = 8;

    if (this.createCarPos) {
      this.createCarPos = false;
      line.position.x = -position;
      line.position.y = 40;

      line.position.z = (mathRandom(aplifier));

      TweenMax.to(line.position, 3, { x: position, repeat: -1, yoyo: true, delay: mathRandom(aplifier * 2) });
    } else {
      this.createCarPos = true;
      line.position.x = (mathRandom(aplifier));
      line.position.z = -position;
      line.position.y = 30;

      line.rotation.y = 90 * Math.PI / 180;

      TweenMax.to(line.position, 3, { z: position, repeat: -1, yoyo: true, delay: mathRandom(aplifier * 2) });
    };
    line.receiveShadow = true;
    line.castShadow = true;

    return line;
  };
}