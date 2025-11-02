import { Avatar, Flex, Group, Indicator, Paper, Text, type MantineColor } from '@mantine/core'
import type React from 'react'

//TODO: Mover para tipos?
export interface NPCBubble {
  position?: 'left' | 'right'
  avatarSrc: string
  name: string
  bubbleColor: MantineColor | string
  textColor?: MantineColor | string
  children?: React.ReactNode
  indicator?: React.ReactNode
}

export default function NPCBubble({
  position = 'left',
  avatarSrc,
  name,
  bubbleColor,
  textColor = 'black',
  children,
  indicator
}: NPCBubble) {
  const isLeft = position === 'left'
  const avatarElement = (
    <Avatar src={avatarSrc} alt={`Avatar do NPC ${name}`} radius="lg" size={100} />
  )

  const npcElement = indicator ? (
    <Indicator inline label={indicator} color="transparent" size={24} mr="md">
      {avatarElement}
    </Indicator>
  ) : (
    avatarElement
  )

  const messageContent = (
    <Flex
      direction="column"
      align={isLeft ? 'flex-start' : 'flex-end'}
      flex={1}
      style={{ minWidth: 0 }}
    >
      <Paper
        shadow="xs"
        p="sm"
        radius="lg"
        bg={bubbleColor}
        style={{
          borderBottomLeftRadius: isLeft ? '4px' : 'var(--mantine-radius-lg)',
          borderBottomRightRadius: isLeft ? 'var(--mantine-radius-lg)' : '4px'
        }}
      >
        <Text c={textColor}>{children}</Text>
      </Paper>
    </Flex>
  )

  return (
    <Group
      wrap="nowrap"
      justify={isLeft ? 'flex-start' : 'flex-end'}
      align="center"
      w="100%"
      gap={0}
    >
      {isLeft ? (
        <>
          {npcElement}
          {messageContent}
        </>
      ) : (
        <>
          {messageContent}
          {npcElement}
        </>
      )}
    </Group>
  )
}
