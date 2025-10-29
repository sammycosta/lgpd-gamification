import { queryClient, trpc } from '@/utils/trpc'
import { useQuery } from '@tanstack/react-query'

export function useActivities(moduleId: number) {
  return useQuery(trpc.activity.getActivities.queryOptions({ moduleId }, { enabled: !!moduleId }))
}

export function invalidateUseActivities(moduleId: number) {
  return queryClient.invalidateQueries({
    queryKey: [['activity', 'getActivities'], { input: { moduleId: moduleId }, type: 'query' }]
  })
}
