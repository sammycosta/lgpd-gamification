import { trpc } from '@/utils/trpc'
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
