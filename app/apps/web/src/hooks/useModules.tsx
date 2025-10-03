import { trpc } from '@/utils/trpc'
import { useQuery } from '@tanstack/react-query'

export function useModules(userId: number) {
  return useQuery(trpc.module.getModules.queryOptions({ userId: userId }))
}

export function useModule(userId: number, moduleId: number) {
  return useQuery(
    trpc.module.getModule.queryOptions(
      { userId, moduleId },
      {
        enabled: !!userId && !!moduleId
      }
    )
  )
}
