import { PlaneCoordinates } from "./plane-coordinates.model"

export interface BuildingData {
  type: string,
  name: string,
  neighborhood: string,
  description?: string[]
}

export interface BuildingObject {
  uuid?: string,
  coordinates: PlaneCoordinates,
  data: BuildingData
}