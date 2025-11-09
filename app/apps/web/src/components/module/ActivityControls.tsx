import type { ActivityFeedbackStatus } from '@/types/api'
import { activityFeedback } from '@/utils/npc/avatar'
import { mapModuleToNpc } from '@/utils/npc/definition'
import { Anchor, Box, Button, Card, Group, Text, ThemeIcon } from '@mantine/core'
import { CircleCheck, CircleX } from 'lucide-react'
import Link from 'next/link'
import { baseNPCBubble } from '../../utils/npc/bubbles'
import NPCBubble from '../resources/NPCBubble'
interface ActivityControlsProps {
  status: ActivityFeedbackStatus
  onNext?: () => void
  onPrevious?: () => void
  onVerify?: () => void
  hasAnswer?: boolean
  moduleId: number
  correctText?: React.ReactNode
}

export default function ActivityControls(props: ActivityControlsProps) {
  const { status, onNext, onPrevious, onVerify, hasAnswer, moduleId, correctText } = props

  const isCorrect = status === 'correct' || status === 'alreadyCorrect'
  const npc = mapModuleToNpc[moduleId]

  return (
    <>
      {isCorrect && (
        <Card bg="green.0" mt="md" p="md">
          <Group justify="space-between">
            <Group gap="xs">
              <ThemeIcon variant="transparent" radius="xl" color="green" size={50}>
                <CircleCheck strokeWidth={2} size={50} />
              </ThemeIcon>
              <Text fw={600} size="lg" c="green.8" ff="Outfit, sans-serif">
                Correto
              </Text>
            </Group>
            <NPCBubble
              avatarSrc={activityFeedback[npc].correct}
              {...baseNPCBubble[npc]}
              position="right"
              w="auto"
            >
              Excelente, continue dando seu melhor!
            </NPCBubble>
          </Group>
          <Box>{correctText && correctText}</Box>
        </Card>
      )}
      {status === 'wrong' && (
        <Card bg="red.0" mt="md" p="md">
          <Group justify="space-between">
            <Group gap="xs">
              <ThemeIcon variant="transparent" radius="xl" color="red" size={50}>
                <CircleX strokeWidth={2} size={50} />
              </ThemeIcon>
              <Text fw={600} size="lg" c="red.8" ff="Outfit, sans-serif">
                Incorreto
              </Text>
            </Group>
            <NPCBubble
              avatarSrc={activityFeedback[npc].wrong}
              {...baseNPCBubble[npc]}
              position="right"
              w="auto"
            >
              Não foi dessa vez. Tente novamente! Você pode consultar os&nbsp;
              <Anchor component={Link} href={{ pathname: `/resources/${moduleId}` }} fw={600}>
                materiais de apoio
              </Anchor>
              .
            </NPCBubble>
          </Group>
        </Card>
      )}
      <Group mt="md" justify="space-between" gap="sm">
        {onPrevious ? (
          <Button variant="transparent" onClick={onPrevious}>
            Voltar
          </Button>
        ) : (
          <Box />
        )}
        <Group justify="flex-end" gap="sm">
          {(status === 'idle' || status === 'wrong') && (
            <>
              {onNext && (
                <Button variant="transparent" onClick={onNext}>
                  Pular
                </Button>
              )}
              {onVerify && (
                <Button onClick={onVerify} disabled={!hasAnswer}>
                  Verificar
                </Button>
              )}
            </>
          )}
          {isCorrect && onNext && <Button onClick={onNext}>Continuar</Button>}
        </Group>
      </Group>
    </>
  )
}
