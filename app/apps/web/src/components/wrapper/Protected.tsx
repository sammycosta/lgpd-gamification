// components/protected.tsx
'use client'

import { Loader } from '@mantine/core'
import { useRouter } from 'next/navigation'
import { useEffect, type ReactNode } from 'react'
import { authClient } from '../../lib/auth-client'

export function Protected({ children }: { children: ReactNode }) {
  const { data: session, isPending } = authClient.useSession()
  const router = useRouter()

  useEffect(() => {
    if (!isPending && !session) {
      router.push('/login')
    }
  }, [session, isPending, router])

  if (isPending) return <Loader />
  if (!session) return null

  return <>{children}</>
}
