import { invalidateUseModule } from '@/hooks/useModules'
import { ActivityType, type Activity, type ActivityFeedbackStatus } from '@/types/api'
import { trpc } from '@/utils/trpc'
import { Card, CloseButton, Flex } from '@mantine/core'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { invalidateUseActivities } from '../../hooks/useActivities'
import QeAMultipleView from './QeAMultipleView'
import QeAView from './QeAView'

interface ActivityFormProps {
  activity: Activity
  closeForm: () => void
}
export default function ActivityForm(props: ActivityFormProps) {
  const { activity, closeForm } = props
  const { id, type, data } = activity

  const [status, setStatus] = useState<ActivityFeedbackStatus>('idle')
  const [hasStatusChanged, setHasStatusChanged] = useState(false)

  const submitMutation = useMutation(
    trpc.activity.submitResult.mutationOptions({
      onSuccess: (data) => {
        const isCorrect = data.isCorrect
        if (isCorrect) {
          invalidateUseModule(1, activity.moduleId)
        }
        setStatus(isCorrect ? 'correct' : 'wrong')
        setHasStatusChanged(true)
      },
      onError: (error) => {
        // Opcional: Lógica de erro (ex: mostrar mensagem de erro na tela)
        console.error('Erro ao submeter:', error.message)
      }
    })
  )

  const handleSubmit = (answer: unknown) =>
    submitMutation.mutate({
      userId: 1,
      activityId: id,
      answer
    })

  const handleCloseForm = () => {
    if (hasStatusChanged) {
      invalidateUseActivities(1, activity.moduleId)
    }
    closeForm()
  }

  // Talvez puxar algumas coisas internas dos componente para fora, se se repetirem
  return (
    <Card mt="lg" radius="md" withBorder>
      <Card.Section>
        <Flex justify="flex-end">
          <CloseButton aria-label="Fechar atividade" onClick={handleCloseForm} />
        </Flex>
      </Card.Section>
      {ActivityType.QNA === type && !data.isMultiple && (
        <QeAView activity={activity} onSubmit={handleSubmit} status={status} />
      )}
      {ActivityType.QNA === type && data.isMultiple && (
        <QeAMultipleView activity={activity} onSubmit={handleSubmit} status={status} />
      )}
    </Card>
  )
}
