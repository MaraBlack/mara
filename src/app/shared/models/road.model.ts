import { PlaneCoordinates } from "./plane-coordinates.mode";

export interface RoadData {
  type: string,
  name: string,
  nr: string,
  description?: string
}

export interface RoadObject {
  uuid?: string,
  coordinates: PlaneCoordinates,
  data: RoadData
}