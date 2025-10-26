'use client'

import { invalidateUseActivities, useActivities } from '@/hooks/useActivities'
import { ActivityStatus, type Activity } from '@/types/api'
import { Button, Group, Loader, Stack, ThemeIcon, useMantineTheme } from '@mantine/core'
import { CircleCheck, CircleDashed, CircleX } from 'lucide-react'
import { useState } from 'react'
import ActivityForm from './ActivityForm'

interface ActivitiesProps {
  moduleId: number
}

interface SelectedActivity {
  activity: Activity
  index: number
}

export default function Activities({ moduleId }: ActivitiesProps) {
  const { isLoading, data: activities } = useActivities(1, moduleId)
  const [selectedActivity, setSelectedActivity] = useState<SelectedActivity | null>(null)
  const [activitiesInfoChanged, setActivitiesInfoChanged] = useState(false)

  const theme = useMantineTheme()

  const closeForm = () => {
    if (activitiesInfoChanged) {
      invalidateUseActivities(1, moduleId)
    }
    setSelectedActivity(null)
  }

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
    const { activity, index } = selectedActivity

    const hasNextActivity = index + 1 < activities.length

    const goToNextActivity = hasNextActivity
      ? () => {
          const nextIndex = index + 1
          const nextActivity = activities[nextIndex]
          setSelectedActivity({ activity: nextActivity, index: nextIndex })
          return nextActivity
        }
      : undefined

    return (
      <ActivityForm
        key={activity.id}
        activity={activity}
        closeForm={closeForm}
        goToNextActivity={goToNextActivity}
        setActivitiesInfoChanged={setActivitiesInfoChanged}
      />
    )
  }

  return (
    <Stack mt="lg">
      {activities.map((activity, index) => {
        const { icon, iconColor, buttonVariant, buttonColor } = ActivityStyle[activity.status]

        const onClick = () => setSelectedActivity({ activity, index })

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
