import { Loader } from 'lucide-react'
import {  InfoSkeleton } from './info'
import { ParticipanSkeleton } from './participants'
import {  ToolbarSkeleton } from './toolbar'

export const Loading = () => {
  return (
    <main className='h-full relative w-full bg-neutral-100 touch-none flex justify-center items-center'>
      <Loader className='h-6 w-6 text-muted-foreground animate-spin' />
      <InfoSkeleton />
      <ParticipanSkeleton />
      <ToolbarSkeleton />
    </main>
  )
}
