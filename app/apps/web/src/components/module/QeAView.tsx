// declara o módulo só pra TS saber que ele existe

import type { Activity } from '@/types/api'
import { Alert, Button, Group, Radio, Stack, Text } from '@mantine/core'
import { CircleCheck, CircleQuestionMark } from 'lucide-react'
import { useEffect, useState } from 'react'
import classes from './style.module.css'

interface QeAViewProps {
  activity: Activity
  goToNextActivity?: () => void
  onSubmit?: (option: number) => void
}

export default function QeAView({ activity, goToNextActivity }: QeAViewProps) {
  const { question, options, answer } = activity.data
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle')

  const checkAnswer = () => {
    if (selectedOption === String(answer)) {
      setStatus('correct')
    } else {
      setStatus('wrong')
    }
    //TODO: OnSubmit
  }

  //TODO: Possivelmente fazer uma hook personalizada para confetti.
  useEffect(() => {
    if (status === 'correct') {
      const confetti = require('canvas-confetti').default
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { x: 0.5, y: 1 },
        angle: 90,
        gravity: 1.5
      })
    }
  }, [status])

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
      {/* TODO: Provavelmente, esses componentes: referentes a todos os tipos de atividades. */}
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
            <Button variant="transparent" onClick={goToNextActivity}>
              Pular
            </Button>
            <Button onClick={checkAnswer} disabled={!selectedOption}>
              Verificar
            </Button>
          </>
        )}
        {status === 'correct' && (
          <Button onClick={goToNextActivity}>Continuar</Button>
        )}
      </Group>
    </>
  )
}
