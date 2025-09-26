'use client'

import { ATIVIDADE_BY_MODULE_INDEX_DATA } from '@/app/mockData'
import { ActivityStatus, ActivityType, type Activity } from '@/types/api'
import {
  Button,
  Card,
  CloseButton,
  Flex,
  Group,
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
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null
  )
  const theme = useMantineTheme()

  const activiesData = ATIVIDADE_BY_MODULE_INDEX_DATA[moduleId]

  if (!activiesData) {
    //TODO: Fazer visão bonita.
    return <div>Sem atividades para esse módulo por enquanto!</div>
  }

  const ActivityStyle = {
    [ActivityStatus.RIGHT]: {
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
      {activiesData.map((activity, index) => {
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
    case ActivityType.QEA:
      return <QeAView activity={activity} /> //Ver depois de passar só data
    case ActivityType.QEAMultiple:
      return <QeAMultipleView activity={activity} />
    default:
      return <div>invalid type</div>
  }
}
