import type { Badge } from '@/types/api'
import type { User } from '@/types/user'

const badges: Badge[] = [
  { moduleId: 1, type: 'gold' },
  { moduleId: 2, type: 'silver' },
  { moduleId: 3, type: 'bronze' },
  { moduleId: 4, type: 'bronze' },
  { moduleId: 5, type: 'bronze' },
  { moduleId: 6, type: 'bronze' },
  { moduleId: 7, type: 'bronze' }
]

export const userDefault: User = {
  name: 'Samantha Costa',
  avatar:
    'https://api.dicebear.com/9.x/adventurer/svg?seed=Sawyer&backgroundColor=d1d4f9,9ad7ff',
  points: 1560,
  badgeCount: 7,
  level: 5,
  progressToNextLevel: 300,
  title: 'Aprendiz dos dados pessoais',
  badges: badges
}
