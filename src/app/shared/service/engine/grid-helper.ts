import * as THREE from "three";
import { Injectable } from '@angular/core';
import { ObjectType } from "../../models/object-types.enum";

@Injectable({
  providedIn: 'root'
})
export class ObjectHelpers {
  /*
    @param size - default is 100
    @param divisions - default is 20
    @return gridHelper
  */
  getGridHelper(size: number = 100, divisions: number = 20) {
    const gridHelper = new THREE.GridHelper(size, divisions);
    gridHelper.receiveShadow = true;
    gridHelper.name = ObjectType.GRID_HEPLER
    gridHelper.position.set(0, 0, 0)

    return gridHelper;
  }
}