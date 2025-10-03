'use client'

import Activities from '@/components/module/Activities'
import ProgressBar from '@/components/ui/ProgressBar'
import { useModule } from '@/hooks/useModules'
import { Loader, Text, Title } from '@mantine/core'
import PageActions from './PageActions'

export default function ModuleClient({ moduleId }: { moduleId: number }) {
  const { isLoading, data: module, isError, error } = useModule(1, moduleId)

  if (isLoading) {
    return <Loader />
  }

  if ((isError && error.data?.httpStatus === 404) || !module) {
    return <div>Módulo não encontrado</div>
  } else if (module.locked) {
    // TODO: Visão especial.
    return <div>Módulo bloqueado</div>
  }

  return (
    <div>
      <PageActions id={moduleId} />
      <Title order={1} mt="md" mb="md">
        {module.name}
      </Title>
      {/* Possivelmente evoluir a visão da barra de progresso nessa página. */}
      {/* Text sempre parece vir com a progressbar, talvez unir? */}
      <ProgressBar progressPercentage={module.progressPercentage} checkSmall />
      <Text fz="xs" c="dimmed" mt={4}>
        {`${module.points} / ${module.maxPoints} pontos`}
      </Text>
      <Activities moduleId={moduleId} />
    </div>
  )
}
