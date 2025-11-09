import { useConfetti } from '@/hooks/useConfetti'
import {
  type Activity,
  type ActivityFeedbackStatus,
  type MatchingData,
  type MatchingPair
} from '@/types/api'
import { Accordion, Alert, Card, Grid, Stack, Text } from '@mantine/core'
import cx from 'clsx'
import { ListChecks, PlugZap } from 'lucide-react'
import { useEffect, useState } from 'react'
import ActivityControls from './ActivityControls'
import classes from './style.module.css'

interface MatchingViewProps {
  activity: Activity
  goToNextActivity?: () => void
  goToPreviousActivity?: () => void
  onSubmit: (pairs: MatchingPair[]) => void
  status: ActivityFeedbackStatus
  resetStatus: () => void
}

export default function MatchingView(props: MatchingViewProps) {
  const { activity, goToNextActivity, goToPreviousActivity, onSubmit, status } = props
  const { shuffledItems, matchingPairs } = activity.data as MatchingData

  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [correctItems, setCorrectItems] = useState<string[]>(() =>
    status === 'alreadyCorrect' ? shuffledItems : []
  )
  const [isWrong, setIsWrong] = useState(false)

  const isCorrect = status === 'correct' || status === 'alreadyCorrect'

  const handleItemClick = (itemContent: string) => {
    if (isWrong) return

    if (selectedItems.includes(itemContent)) {
      setSelectedItems(selectedItems.filter((item) => item !== itemContent))
      return
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
    // TODO: Algum Loading?
    if (!isCorrect && correctItems.length == shuffledItems.length) {
      onSubmit(matchingPairs)
    }
  }, [correctItems])

  return (
    <>
      <Alert
        icon={<PlugZap />}
        color="blue"
        radius="md"
        variant="light"
        mb="md"
        title={
          <Text size="md" fw={700}>
            Combine cada conceito com sua definição correta tocando nos <i>cards</i>.
          </Text>
        }
      />
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
      <ActivityControls
        status={status}
        onNext={goToNextActivity}
        onPrevious={goToPreviousActivity}
        moduleId={activity.moduleId}
        correctText={<MatchingPairsReview matchingPairs={matchingPairs} />}
      />
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
  const handleClick = isCorrect ? () => {} : onClick
  return (
    <Card
      className={cx(classes['matching-card'], {
        [classes['hover-card']]: !isActive && !isCorrect && !isError,
        [classes['active-matching-card']]: isActive,
        [classes['correct-matching-card']]: isCorrect,
        [classes['error-matching-card']]: isError,
        [classes['shake-animation']]: isError
      })}
      withBorder
      padding="lg"
      radius="lg"
      onClick={handleClick}
    >
      <Text size="md" ta="center">
        {content}
      </Text>
    </Card>
  )
}

function MatchingPairsReview({ matchingPairs }: { matchingPairs: MatchingPair[] }) {
  return (
    <Accordion variant="contained" bg="white" mt="xs">
      <Accordion.Item value={`matching-review-n`}>
        <Accordion.Control icon={<ListChecks color="green" />}>Revisar itens</Accordion.Control>
        <Accordion.Panel>
          <Stack gap={0}>
            {matchingPairs.map((pair) => (
              <Text key={pair.concept} size="sm">
                <strong>{pair.concept}</strong>: {pair.definition}
              </Text>
            ))}
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}
