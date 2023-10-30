import * as THREE from "three";

export function getPointLight() {
  const light = new THREE.PointLight(0xF5F5F3, 1000, 400, 2);
  light.position.set(0, 50, 0);
  light.castShadow = true;

  return light;

  // const pointLightCameraHelper = new THREE.PointLightHelper(light, 5)
  // scene.add(pointLightCameraHelper)
}