export interface Module {
  id: number
  name: string
  icon?: React.ReactNode
  points: number
  maxPoints: number
  locked: boolean
  progressPercentage: number
}

export enum ActivityTypes {
  QNA = 1,
  MATCHING = 2
}

export enum ActivityStatus {
  TODO,
  WRONG,
  CORRECT
}

export enum BadgeTypes {
  BRONZE = 1,
  SILVER = 2,
  GOLD = 3
}

//TODO: Depois ver se troco pra enum proprio ou reutilizo o enum de cima
export type ActivityFeedbackStatus = 'idle' | 'correct' | 'wrong' | 'alreadyCorrect'

export interface QNAData {
  question: string
  options: {
    id: number
    text: string
  }[]
  answers: number[]
  isMultiple: boolean
}

export interface MatchingPair {
  concept: string
  definition: string
}

export interface MatchingData {
  shuffledItems: string[]
  matchingPairs: MatchingPair[]
}

export interface Activity {
  id: number
  name: string
  status: ActivityStatus
  moduleId: number
  points: number
  type: ActivityTypes
  data: QNAData | MatchingData
}

export type BadgeType = 'gold' | 'silver' | 'bronze'

export interface Badge {
  moduleId: number
  type: BadgeType
}
