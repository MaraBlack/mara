import * as THREE from "three";

/*
  @param color - default is white
  @param reflectivity
  @return PlaneGeometry
*/
export function getWorldPlane(color: THREE.ColorRepresentation = new THREE.Color(), reflectivity: number = 0.8) {
  const lambertMaterial = new THREE.MeshLambertMaterial({
    color: color,
    reflectivity: reflectivity
  });

  const planeGeo = new THREE.PlaneGeometry(150, 150);

  const plane = new THREE.Mesh(planeGeo, lambertMaterial);
  plane.rotation.x = Math.PI * -.5
  plane.receiveShadow = true

  return plane;
}