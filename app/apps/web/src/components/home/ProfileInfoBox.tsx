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
  Tooltip
} from '@mantine/core'
import { CircleStar, Star } from 'lucide-react'

export default function ProfileInfoBox() {
  const user = userDefault // Atualmente: dados e informações mockadas
  const requiredPointsForNextLevel = 2500 // Exemplo para o cálculo da barra
  const progressPercent = Math.min(
    100,
    (user.points / requiredPointsForNextLevel) * 100
  )

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
        <Badge
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
          size="lg"
          radius="xl"
          leftSection={<Star size={14} />}
          tt="uppercase"
          fw={700}
        >
          {user.title}
        </Badge>
      </Stack>

      <Card withBorder>
        <Stack gap="lg">
          <Text fw={600} fz="lg" c="dimmed">
            Progresso
          </Text>

          {/* A. NÍVEL */}
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

          <Stack gap={0}>
            <Group justify="space-between">
              <Text fz="sm" fw={500} c="dimmed">
                {user.points} XP
              </Text>
              <Text fz="sm" fw={500} c="dimmed">
                {user.progressToNextLevel} XP
              </Text>
            </Group>
            <Progress
              value={progressPercent}
              color="blue"
              size="xl"
              radius="sm"
            />
          </Stack>
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
              const color =
                badge.type === 'gold'
                  ? 'yellow'
                  : badge.type === 'silver'
                  ? 'gray'
                  : 'orange'
              const title =
                badge.type.charAt(0).toUpperCase() + badge.type.slice(1)

              return (
                <Tooltip
                  key={index}
                  label={`Módulo ${badge.moduleId}: ${title}`}
                  withArrow
                >
                  <Stack align="center" gap={4} w={70}>
                    <ActionIcon
                      size={64}
                      radius="xl"
                      variant="light"
                      color={color}
                    >
                      <CircleStar size={48} />
                    </ActionIcon>
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
