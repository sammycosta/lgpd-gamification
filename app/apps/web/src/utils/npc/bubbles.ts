import type { NPCBubble } from '@/components/resources/NPCBubble'
import { adventurer } from '@dicebear/collection'
import { createAvatar } from '@dicebear/core'
import { jadeBaseVisual, jessicaBaseVisual, oliverBaseVisual } from './visual'

const jadeBubble = createAvatar(adventurer, {
  ...jadeBaseVisual,
  flip: true,
  size: 100
})

const jadeBubbleRight = createAvatar(adventurer, {
  ...jadeBaseVisual,
  size: 100
})

const jadeHappyBubble = createAvatar(adventurer, {
  ...jadeBaseVisual,
  eyes: ['variant19'],
  mouth: ['variant22'],
  flip: true,
  size: 100
})

const jessicaBubble = createAvatar(adventurer, {
  ...jessicaBaseVisual,
  flip: true,
  size: 100
})

const jessicaNeutralBubble = createAvatar(adventurer, {
  ...jessicaBaseVisual,
  mouth: ['variant02'],
  flip: true,
  size: 100
})

const jessicaTiredBubble = createAvatar(adventurer, {
  ...jessicaBaseVisual,
  eyebrows: ['variant07'],
  flip: true,
  size: 100
})

const jessicaBubbleRight = createAvatar(adventurer, {
  ...jessicaBaseVisual,
  size: 100
})

const oliverBubble = createAvatar(adventurer, {
  ...oliverBaseVisual,
  flip: true,
  size: 100
})

const oliverWorriedBubble = createAvatar(adventurer, {
  ...oliverBaseVisual,
  mouth: ['variant04'],
  flip: true,
  size: 100
})

export const baseNPCBubble: Record<string, { name: string; bubbleColor: string }> = {
  jade: {
    name: 'Jade',
    bubbleColor: 'blue.1'
  },
  jessica: {
    name: 'Jessica',
    bubbleColor: 'orange.1'
  },
  oliver: {
    name: 'Oliver',
    bubbleColor: 'violet.1'
  },
  vivian: {
    name: 'Vivian',
    bubbleColor: 'pink.1'
  }
}

export const jadeBubbles: Record<string, NPCBubble> = {
  default: {
    ...baseNPCBubble.jade,
    avatarSrc: jadeBubble.toDataUri()
  },
  defaultRight: {
    ...baseNPCBubble.jade,
    position: 'right',

    avatarSrc: jadeBubbleRight.toDataUri()
  },
  happy: {
    ...baseNPCBubble.jade,
    avatarSrc: jadeHappyBubble.toDataUri()
  }
}

export const jessicaBubbles: Record<string, NPCBubble> = {
  default: {
    ...baseNPCBubble.jessica,
    avatarSrc: jessicaBubble.toDataUri()
  },
  defaultRight: {
    ...baseNPCBubble.jessica,
    position: 'right',
    avatarSrc: jessicaBubbleRight.toDataUri()
  },
  neutral: {
    ...baseNPCBubble.jessica,
    avatarSrc: jessicaNeutralBubble.toDataUri()
  },
  tired: {
    ...baseNPCBubble.jessica,
    avatarSrc: jessicaTiredBubble.toDataUri()
  }
}

export const oliverBubbles: Record<string, NPCBubble> = {
  default: {
    ...baseNPCBubble.oliver,
    avatarSrc: oliverBubble.toDataUri()
  },
  worried: {
    ...baseNPCBubble.oliver,
    avatarSrc: oliverWorriedBubble.toDataUri()
  }
}
