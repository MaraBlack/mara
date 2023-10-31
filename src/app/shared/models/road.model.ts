import { PlaneCoordinates } from "./plane-coordinates.model";

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