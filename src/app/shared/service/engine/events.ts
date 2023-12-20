import * as THREE from "three";

import { Injectable } from '@angular/core';
import { EventOptions } from "../../models/event-options.model";
import { InfoPanelService } from "../info-panel.service";
import { RoadObject } from "../../models/road.model";
import { BuildingObject } from "../../models/building.model";
import { ObjectData } from "../../models/object.model";
import { adjustColor } from "../../misc/utils";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private infoPanelService: InfoPanelService) { }

  prevClickedObject = {
    uuid: ''
  }

  /*
    @param objectToWatch - for uuid
    @param onMouseClick - function to be executed at click
    @param options - needed for addEventListener
  */
  addObjectClickListener(objectToWatch: any, onMouseClick: Function, options: EventOptions) {
    const objectToWatchId = objectToWatch.uuid;
    let mouse = new THREE.Vector2();

    document.addEventListener("pointerdown", event => {

      event.preventDefault();

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;



      options.raycaster.setFromCamera(mouse, options.camera);

      const intersects = options.raycaster.intersectObjects(options.scene.children);

      if (intersects.length > 0) {
        const intersectedElement = intersects.find(
          (intersectedElement: any) => intersectedElement.object.uuid === objectToWatchId
        );

        if (intersectedElement) {
          onMouseClick();
        }
      }
    });
  };

  /*
    @param clickInfo - info to be displayed in info panel
    @param object - to change the color at event
    @param onMouseClick - default color
  */
  onMouseClickFn(clickInfo: RoadObject | BuildingObject | ObjectData | any, object: any, color: THREE.Color) {

    this.infoPanelService.setInfoPanel(clickInfo);

    if (clickInfo.objectType === 'Road') {
      this.setTileColor(object, color)
    }

    if (clickInfo.objectType === 'Building') {
      this.setObjectColor(object, clickInfo.data.color);
    }

    this.prevClickedObject.uuid = clickInfo.uuid;
  }


  private setTileColor(object: any, color: THREE.Color) {
    const defaultColor = color.getHexString();
    const allSiblings = object.parent.children;

    // reset color if it's not the default one
    allSiblings.forEach((elementFromGroup: any) => {
      const curretColor = elementFromGroup.material.color.getHexString();
      if (curretColor !== defaultColor) {
        elementFromGroup.material = new THREE.MeshLambertMaterial({ color: color });
        elementFromGroup.material.needsUpdate = true
      }
    });

    object.material = new THREE.MeshStandardMaterial({
      toneMapped: false,
      emissive: '#faec91',
      // emissive: color,
      emissiveIntensity: 1
    })
  }

  private setObjectColor(object: any, color: any) {
    const allSiblings = object.parent.parent.children;

    // if (this.prevClickedObject.uuid !== '') {
    //   const foundIndex = allSiblings.findIndex((obj: any) => obj.uuid === this.prevClickedObject.uuid);
    //   if (foundIndex > -1) {
    //     allSiblings[foundIndex].children[0].material = new THREE.MeshPhongMaterial({
    //       color: [0xd3d5db, 0xffffff, 0x9fa3ab, 0xcfd0d1][Math.random() * 4 | 0]
    //     });

    //   }
    // }

    object.material = new THREE.MeshStandardMaterial({
      toneMapped: false,
      emissive: color,
      // emissive: color,
      emissiveIntensity: 0.5
    })
  }
}