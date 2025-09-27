import type { Badge } from './api'

export interface User {
  name: string
  avatar: string
  points: number
  level: number
  progressToNextLevel: number
  title: string // Pode depender PONTOS, LEVEL E BADGES. Posso futuramente fazer um acúmulo de títulos e escolha de título no perfil.
  badgeCount: number
  badges?: Badge[]
}
