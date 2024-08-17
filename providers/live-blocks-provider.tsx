'use client'

import type { ReactNode } from 'react'
import { Liveblocks } from '@liveblocks/node'
import { LiveblocksProvider } from '@liveblocks/react'

export function LiveBlocksProviders({ children }: { children: ReactNode }) {
  return (
    <LiveblocksProvider authEndpoint='/api/liveblocks-auth' throttle={16}>
      {children}
    </LiveblocksProvider>
  )
}
