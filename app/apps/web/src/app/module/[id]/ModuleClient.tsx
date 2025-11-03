'use client'

import Activities from '@/components/module/Activities'
import ProgressBar from '@/components/ui/ProgressBar'
import { useModule } from '@/hooks/useModules'
import { thumbsHappy } from '@/utils/npc/avatar'
import { Box, Card, Image, Loader, Stack, Text, Title } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { useEffect } from 'react'
import PageActions from './PageActions'

export default function ModuleClient({ moduleId }: { moduleId: number }) {
  const { isLoading, data: module, isError, error } = useModule(moduleId)

  if (isLoading) {
    return <Loader />
  }

  if ((isError && error.data?.httpStatus === 404) || !module) {
    return <div>Módulo não encontrado</div>
  } else if (module.locked) {
    // TODO: Visão especial.
    return <div>Módulo bloqueado</div>
  }

  const { previousModuleId, nextModuleId, progressPercentage, points, maxPoints } = module

  useEffect(() => {
    return () => {
      notifications.clean()
    }
  }, [])

  return (
    <div>
      <PageActions
        moduleId={moduleId}
        previousModuleId={previousModuleId}
        nextModuleId={nextModuleId}
        progressPercentage={progressPercentage}
      />
      <Title order={1} mt="md" mb="md">
        {module.name}
      </Title>
      {/* Possivelmente evoluir a visão da barra de progresso nessa página. */}
      {/* Text sempre parece vir com a progressbar, talvez unir? */}

      <ProgressBar progressPercentage={progressPercentage} checkSmall />
      <Text fz="xs" c="dimmed" mt={4}>
        {`${points} / ${maxPoints} pontos`}
      </Text>
      {progressPercentage == 100 && (
        <Card mt="lg" p={0} radius="lg" bg="blue.0" pos="relative" mih={100}>
          <Box p="lg" pr={120} style={{ minHeight: 100 }}>
            <Stack justify="center" align="center" h="100%" style={{ minHeight: 68 }}>
              <Text ff="Outfit, sans-serif" fz="xl" c="blue.9" ta="center">
                Parabéns, você já completou as atividades desse módulo! Que tal ir ao próximo
                módulo?
              </Text>
            </Stack>
          </Box>
          <Image
            src={thumbsHappy.toDataUri()}
            w={100}
            pos="absolute"
            bottom={0}
            right={0}
            style={{ zIndex: 1 }}
          />
        </Card>
      )}
      <Activities moduleId={moduleId} />
    </div>
  )
}
