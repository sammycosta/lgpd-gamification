import { invalidateUseModule } from '@/hooks/useModules'
import {
  ActivityStatus,
  ActivityTypes,
  type Activity,
  type ActivityFeedbackStatus,
  type QNAData
} from '@/types/api'
import { trpc } from '@/utils/trpc'
import { Button, Card, Flex } from '@mantine/core'
import { useMutation } from '@tanstack/react-query'
import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import MatchingView from './MatchingView'
import QeAMultipleView from './QeAMultipleView'
import QeAView from './QeAView'

interface ActivityFormProps {
  activity: Activity
  closeForm: () => void
  goToNextActivity?: () => Activity
  setActivitiesInfoChanged: (changed: boolean) => void
}

export default function ActivityForm(props: ActivityFormProps) {
  const { activity, closeForm, goToNextActivity, setActivitiesInfoChanged } = props
  const { id, type, data } = activity

  const [status, setStatus] = useState<ActivityFeedbackStatus>(() =>
    ActivityStatus.CORRECT === activity.status ? 'alreadyCorrect' : 'idle'
  )

  const submitMutation = useMutation(
    trpc.activity.submitResult.mutationOptions({
      onSuccess: (data) => {
        const isCorrect = data.isCorrect
        if (isCorrect) {
          invalidateUseModule(1, activity.moduleId)
        }
        setStatus(isCorrect ? 'correct' : 'wrong')
        setActivitiesInfoChanged(true)
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

  const resetStatus = () => setStatus('idle')

  const ActivityView = (() => {
    switch (type) {
      case ActivityTypes.QNA:
        return (data as QNAData).isMultiple ? QeAMultipleView : QeAView
      case ActivityTypes.MATCHING:
        return MatchingView
    }
  })()

  return (
    <Card mt="lg" radius="lg" withBorder>
      <Flex mb="xs">
        <Button
          onClick={closeForm}
          variant="subtle"
          leftSection={<ArrowLeft size={16} />}
          color="gray"
        >
          Voltar à lista de atividades
        </Button>
      </Flex>
      <ActivityView
        activity={activity}
        onSubmit={handleSubmit}
        status={status}
        goToNextActivity={goToNextActivity}
        resetStatus={resetStatus}
      />
    </Card>
  )
}
