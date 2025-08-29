'use client'

import ModuleCard from '@/components/home/ModuleCard'
import { Box, Center, rem, Stack, useMantineTheme } from '@mantine/core'
import { useState } from 'react'
import { MODULE_DATA } from './mockData'

export default function Home() {
  const [modules, setModules] = useState(MODULE_DATA)
  const theme = useMantineTheme()

  // TODO: Rever melhoria pra isso, talvez receber dados necessários da estrutura do servidor.
  const firstLockedIndex = modules.findIndex((m) => m.locked)
  const activeStep =
    firstLockedIndex === -1 ? modules.length - 1 : firstLockedIndex - 1

  return (
    <Box maw={theme.breakpoints.sm} mx="auto">
      <Stack gap={0} align="center">
        {modules.map((module, index) => {
          const isCompleted = index <= activeStep
          const lineColor = isCompleted
            ? theme.colors[theme.primaryColor][6]
            : theme.colors.gray[4]

          return (
            <Box key={module.id} w="100%">
              <ModuleCard {...module} />
              {index < modules.length - 1 && (
                <Center>
                  <Box
                    style={{
                      width: rem(3),
                      backgroundColor: lineColor,
                      height: rem(50)
                    }}
                  />
                </Center>
              )}
            </Box>
          )
        })}
      </Stack>
    </Box>
  )
}
