import { Card, Group, Text, type MantineColor } from '@mantine/core'
import type { LucideProps } from 'lucide-react'
import type { ReactNode } from 'react'

interface ConceptBoxProps {
  title: string
  children: ReactNode
  icon: React.ComponentType<LucideProps>
  color?: MantineColor | string
}

export default function ConceptBox({
  title,
  children,
  icon: Icon,
  color = 'green'
}: ConceptBoxProps) {
  return (
    <Card bg={`${color}.0`} radius="md" shadow="xs">
      <Group gap={0} align="center" mb={4}>
        <Icon color={`var(--mantine-color-${color}-9)`} />
        <Text fw={700} mb={0} tt="uppercase" size="sm" ml={8} c={`${color}.9`}>
          {title}
        </Text>
      </Group>
      <span>{children}</span>
    </Card>
  )
}
