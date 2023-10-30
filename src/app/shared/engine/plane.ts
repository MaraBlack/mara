import * as THREE from "three";

export function getWorldPlane() {
  const lambertMaterial = new THREE.MeshLambertMaterial({
    color: 0xa7a8aa,
    reflectivity: 0.8,
  });

  const planeGeo = new THREE.PlaneGeometry(150, 150);

  const plane = new THREE.Mesh(planeGeo, lambertMaterial);
  plane.rotation.x = Math.PI * -.5
  plane.receiveShadow = true

  return plane;
}