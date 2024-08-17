import Image from 'next/image'
import Link from 'next/link'
import { CreateOrganization } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { DialogDescription, Title } from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

export const EmptyOrg = () => {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <Image src='/elements.svg' alt='Empty' width='100' height='100' />
      <h2 className='text-2xl font-semibold mt-6'>Welcome to Board</h2>
      <p className='text-muted-foreground text-sm mt-2'>Create an organization to get stared</p>
      <div className='mt-6'>
        <Dialog>
          <DialogTrigger asChild>
            <Button size='lg'>Create organization</Button>
          </DialogTrigger>
          <DialogContent className='p-0 bg-transparent border-none max-w-[480px]'>
            <VisuallyHidden>
              <Title>Dialog Title</Title>
              <DialogDescription>This is a description of the dialog content.</DialogDescription>
            </VisuallyHidden>
            <CreateOrganization routing='hash' />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
