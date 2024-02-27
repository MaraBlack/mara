import { RoadObject } from "./models/road.model";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPanelService {
  _infoPanel!: RoadObject;

  setInfoPanel(value: RoadObject) {
    this._infoPanel = value;
  }
  getInfoPanel() {
    return this._infoPanel;
  }
}