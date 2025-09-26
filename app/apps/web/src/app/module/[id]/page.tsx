import { MODULE_DATA } from '@/app/mockData'
import Activities from '@/components/module/Activities'
import ProgressBar from '@/components/ui/ProgressBar'
import { Text, Title } from '@mantine/core'
import PageActions from './PageActions'

interface ModulePageProps {
  params: Promise<{ id: string }>
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { id } = await params

  const moduleId = Number(id)
  const module = MODULE_DATA.find((m) => m.id === moduleId)

  const progressPercentage = module
    ? (module.points / module.maxPoints) * 100
    : 0

  if (!module) {
    return <div>Módulo não encontrado</div>
  } else if (module.locked) {
    // TODO: Visão especial.
    return <div>Módulo bloqueado</div>
  }

  return (
    <div>
      <PageActions id={id} />
      <Title order={1} mt="md" mb="md">
        {module.name}
      </Title>
      {/* Possivelmente evoluir a visão da barra de progresso nessa página. */}
      <ProgressBar progressPercentage={progressPercentage} checkSmall />
      {/* Text sempre parece vir com a progressbar, talvez unir? */}
      <Text fz="xs" c="dimmed" mt={4}>
        {`${module.points} / ${module.maxPoints} pontos`}
      </Text>
      <Activities moduleId={moduleId} />
    </div>
  )
}
