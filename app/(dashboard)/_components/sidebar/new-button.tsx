'use client'
import { Plus } from 'lucide-react'
import { CreateOrganization } from '@clerk/nextjs'
import { Tooltip } from '@/components/ui/tooltip'
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from '@/components/ui/dialog'
import { Hint } from '@/components/hint'
import { Title } from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='aspect-square'>
          <Hint label='Create Organization' side='right' align='start' sideOffset={18}>
            <button className='bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition'>
              <Plus className='text-white' />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className='p-0 bg-transparent border-none max-w-[480px]' aria-description='board create'>
        <VisuallyHidden>
          <Title>Dialog Title</Title>
          <DialogDescription>This is a description of the dialog content.</DialogDescription>
        </VisuallyHidden>
        <CreateOrganization routing='hash' />
      </DialogContent>
    </Dialog>
  )
}
