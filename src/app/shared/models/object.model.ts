import { ObjectType } from "./object-types.enum"
import { PlaneCoordinates } from "./plane-coordinates.model"

export interface ObjectData {
  type: string,
  name: string[],
  color?: string,
  description?: {
    text: string,
    image?: string
  }
}

export interface ObjectProperties {
  uuid?: string,
  coordinates: PlaneCoordinates,
  objectType: ObjectType
}