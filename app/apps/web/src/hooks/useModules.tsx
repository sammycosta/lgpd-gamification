import { queryClient, trpc } from '@/utils/trpc'
import { useQuery } from '@tanstack/react-query'

export function useModules() {
  return useQuery(trpc.module.getModules.queryOptions())
}

export function useModule(moduleId: number) {
  return useQuery(trpc.module.getModule.queryOptions({ moduleId }, { enabled: !!moduleId }))
}

export function invalidateUseModule(moduleId: number) {
  return queryClient.invalidateQueries({
    queryKey: [['module', 'getModule'], { input: { moduleId: moduleId }, type: 'query' }]
  })
}
