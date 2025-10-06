'use client'

import { useActivities } from '@/hooks/useActivities'
import { ActivityStatus, type Activity } from '@/types/api'
import { Button, Group, Loader, Stack, ThemeIcon, useMantineTheme } from '@mantine/core'
import { CircleCheck, CircleDashed, CircleX } from 'lucide-react'
import { useState } from 'react'
import ActivityForm from './ActivityForm'

interface ActivitiesProps {
  moduleId: number
}

export default function Activities({ moduleId }: ActivitiesProps) {
  const { isLoading, data: activities } = useActivities(1, moduleId)
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null)
  const theme = useMantineTheme()

  if (isLoading) {
    return <Loader />
  } else if (!activities || activities.length == 0) {
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
    return <ActivityForm activity={selectedActivity} closeForm={() => setSelectedActivity(null)} />
  }

  return (
    <Stack mt="lg">
      {activities.map((activity, index) => {
        const { icon, iconColor, buttonVariant, buttonColor } = ActivityStyle[activity.status]

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
