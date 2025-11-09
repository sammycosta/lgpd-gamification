import { BadgeTypes } from '@/types/api'
import { thumbsCyanHappy, thumbsNeutralHappy, thumbsOrangeHappy } from '@/utils/npc/avatar'

export type BadgeNotification = { title: string; message: string; src: string }

export const notificationByBadgeType: Record<BadgeTypes, BadgeNotification> = {
  [BadgeTypes.BRONZE]: {
    title: 'Parabéns! 70% das atividades concluídas! 🌟',
    message:
      'Você desbloqueou o próximo módulo e ganhou seu primeiro emblema 🏅 Continue assim, o próximo nível está logo ali!',
    src: thumbsNeutralHappy.toDataUri()
  },
  [BadgeTypes.SILVER]: {
    title: 'Parabéns! 85% das atividades concluídas! 🌟',
    message:
      'Você ganhou um emblema 🥈 Continue avançando para conquistar o emblema de ouro e concluir o módulo.',
    src: thumbsCyanHappy.toDataUri()
  },
  [BadgeTypes.GOLD]: {
    title: 'Parabéns! 100% das atividades concluídas! 🌟',
    message:
      'Módulo concluído com sucesso! Você garantiu o emblema de ouro 🥇 Parabéns pela dedicação!',
    src: thumbsOrangeHappy.toDataUri()
  }
}
