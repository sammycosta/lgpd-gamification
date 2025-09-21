export interface Module {
  id: string | number
  name: string
  icon?: React.ReactNode
  points: number
  maxPoints: number
  locked: boolean
}
