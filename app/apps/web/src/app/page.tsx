'use client'

import ModulesList from '@/components/home/ModulesList'
import ProfileInfoBox from '@/components/home/ProfileInfoBox'
import { Box, Grid, GridCol, rem } from '@mantine/core'
import { useState } from 'react'
import { MODULE_DATA } from './mockData'

export default function Home() {
  const [modules, setModules] = useState(MODULE_DATA)

  // TODO: Versão menor do componente de perfil aparece acima da lista de módulos quando passar do breakpoint;
  return (
    <Grid>
      <GridCol span={{ base: 12, md: 8 }}>
        <ModulesList modules={modules} />
      </GridCol>
      <GridCol span={{ base: 12, md: 4 }}>
        <Box pos="sticky" top={rem(92)}>
          <ProfileInfoBox />
        </Box>
      </GridCol>
    </Grid>
  )
}
