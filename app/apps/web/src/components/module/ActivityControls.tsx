import type { ActivityFeedbackStatus } from '@/types/api'
import { Alert, Button, Group } from '@mantine/core'
import { CircleCheck } from 'lucide-react'

interface ActivityControlsProps {
  status: ActivityFeedbackStatus
  onNext?: () => void
  onVerify: () => void
  hasAnswer: boolean
}

export default function ActivityControls(props: ActivityControlsProps) {
  const { status, onNext, onVerify, hasAnswer } = props
  return (
    <>
      {status === 'correct' && (
        <Alert mt="md" color="green" icon={<CircleCheck />} title="Correto!">
          Excelente! Você acertou.
        </Alert>
      )}
      {status === 'wrong' && (
        <Alert mt="md" color="red" icon={<CircleCheck />} title="Incorreto">
          Não foi dessa vez. Tente novamente!
        </Alert>
      )}
      <Group mt="md" justify="flex-end" gap="sm">
        {(status === 'idle' || status === 'wrong') && (
          <>
            <Button variant="transparent" onClick={onNext}>
              Pular
            </Button>
            <Button onClick={onVerify} disabled={!hasAnswer}>
              Verificar
            </Button>
          </>
        )}
        {status === 'correct' && <Button onClick={onNext}>Continuar</Button>}
      </Group>
    </>
  )
}
