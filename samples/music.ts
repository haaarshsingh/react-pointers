import { Prisma } from '@prisma/client'
import {
  IoAirplaneOutline,
  IoBalloonOutline,
  IoBaseballOutline,
  IoBeerOutline,
  IoBicycleOutline,
  IoBoatOutline,
  IoBusinessOutline,
  IoCafeOutline,
  IoCarOutline,
  IoDesktopOutline,
  IoFishOutline,
  IoFlameOutline,
  IoLeafOutline,
  IoMoonOutline,
  IoMusicalNoteOutline,
  IoPartlySunnyOutline,
  IoPawOutline,
  IoPlanetOutline,
  IoRainyOutline,
  IoSnowOutline,
  IoSunnyOutline,
  IoThunderstormOutline,
  IoTimeOutline,
  IoTrainOutline,
} from 'react-icons/io5'
import { IconType } from 'react-icons/lib'

// ye saari bakchodi icontype ki vajeh se ho rhi hai iska mtlab
//yes, goto definition kar aur check kar
// ABBE BC
//
export interface Category {
  name: string
  icon: IconType
  playing: boolean
  volume: number
}

let categories: Array<Category> = [
  {
    name: 'Leaves',
    icon: IoLeafOutline,
    playing: false,
    volume: 100,
  },
  {
    name: 'Night',
    icon: IoMoonOutline,
    playing: false,
    volume: 100,
  },
  {
    name: 'Rain',
    icon: IoRainyOutline,
    playing: false,
    volume: 100,
  },
  {
    name: 'Storm',
    icon: IoThunderstormOutline,
    playing: false,
    volume: 100,
  },
  {
    name: 'Windy',
    icon: IoPartlySunnyOutline,
    playing: false,
    volume: 100,
  },
  {
    name: 'Sunny Day',
    icon: IoSunnyOutline,
    playing: false,
    volume: 100,
  },
  {
    name: 'Snowfall',
    icon: IoSnowOutline,
    playing: false,
    volume: 100,
  },
  {
    name: 'Boat',
    icon: IoBoatOutline,
    playing: false,
    volume: 100,
  },
  {
    name: 'Bicycle',
    icon: IoBicycleOutline,
    playing: false,
    volume: 100,
  },
  {
    name: 'Stadium',
    icon: IoBaseballOutline,
    playing: false,
    volume: 100,
  },
  {
    name: 'Party',
    icon: IoBalloonOutline,
    playing: false,
    volume: 100,
  },
  {
    name: 'Bar',
    icon: IoBeerOutline,
    playing: false,
    volume: 100,
  },
  {
    name: 'Train',
    icon: IoTrainOutline,
    playing: false,
    volume: 100,
  },
  {
    name: 'Fire',
    icon: IoFlameOutline,
    playing: false,
    volume: 100,
  },
  {
    name: 'Planets',
    icon: IoPlanetOutline,
    playing: false,
    volume: 100,
  },
  {
    name: 'Clock',
    icon: IoTimeOutline,
    playing: false,
    volume: 100,
  },
  {
    name: 'Driving',
    icon: IoCarOutline,
    playing: false,
    volume: 100,
  },
  {
    name: 'Steps',
    icon: IoPawOutline,
    playing: false,
    volume: 100,
  },
  {
    name: 'Aeroplane',
    icon: IoAirplaneOutline,
    playing: false,
    volume: 100,
  },
  {
    name: 'Keyboard',
    icon: IoDesktopOutline,
    playing: false,
    volume: 100,
  },
  {
    name: 'Sea',
    icon: IoFishOutline,
    playing: false,
    volume: 100,
  },
  {
    name: 'Windchime',
    icon: IoMusicalNoteOutline,
    playing: false,
    volume: 100,
  },
  {
    name: 'City',
    icon: IoBusinessOutline,
    playing: false,
    volume: 100,
  },
  {
    name: 'Cafè',
    icon: IoCafeOutline,
    playing: false,
    volume: 100,
  },
]

export default categories
