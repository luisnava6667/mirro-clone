'use client'
import { memo } from 'react'
import { connectionIdToColors } from '@/lib/utils'
import { MousePointer2 } from 'lucide-react'
import { useOther } from '@liveblocks/react'
interface connectionIdProps {
  connectionId: number
}
export const Cursor = memo(({ connectionId }: connectionIdProps) => {
  const info = useOther(connectionId, (user) => user?.info)
  const cursor = useOther(connectionId, (user) => user?.presence.cursor)

  const name = info?.name || 'Teammate'
  if (!cursor) {
    return null
  }
  const { x, y } = cursor
  return (
    <foreignObject
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`
      }}
      width={name.length * 10 + 24}
      height={50}
      className='relative drop-shadow-sm'>
      <MousePointer2
        className='h-5 w-5'
        style={{
          fill: connectionIdToColors(connectionId),
          color: connectionIdToColors(connectionId)
        }}
      />
      <div
        className='absolute left-5 px-1.5 py-0.5 rounded-md text-xs text-white font-semibold'
        style={{ backgroundColor: connectionIdToColors(connectionId) }}>
        {name}
      </div>
    </foreignObject>
  )
})

Cursor.displayName = 'Cursor'
