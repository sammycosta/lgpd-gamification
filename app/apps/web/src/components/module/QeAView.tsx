import { useConfetti } from '@/hooks/useConfetti'
import { type ActivityFeedbackStatus, type QnAActivity } from '@/types/api'
import { Group, Radio, Stack, Text } from '@mantine/core'
import cx from 'clsx'
import { useEffect, useState } from 'react'
import ActivityControls from './ActivityControls'
import QuestionTitle from './QuestionTitle'
import classes from './style.module.css'

interface QeAViewProps {
  activity: QnAActivity
  goToNextActivity?: () => void
  onSubmit: (option: number) => void
  status: ActivityFeedbackStatus
  resetStatus: () => void
}

export default function QeAView(props: QeAViewProps) {
  const { activity, goToNextActivity, onSubmit, status, resetStatus } = props
  const { question, options, answers } = activity.data

  const [value, setValue] = useState<string | null>(null)
  const [wrongValue, setWrongValue] = useState<string | null>(null)

  const isCorrect = status === 'correct' || status === 'alreadyCorrect'
  const isWrong = status === 'wrong'

  const checkAnswer = () => onSubmit(Number(value))

  useConfetti(status === 'correct')

  useEffect(() => {
    if (status === 'alreadyCorrect') {
      setValue(String(answers[0]))
    } else if (isWrong) {
      setWrongValue(value)
    }
  }, [status])

  useEffect(() => {
    if (isWrong && wrongValue != null) {
      resetStatus()
    }
  }, [value])

  return (
    <>
      <QuestionTitle question={question} />
      <Radio.Group
        value={value as string}
        onChange={setValue}
        description="Escolha uma resposta"
        mt="md"
        readOnly={isCorrect}
      >
        <Stack pt="md" gap="xs">
          {options.map(({ id, text }) => (
            <Radio.Card
              className={cx(classes['answer-card'], {
                [classes['correct-state']]: isCorrect,
                [classes['hover-card']]: !isCorrect,
                [classes['wrong-state']]: String(id) === wrongValue
              })}
              radius="md"
              value={String(id)}
              key={id}
            >
              <Group wrap="nowrap" align="flex-start">
                <Radio.Indicator disabled={isCorrect} />
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
