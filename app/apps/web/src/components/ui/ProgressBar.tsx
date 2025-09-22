'use client'
import {
  Box,
  Group,
  Progress,
  useMantineTheme,
  type MantineStyleProp
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Star } from 'lucide-react'

const styles: Record<string, MantineStyleProp> = {
  wrapper: {
    position: 'relative',
    width: '100%',
    height: 'fit-content'
  },
  iconWrapper: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    zIndex: 1
  },
  baseIcon: {
    position: 'absolute',
    transform: 'translateX(-90%)'
  }
}

interface ProgressBarProps {
  progressPercentage: number
  forceSmall?: boolean
  checkSmall?: boolean
}

export default function ProgressBar({
  progressPercentage,
  forceSmall,
  checkSmall
}: ProgressBarProps) {
  const theme = useMantineTheme()
  const mediaQuerySmall = !useMediaQuery(`(min-width: ${theme.breakpoints.xs})`)
  const small = forceSmall || (checkSmall && mediaQuerySmall)

  return (
    <Box pr="sm" style={styles.wrapper}>
      <Progress size="xl" value={progressPercentage} striped />
      <Group style={styles.iconWrapper}>
        <StarGoal
          type="bronze"
          progressPercentage={progressPercentage}
          small={small}
        />
        <StarGoal
          type="silver"
          progressPercentage={progressPercentage}
          small={small}
        />
        <StarGoal
          type="gold"
          progressPercentage={progressPercentage}
          small={small}
        />
      </Group>
    </Box>
  )
}

interface StarGoalProps {
  type: 'bronze' | 'silver' | 'gold'
  progressPercentage: number
  small?: boolean
}

const StarGoal = (props: StarGoalProps) => {
  const { progressPercentage, type, small } = props

  const theme = useMantineTheme()
  const colors = {
    bronze: theme.colors.orange[5],
    silver: theme.colors.dark[1],
    gold: theme.colors.yellow[5],
    borderAchieved: theme.colors.blue[7],
    border: theme.colors.gray[4]
  }

  const percentageGoal = {
    bronze: 70,
    silver: 85,
    gold: 100
  }[type]

  const achieved = progressPercentage >= percentageGoal

  return (
    <Box style={{ ...styles.baseIcon, left: `${percentageGoal}%` }}>
      <Star
        size={small ? 30 : 40}
        color={achieved ? colors.borderAchieved : colors.border}
        fill={achieved ? colors[type] : theme.colors.gray[3]}
      />
    </Box>
  )
}
