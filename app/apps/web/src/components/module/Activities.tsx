'use client'

import { ATIVIDADE_BY_MODULE_INDEX_DATA } from '@/app/mockData'
import { ActivityStatus } from '@/types/api'
import { Button, Group, Stack, ThemeIcon, useMantineTheme } from '@mantine/core'
import { CircleCheck, CircleDashed, CircleX } from 'lucide-react'

export default function Activities({ moduleId }: { moduleId: number }) {
  const theme = useMantineTheme()

  const activiesData = ATIVIDADE_BY_MODULE_INDEX_DATA[moduleId]

  if (!activiesData) {
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
      buttonVariant: 'default',
      buttonColor: undefined
    },
    [ActivityStatus.WRONG]: {
      icon: <CircleX />,
      iconColor: 'red',
      buttonVariant: 'light',
      buttonColor: 'red'
    }
  }

  // TODO: tipo uma lista de botoes das atividades.
  // TODO: ícones/etc devem depender do status da atividdade (nao feita, errada, certa, possivelmente o tipo)
  return (
    <Stack mt="lg">
      {activiesData.map(({ name, status }, index) => {
        const { icon, iconColor, buttonVariant, buttonColor } =
          ActivityStyle[status]
        return (
          <Group wrap="nowrap" gap="xs">
            <Button
              justify="start"
              key={index}
              fullWidth
              variant={buttonVariant}
              color={buttonColor}
            >
              {name}
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
