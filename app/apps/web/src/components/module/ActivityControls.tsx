import type { ActivityFeedbackStatus } from '@/types/api'
import { Alert, Anchor, Button, Group, Text } from '@mantine/core'
import { CircleCheck, CircleX } from 'lucide-react'
import Link from 'next/link'

interface ActivityControlsProps {
  status: ActivityFeedbackStatus
  onNext?: () => void
  onVerify: () => void
  hasAnswer: boolean
  moduleId: number
}

export default function ActivityControls(props: ActivityControlsProps) {
  const { status, onNext, onVerify, hasAnswer, moduleId } = props

  const isCorrect = status === 'correct' || status === 'alreadyCorrect'

  return (
    <>
      {isCorrect && (
        <Alert mt="md" color="green" icon={<CircleCheck />} title="Correto!">
          Excelente! Você acertou.
        </Alert>
      )}
      {status === 'wrong' && (
        <Alert mt="md" color="red" icon={<CircleX />} title="Incorreto">
          Não foi dessa vez. Tente novamente!
          <Text fz="sm">
            Você pode consultar os&nbsp;
            <Anchor component={Link} href={{ pathname: `/resources/${moduleId}` }} fz="sm" fw={600}>
              materiais de apoio
            </Anchor>
            .
          </Text>
        </Alert>
      )}
      <Group mt="md" justify="flex-end" gap="sm">
        {(status === 'idle' || status === 'wrong') && (
          <>
            {onNext && (
              <Button variant="transparent" onClick={onNext}>
                Pular
              </Button>
            )}
            <Button onClick={onVerify} disabled={!hasAnswer}>
              Verificar
            </Button>
          </>
        )}
        {isCorrect && onNext && <Button onClick={onNext}>Continuar</Button>}
      </Group>
    </>
  )
}
