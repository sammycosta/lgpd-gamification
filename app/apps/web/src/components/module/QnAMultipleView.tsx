import { useConfetti } from '@/hooks/useConfetti'
import type { Activity, ActivityFeedbackStatus, QNAData } from '@/types/api'
import { Checkbox, Group, Stack, Text } from '@mantine/core'
import cx from 'clsx'
import { useEffect, useState } from 'react'
import ActivityControls from './ActivityControls'
import QuestionTitle from './QuestionTitle'
import classes from './style.module.css'

interface QnAMultipleViewProps {
  activity: Activity
  goToNextActivity?: () => void
  goToPreviousActivity?: () => void
  onSubmit: (option: number[]) => void
  status: ActivityFeedbackStatus
  resetStatus: () => void
}

export default function QnAMultipleView(props: QnAMultipleViewProps) {
  const { activity, goToNextActivity, goToPreviousActivity, onSubmit, status, resetStatus } = props
  const { question, options, answers } = activity.data as QNAData

  const [value, setValue] = useState<string[]>(() =>
    status === 'alreadyCorrect' ? answers.map(String) : []
  )
  const [wrongValue, setWrongValue] = useState<string[]>([])

  const isCorrect = status === 'correct' || status === 'alreadyCorrect'
  const isWrong = status === 'wrong'

  const checkAnswer = () => onSubmit(value.map(Number))

  useConfetti(status === 'correct')

  useEffect(() => {
    if (isWrong) {
      setWrongValue(value.filter((answer) => !answers.includes(Number(answer))))
    }
  }, [status])

  useEffect(() => {
    if (isWrong && wrongValue.length != 0) {
      resetStatus()
    }
  }, [value])

  return (
    <>
      <QuestionTitle question={question} />
      <Checkbox.Group
        value={value as string[]}
        onChange={setValue}
        description="Selecione as respostas corretas"
        mt="md"
        readOnly={isCorrect}
      >
        <Stack pt="md" gap="xs">
          {options.map(({ id, text }) => (
            <Checkbox.Card
              className={cx(classes['answer-card'], {
                [classes['correct-state']]: isCorrect,
                [classes['hover-card']]: !isCorrect,
                [classes['wrong-state']]: wrongValue.includes(String(id))
              })}
              radius="lg"
              value={String(id)}
              key={id}
            >
              <Group wrap="nowrap" align="flex-start">
                <Checkbox.Indicator disabled={isCorrect} />
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
        onPrevious={goToPreviousActivity}
        hasAnswer={value.length > 0}
        moduleId={activity.moduleId}
      />
    </>
  )
}
