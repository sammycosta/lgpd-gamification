import { useConfetti } from '@/hooks/useConfetti'
import type { ActivityFeedbackStatus, QnAActivity } from '@/types/api'
import { Checkbox, Group, Stack, Text } from '@mantine/core'
import { useState } from 'react'
import ActivityControls from './ActivityControls'
import QuestionTitle from './QuestionTitle'
import classes from './style.module.css'

interface QeAMultipleViewProps {
  activity: QnAActivity
  goToNextActivity?: () => void
  onSubmit?: (option: number[]) => void
}

export default function QeAMultipleView(props: QeAMultipleViewProps) {
  const { activity, goToNextActivity, onSubmit } = props
  const { question, options, answers } = activity.data
  const [value, setValue] = useState<string[]>([])
  const [status, setStatus] = useState<ActivityFeedbackStatus>('idle')

  const checkAnswer = () => {
    const isCorrect =
      value.sort().join(',') === answers.map(String).sort().join(',')
    setStatus(isCorrect ? 'correct' : 'wrong')
    onSubmit?.(value.map(Number))
  }

  useConfetti(status === 'correct')

  return (
    <>
      <QuestionTitle question={question} />
      <Checkbox.Group
        value={value as string[]}
        onChange={setValue}
        description="Selecione as respostas corretas"
        mt="md"
      >
        <Stack pt="md" gap="xs">
          {options.map(({ id, text }) => (
            <Checkbox.Card
              className={classes['answer-card']}
              radius="md"
              value={String(id)}
              key={id}
            >
              <Group wrap="nowrap" align="flex-start">
                <Checkbox.Indicator />
                <div>
                  <Text>{text}</Text>
                </div>
              </Group>
            </Checkbox.Card>
          ))}
        </Stack>
      </Checkbox.Group>
      <ActivityControls
        status={status}
        onVerify={checkAnswer}
        onNext={goToNextActivity}
        hasAnswer={value.length > 0}
        moduleId={activity.moduleId}
      />
    </>
  )
}
