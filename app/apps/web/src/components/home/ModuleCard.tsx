import {
  Box,
  Button,
  Card,
  Group,
  Popover,
  Stack,
  Text,
  ThemeIcon,
  Tooltip,
  useMantineTheme
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import {
  BookOpenText,
  LockKeyhole,
  NotebookText,
  PlayCircle
} from 'lucide-react'
import Link from 'next/link'
import ProgressBar from '../ui/ProgressBar'

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
  locked,
  id
}: ModuleCardProps) {
  const theme = useMantineTheme()
  const biggerThanXs = useMediaQuery(`(min-width: ${theme.breakpoints.xs})`)

  const progressPercentage = (points / maxPoints) * 100
  const iconComponent = icon || (
    <BookOpenText
      size={100}
      strokeWidth={1}
      color={locked ? 'gray' : 'black'} // Fazer isso pros dinâmicos também no futuro.
    />
  )

  return (
    <Card padding="md" radius="sm" withBorder>
      <Group
        justify="space-between"
        align="center"
        wrap="nowrap"
        gap={biggerThanXs ? 'lg' : 'xs'}
      >
        <Box pos="relative">{iconComponent}</Box>
        <Box w="100%">
          <Text fw={500} fz="lg" mb={4}>
            {name}
          </Text>
          <Group gap="xs" align="center" w="100%" visibleFrom="xs">
            <ProgressBar progressPercentage={progressPercentage} />
          </Group>
          <Text
            fz="xs"
            c="dimmed"
            mt={4}
            visibleFrom="xs"
          >{`${points} / ${maxPoints} pontos`}</Text>
        </Box>
        <Stack gap="xs">
          <ActionButtons locked={locked} id={id} />
        </Stack>
      </Group>
      <Box hiddenFrom="xs" mt="sm">
        <Group align="center" w="100%">
          <ProgressBar progressPercentage={progressPercentage} small />
        </Group>
        <Text
          fz="xs"
          c="dimmed"
          mt={4}
        >{`${points} / ${maxPoints} pontos`}</Text>
      </Box>
    </Card>
  )
}

const ActionButtons = ({
  locked,
  id
}: {
  locked: boolean
  id: string | number
}) => {
  return (
    <>
      {locked ? (
        <Popover
          width={320}
          position="bottom"
          withArrow
          shadow="md"
          arrowSize={15}
        >
          <Popover.Target>
            <Button
              variant="filled"
              size="lg"
              radius="xl"
              px="sm"
              data-disabled
              style={{ cursor: 'pointer' }}
            >
              <PlayCircle />
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Group justify="center" gap="xs" wrap="nowrap">
              <ThemeIcon
                variant="gradient"
                size="xl"
                aria-label="Gradient action icon"
                gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
              >
                <LockKeyhole />
              </ThemeIcon>
              <Text size="sm" style={{ textAlign: 'center' }}>
                Alcance ao menos <b>70%</b> do módulo anterior para desbloquear
                atividades
              </Text>
            </Group>
          </Popover.Dropdown>
        </Popover>
      ) : (
        <Tooltip label="Jogar">
          <Button
            component={Link}
            href={{
              pathname: `/module/${id}`
            }}
            variant="filled"
            size="lg"
            radius="xl"
            px="sm"
          >
            <PlayCircle />
          </Button>
        </Tooltip>
      )}
      <Tooltip label="Conteúdos">
        <Button variant="light" size="lg" radius="xl" px="sm">
          <NotebookText />
        </Button>
      </Tooltip>
    </>
  )
}
