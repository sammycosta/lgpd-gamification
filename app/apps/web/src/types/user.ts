import type { Badge } from './api'

export interface User {
  name: string
  avatarPath: string
  points: number
  level: number
  levelPoints: number
  progressToNextLevel: number
  levelProgressPercent: number
  title: string // Pode depender PONTOS, LEVEL E BADGES. Posso futuramente fazer um acúmulo de títulos e escolha de título no perfil.
  badgeCount: number
  badges: Badge[]
}
