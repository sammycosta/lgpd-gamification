import { useEffect } from 'react'

export const useConfetti = (trigger: boolean) => {
  useEffect(() => {
    if (trigger) {
      const confetti = require('canvas-confetti').default

      // Executa a animação de confete
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { x: 0.5, y: 1 },
        angle: 90,
        gravity: 1.5
      })
    }
  }, [trigger])
}
