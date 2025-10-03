'use client'

import { useActivities } from '@/hooks/useActivities'
import { ActivityStatus, ActivityType, type Activity } from '@/types/api'
import {
  Button,
  Card,
  CloseButton,
  Flex,
  Group,
  Loader,
  Stack,
  ThemeIcon,
  useMantineTheme
} from '@mantine/core'
import { CircleCheck, CircleDashed, CircleX } from 'lucide-react'
import { useState } from 'react'
import QeAMultipleView from './QeAMultipleView'
import QeAView from './QeAView'

interface ActivitiesProps {
  moduleId: number
}

export default function Activities({ moduleId }: ActivitiesProps) {
  const { isLoading, data: activities } = useActivities(1, moduleId)
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null
  )
  const theme = useMantineTheme()

  if (isLoading) {
    return <Loader />
  } else if (!activities) {
    return <div>Sem atividades para esse módulo por enquanto!</div>
  }

  const ActivityStyle = {
    [ActivityStatus.CORRECT]: {
      icon: <CircleCheck />,
      iconColor: 'green',
      buttonVariant: 'light',
      buttonColor: 'green'
    },
    [ActivityStatus.TODO]: {
      icon: <CircleDashed />,
      iconColor: theme.colors.gray[4],
      buttonVariant: 'light',
      buttonColor: 'gray'
    },
    [ActivityStatus.WRONG]: {
      icon: <CircleX />,
      iconColor: 'red',
      buttonVariant: 'light',
      buttonColor: 'red'
    }
  }

  if (selectedActivity) {
    return (
      <Card mt="lg" radius="md" withBorder>
        <Card.Section>
          <Flex justify="flex-end">
            <CloseButton
              aria-label="Fechar atividade"
              onClick={() => setSelectedActivity(null)}
            />
          </Flex>
        </Card.Section>
        <ActivityContentSwitch activity={selectedActivity} />
      </Card>
    )
  }

  return (
    <Stack mt="lg">
      {activities.map((activity, index) => {
        const { icon, iconColor, buttonVariant, buttonColor } =
          ActivityStyle[activity.status]

        const onClick = () => setSelectedActivity(activity)

        return (
          <Group wrap="nowrap" gap="xs" key={index}>
            <Button
              justify="start"
              key={index}
              fullWidth
              variant={buttonVariant}
              color={buttonColor}
              onClick={onClick}
            >
              {activity.name}
            </Button>
            <ThemeIcon radius="xl" color={iconColor} size={30}>
              {icon}
            </ThemeIcon>
          </Group>
        )
      })}
    </Stack>
  )
}

const ActivityContentSwitch = ({ activity }: { activity: Activity }) => {
  switch (activity.type) {
    case ActivityType.QNA:
      // Ver depois se é possível passar só data.
      return activity.data.isMultiple ? (
        <QeAMultipleView activity={activity} />
      ) : (
        <QeAView activity={activity} />
      )
    default:
      return <div>invalid type</div>
  }
}
