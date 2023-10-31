import * as THREE from "three";

/*
  @param color - default is white, preffered is 0xF5F5F3
  @return PointLight
*/
export function getPointLight(color: THREE.ColorRepresentation = new THREE.Color()) {
  const light = new THREE.PointLight(color, 1000, 400, 2);
  light.position.set(0, 50, 0);
  light.castShadow = true;

  return light;
}