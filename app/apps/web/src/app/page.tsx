'use client'

import ModulesList from '@/components/home/ModulesList'
import ProfileInfoBox from '@/components/home/ProfileInfoBox'
import { Box, Grid, GridCol, Stack } from '@mantine/core'
import { useState } from 'react'
import { MODULE_DATA } from './mockData'

export default function Home() {
  const [modules, setModules] = useState(MODULE_DATA)

  // TODO: Verificar possibilidade da tela maior ficar por mais tempo (breakpoint sm)
  return (
    <>
      <Box hiddenFrom="md">
        <Stack gap="md">
          <ProfileInfoBox small />
          <ModulesList modules={modules} />
        </Stack>
      </Box>
      <Box visibleFrom="md">
        <Grid gutter="xl">
          <GridCol span={{ base: 12, md: 8 }}>
            <ModulesList modules={modules} />
          </GridCol>
          <GridCol span={{ base: 12, md: 4 }}>
            <Box pos="sticky" top={92}>
              <ProfileInfoBox />
            </Box>
          </GridCol>
        </Grid>
      </Box>
    </>
  )
}
