import { Box, Card, Group, ThemeIcon, type MantineColor, type MantineSpacing } from '@mantine/core'
import { type LucideProps } from 'lucide-react'
import type { ComponentType, ReactNode } from 'react'

interface DefinitionBox {
  title: string
  icon?: ComponentType<LucideProps>
  color?: MantineColor | string
  children: ReactNode
  mt?: MantineSpacing
}

export default function DefinitionBox(props: DefinitionBox) {
  const { title, icon: Icon, color, children, mt } = props

  return (
    <Card bg="gray.0" radius="sm" mb="xs" p="xs" mt={mt}>
      <Group gap={0} align="flex-start" wrap="nowrap">
        {Icon && (
          <ThemeIcon color={color} variant="light" size="md" mr="xs">
            <Icon size={20} />
          </ThemeIcon>
        )}
        <Box mt={2}>
          <strong>{title}: </strong> {children}
        </Box>
      </Group>
    </Card>
  )
}
