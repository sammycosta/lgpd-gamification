import type { Module } from '@/types/api'
import { Box, Center, rem, Stack, useMantineTheme } from '@mantine/core'
import ModuleCard from './ModuleCard'

interface ModulesListProps {
  modules: Module[]
}

export default function ModulesList({ modules }: ModulesListProps) {
  return (
    <Stack gap={0} align="center">
      {modules.map((module, index) => (
        <Box key={module.id} w="100%">
          <LinePath active={!module.locked} visible={index != 0} />
          <ModuleCard {...module} />
        </Box>
      ))}
    </Stack>
  )
}

const LinePath = ({
  active,
  visible
}: {
  active: boolean
  visible: boolean
}) => {
  const theme = useMantineTheme()
  const lineColor = active ? theme.colors.blue[6] : theme.colors.gray[4]

  if (!visible) return null

  return (
    <Center>
      <Box
        style={{
          width: rem(5),
          backgroundColor: lineColor,
          height: rem(25)
        }}
      />
    </Center>
  )
}
