import * as THREE from "three";
import { EventOptions } from "../models/event-options.model";

export function addObjectClickListener(objectToWatch: any, onMouseClick: Function, options: EventOptions) {
  const objectToWatchId = objectToWatch.uuid;
  let mouse = new THREE.Vector2();

  document.addEventListener(
    "pointerdown",
    (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      options.raycaster.setFromCamera(mouse, options.camera);

      const intersects = options.raycaster.intersectObjects(options.scene.children);

      const isIntersected = intersects.find(
        (intersectedElement: any) => intersectedElement.object.uuid === objectToWatchId
      );

      if (isIntersected) {
        onMouseClick();
      }
    },
    false
  );
};

export function onMouseClickFn(info: any) {
  console.log('click', info)
  return info;
}