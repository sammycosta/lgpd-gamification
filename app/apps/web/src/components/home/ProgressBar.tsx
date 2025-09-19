import { Box, Group, Progress } from '@mantine/core'
import { BadgePercent, Star } from 'lucide-react'

interface ProgressBarProps {
  progressPercentage: number
}

export default function ProgressBar({ progressPercentage }: ProgressBarProps) {
  return (
    <Box
      style={{
        position: 'relative',
        width: '100%',
        height: 'fit-content'
      }}
    >
      <Progress value={progressPercentage} size="xl" radius="sm" striped />

      <Group
        style={{
          position: 'absolute',
          top: '50%',
          width: '100%',
          transform: 'translateY(-50%)',
          zIndex: 1
        }}
      >
        <Box
          style={{
            position: 'absolute',
            left: '70%',
            transform: 'translateX(-50%)'
          }}
        >
          <BadgePercent size={32} color="white" fill="green" />
        </Box>
        <Box
          style={{
            position: 'absolute',
            left: '100%',
            transform: 'translateX(-50%)'
          }}
        >
          <Star size={32} color="white" fill="gold" />
        </Box>
      </Group>
    </Box>
  )
}
