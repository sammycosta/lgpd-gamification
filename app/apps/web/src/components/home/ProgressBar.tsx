import {
  Box,
  Group,
  Progress,
  useMantineTheme,
  type MantineStyleProp
} from '@mantine/core'
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
    transform: 'translateY(-50%)',
    zIndex: 1
  },
  baseIcon: {
    position: 'absolute',
    transform: 'translateX(-50%)'
  }
}

interface ProgressBarProps {
  progressPercentage: number
}

export default function ProgressBar({ progressPercentage }: ProgressBarProps) {
  return (
    <Box style={styles.wrapper}>
      <Progress.Root size="xl">
        <Progress.Section
          value={Math.min(progressPercentage, 70)}
          color="blue"
          striped
        />
        <Progress.Section
          value={Math.max(0, progressPercentage - 70)}
          color="blue"
          striped
        />
      </Progress.Root>
      <Group style={styles.iconWrapper}>
        <StarGoal type="bronze" progressPercentage={progressPercentage} />
        <StarGoal type="silver" progressPercentage={progressPercentage} />
        <StarGoal type="gold" progressPercentage={progressPercentage} />
      </Group>
    </Box>
  )
}

interface StarGoalProps {
  type: 'bronze' | 'silver' | 'gold'
  progressPercentage: number
}

const StarGoal = (props: StarGoalProps) => {
  const { progressPercentage, type } = props

  const theme = useMantineTheme()

  const percentageGoal = {
    bronze: 70,
    silver: 85,
    gold: 100
  }[type]

  const colors = {
    bronze: theme.colors.orange[5],
    silver: theme.colors.gray[4],
    gold: theme.colors.yellow[4],
    borderAchieved: theme.colors.blue[9],
    border: 'none'
  }

  const colorAchieved =
    progressPercentage >= percentageGoal ? colors.borderAchieved : colors.border

  return (
    <Box style={{ ...styles.baseIcon, left: `${percentageGoal}%` }}>
      <Star size={32} color={colorAchieved} fill={colors[type]} />
    </Box>
  )
}
