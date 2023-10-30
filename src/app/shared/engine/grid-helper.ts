import * as THREE from "three";

export function getGridHelper() {
  var size = 100;
  var divisions = 20;

  const gridHelper = new THREE.GridHelper(size, divisions);
  gridHelper.receiveShadow = true;
  gridHelper.position.set(0, 0, 0)

  return gridHelper;
}