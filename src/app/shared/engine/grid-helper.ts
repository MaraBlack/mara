import * as THREE from "three";

/*
  @param size - default is 100
  @param divisions - default is 20
  @return gridHelper
*/
export function getGridHelper(size: number = 100, divisions: number = 20) {
  const gridHelper = new THREE.GridHelper(size, divisions);
  gridHelper.receiveShadow = true;
  gridHelper.position.set(0, 0, 0)

  return gridHelper;
}