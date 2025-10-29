'use client'

import ModulesList from '@/components/home/ModulesList'
import ProfileInfoBox from '@/components/home/ProfileInfoBox'
import { Protected } from '@/components/wrapper/Protected'
import { useModules } from '@/hooks/useModules'
import { Box, Grid, GridCol, Loader, Stack } from '@mantine/core'

export default function Home() {
  return (
    <Protected>
      <HomeContent />
    </Protected>
  )
}

const HomeContent = () => {
  const { isLoading, data: modules } = useModules()

  // TODO: Possibilidade de fazer tratativa para erros da query (único caso onde não teria modules)
  if (isLoading || !modules) {
    return <Loader />
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
