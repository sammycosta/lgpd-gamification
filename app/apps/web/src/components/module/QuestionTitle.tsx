import { Alert, Text } from '@mantine/core'
import { CircleQuestionMark } from 'lucide-react'

export default function QuestionTitle({ question }: { question: string }) {
  return (
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
  )
}
