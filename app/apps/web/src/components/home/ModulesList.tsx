import type { Module } from '@/types/api'
import { Box, Stack } from '@mantine/core'
import ModuleCard from './ModuleCard'

interface ModulesListProps {
  modules: Module[]
}

export default function ModulesList({ modules }: ModulesListProps) {
  return (
    <Stack gap={0} align="center">
      {modules.map((module, index) => (
        <Box key={module.id} w="100%" mb="lg">
          <ModuleCard {...module} />
        </Box>
      ))}
    </Stack>
  )
}
