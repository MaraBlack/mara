import { ObjectData, ObjectProperties } from "./object.model"

export interface BuildingData extends ObjectData {
  neighborhood: string
}

export interface BuildingObject extends ObjectProperties {
  data: BuildingData
}