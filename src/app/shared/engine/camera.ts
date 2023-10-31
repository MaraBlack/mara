import * as THREE from "three";

export const cameraDefaults = {
  posCamera: new THREE.Vector3(0.0, 250.0, 0.0),
  posCameraTarget: new THREE.Vector3(0, 300, 0),
  near: 0.1,
  far: 10000,
  fov: 45,
  aspectRatio: window.devicePixelRatio
};

// CAM animation
export const enCamAnim = 0;
export const cameraAnimationTime = 60 * 1.2 /* s */;
export const cameraCurve = new THREE.CubicBezierCurve3(
  new THREE.Vector3(0, 25, 0),
  new THREE.Vector3(0, 25, 10),
  new THREE.Vector3(0, 25, 20),
  new THREE.Vector3(30, 25, 30)
);

/*
  @return PerspectiveCamera
*/
export function getCamera() {
  const camera = new THREE.PerspectiveCamera(
    cameraDefaults.fov,
    cameraDefaults.aspectRatio,
    cameraDefaults.near,
    cameraDefaults.far
  );
  camera.position.copy(cameraDefaults.posCamera);
  camera.updateProjectionMatrix();

  return camera;
}
