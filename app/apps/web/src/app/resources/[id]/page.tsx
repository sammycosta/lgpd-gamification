import { MODULE_DATA } from '@/app/mockData'
import ButtonGoBack from '@/components/ui/ButtonGoBack'
import { Badge, Group, Title } from '@mantine/core'
import { NotebookText } from 'lucide-react'

interface ResourcesPageProps {
  params: Promise<{ id: string }>
}

export default async function ResourcesPage({ params }: ResourcesPageProps) {
  const { id } = await params

  const moduleId = Number(id)
  const module = MODULE_DATA.find((m) => m.id === moduleId)

  if (!module) {
    return <div>Módulo não encontrado</div>
  }

  return (
    <>
      <ButtonGoBack />
      <Group mt="md">
        <Badge
          variant="light"
          size="lg"
          leftSection={<NotebookText size={16} />}
          radius="sm"
        >
          Materiais de Apoio
        </Badge>
      </Group>
      <Title order={1} mb="sm">
        {module.name}
      </Title>
    </>
  )
}
