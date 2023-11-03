import { BuildingObject } from "../models/building.model";
import { ObjectType } from "../models/object-types.enum";

export const BuildingsDataHardcoded = {
  gaming: [
    {
      coordinates: { x: -10, y: 20, z: -10 },
      objectType: ObjectType.BUILDING,
      data: {
        type: 'Traveling',
        name: 'Urban Explorer',
        neighborhood: 'Area 125',
        description: {
          text: `City breaks are my kind of escape. I thrive on the energy of bustling streets, the history of ancient
          landmarks, and the flavor of diverse cultures.Join me as I delve into the heart of cities, one short adventure at a time.Let's
          explore urban wonders, uncover hidden gems, and savor the essence of each destination.Come along for a taste of the city life!`,
          image: 'europe.png'
        }
      }
    },
    {
      coordinates: { x: -25, y: 25, z: -25 },
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
