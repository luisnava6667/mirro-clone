'use client'

import { connectionIdToColors } from '@/lib/utils'
import { UserAvatar } from './user-avatar'
import { useOthers, useSelf } from '@liveblocks/react/suspense'

export const Participants = () => {
  const users = useOthers()
  const currentUser = useSelf()
  const MAX_SHOW_USERS = 1
  const hasMoreUsers = users.length > MAX_SHOW_USERS

  return (
    <div className='absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md'>
      <div className='flex gap-x-2'></div>
      {users.slice(0, MAX_SHOW_USERS).map(({ connectionId, info }) => {
        return (
          <UserAvatar
            borderColor={connectionIdToColors(connectionId)}
            key={connectionId}
            src={info?.picture}
            name={info?.name}
            fallback={info?.name?.[0] || 'T'}
          />
        )
      })}
      {currentUser && (
        <UserAvatar
          borderColor={connectionIdToColors(currentUser.connectionId)}
          src={currentUser.info?.picture}
          name={`${currentUser.info?.name} (You)`}
          fallback={currentUser.info?.name?.[0]}
        />
      )}
      {hasMoreUsers && (
        <UserAvatar
          name={`${users.length - MAX_SHOW_USERS} more `}
          fallback={`+${users.length - MAX_SHOW_USERS}`}
        />
      )}
    </div>
  )
}
export const ParticipanSkeleton = () => {
  return (
    <div className='absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]' />
  )
}
