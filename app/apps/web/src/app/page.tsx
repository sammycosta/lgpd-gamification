'use client'

import { Button, Card, Text } from '@mantine/core'

export default function Home() {
  //   const healthCheck = useQuery(trpc.healthCheck.queryOptions());

  return (
    <>
      <Card shadow="sm" padding="lg">
        <Text size="xl">Bem-vindo à LGPD Gamificada!</Text>
        <Button color="teal">Começar Quiz</Button>
      </Card>
    </>
  )
}
