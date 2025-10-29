import { Protected } from '@/components/wrapper/Protected'
import ModuleClient from './ModuleClient'

interface ModulePageProps {
  params: Promise<{ id: string }>
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { id } = await params

  return (
    <Protected>
      <ModuleClient moduleId={Number(id)} />
    </Protected>
  )
}
