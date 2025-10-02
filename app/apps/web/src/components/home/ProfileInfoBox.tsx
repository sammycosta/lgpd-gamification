import { useUserInfo } from '@/hooks/useUserInfo'
import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Card,
  Group,
  Progress,
  Skeleton,
  Stack,
  Text,
  ThemeIcon,
  Tooltip
} from '@mantine/core'
import { CircleStar, Star } from 'lucide-react'

export default function ProfileInfoBox({ small }: { small?: boolean }) {
  const { data: user, isLoading } = useUserInfo(1)

  // TODO: possivelmente melhorar isso aqui
  if (isLoading) {
    return (
      <>
        <Skeleton height={50} circle mb="xl" />
        <Skeleton height={8} radius="xl" />
        <Skeleton height={8} mt={6} radius="xl" />
        <Skeleton height={8} mt={6} width="70%" radius="xl" />
      </>
    )
  }

  if (!user) return null

  const {
    name,
    title,
    avatarPath,
    level,
    points,
    badges,
    badgeCount,
    progressPercent,
    requiredPointsToNextLevel
  } = user

  const badgeColor = (type: string) =>
    type === 'gold' ? 'yellow' : type === 'silver' ? 'gray' : 'orange'

  if (small) {
    return (
      <Stack gap="sm" p="xs">
        <Group justify="space-between" wrap="nowrap">
          <Group gap="sm" wrap="nowrap">
            <Avatar
              src={`/${avatarPath}`}
              alt="Avatar do usuário"
              size={64}
              radius="xl"
            />
            <Stack gap={0}>
              <Text fw={700} fz="lg">
                {name}
              </Text>
              <TitleBadge title={title} small />
            </Stack>
          </Group>
          <Stack gap={0} align="flex-end">
            <Text fz="xs" c="dimmed" tt="uppercase">
              Nível
            </Text>
            <Text fw={700} fz="xl" c="blue.7">
              {level}
            </Text>
          </Stack>
        </Group>
        <LevelProgress
          points={points}
          progressPercent={progressPercent}
          progressToNextLevel={requiredPointsToNextLevel}
          small
        />
        {/* TODO: Melhorar responsividade das badges */}
        <Group gap="xs" wrap="nowrap">
          {badges?.slice(0, 4).map((badge, index) => (
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
          {badgeCount > 4 && (
            <Tooltip label={`+${badgeCount - 4} emblemas`}>
              <ActionIcon size={40} radius="xl" variant="light" color="gray">
                +{badgeCount - 4}
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
          src={`/${avatarPath}`}
          alt="Avatar do usuário"
          size={120}
          radius="xl"
        />
        <Text fw={700} fz="xl">
          {name}
        </Text>
        <TitleBadge title={title} />
      </Stack>
      <Card withBorder>
        <Stack gap="lg">
          <Text fw={600} fz="lg" c="dimmed">
            Progresso
          </Text>
          <Group justify="space-between" align="flex-end" wrap="nowrap">
            <Text fw={700} fz={48} c="blue.7" lh={1}>
              {level}
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
            points={points}
            progressPercent={progressPercent}
            progressToNextLevel={requiredPointsToNextLevel}
          />
        </Stack>
      </Card>

      {/* TODO: Melhorar visualização quando dados forem dinâmicos. Melhorar responsividade. */}
      <Card withBorder mt="lg">
        <Stack gap="lg">
          <Text fw={600} fz="lg" c="dimmed">
            Emblemas ({badgeCount})
          </Text>

          <Group gap="sm">
            {badges?.map((badge, index) => {
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
