import { Button, Group } from '@mantine/core'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ButtonActivity({ moduleId }: { moduleId: number }) {
  return (
    <Group mt="lg" justify="flex-end">
      <Button
        size="md"
        component={Link}
        href={{
          pathname: `/module/${moduleId}`
        }}
        rightSection={<ArrowRight size={16} />}
      >
        Ir para as atividades do módulo
      </Button>
    </Group>
  )
}
