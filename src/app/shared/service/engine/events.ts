import * as THREE from "three";

import { Injectable } from '@angular/core';
import { EventOptions } from "../../models/event-options.model";
import { adjustColor } from "../../misc/utils";
import { InfoPanelService } from "../info-panel.service";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private infoPanelService: InfoPanelService) { }
  /*
    @param objectToWatch - for uuid
    @param onMouseClick - function to be executed at click
    @param options - needed for addEventListener
  */
  addObjectClickListener(objectToWatch: any, onMouseClick: Function, options: EventOptions) {
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
      });
  };

  /*
    @param object - to change the color at event
    @param onMouseClick - default color
  */
  onMouseClickFn(clickInfo: any, object: any, color: THREE.Color) {
    const defaultColor = color.getHexString();
    const allSiblings = object.parent.children;

    // reset color if it's not the default one
    allSiblings.forEach((elementFromGroup: any) => {
      const curretColor = elementFromGroup.material.color.getHexString();
      if (curretColor !== defaultColor) {
        elementFromGroup.material.color.setHex('0x' + defaultColor);
        elementFromGroup.material.needsUpdate = true
      }
    });

    this.infoPanelService.setInfoPanel(clickInfo);

    const newColor = adjustColor(color, 40).getHexString()
    object.material.color.setHex('0x' + newColor)
  }
}