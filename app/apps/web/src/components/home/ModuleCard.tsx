import { Box, Button, Card, Group, Stack, Text, Tooltip } from '@mantine/core'
import { BookOpenText, NotebookText, PlayCircle } from 'lucide-react'
import ProgressBar from './ProgressBar'

interface ModuleCardProps {
  id: string | number // Deve vir da estrutura e ser chave pra redirecionar para atividades, etc.
  name: string
  icon?: React.ReactNode
  points: number
  maxPoints: number
  locked: boolean
}

export default function ModuleCard({
  name,
  icon,
  points,
  maxPoints,
  locked
}: ModuleCardProps) {
  const progressPercentage = (points / maxPoints) * 100
  const iconComponent = icon || (
    <BookOpenText
      size={100}
      strokeWidth={1}
      color={locked ? 'gray' : 'black'}
    />
  )

  // TODO: adicionar hook usemediaquery do mantine e fazer atualizações:
  // diminuir espaçamentos/gaps no mobile e mais informações!
  // TODO: Indicativo visual mais forte quando as seções estão bloqueadas.

  return (
    <Card padding="md" radius="sm" withBorder>
      <Group justify="space-between" align="center" gap="lg" wrap="nowrap">
        <Box pos="relative">{iconComponent}</Box>
        <Box w="100%">
          <Text fw={500} fz="lg">
            {name}
          </Text>
          <Group gap="xs" align="center" w="100%">
            <ProgressBar progressPercentage={progressPercentage} />
          </Group>
          <Text
            fz="xs"
            c="dimmed"
            mt={4}
          >{`${points} / ${maxPoints} pontos`}</Text>
        </Box>
        <Stack gap="xs">
          <Tooltip label="Jogar" disabled={locked}>
            <Button
              variant="filled"
              size="lg"
              radius="xl"
              disabled={locked}
              px="sm"
            >
              <PlayCircle />
            </Button>
          </Tooltip>
          <Tooltip label="Saiba mais">
            <Button variant="light" size="lg" radius="xl" px="sm">
              <NotebookText />
            </Button>
          </Tooltip>
        </Stack>
      </Group>
    </Card>
  )
}
