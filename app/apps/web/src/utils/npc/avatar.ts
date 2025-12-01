import { adventurer, thumbs } from '@dicebear/collection'
import { createAvatar } from '@dicebear/core'
import { jadeBaseVisual, jessicaBaseVisual, oliverBaseVisual } from './visual'

export const jadeShocked = createAvatar(adventurer, {
  ...jadeBaseVisual,
  mouth: ['variant15']
})

export const jadeHappy = createAvatar(adventurer, {
  ...jadeBaseVisual,
  eyes: ['variant19'],
  mouth: ['variant22']
})

export const jadeUnhappy = createAvatar(adventurer, {
  ...jadeBaseVisual,
  mouth: ['variant09']
})

export const jessicaDefault = createAvatar(adventurer, jessicaBaseVisual)

export const jessicaUnhappy = createAvatar(adventurer, {
  ...jessicaBaseVisual,
  mouth: ['variant09']
})

export const jessicaDoubt = createAvatar(adventurer, {
  ...jessicaBaseVisual,
  eyebrows: ['variant09'],
  mouth: ['variant09']
})

export const oliverDefault = createAvatar(adventurer, oliverBaseVisual)

export const oliverWorried = createAvatar(adventurer, {
  ...oliverBaseVisual,
  mouth: ['variant04']
})

export const activityFeedback: Record<string, { correct: string; wrong: string }> = {
  jade: {
    correct: jadeHappy.toDataUri(),
    wrong: jadeUnhappy.toDataUri()
  },
  jessica: {
    correct: jessicaDefault.toDataUri(),
    wrong: jessicaUnhappy.toDataUri()
  },
  oliver: {
    correct: oliverDefault.toDataUri(),
    wrong: oliverWorried.toDataUri()
  }
}

export const thumbsHappy = createAvatar(thumbs, {
  seed: 'Aidan',
  backgroundColor: []
})

export const thumbsNeutralHappy = createAvatar(thumbs, {
  seed: 'Eden',
  backgroundColor: []
})

export const thumbsCyanHappy = createAvatar(thumbs, {
  seed: 'Jameson'
})

export const thumbsOrangeHappy = createAvatar(thumbs, {
  seed: 'Sophia',
  backgroundColor: []
})
