// declara o módulo só pra TS saber que ele existe

import { useConfetti } from '@/hooks/useConfetti'
import type { Activity, ActivityFeedbackStatus } from '@/types/api'
import { Alert, Group, Radio, Stack, Text } from '@mantine/core'
import { CircleQuestionMark } from 'lucide-react'
import { useState } from 'react'
import ActivityControls from './ActivityControls'
import classes from './style.module.css'

interface QeAViewProps {
  activity: Activity
  goToNextActivity?: () => void
  onSubmit?: (option: number) => void
}

export default function QeAView({ activity, goToNextActivity }: QeAViewProps) {
  const { question, options, answer, isMultiple } = activity.data
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [status, setStatus] = useState<ActivityFeedbackStatus>('idle')

  const checkAnswer = () => {
    if (selectedOption === String(answer)) {
      setStatus('correct')
    } else {
      setStatus('wrong')
    }
    //TODO: OnSubmit
  }

  useConfetti(status === 'correct')

  return (
    <>
      <Alert
        icon={<CircleQuestionMark />}
        color="blue"
        radius="md"
        variant="light"
        title={
          <Text size="md" fw={700}>
            {question}
          </Text>
        }
      />
      <Radio.Group
        value={selectedOption}
        onChange={setSelectedOption}
        description="Escolha uma resposta" // Depois possivelmente especializar isso para casos de múltipla resposta
        mt="md"
      >
        <Stack pt="md" gap="xs">
          {options.map(({ id, text }) => (
            <Radio.Card
              className={classes['radio-card']}
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
        hasAnswer={!!selectedOption}
      />
    </>
  )
}
