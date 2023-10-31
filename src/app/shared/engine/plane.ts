import * as THREE from "three";

export function getWorldPlane(color: THREE.ColorRepresentation = 0xa7a8aa, reflectivity: number = 0.8) {
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