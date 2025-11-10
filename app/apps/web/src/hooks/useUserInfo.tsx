import { queryClient, trpc } from '@/utils/trpc'
import { useQuery } from '@tanstack/react-query'

// TODO: Verificar refetchs e cache do tanstack, como possibilidade de colocar staleTime: infinity.
export function useUserInfo() {
  return useQuery(trpc.user.getUserInfo.queryOptions())
}

export function invalidateUserInfo() {
  return queryClient.invalidateQueries({
    queryKey: [['user', 'getUserInfo'], { type: 'query' }]
  })
}
