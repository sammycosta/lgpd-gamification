import { trpc } from '@/utils/trpc'
import { useQuery } from '@tanstack/react-query'

export function useAvatars() {
  return useQuery(trpc.user.getAvatars.queryOptions())
}
