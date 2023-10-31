import * as THREE from "three";

export function getPointLight(color: THREE.ColorRepresentation = 0xF5F5F3) {
  const light = new THREE.PointLight(color, 1000, 400, 2);
  light.position.set(0, 50, 0);
  light.castShadow = true;

  return light;

  // const pointLightCameraHelper = new THREE.PointLightHelper(light, 5)
  // scene.add(pointLightCameraHelper)
}