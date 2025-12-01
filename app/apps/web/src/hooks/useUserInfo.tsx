import { queryClient, trpc } from '@/utils/trpc'
import { useQuery } from '@tanstack/react-query'

// TODO: Possibilidade de otimização: refetchs e cache do tanstack, colocar staleTime: infinity?
export function useUserInfo() {
  return useQuery(trpc.user.getUserInfo.queryOptions())
}

export function invalidateUserInfo() {
  return queryClient.invalidateQueries({
    queryKey: [['user', 'getUserInfo'], { type: 'query' }]
  })
}
