import { Card, Group, Text, type MantineColor, type MantineSpacing } from '@mantine/core'
import type { LucideProps } from 'lucide-react'
import type { ReactNode } from 'react'

interface ConceptBoxProps {
  title: string
  children: ReactNode
  icon: React.ComponentType<LucideProps>
  color?: MantineColor | string
  mt?: MantineSpacing
}

export default function ConceptBox({
  title,
  children,
  icon: Icon,
  color = 'green',
  mt
}: ConceptBoxProps) {
  return (
    <Card bg={`${color}.0`} radius="md" shadow="xs" mt={mt}>
      <Group gap={0} align="center" mb="xs">
        <Icon color={`var(--mantine-color-${color}-9)`} />
        <Text fw={700} mb={0} tt="uppercase" size="sm" ml={8} c={`${color}.9`}>
          {title}
        </Text>
      </Group>
      <span>{children}</span>
    </Card>
  )
}
