import { ObjectType } from "../models/object-types.enum";
import { RoadObject } from "../models/road.model";
import { IntroHardcoded } from "./intro.data";

export const RoadsDataHardcoded = {
  str0: [
    {
      coordinates: { x: -2.5, z: -2.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'platza',
        name: IntroHardcoded.name,
        nr: '0.1',
        description: {
          text: IntroHardcoded.description?.text
        }
      }
    },
    {
      coordinates: { x: 2.5, z: -2.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'platza',
        name: IntroHardcoded.name,
        nr: '0.2',
        description: {
          text: IntroHardcoded.description?.text
        }
      }
    },
    {
      coordinates: { x: 2.5, z: 2.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'platza',
        name: IntroHardcoded.name,
        nr: '0.3',
        description: {
          text: IntroHardcoded.description?.text
        }
      }
    },
    {
      coordinates: { x: -2.5, z: 2.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'platza',
        name: IntroHardcoded.name,
        nr: '0.4',
        description: {
          text: IntroHardcoded.description?.text
        }
      }
    }],
  str1: [
    {
      coordinates: { x: 7.5, z: -2.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'STR 1',
        nr: '1.1',
        description: {
          text: 'road 1'
        }
      }
    }
  ]
} as { [key: string]: any[] }