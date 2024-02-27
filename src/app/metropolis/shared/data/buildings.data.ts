import { AcctivityTypes } from "../models/acctivity-types.mode";
import { BuildingObject } from "../models/building.model";
import { ObjectType } from "../models/object-types.enum";

function generateRandomInteger(min: number, max: number) {
  return Math.floor(min + Math.random() * (max - min + 1))
}

export const BuildingsDataHardcoded = {
  Business: [
    {
      coordinates: { x: 0, y: 48, z: -10 },
      objectType: ObjectType.BUILDING,
      data: {
        type: AcctivityTypes.BUSINESS,
        name: ['NTT DATA', 'Jan 2022 - present'],
        color: "#abcbde",
        neighborhood: 'Area 135',
        description: {
          text: `I'm a web developer at NTT DATA, specializing in Angular development mostly and I've had the 
          opportunity to work on some exciting projects, such as the European Patent Office (EPO), 
          the BMW Configurator in whick I learned a bit of Lit framework, and R+V RE, an Reinsurance company. 
          These experiences have helped me grow and contribute to various web solutions for different clients and industries.`,
        }
      }
    },
    {
      coordinates: { x: -10, y: 16, z: -5 },
      objectType: ObjectType.BUILDING,
      data: {
        type: AcctivityTypes.BUSINESS,
        name: ['eMAG', 'Oct 2021 - Jan 2022'],
        color: "#abcbde",
        neighborhood: 'Area 135',
        description: {
          text: `I had a relatively brief experience at eMAG company, where I worked with Angular and 
          followed the Scrum methodology. During my time there, my main focus was a specific component 
          within the eMAG Marketplace project, which provided an opportunity to further develop my web development skills`
        }
      }
    },
    {
      coordinates: { x: -10, y: 40, z: -15 },
      objectType: ObjectType.BUILDING,
      data: {
        type: AcctivityTypes.BUSINESS,
        name: ['Endava', 'Jan 2020 - Oct 2021)'],
        color: "#abcbde",
        neighborhood: 'Area 135',
        description: {
          text: `At Endava company, I had the opportunity to work with clients like FIS Global's Worldpay, 
          where I contributed to the creation of a payment page, and Cisco, where I assisted in configuring 
          Cisco devices. Both projects followed the Scrum methodology and involved Angular development. These 
          experiences allowed me to grow my expertise in web development and client service within a 
          collaborative project management.`
        }
      }
    },
    {
      coordinates: { x: -20, y: 36, z: -5 },
      objectType: ObjectType.BUILDING,
      data: {
        type: AcctivityTypes.BUSINESS,
        name: ['Cerner', 'July 2018 - Jan 2020'],
        color: "#abcbde",
        neighborhood: 'Area 135',
        description: {
          text: `While at Cerner company which was swallowed by Oracle and now goes by Oracle name, 
          I helped in developing an emergency department dashboard. The project utilized the SAP UI5 framework and followed the 
          Scrum methodology. This experience  allowed me to enhance my skills in web development and be a part of creating 
          an essential tool for the healthcare sector.`
        }
      }
    },
    {
      coordinates: { x: -15, y: 28, z: 5 },
      objectType: ObjectType.BUILDING,
      data: {
        type: AcctivityTypes.BUSINESS,
        name: ['Siemens', 'Jan 2017 - Jul 2018'],
        color: "#abcbde",
        neighborhood: 'Area 135',
        description: {
          text: `I started my developer career at Siemens company with an internship program, initially learning QT with C++. 
          Soon after, I transitioned to become a frontend developer where I began to explore and work with Vue.js. 
          In this role, I contributed to the development of a healthcare sector dashboard, gaining my first valuable 
          experience with real-life projects and further developing my skills in web development.`
        }
      }
    }
  ],
  Travel: [
    {
      coordinates: { x: 15, y: 40, z: -20 },
      objectType: ObjectType.BUILDING,
      data: {
        type: AcctivityTypes.TRAVEL,
        name: ['Urban explorer'],
        color: "#b8e0cb",
        neighborhood: 'Area 16',
        description: {
          text: `City breaks are my kind of escape. I thrive on the energy of bustling streets, 
          the history of ancient landmarks, and the flavor of diverse cultures. Delving into the heart of cities, 
          I embark on short adventures to explore urban wonders, uncover hidden gems, and savor the essence of 
          each destination. It's all about experiencing the city life!`,
          image: 'europe.png'
        }
      }
    },
    {
      coordinates: { x: 15, y: 20, z: -10 },
      objectType: ObjectType.BUILDING,
      data: {
        type: AcctivityTypes.TRAVEL,
        name: ['Discover Romania'],
        color: "#b8e0cb",
        neighborhood: 'Area 16',
        description: {
          text: `I'm based in Romania, and I have a genuine interest in exploring the customs and traditions 
          across different regions of our country. As I travel within Romania, I have a quirky and enjoyable 
          hobby — comparing the 'sarmale' dish from different areas. It's a tasty way for me to learn more 
          about the unique flavors and traditions that define each region.`,
        }
      }
    },
  ],
  Drawing: [
    {
      coordinates: { x: 10, y: 34, z: 5 },
      objectType: ObjectType.BUILDING,
      data: {
        type: AcctivityTypes.DRAWING,
        name: ['Exploring Minimalism in Digital Art'],
        color: "#ded3e8",
        neighborhood: 'Area 234',
        description: {
          text: `I have a deep passion for art, particularly in the realm of digital drawings.
          My style leans towards minimalism, where every line and shade has a purpose.
          In addition to my personal creations, I've also created minor logo concepts and taken on commissions for friends.
          It's a creative journey that allows me to express myself while contributing to the visual stories of those around me`,
        }
      }
    },
    {
      coordinates: { x: 0, y: 28, z: 10 },
      objectType: ObjectType.BUILDING,
      data: {
        type: AcctivityTypes.DRAWING,
        name: [' Capturing Moments on My Sketchbook'],
        color: "#ded3e8",
        neighborhood: 'Area 234',
        description: {
          text: `Alongside my digital art, I also find solace in the simplicity of my sketchbook. 
          It's a canvas for my emotions and experiences, where I create simple, 
          spontaneous doodles and drawings. Each stroke captures a moment or a feeling, 
          allowing me to express the essence of what's in my heart at that time`,
        }
      }
    },
  ],
  Gaming: [
    {
      coordinates: { x: -15, y: 40, z: 20 },
      objectType: ObjectType.BUILDING,
      data: {
        type: AcctivityTypes.GAMING,
        name: ['Turbo Mode Adventures'],
        color: "#d9b3a3",
        neighborhood: 'Area 234',
        description: {
          text: `I'm a Dota 2 enthusiast, and I enjoy the fast-paced action of Turbo mode. In each game, I aim 
          to improve my skills and become a better player. Join me on this gaming journey, where we aim for 
          victory and a place where we can all feel good and have fun in the Dota 2 universe!`,
        }
      }
    },
    {
      coordinates: { x: -5, y: 24, z: 25 },
      objectType: ObjectType.BUILDING,
      data: {
        type: AcctivityTypes.GAMING,
        name: ['Chess Journey'],
        color: "#d9b3a3",
        neighborhood: 'Area 234',
        description: {
          text: `I've recently delved into the world of chess as a beginner, but my determination to learn 
          patterns from opponents' movements keeps me engaged. My goal, for the moment, is to reach 
          around 1.5 Elo rating, and I'm excited to continue my chess journey, one move at a time`,
        }
      }
    },
    {
      coordinates: { x: 5, y: 16, z: 25 },
      objectType: ObjectType.BUILDING,
      data: {
        type: AcctivityTypes.GAMING,
        name: ['Conquering with Druids, Warriors, and Warlocks'],
        color: "#d9b3a3",
        neighborhood: 'Area 234',
        description: {
          text: `I enjoy playing auto-chess, especially during wait times or while doing cardio on the treadmill 
          at the gym. My favorite class combination in this game consists of druid, warrior, and warlock. 
          It's a strategic blend that adds excitement to my auto-chess adventures`,
        }
      }
    },
    {
      coordinates: { x: 15, y: 16, z: 20 },
      objectType: ObjectType.BUILDING,
      data: {
        type: AcctivityTypes.GAMING,
        name: ['PlayStation Adventures'],
        color: "#d9b3a3",
        neighborhood: 'Area 234',
        description: {
          text: `I enjoy gaming on PlayStation from time to time, and my favorite games are 'It Takes Two,' which 
          I play with my boyfriend, 'Bomberman' and 'Mortal Kombat.' Even though I lose 80% of the 
          time in the latter two, the thrill of these games keeps me coming back for more. 
          They're captivating choices that keep us entertained and engaged during our gaming sessions.`,
        }
      }
    },
    {
      coordinates: { x: 5, y: 20, z: 35 },
      objectType: ObjectType.BUILDING,
      data: {
        type: AcctivityTypes.GAMING,
        name: ['Board Game Gatherings'],
        color: "#d9b3a3",
        neighborhood: 'Area 234',
        description: {
          text: `I love gathering with friends, especially on New Year's night, to enjoy the 
          thrill of board games. It's a tradition that brings us closer and adds excitement to our gatherings. 
          While I might not be a fan of '5 minutes' and 'Jungle Speed,' I truly enjoy games like 'Activity' 
          and 'Cards Against Humanity.' These games never fail to create laughter and memorable moments as 
          we share great times together`,
        }
      }
    }
  ],
  Outdoor: [
    {
      coordinates: { x: 25, y: 16, z: 5 },
      objectType: ObjectType.BUILDING,
      data: {
        type: AcctivityTypes.OUTDOOR,
        name: ['410 Gym Gone '],
        color: "#ded9b4",
        neighborhood: 'Area 24',
        description: {
          text: `I used to frequent the gym, but lately, my priorities have shifted, and I'm not going anymore.
          However, I'm planning to get back into the routine soon. 
          It's a journey with changing priorities, but the commitment to fitness remains a constant.`,
        }
      }
    },
    {
      coordinates: { x: 30, y: 28, z: -5 },
      objectType: ObjectType.BUILDING,
      data: {
        type: AcctivityTypes.OUTDOOR,
        name: ['Dive into Progress'],
        color: "#ded9b4",
        neighborhood: 'Area 24',
        description: {
          text: `I make time for the swimming pool whenever I can, and recently, I've embarked on an 
          advanced swimming course to refine my technique. My goal is to master the 'butterfly' style, 
          a challenging yet rewarding swimming stroke. It's a journey of dedication and continuous 
          improvement in the water.`,
        }
      }
    },
    {
      coordinates: { x: 30, y: 24, z: -15 },
      objectType: ObjectType.BUILDING,
      data: {
        type: AcctivityTypes.OUTDOOR,
        name: ['Exploring on Two Wheels'],
        color: "#ded9b4",
        neighborhood: 'Area 24',
        description: {
          text: `I love exploring the city on my bike, especially when accompanied by friends.
          It's a delightful way to soak in the urban atmosphere, sharing the joy of cycling through the streets together`,
        }
      }
    },
  ],
  empty: [
    {
      coordinates: { x: 20, y: generateRandomInteger(10, 20), z: 35 },
      objectType: ObjectType.BUILDING,
      data: {
        type: 'TBD',
        name: ['To be discovered 001'],
        color: "white",
        neighborhood: 'No Area',
        description: {
          text: `On a quest for a new hobby, eager to explore and create memories`,
        }
      }
    },
    {
      coordinates: { x: 30, y: generateRandomInteger(10, 20), z: 30 },
      objectType: ObjectType.BUILDING,
      data: {
        type: 'TBD',
        name: ['To be discovered 002'],
        color: "white",
        neighborhood: 'No Area',
        description: {
          text: `On a quest for a new hobby, eager to explore and create memories`,
        }
      }
    },
    {
      coordinates: { x: -10, y: generateRandomInteger(10, 20), z: 40 },
      objectType: ObjectType.BUILDING,
      data: {
        type: 'TBD',
        name: ['To be discovered 003'],
        color: "white",
        neighborhood: 'No Area',
        description: {
          text: `On a quest for a new hobby, eager to explore and create memories`,
        }
      }
    },
    {
      coordinates: { x: 30, y: generateRandomInteger(10, 20), z: 20 },
      objectType: ObjectType.BUILDING,
      data: {
        type: 'TBD',
        name: ['To be discovered 004'],
        color: "white",
        neighborhood: 'No Area',
        description: {
          text: `On a quest for a new hobby, eager to explore and create memories`,
        }
      }
    },
    {
      coordinates: { x: -30, y: generateRandomInteger(10, 20), z: 10 },
      objectType: ObjectType.BUILDING,
      data: {
        type: 'TBD',
        name: ['To be discovered 005'],
        color: "white",
        neighborhood: 'No Area',
        description: {
          text: `On a quest for a new hobby, eager to explore and create memories`,
        }
      }
    },
    {
      coordinates: { x: -30, y: generateRandomInteger(10, 20), z: 20 },
      objectType: ObjectType.BUILDING,
      data: {
        type: 'TBD',
        name: ['To be discovered 006'],
        color: "white",
        neighborhood: 'No Area',
        description: {
          text: `On a quest for a new hobby, eager to explore and create memories`,
        }
      }
    },
    {
      coordinates: { x: -35, y: generateRandomInteger(10, 20), z: -5 },
      objectType: ObjectType.BUILDING,
      data: {
        type: 'TBD',
        name: ['To be discovered 007'],
        color: "white",
        neighborhood: 'No Area',
        description: {
          text: `In a quest to find a new adventure!`,
        }
      }
    },
    {
      coordinates: { x: -35, y: generateRandomInteger(10, 20), z: -20 },
      objectType: ObjectType.BUILDING,
      data: {
        type: 'TBD',
        name: ['To be discovered 008'],
        color: "white",
        neighborhood: 'No Area',
        description: {
          text: `On a quest for a new hobby, eager to explore and create memories`,
        }
      }
    },
    {
      coordinates: { x: -25, y: generateRandomInteger(10, 20), z: -20 },
      objectType: ObjectType.BUILDING,
      data: {
        type: 'TBD',
        name: ['To be discovered 009'],
        color: "white",
        neighborhood: 'No Area',
        description: {
          text: `On a quest for a new hobby, eager to explore and create memories`,
        }
      }
    },
    {
      coordinates: { x: -15, y: generateRandomInteger(10, 20), z: -30 },
      objectType: ObjectType.BUILDING,
      data: {
        type: 'TBD',
        name: ['To be discovered 010'],
        color: "white",
        neighborhood: 'No Area',
        description: {
          text: `In a quest to discover myself more!`,
        }
      }
    },
    {
      coordinates: { x: -25, y: generateRandomInteger(10, 20), z: -30 },
      objectType: ObjectType.BUILDING,
      data: {
        type: 'TBD',
        name: ['To be discovered 011'],
        color: "white",
        neighborhood: 'No Area',
        description: {
          text: `On a quest for a new hobby, eager to explore and create memories`,
        }
      }
    },
    {
      coordinates: { x: 0, y: generateRandomInteger(10, 20), z: -30 },
      objectType: ObjectType.BUILDING,
      data: {
        type: 'TBD',
        name: ['To be discovered 012'],
        color: "white",
        neighborhood: 'No Area',
        description: {
          text: `On a quest for a new hobby, eager to explore and create memories`,
        }
      }
    },
    {
      coordinates: { x: 0, y: generateRandomInteger(10, 20), z: -40 },
      objectType: ObjectType.BUILDING,
      data: {
        type: 'TBD',
        name: ['To be discovered 013'],
        color: "white",
        neighborhood: 'No Area',
        description: {
          text: `On a quest for a new hobby, eager to explore and create memories`,
        }
      }
    },
    {
      coordinates: { x: 10, y: generateRandomInteger(10, 20), z: -35 },
      objectType: ObjectType.BUILDING,
      data: {
        type: 'TBD',
        name: ['To be discovered 014'],
        color: "white",
        neighborhood: 'No Area',
        description: {
          text: `On a quest for a new hobby, eager to explore and create memories`,
        }
      }
    },
    {
      coordinates: { x: 20, y: generateRandomInteger(10, 20), z: -35 },
      objectType: ObjectType.BUILDING,
      data: {
        type: 'TBD',
        name: ['To be discovered 015'],
        color: "white",
        neighborhood: 'No Area',
        description: {
          text: `On a quest for a new hobby, eager to explore and create memories`,
        }
      }
    },
    {
      coordinates: { x: 30, y: generateRandomInteger(10, 20), z: -30 },
      objectType: ObjectType.BUILDING,
      data: {
        type: 'TBD',
        name: ['To be discovered 016'],
        color: "white",
        neighborhood: 'No Area',
        description: {
          text: `On a quest for a new hobby, eager to explore and create memories`,
        }
      }
    },
    {
      coordinates: { x: 40, y: generateRandomInteger(10, 20), z: -30 },
      objectType: ObjectType.BUILDING,
      data: {
        type: 'TBD',
        name: ['To be discovered 017'],
        color: "white",
        neighborhood: 'No Area',
        description: {
          text: `On a quest for a new hobby, eager to explore and create memories`,
        }
      }
    },
  ]
} as { [key: string]: BuildingObject[] }
