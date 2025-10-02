'use client'

import ModulesList from '@/components/home/ModulesList'
import ProfileInfoBox from '@/components/home/ProfileInfoBox'
import { useModules } from '@/hooks/useModules'
import { Box, Grid, GridCol, Loader, Stack } from '@mantine/core'

export default function Home() {
  const { isLoading, data: modules } = useModules(1)

  if (isLoading) {
    return <Loader />
  } else if (!modules) {
    return null // Não deve acontecer
  }

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
