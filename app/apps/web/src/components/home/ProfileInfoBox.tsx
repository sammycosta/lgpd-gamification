import { userDefault } from '@/app/mockUser'
import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Card,
  Group,
  Progress,
  Stack,
  Text,
  ThemeIcon,
  Tooltip
} from '@mantine/core'
import { CircleStar, Star } from 'lucide-react'

export default function ProfileInfoBox({ small }: { small?: boolean }) {
  const user = userDefault // Atualmente: dados e informações mockadas
  const requiredPointsForNextLevel = 2500 // Exemplo para o cálculo da barra
  const progressPercent = Math.min(
    100,
    (user.points / requiredPointsForNextLevel) * 100
  )

  const badgeColor = (type: string) =>
    type === 'gold' ? 'yellow' : type === 'silver' ? 'gray' : 'orange'

  if (small) {
    return (
      <Stack gap="sm" p="xs">
        <Group justify="space-between" wrap="nowrap">
          <Group gap="sm" wrap="nowrap">
            <Avatar
              src={user.avatar}
              alt="Avatar do usuário"
              size={64}
              radius="xl"
            />
            <Stack gap={0}>
              <Text fw={700} fz="lg">
                {user.name}
              </Text>
              <TitleBadge title={user.title} small />
            </Stack>
          </Group>
          <Stack gap={0} align="flex-end">
            <Text fz="xs" c="dimmed" tt="uppercase">
              Nível
            </Text>
            <Text fw={700} fz="xl" c="blue.7">
              {user.level}
            </Text>
          </Stack>
        </Group>
        <LevelProgress
          points={user.points}
          progressPercent={progressPercent}
          progressToNextLevel={requiredPointsForNextLevel}
          small
        />
        {/* TODO: Melhorar responsividade das badges */}
        <Group gap="xs" wrap="nowrap">
          {user.badges?.slice(0, 4).map((badge, index) => (
            <Tooltip key={index} label={`Módulo ${badge.moduleId}`} withArrow>
              <ThemeIcon
                size={40}
                radius="xl"
                variant="light"
                color={badgeColor(badge.type)}
              >
                <CircleStar size={24} />
              </ThemeIcon>
            </Tooltip>
          ))}
          {/* Número limite pode ser dinâmico calculando o espaço da tela? */}
          {user.badges.length > 4 && (
            <Tooltip label={`+${user.badges.length - 4} emblemas`}>
              <ActionIcon size={40} radius="xl" variant="light" color="gray">
                +{user.badges.length - 4}
              </ActionIcon>
            </Tooltip>
          )}
        </Group>
      </Stack>
    )
  }

  return (
    <Box bg="var(--mantine-color-body)">
      <Stack align="center" gap="xs" mb="xl">
        <Avatar
          src={user.avatar}
          alt="Avatar do usuário"
          size={120}
          radius="xl"
        />
        <Text fw={700} fz="xl">
          {user.name}
        </Text>
        <TitleBadge title={user.title} />
      </Stack>
      <Card withBorder>
        <Stack gap="lg">
          <Text fw={600} fz="lg" c="dimmed">
            Progresso
          </Text>
          <Group justify="space-between" align="flex-end" wrap="nowrap">
            <Text fw={700} fz={48} c="blue.7" lh={1}>
              {user.level}
            </Text>
            <Stack gap={0} align="flex-end">
              <Text fw={600} fz="md" c="blue.7">
                NÍVEL ATUAL
              </Text>
              <Text fz="xs" c="dimmed">
                Avance para mais prêmios
              </Text>
            </Stack>
          </Group>
          <LevelProgress
            points={user.points}
            progressPercent={progressPercent}
            progressToNextLevel={requiredPointsForNextLevel}
          />
        </Stack>
      </Card>

      {/* TODO: Melhorar visualização quando dados forem dinâmicos. Melhorar responsividade. */}
      <Card withBorder mt="lg">
        <Stack gap="lg">
          <Text fw={600} fz="lg" c="dimmed">
            Emblemas ({user.badgeCount})
          </Text>

          <Group gap="sm">
            {user.badges?.map((badge, index) => {
              const title =
                badge.type.charAt(0).toUpperCase() + badge.type.slice(1)

              return (
                <Tooltip
                  key={index}
                  label={`Módulo ${badge.moduleId}: ${title}`}
                  withArrow
                >
                  <Stack align="center" gap={4} w={70}>
                    <ThemeIcon
                      size={64}
                      radius="xl"
                      variant="light"
                      color={badgeColor(badge.type)}
                    >
                      <CircleStar size={48} />
                    </ThemeIcon>
                    <Text fz="xs" c="dimmed" ta="center">
                      Módulo {badge.moduleId}
                    </Text>
                  </Stack>
                </Tooltip>
              )
            })}
          </Group>
        </Stack>
      </Card>
    </Box>
  )
}

interface LevelProgressProps {
  points: number
  progressToNextLevel: number
  progressPercent: number
  small?: boolean
}
const LevelProgress = (props: LevelProgressProps) => {
  const { points, progressToNextLevel, progressPercent, small } = props

  const fz = small ? 'xs' : 'sm'
  const size = small ? 'md' : 'xl'

  return (
    <Stack gap={0}>
      <Group justify="space-between">
        <Text fz={fz} fw={500} c="dimmed">
          {points} XP
        </Text>
        <Text fz={fz} fw={500} c="dimmed">
          {progressToNextLevel} XP
        </Text>
      </Group>
      <Progress value={progressPercent} color="blue" size={size} radius="sm" />
    </Stack>
  )
}

interface TitleBadgeProps {
  title: string
  small?: boolean
}
const TitleBadge = ({ title, small }: TitleBadgeProps) => {
  return (
    <Badge
      variant="gradient"
      gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
      size={small ? 'md' : 'lg'}
      radius="xl"
      leftSection={<Star size={small ? 12 : 14} />}
      fw={700}
    >
      {title}
    </Badge>
  )
}
