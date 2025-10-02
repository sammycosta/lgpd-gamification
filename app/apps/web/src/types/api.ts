export interface Module {
  id: number
  name: string
  icon?: React.ReactNode
  points: number
  maxPoints: number
  locked: boolean
  progressPercentage: number
}

export enum ActivityType {
  QEA,
  QEAMultiple
}

export enum ActivityStatus {
  TODO,
  WRONG,
  RIGHT
}

//TODO: Depois ver se troco pra enum proprio ou reutilizo o enum de cima
export type ActivityFeedbackStatus = 'idle' | 'correct' | 'wrong'

export interface BaseActivity {
  id: number
  name: string
  status: ActivityStatus
  moduleId: number
}

export interface QEA {
  question: string
  options: {
    id: number
    text: string
  }[]
  answer: number
}

export interface QEAMultiple extends Omit<QEA, 'answer'> {
  answer: number[]
}

export type QeAActivity = BaseActivity & {
  type: ActivityType.QEA
  data: QEA
}

export type QeAMultipleActivity = BaseActivity & {
  type: ActivityType.QEAMultiple
  data: QEAMultiple
}

export type Activity = QeAActivity | QeAMultipleActivity

export type BadgeType = 'gold' | 'silver' | 'bronze'

export interface Badge {
  moduleId: number
  type: BadgeType
}
