import type { NPCBubble } from '@/components/resources/NPCBubble'
import { adventurer } from '@dicebear/collection'
import { createAvatar, type StyleOptions } from '@dicebear/core'
//avatares. mover pra uma pasta ? vai crescer.
export const jadeBaseVisual: StyleOptions<adventurer.Options> = {
  seed: 'Jade',
  earrings: ['variant04'],
  earringsProbability: 100,
  eyebrows: ['variant10'],
  eyes: ['variant01'],
  features: [],
  featuresProbability: 100,
  glasses: [],
  glassesProbability: 100,
  hair: ['long07'],
  hairColor: ['1c7ed6'],
  mouth: ['variant02'],
  skinColor: ['ecad80']
}

const jessicaBaseVisual: StyleOptions<adventurer.Options> = {
  seed: 'Jessica',
  earrings: [],
  earringsProbability: 100,
  eyebrows: ['variant14'],
  eyes: ['variant26'],
  features: [],
  featuresProbability: 100,
  glasses: ['variant05'],
  glassesProbability: 100,
  hair: ['long11'],
  hairColor: ['cb6820'],
  mouth: ['variant23'],
  skinColor: ['9e5622']
}

const oliverBaseVisual: StyleOptions<adventurer.Options> = {
  seed: 'Oliver',
  earrings: [],
  earringsProbability: 100,
  eyebrows: ['variant13'],
  eyes: ['variant26'],
  features: [],
  featuresProbability: 100,
  glasses: ['variant04'],
  glassesProbability: 100,
  hair: ['short03'],
  hairColor: ['562306'],
  mouth: ['variant02'],
  skinColor: ['f2d3b1']
}

const jadeBubble = createAvatar(adventurer, {
  ...jadeBaseVisual,
  flip: true,
  size: 100
})

const jadeHappyBubble = createAvatar(adventurer, {
  ...jadeBaseVisual,
  eyes: ['variant19'],
  mouth: ['variant22'],
  flip: true,
  size: 100
})

const jessicaBubbleRight = createAvatar(adventurer, {
  ...jessicaBaseVisual,
  size: 100
})

export const jessicaDoubt = createAvatar(adventurer, {
  ...jessicaBaseVisual,
  eyebrows: ['variant09'],
  mouth: ['variant09']
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

// NPC'S BUBBLES
const baseNPCBubble = {
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
  }
}

export const jadeBubbles: Record<string, NPCBubble> = {
  default: {
    ...baseNPCBubble.jade,
    avatarSrc: jadeBubble.toDataUri()
  },
  happy: {
    ...baseNPCBubble.jade,
    avatarSrc: jadeHappyBubble.toDataUri()
  }
}

export const jessicaBubbles: Record<string, NPCBubble> = {
  defaultLeft: {
    ...baseNPCBubble.jessica,
    position: 'right',
    avatarSrc: jessicaBubbleRight.toDataUri()
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
