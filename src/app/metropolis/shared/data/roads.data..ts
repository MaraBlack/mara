import { ObjectType } from "../models/object-types.enum";
import { RoadObject } from "../models/road.model";
import { IntroHardcoded } from "./intro.data";

export const RoadsDataHardcoded = {
  street_0: [
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
    }
  ],
  street_1: [
    {
      coordinates: { x: 7.5, z: -2.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 1',
        nr: '1.1',
        description: {
          text: 'road 1.1'
        }
      }
    },
    {
      coordinates: { x: 7.5, z: -7.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 1',
        nr: '1.2',
        description: {
          text: 'road 1.2'
        }
      }
    },
    {
      coordinates: { x: 7.5, z: -12.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 1',
        nr: '1.3',
        description: {
          text: 'road 1.3'
        }
      }
    },
    {
      coordinates: { x: 7.5, z: -17.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'second-platza',
        name: 'street 1',
        nr: '1.4.1',
        description: {
          text: 'road 1.4.1'
        }
      }
    },
    {
      coordinates: { x: 2.5, z: -22.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'second-platza',
        name: 'street 1',
        nr: '1.4.3',
        description: {
          text: 'road 1.4.3'
        }
      }
    },
    {
      coordinates: { x: 7.5, z: -22.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'second-platza',
        name: 'street 1',
        nr: '1.4.2',
        description: {
          text: 'road 1.4.2'
        }
      }
    },
    {
      coordinates: { x: 2.5, z: -17.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 1',
        nr: '1.4.4',
        description: {
          text: 'road 1.4.4'
        }
      }
    },
    {
      coordinates: { x: -2.5, z: -17.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'second-platza',
        name: 'street 1',
        nr: '1.4.5',
        description: {
          text: 'road 1.4.5'
        }
      }
    },
    {
      coordinates: { x: -2.5, z: -22.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'second-platza',
        name: 'street 1',
        nr: '1.4.6',
        description: {
          text: 'road 1.4.6'
        }
      }
    },
    {
      coordinates: { x: -7.5, z: -22.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 1',
        nr: '1.7',
        description: {
          text: 'road 1.7'
        }
      }
    },
    {
      coordinates: { x: -12.5, z: -22.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 1',
        nr: '1.8',
        description: {
          text: 'road 1.8'
        }
      }
    },
    {
      coordinates: { x: -17.5, z: -22.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 1',
        nr: '1.9',
        description: {
          text: 'road 1.9'
        }
      }
    },
    {
      coordinates: { x: -17.5, z: -17.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 1',
        nr: '1.10',
        description: {
          text: 'road 1.10'
        }
      }
    },
    {
      coordinates: { x: -17.5, z: -12.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 1',
        nr: '1.11',
        description: {
          text: 'road 1.11'
        }
      }
    },
    {
      coordinates: { x: -22.5, z: -12.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 1',
        nr: '1.12',
        description: {
          text: 'road 1.13'
        }
      }
    },
    {
      coordinates: { x: -27.5, z: -12.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 1',
        nr: '1.14',
        description: {
          text: 'road 1.14'
        }
      }
    },
    {
      coordinates: { x: -32.5, z: -12.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 1',
        nr: '1.15',
        description: {
          text: 'road 1.15'
        }
      }
    },
    {
      coordinates: { x: -37.5, z: -12.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 1',
        nr: '1.16',
        description: {
          text: 'road 1.16'
        }
      }
    }
  ],
  street_2: [
    {
      coordinates: { x: 12.5, z: -2.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 2',
        nr: '2.1',
        description: {
          text: 'road 2.1'
        }
      }
    },
    {
      coordinates: { x: 17.5, z: -2.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 2',
        nr: '2.2',
        description: {
          text: 'road 2.2'
        }
      }
    },
    {
      coordinates: { x: 22.5, z: -2.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 2',
        nr: '2.3',
        description: {
          text: 'road 2.3'
        }
      }
    },
    {
      coordinates: { x: 22.5, z: -7.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 2',
        nr: '2.4',
        description: {
          text: 'road 2.4'
        }
      }
    },
    {
      coordinates: { x: 22.5, z: -12.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 2',
        nr: '2.5',
        description: {
          text: 'road 2.5'
        }
      }
    },
    {
      coordinates: { x: 22.5, z: -17.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 2',
        nr: '2.5',
        description: {
          text: 'road 2.5'
        }
      }
    },
    {
      coordinates: { x: 22.5, z: -22.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 2',
        nr: '2.6',
        description: {
          text: 'road 2.6'
        }
      }
    },
    {
      coordinates: { x: 27.5, z: -22.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 2',
        nr: '2.7',
        description: {
          text: 'road 2.8'
        }
      }
    },
    {
      coordinates: { x: 32.5, z: -22.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 2',
        nr: '2.8',
        description: {
          text: 'road 2.8'
        }
      }
    },
    {
      coordinates: { x: 37.5, z: -22.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 2',
        nr: '2.9',
        description: {
          text: 'road 2.9'
        }
      }
    },
    {
      coordinates: { x: 42.5, z: -22.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 2',
        nr: '2.10',
        description: {
          text: 'road 2.10'
        }
      }
    },
    {
      coordinates: { x: 47.5, z: -22.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 2',
        nr: '2.11',
        description: {
          text: 'road 2.11'
        }
      }
    },

  ],
  street_3: [
    {
      coordinates: { x: -7.5, z: 2.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 3',
        nr: '3.1',
        description: {
          text: 'road 3.1'
        }
      }
    },
    {
      coordinates: { x: -7.5, z: 7.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 3',
        nr: '3.2',
        description: {
          text: 'road 3.2'
        }
      }
    },
    {
      coordinates: { x: -7.5, z: 12.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 3',
        nr: '3.3',
        description: {
          text: 'road 3.3'
        }
      }
    },
    {
      coordinates: { x: -12.5, z: 12.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 3',
        nr: '3.4',
        description: {
          text: 'road 3.4'
        }
      }
    },
    {
      coordinates: { x: -17.5, z: 12.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 3',
        nr: '3.5',
        description: {
          text: 'road 3.5'
        }
      }
    },
    {
      coordinates: { x: -22.5, z: 12.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 3',
        nr: '3.6',
        description: {
          text: 'road 3.6'
        }
      }
    },
    {
      coordinates: { x: -22.5, z: 17.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 3',
        nr: '3.7',
        description: {
          text: 'road 3.7'
        }
      }
    },
    {
      coordinates: { x: -22.5, z: 22.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 3',
        nr: '3.8',
        description: {
          text: 'road 3.8'
        }
      }
    },
    {
      coordinates: { x: -22.5, z: 27.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 3',
        nr: '3.9',
        description: {
          text: 'road 3.9'
        }
      }
    },
    {
      coordinates: { x: -17.5, z: 27.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'third-platza',
        name: 'street 3',
        nr: '3.10.1',
        description: {
          text: 'road 3.10.1'
        }
      }
    },
    {
      coordinates: { x: -17.5, z: 32.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'third-platza',
        name: 'street 3',
        nr: '3.10.1',
        description: {
          text: 'road 3.10.1'
        }
      }
    },
    {
      coordinates: { x: -12.5, z: 27.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'third-platza',
        name: 'street 3',
        nr: '3.10.2',
        description: {
          text: 'road 3.10.2'
        }
      }
    },
    {
      coordinates: { x: -12.5, z: 32.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'third-platza',
        name: 'street 3',
        nr: '3.10.3',
        description: {
          text: 'road 3.10.4'
        }
      }
    },
    {
      coordinates: { x: -7.5, z: 32.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'third-platza',
        name: 'street 3',
        nr: '3.11',
        description: {
          text: 'road 3.11'
        }
      }
    },
    {
      coordinates: { x: -2.5, z: 32.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'third-platza',
        name: 'street 3',
        nr: '3.11',
        description: {
          text: 'road 3.11'
        }
      }
    },
    {
      coordinates: { x: -2.5, z: 37.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 3',
        nr: '3.12',
        description: {
          text: 'road 3.12'
        }
      }
    },
    {
      coordinates: { x: -2.5, z: 42.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 3',
        nr: '3.13',
        description: {
          text: 'road 3.13'
        }
      }
    },
  ],
  street_4: [
    {
      coordinates: { x: -7.5, z: 17.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 4',
        nr: '4.1',
        description: {
          text: 'road 4.1'
        }
      }
    },
    {
      coordinates: { x: -2.5, z: 17.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 4',
        nr: '4.2',
        description: {
          text: 'road 4.2'
        }
      }
    },
    {
      coordinates: { x: 2.5, z: 17.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 4',
        nr: '4.3',
        description: {
          text: 'road 4.3'
        }
      }
    },
    {
      coordinates: { x: 7.5, z: 17.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 4',
        nr: '4.4',
        description: {
          text: 'road 4.4'
        }
      }
    },
    {
      coordinates: { x: 7.5, z: 12.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 4',
        nr: '4.5',
        description: {
          text: 'road 4.5'
        }
      }
    },
    {
      coordinates: { x: 12.5, z: 12.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 4',
        nr: '4.6',
        description: {
          text: 'road 4.6'
        }
      }
    },
    {
      coordinates: { x: 17.5, z: 12.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 4',
        nr: '4.7',
        description: {
          text: 'road 4.7'
        }
      }
    },
    {
      coordinates: { x: 22.5, z: 12.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 4',
        nr: '4.8',
        description: {
          text: 'road 4.8'
        }
      }
    },
    {
      coordinates: { x: 27.5, z: 12.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 4',
        nr: '4.9',
        description: {
          text: 'road 4.9'
        }
      }
    },
    {
      coordinates: { x: 32.5, z: 12.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 4',
        nr: '4.10',
        description: {
          text: 'road 4.10'
        }
      }
    },
  ],
  street_24: [
    {
      coordinates: { x: 17.5, z: 7.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'side-road',
        name: 'street 24',
        nr: '24.1',
        description: {
          text: 'road 24.1'
        }
      }
    },
    {
      coordinates: { x: 17.5, z: 2.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'side-road',
        name: 'street 24',
        nr: '24.2',
        description: {
          text: 'road 24.2'
        }
      }
    },
  ],
  street_9: [
    {
      coordinates: { x: 22.5, z: 17.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 9',
        nr: '9.1',
        description: {
          text: 'road 9.1'
        }
      }
    },
    {
      coordinates: { x: 22.5, z: 22.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 9',
        nr: '9.2',
        description: {
          text: 'road 9.2'
        }
      }
    },
    {
      coordinates: { x: 22.5, z: 27.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 9',
        nr: '9.3',
        description: {
          text: 'road 9.3'
        }
      }
    },
    {
      coordinates: { x: 17.5, z: 27.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 9',
        nr: '9.4',
        description: {
          text: 'road 9.4'
        }
      }
    },
    {
      coordinates: { x: 12.5, z: 27.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 9',
        nr: '9.5',
        description: {
          text: 'road 9.5'
        }
      }
    },
    {
      coordinates: { x: 12.5, z: 32.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 9',
        nr: '9.6',
        description: {
          text: 'road 9.6'
        }
      }
    },
    {
      coordinates: { x: 12.5, z: 37.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 9',
        nr: '9.7',
        description: {
          text: 'road 9.7'
        }
      }
    },
    {
      coordinates: { x: 12.5, z: 42.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 9',
        nr: '9.8',
        description: {
          text: 'road 9.8'
        }
      }
    },
    {
      coordinates: { x: 12.5, z: 47.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 9',
        nr: '9.9',
        description: {
          text: 'road 9.9'
        }
      }
    },
  ],
  street_5: [
    {
      coordinates: { x: -22.5, z: 7.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 5',
        nr: '5.1',
        description: {
          text: 'road 5.1'
        }
      }
    },
    {
      coordinates: { x: -22.5, z: 2.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 5',
        nr: '5.2',
        description: {
          text: 'road 5.2'
        }
      }
    },
    {
      coordinates: { x: -27.5, z: 2.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 5',
        nr: '5.3',
        description: {
          text: 'road 5.3'
        }
      }
    },
    {
      coordinates: { x: -32.5, z: 2.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 5',
        nr: '5.4',
        description: {
          text: 'road 5.4'
        }
      }
    },
    {
      coordinates: { x: -32.5, z: 2.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 5',
        nr: '5.5',
        description: {
          text: 'road 5.5'
        }
      }
    },
    {
      coordinates: { x: -37.5, z: 2.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 5',
        nr: '5.6',
        description: {
          text: 'road 5.6'
        }
      }
    },
    {
      coordinates: { x: -42.5, z: 2.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 5',
        nr: '5.7',
        description: {
          text: 'road 5.7'
        }
      }
    },
  ],
  street_51: [
    {
      coordinates: { x: -27.5, z: -2.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'side-road',
        name: 'street 51',
        nr: '51.1',
        description: {
          text: 'road 51.1'
        }
      }
    },
    {
      coordinates: { x: -27.5, z: -7.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'side-road',
        name: 'street 51',
        nr: '51.2',
        description: {
          text: 'road 51.2'
        }
      }
    },
  ],
  street_8: [
    {
      coordinates: { x: -17.5, z: 37.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 8',
        nr: '8.1',
        description: {
          text: 'road 8.1'
        }
      }
    },
  ],
  street_7: [
    {
      coordinates: { x: -7.5, z: -27.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 7',
        nr: '7.1',
        description: {
          text: 'road 7.1'
        }
      }
    },
    {
      coordinates: { x: -7.5, z: -32.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 7',
        nr: '7.2',
        description: {
          text: 'road 7.2'
        }
      }
    },
    {
      coordinates: { x: -7.5, z: -37.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 7',
        nr: '7.3',
        description: {
          text: 'road 7.3'
        }
      }
    },
  ],
  street_6: [
    {
      coordinates: { x: 7.5, z: -27.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 6',
        nr: '6.1',
        description: {
          text: 'road 6.1'
        }
      }
    },
    {
      coordinates: { x: 12.5, z: -27.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 6',
        nr: '6.2',
        description: {
          text: 'road 6.2'
        }
      }
    },
    {
      coordinates: { x: 17.5, z: -27.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 6',
        nr: '6.3',
        description: {
          text: 'road 6.3'
        }
      }
    },
    {
      coordinates: { x: 22.5, z: -27.5 },
      objectType: ObjectType.ROAD,
      data: {
        type: 'main-road',
        name: 'street 6',
        nr: '6.4',
        description: {
          text: 'road 6.4'
        }
      }
    },
  ]
} as { [key: string]: any[] }