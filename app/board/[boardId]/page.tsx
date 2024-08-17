import { LiveBlocksProviders } from '@/providers/live-blocks-provider'
import { Canvas } from './_components/canvas'
import { Room } from '@/components/room'
import { Loading } from './_components/loading'
interface BoardIdPageProps {
  params: {
    boardId: string
  }
}
const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return (
    <LiveBlocksProviders >
      <Room roomId={params.boardId} fallback={<Loading />}>
        <Canvas boardId={params.boardId} />
      </Room>
    </LiveBlocksProviders>
  )
}

export default BoardIdPage
