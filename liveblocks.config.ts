// Define Liveblocks types for your application

import { LiveList, LiveMap, LiveObject } from '@liveblocks/client'
import { Color, Layer, Point } from './types/canvas'

// https://liveblocks.io/docs/api-reference/liveblocks-react#Typing-your-data
declare global {
  interface Liveblocks {
    Presence: {
      cursor: Point | null
      selection: string[]
      pencilDraft: [x: number, y: number, pressure: number][] | null
      penColor: Color | null
    }

    Storage: {
      layers: LiveMap<string, LiveObject<Layer>>
      layerIds: LiveList<string>
    }
    UserMeta: {
      id?: string
      info?: {
        name?: string
        picture?: string
      }
    }
    RoomEvent: {}
    ThreadMetadata: {}

    RoomInfo: {}
  }
}

export {}
