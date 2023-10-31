import { RoadObject } from "../models/road.model";


export const RoadData: { [key: string]: RoadObject[] | any } = {
  str0: [
    {
      coordinates: { x: -2.5, z: -2.5 },
      data: {
        type: 'platza',
        name: 'STR 0',
        nr: '0.1',
        description: 'Central Platza'
      }
    },
    {
      coordinates: { x: 2.5, z: -2.5 },
      data: {
        type: 'platza',
        name: 'STR 0',
        nr: '0.2',
        description: 'Central Platza'
      }
    },
    {
      coordinates: { x: 2.5, z: 2.5 },
      data: {
        type: 'platza',
        name: 'STR 0',
        nr: '0.3',
        description: 'Central Platza'
      }

    },
    {
      coordinates: { x: -2.5, z: 2.5 },
      data: {
        type: 'platza',
        name: 'STR 0',
        nr: '0.4',
        description: 'Central Platza'
      }
    }],
  str1: [
    {
      coordinates: { x: 7.5, z: -2.5 },
      type: 'main-road',
      name: 'STR 1',
      nr: '1.1',
      description: 'Main road'
    },
  ]
}