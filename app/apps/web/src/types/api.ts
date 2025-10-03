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
  QNA = 1
}

export enum ActivityStatus {
  TODO,
  WRONG,
  CORRECT
}

//TODO: Depois ver se troco pra enum proprio ou reutilizo o enum de cima
export type ActivityFeedbackStatus = 'idle' | 'correct' | 'wrong'

export interface BaseActivity {
  id: number
  name: string
  status: ActivityStatus
  moduleId: number
  points: number
}

export interface QNA {
  question: string
  options: {
    id: number
    text: string
  }[]
  answers: number[]
  isMultiple: boolean
}

// Posso separar para mais tipos depois
export type QnAActivity = BaseActivity & {
  type: ActivityType.QNA
  data: QNA
}

export type Activity = QnAActivity

export type BadgeType = 'gold' | 'silver' | 'bronze'

export interface Badge {
  moduleId: number
  type: BadgeType
}
