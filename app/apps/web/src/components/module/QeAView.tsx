import { useConfetti } from '@/hooks/useConfetti'
import type { ActivityFeedbackStatus, QnAActivity } from '@/types/api'
import { Group, Radio, Stack, Text } from '@mantine/core'
import { useState } from 'react'
import ActivityControls from './ActivityControls'
import QuestionTitle from './QuestionTitle'
import classes from './style.module.css'

interface QeAViewProps {
  activity: QnAActivity
  goToNextActivity?: () => void
  onSubmit?: (option: number) => void
}

export default function QeAView(props: QeAViewProps) {
  const { activity, goToNextActivity, onSubmit } = props
  const { question, options, answers } = activity.data
  const [value, setValue] = useState<string | null>(null)
  const [status, setStatus] = useState<ActivityFeedbackStatus>('idle')
  const [answer] = answers

  const checkAnswer = () => {
    setStatus(value === String(answer) ? 'correct' : 'wrong')
    onSubmit?.(Number(value))
  }

  useConfetti(status === 'correct')

  return (
    <>
      <QuestionTitle question={question} />
      <Radio.Group
        value={value as string}
        onChange={setValue}
        description="Escolha uma resposta"
        mt="md"
      >
        <Stack pt="md" gap="xs">
          {options.map(({ id, text }) => (
            <Radio.Card
              className={classes['answer-card']}
              radius="md"
              value={String(id)}
              key={id}
            >
              <Group wrap="nowrap" align="flex-start">
                <Radio.Indicator />
                <div>
                  <Text>{text}</Text>
                </div>
              </Group>
            </Radio.Card>
          ))}
        </Stack>
      </Radio.Group>
      <ActivityControls
        status={status}
        onVerify={checkAnswer}
        onNext={goToNextActivity}
        hasAnswer={!!value}
        moduleId={activity.moduleId}
      />
    </>
  )
}
