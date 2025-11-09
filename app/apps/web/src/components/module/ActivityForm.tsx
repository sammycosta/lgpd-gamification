import { invalidateUseModule } from '@/hooks/useModules'
import {
  ActivityStatus,
  ActivityTypes,
  type Activity,
  type ActivityFeedbackStatus,
  type QNAData
} from '@/types/api'
import { trpc } from '@/utils/trpc'
import { Avatar, Button, Card, Flex } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { useMutation } from '@tanstack/react-query'
import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import MatchingView from './MatchingView'
import QnAMultipleView from './QnAMultipleView'
import QnAView from './QnAView'
import { notificationByBadgeType, type BadgeNotification } from './model'

interface ActivityFormProps {
  activity: Activity
  closeForm: () => void
  goToNextActivity?: () => Activity
  goToPreviousActivity?: () => Activity
  setActivitiesInfoChanged: (changed: boolean) => void
}

export default function ActivityForm(props: ActivityFormProps) {
  const { activity, closeForm, goToNextActivity, goToPreviousActivity, setActivitiesInfoChanged } =
    props
  const { id, type, data } = activity

  const [status, setStatus] = useState<ActivityFeedbackStatus>(() =>
    ActivityStatus.CORRECT === activity.status ? 'alreadyCorrect' : 'idle'
  )

  const handleShowNotification = (notification: BadgeNotification) => {
    notifications.show({
      title: notification.title,
      message: notification.message,
      icon: <Avatar src={notification.src} />,
      autoClose: false,
      withBorder: true,
      radius: 'lg'
    })
  }

  const submitMutation = useMutation(
    trpc.activity.submitResult.mutationOptions({
      onSuccess: ({ isCorrect, achievedBadge }) => {
        if (isCorrect) {
          invalidateUseModule(activity.moduleId)
        }
        if (achievedBadge) {
          handleShowNotification(notificationByBadgeType[achievedBadge])
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
      activityId: id,
      answer
    })

  const resetStatus = () => setStatus('idle')

  const ActivityView = (() => {
    switch (type) {
      case ActivityTypes.QNA:
        return (data as QNAData).isMultiple ? QnAMultipleView : QnAView
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
        goToPreviousActivity={goToPreviousActivity}
        resetStatus={resetStatus}
      />
    </Card>
  )
}
