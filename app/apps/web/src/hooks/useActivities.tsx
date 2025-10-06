import { queryClient, trpc } from '@/utils/trpc'
import { useQuery } from '@tanstack/react-query'

export function useActivities(userId: number, moduleId: number) {
  return useQuery(
    trpc.activity.getActivities.queryOptions(
      { userId, moduleId },
      {
        enabled: !!userId && !!moduleId
      }
    )
  )
}

export function invalidateUseActivities(userId: number, moduleId: number) {
  return queryClient.invalidateQueries({
    queryKey: [
      ['activity', 'getActivities'],
      { input: { moduleId: moduleId, userId: userId }, type: 'query' }
    ]
  })
}
