import ButtonGoBack from '@/components/ui/ButtonGoBack'
import { Protected } from '@/components/wrapper/Protected'
import { Badge, Group } from '@mantine/core'
import { NotebookText } from 'lucide-react'
import ConceitosBasicosContent from './ConceitosBasicosContent'
import IntroducaoLGPDContent from './IntroducaoLGPDContent'
import OperacoesTratamentoContent from './OperacoesTratamentoContent'

interface ResourcesPageProps {
  params: Promise<{ id: string }>
}

export default async function ResourcesPage({ params }: ResourcesPageProps) {
  const { id } = await params

  const moduleId = Number(id)

  return (
    <Protected>
      <ButtonGoBack />
      <Group mt="md" mb="md">
        <Badge
          variant="light"
          size="lg"
          leftSection={<NotebookText size={16} />}
          radius="sm"
          color="green.9"
        >
          Materiais de Apoio
        </Badge>
      </Group>
      <Content moduleId={moduleId} />
    </Protected>
  )
}

const Content = ({ moduleId }: { moduleId: number }) => {
  switch (moduleId) {
    case 1:
      return <IntroducaoLGPDContent />
    case 2:
      return <ConceitosBasicosContent />
    case 3:
      return <OperacoesTratamentoContent />
    default:
      return <div>Conteúdo não encontrado!</div>
  }
}
