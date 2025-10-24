import { useConfetti } from '@/hooks/useConfetti'
import {
  type Activity,
  type ActivityFeedbackStatus,
  type MatchingData,
  type MatchingPair
} from '@/types/api'
import {
  closestCenter,
  DndContext,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { ActionIcon, Box, Card, Group, Stack, Text } from '@mantine/core'
import { ArrowDown, ArrowRight, ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import ActivityControls from './ActivityControls'

interface MatchingViewProps {
  activity: Activity
  goToNextActivity?: () => void
  onSubmit: (option: number) => void
  status: ActivityFeedbackStatus
  resetStatus: () => void
}

// TODO: Permitir mobile, melhorar UI, testar com backend;

export default function MatchingView(props: MatchingViewProps) {
  const { activity, goToNextActivity, onSubmit, status, resetStatus } = props
  const { concepts, definitions, matchingPairs } = activity.data as MatchingData
  // Dependendo dos dados que vou precisar usar, posso simplificar backend;

  const [value, setValue] = useState<MatchingPair[]>(shuffle(matchingPairs))

  //TODO: Bloquear dnd nesse caso
  //   const isCorrect = status === 'correct' || status === 'alreadyCorrect'

  const checkAnswer = () => onSubmit(Number(value))

  useConfetti(status === 'correct')

  useEffect(() => {
    if (status === 'alreadyCorrect') {
      setValue(matchingPairs)
    }
  }, [status])

  //   useEffect(() => {
  //     if (status === 'wrong') {
  //       resetStatus()
  //     }
  //   }, [value])

  const handleDragEnd = (event: any) => {
    const { active, over } = event
    if (!over || active.id === over.id) return

    const oldIndex = value.findIndex((item) => item.definition === active.id)
    const newIndex = value.findIndex((item) => item.definition === over.id)
    const newValue = arrayMove(value, oldIndex, newIndex)
    setValue(newValue)
  }

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor)
  )

  const handleManualMove = (id: string, direction: 'up' | 'down') => {
    const currentIndex = value.findIndex((item) => item.definition === id)
    let newIndex = currentIndex

    if (direction === 'up' && currentIndex > 0) {
      newIndex = currentIndex - 1
    } else if (direction === 'down' && currentIndex < value.length - 1) {
      newIndex = currentIndex + 1
    } else {
      return // Não faz nada se já estiver no limite
    }

    const newValue = arrayMove(value, currentIndex, newIndex)
    setValue(newValue)
  }

  const conceptMap = matchingPairs.reduce((acc, pair, index) => {
    acc[index] = pair.concept
    return acc
  }, {} as Record<number, string>)

  return (
    <>
      <Text mb="xs">Reordene os itens à direita para corresponder aos itens à esquerda.</Text>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={value.map((pair) => pair.definition)}
          strategy={verticalListSortingStrategy}
        >
          <Stack gap="sm">
            {value.map((pair, index) => {
              const conceptText = conceptMap[index] // Pega o conceito daquela linha (índice)

              return (
                <Group
                  key={pair.definition}
                  align="stretch"
                  wrap="nowrap"
                  style={{ height: 'auto' }}
                >
                  <Card
                    withBorder
                    radius="md"
                    p="sm"
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center'
                    }}
                  >
                    <Text fw={500}>{conceptText}</Text>
                  </Card>

                  <ArrowRight size={18} style={{ alignSelf: 'center' }} />

                  {/* 2. SLOT DA DEFINIÇÃO (ARRÁSTAVEL/ORDENÁVEL) */}
                  <Box style={{ flex: 1 }}>
                    <SortableItem
                      key={pair.definition}
                      id={pair.definition}
                      text={pair.definition}
                      onMove={handleManualMove}
                      isFirst={index === 0}
                      isLast={index === value.length - 1}
                    />
                  </Box>
                </Group>
              )
            })}
          </Stack>
        </SortableContext>
      </DndContext>
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

function SortableItem({ id, text, onMove, isFirst, isLast }: any) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: 10,
    cursor: 'grab',
    height: '100%'
  }

  return (
    <Card
      ref={setNodeRef}
      style={style}
      withBorder
      shadow="sm"
      radius="md"
      p="sm"
      {...attributes}
      {...listeners}
    >
      <Group justify="space-between" wrap="nowrap" align="center">
        <Text ta="center" style={{ flexGrow: 1 }}>
          {text}
        </Text>

        <Stack gap={4}>
          <ActionIcon
            variant="default"
            size="md"
            onClick={() => onMove(id, 'up')}
            disabled={isFirst}
            aria-label={`Mover ${text} para cima`}
            radius="xl"
          >
            <ArrowUp size={16} />
          </ActionIcon>
          <ActionIcon
            variant="default"
            size="md"
            onClick={() => onMove(id, 'down')}
            disabled={isLast}
            aria-label={`Mover ${text} para baixo`}
            radius="xl"
          >
            <ArrowDown size={16} />
          </ActionIcon>
        </Stack>
      </Group>
    </Card>
  )
}

// algoritmo de Fisher–Yates
function shuffle<T>(array: T[]): T[] {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}
