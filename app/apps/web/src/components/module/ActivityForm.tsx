import { ActivityType, type Activity } from '@/types/api'
import { trpc } from '@/utils/trpc'
import { Card, CloseButton, Flex } from '@mantine/core'
import { useMutation } from '@tanstack/react-query'
import QeAMultipleView from './QeAMultipleView'
import QeAView from './QeAView'

interface ActivityFormProps {
  activity: Activity
  closeForm: () => void
}
export default function ActivityForm(props: ActivityFormProps) {
  const { activity, closeForm } = props

  const submitMutation = useMutation(
    trpc.activity.submitResult.mutationOptions({
      onSuccess: (data) => {
        // Opcional: Lógica após sucesso (ex: mostrar notificação)
        console.log('Resultado enviado com sucesso!', data)

        // Opcional: Invalide os dados de queries relacionados (ex: progresso do módulo)
        // client.invalidateQueries(['activityRouter', 'getActivities']);
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
      activityId: activity.id,
      answer
    })

  return (
    <Card mt="lg" radius="md" withBorder>
      <Card.Section>
        <Flex justify="flex-end">
          <CloseButton aria-label="Fechar atividade" onClick={closeForm} />
        </Flex>
      </Card.Section>
      <ActivityContentSwitch activity={activity} />
    </Card>
  )
}

const ActivityContentSwitch = ({ activity }: { activity: Activity }) => {
  switch (activity.type) {
    case ActivityType.QNA:
      // Ver depois se é possível passar só data.
      return activity.data.isMultiple ? (
        <QeAMultipleView activity={activity} />
      ) : (
        <QeAView activity={activity} />
      )
    default:
      return <div>invalid type</div>
  }
}
