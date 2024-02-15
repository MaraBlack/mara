import * as THREE from "three";
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

import { Injectable } from "@angular/core";
import { mathRandonIterval } from "../../misc/utils";
import { OrientationEnum } from "../../models/orientation.enum";

@Injectable({
	providedIn: 'root'
})
export class AdvertisingService {

	addPanels(buildingHeight: number, panelHeight: number, orientation: OrientationEnum.N | OrientationEnum.E | OrientationEnum.S | OrientationEnum.V, color?: THREE.Color) {
		const advertising = new RoundedBoxGeometry(0.5, panelHeight, 5, 1, 1);
		const advertisingMaterial = new THREE.MeshStandardMaterial({
			toneMapped: false,
			emissive: color || [0x00ff88, 0xface6e, 0x73ff00, 0xfff200][Math.random() * 4 | 0],
			emissiveIntensity: 0.6
		});
		const advertisingObject = new THREE.Mesh(advertising, advertisingMaterial);

		const randomHeightPosition = buildingHeight / 2 - mathRandonIterval(6, 10);

		switch (orientation) {
			case OrientationEnum.E:
				advertisingObject.position.set(3.5, randomHeightPosition, 0);
				break;
			case OrientationEnum.S:
				advertisingObject.rotateY(Math.PI / 180 * -90);
				advertisingObject.position.set(0, randomHeightPosition, 3.5);
				break;
			case OrientationEnum.V:
				advertisingObject.position.set(-3.5, randomHeightPosition, 0);
				break;
			case OrientationEnum.N:
				advertisingObject.rotateY(Math.PI / 180 * -90);
				advertisingObject.position.set(0, randomHeightPosition, -3.5);
				break;
			default:
				break;
		}

		return advertisingObject;
	}
}