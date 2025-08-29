import {
  Box,
  Button,
  Card,
  Group,
  Progress,
  Stack,
  Text,
  Tooltip
} from '@mantine/core'
import { BookOpenText, NotebookText, PlayCircle } from 'lucide-react'

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
  const iconComponent = icon || <BookOpenText size={100} strokeWidth={1} />

  return (
    <Card padding="md" radius="sm" withBorder>
      <Group justify="space-between" align="center" gap="lg" wrap="nowrap">
        <Box pos="relative">{iconComponent}</Box>
        <Box w="100%">
          <Text fw={500} fz="lg">
            {name}
          </Text>
          <Group gap="xs" align="center" w="100%">
            <Box style={{ flex: 1 }}>
              <Progress value={progressPercentage} size="md" radius="sm" />
            </Box>
            <Text fz="sm" fw={500}>{`${Math.round(progressPercentage)}%`}</Text>
          </Group>
          <Text
            fz="xs"
            c="dimmed"
            mt={4}
          >{`${points} / ${maxPoints} pontos`}</Text>
        </Box>
        <Stack gap="xs">
          <Tooltip label={locked ? 'Complete as seções anteriores!' : 'Jogar'}>
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
