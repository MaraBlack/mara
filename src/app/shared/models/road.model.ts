import { ObjectType } from "./object-types.enum";
import { PlaneCoordinates } from "./plane-coordinates.model";

export interface RoadData {
  type: string,
  name: string,
  nr: string,
  description?: {
    text: string
  }
}

export interface RoadObject {
  uuid?: string,
  coordinates: PlaneCoordinates,
  objectType: ObjectType,
  data: RoadData
}