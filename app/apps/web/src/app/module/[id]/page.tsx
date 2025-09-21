import { MODULE_DATA } from '@/app/mockData'
import Activities from '@/components/module/Activities'
import ProgressBar from '@/components/ui/ProgressBar'
import { Button, Text, Title } from '@mantine/core'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

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
      <Button
        component={Link}
        variant="subtle"
        href="/"
        leftSection={<ArrowLeft size={16} />}
        mb="sm"
      >
        Voltar
      </Button>
      {/* TODO: botão semelhante para o próximo módulo? na direita da página. */}
      <Title order={1} mb="sm">
        {module.name}
      </Title>
      {/* Possivelmente evoluir a visão da barra de progresso nessa página. */}
      <ProgressBar progressPercentage={progressPercentage} />
      <Text fz="xs" c="dimmed" mt={4}>
        {`${module.points} / ${module.maxPoints} pontos`}
      </Text>
      {/* Text sempre parece vir com a progressbar, talvez unir? */}
      <Activities moduleId={moduleId} />
    </div>
  )
}
