import { BuildingObject } from "../models/building.model";
import { ObjectType } from "../models/object-types.enum";

export const BuildingsDataHardcoded = {
  gaming: [
    {
      coordinates: { x: -10, y: 10, z: -10 },
      objectType: ObjectType.BUILDING,
      data: {
        type: 'waisting time',
        name: 'Dota2 player',
        neighborhood: 'Area 125',
        description: {
          text: 'dota something something'
        }
      }
    },
    {
      coordinates: { x: -30, y: 20, z: -30 },
      objectType: ObjectType.BUILDING,
      data: {
        type: 'self improvement',
        name: 'Chess',
        neighborhood: 'Area 125',
        description: {
          text: 'chess something something'
        }
      }
    },
  ]
} as { [key: string]: BuildingObject[] }
