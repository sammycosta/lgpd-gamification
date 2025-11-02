import { Card, Group, ThemeIcon, type MantineColor } from '@mantine/core'
import type { LucideProps } from 'lucide-react'
import type { ComponentType, ReactNode } from 'react'

interface DefinitionBox {
  title: string
  icon: ComponentType<LucideProps>
  color?: MantineColor | string
  children: ReactNode
}

export default function DefinitionBox(props: DefinitionBox) {
  const { title, icon: Icon, color, children } = props

  return (
    <Card bg="gray.0" radius="sm" mb="xs" p="xs">
      <Group gap={0} align="center">
        <ThemeIcon color={color} variant="light" size="md" mr="xs">
          <Icon size={20} />
        </ThemeIcon>
        <strong>{title}:&ensp;</strong>
        {children}
      </Group>
    </Card>
  )
}
