import * as THREE from "three";

export function getGridHelper(size: number = 100, divisions: number = 20) {
  const gridHelper = new THREE.GridHelper(size, divisions);
  gridHelper.receiveShadow = true;
  gridHelper.position.set(0, 0, 0)

  return gridHelper;
}