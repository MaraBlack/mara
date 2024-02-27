import { ObjectData, ObjectProperties } from "./object.model";

export interface RoadData extends ObjectData {
  nr: string
}

export interface RoadObject extends ObjectProperties {
  data: RoadData
}