import { queryClient, trpc } from '@/utils/trpc'
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

// TODO: Entender o local certo dessas funções de invalidação.
export function invalidateUseModule(userId: number, moduleId: number) {
  return queryClient.invalidateQueries({
    queryKey: [
      ['module', 'getModule'],
      { input: { moduleId: moduleId, userId: userId }, type: 'query' }
    ]
  })
}
