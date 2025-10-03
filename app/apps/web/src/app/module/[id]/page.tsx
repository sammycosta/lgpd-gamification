import ModuleClient from './ModuleClient'

interface ModulePageProps {
  params: Promise<{ id: string }>
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { id } = await params

  return <ModuleClient moduleId={Number(id)} />
}
