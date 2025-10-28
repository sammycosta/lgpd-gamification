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
  useMantineTheme,
  type MantineTheme
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import {
  Book,
  Database,
  FolderSearch,
  LockKeyhole,
  NotebookText,
  PlayCircle,
  Repeat,
  Scale,
  Settings,
  ShieldUser
} from 'lucide-react'
import Link from 'next/link'
import ProgressBar from '../ui/ProgressBar'

interface ModuleCardProps {
  id: number
  name: string
  points: number
  maxPoints: number
  locked: boolean
  progressPercentage: number
}

export default function ModuleCard({
  id,
  name,
  points,
  maxPoints,
  locked,
  progressPercentage
}: ModuleCardProps) {
  const theme = useMantineTheme()
  const biggerThanXs = useMediaQuery(`(min-width: ${theme.breakpoints.xs})`)

  const iconProps = moduleIconProps(theme)[id]

  return (
    <Card padding="md" radius="lg" withBorder>
      <Group justify="space-between" align="center" wrap="nowrap" gap={biggerThanXs ? 'lg' : 'xs'}>
        <Box>
          <ThemeIcon
            h={100}
            w={100}
            color={locked ? theme.colors.gray[6] : iconProps.color}
            radius="lg"
          >
            <iconProps.icon size={85} color="white" strokeWidth={1} />
          </ThemeIcon>
        </Box>
        <Box w="100%">
          <Text fw={500} ff="Outfit, sans-serif" fz={{ base: 'lg', sm: 'xl' }} mb={4}>
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
          <ProgressBar progressPercentage={progressPercentage} checkSmall />
        </Group>
        <Text fz="xs" c="dimmed" mt={4}>{`${points} / ${maxPoints} pontos`}</Text>
      </Box>
    </Card>
  )
}

const ActionButtons = ({ locked, id }: { locked: boolean; id: string | number }) => {
  return (
    <>
      {locked ? (
        <Popover width={320} position="bottom" withArrow shadow="md" arrowSize={15}>
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
                Alcance ao menos <b>70%</b> do módulo anterior para desbloquear atividades
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
            aria-label="Jogar"
          >
            <PlayCircle />
          </Button>
        </Tooltip>
      )}
      <Tooltip label="Acessar materiais de apoio">
        <Button
          component={Link}
          href={{
            pathname: `/resources/${id}`
          }}
          variant="light"
          size="lg"
          radius="xl"
          px="sm"
          aria-label="Acessar materiais de apoio"
        >
          <NotebookText />
        </Button>
      </Tooltip>
    </>
  )
}

// TODO: Mover
export const moduleIconProps = (theme: MantineTheme): Record<number, any> => ({
  1: {
    icon: ShieldUser, // Introdução à LGPD
    color: theme.colors.green[4]
  },
  2: {
    icon: Book, // Conceitos Básicos
    color: theme.colors.blue[4]
  },
  3: {
    icon: Settings, // Operações de Tratamento
    color: theme.colors.orange[4]
  },
  4: {
    icon: Scale, // Princípios de Tratamento
    color: theme.colors.violet[4]
  },
  5: {
    icon: FolderSearch, // Inventário de Dados I
    color: theme.colors.teal[4]
  },
  6: {
    icon: Database, // Inventário de Dados II
    color: theme.colors.cyan[4]
  },
  7: {
    icon: Repeat, // Ciclo de Vida do Dado
    color: theme.colors.grape[4]
  }
})
