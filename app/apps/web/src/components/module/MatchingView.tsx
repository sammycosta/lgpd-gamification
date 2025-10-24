import { useConfetti } from '@/hooks/useConfetti'
import {
  type Activity,
  type ActivityFeedbackStatus,
  type MatchingData,
  type MatchingPair
} from '@/types/api'
import { shuffle } from '@/utils/array'
import { Card, Grid, Text } from '@mantine/core'
import cx from 'clsx'
import { useEffect, useMemo, useState } from 'react'
import ActivityControls from './ActivityControls'
import classes from './style.module.css'

interface MatchingViewProps {
  activity: Activity
  goToNextActivity?: () => void
  onSubmit: (pairs: MatchingPair[]) => void
  status: ActivityFeedbackStatus
  resetStatus: () => void
}

// Dependendo dos dados que vou precisar usar, posso simplificar backend;
export default function MatchingView(props: MatchingViewProps) {
  const { activity, goToNextActivity, onSubmit, status, resetStatus } = props
  const { concepts, definitions, matchingPairs } = activity.data as MatchingData

  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [correctItems, setCorrectItems] = useState<string[]>(() =>
    status === 'alreadyCorrect' ? shuffledItems : []
  )
  const [isWrong, setIsWrong] = useState(false)

  const shuffledItems = useMemo(() => shuffle([...concepts, ...definitions]), [])
  const isCorrect = status === 'correct' || status === 'alreadyCorrect'

  const handleItemClick = (itemContent: string) => {
    if (isWrong) return

    if (selectedItems.includes(itemContent)) {
      setSelectedItems(selectedItems.filter((item) => item !== itemContent))
    }

    if (selectedItems.length == 1) {
      const firstItem = selectedItems[0]
      const correctPair = matchingPairs.find(
        ({ concept, definition }) =>
          (firstItem === concept && itemContent === definition) ||
          (itemContent === concept && firstItem === definition)
      )

      if (correctPair != undefined) {
        setCorrectItems((prev) => [...prev, firstItem, itemContent])
        setSelectedItems([])
        return
      } else {
        setIsWrong(true)
        setTimeout(() => {
          setSelectedItems([])
          setIsWrong(false)
        }, 800)
      }
    }

    setSelectedItems((prev) => [...prev, itemContent])
  }

  useConfetti(status === 'correct')

  useEffect(() => {
    if (!isCorrect && correctItems.length == shuffledItems.length) {
      onSubmit(matchingPairs)
    }
  }, [correctItems])

  return (
    <>
      <Grid>
        {shuffledItems.map((item) => {
          const isActive = selectedItems.includes(item)
          const isCorrect = correctItems.includes(item)
          const isError = isWrong && isActive
          return (
            <Grid.Col key={item} span={{ base: 12, xs: 6 }} style={{ display: 'flex' }}>
              <ClickableItem
                content={item}
                onClick={() => handleItemClick(item)}
                isActive={isActive}
                isCorrect={isCorrect}
                isError={isError}
              />
            </Grid.Col>
          )
        })}
      </Grid>

      <ActivityControls status={status} onNext={goToNextActivity} moduleId={activity.moduleId} />
    </>
  )
}

interface ClickableItemProps {
  content: string
  isActive: boolean
  isCorrect: boolean
  isError: boolean
  onClick: () => void
}

function ClickableItem({ content, isActive, isCorrect, isError, onClick }: ClickableItemProps) {
  return (
    <Card
      className={cx(classes['matching-card'], {
        [classes['active-matching-card']]: isActive,
        [classes['hover-card']]: !isActive && !isCorrect && !isError,
        [classes['correct-matching-card']]: isCorrect,
        [classes['error-matching-card']]: isError,
        [classes['shake-animation']]: isError
      })}
      withBorder
      padding="lg"
      radius="md"
      onClick={onClick}
    >
      <Text size="md" ta="center">
        {content}
      </Text>
    </Card>
  )
}
