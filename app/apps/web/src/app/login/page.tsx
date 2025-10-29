'use client'

import { authClient } from '@/lib/auth-client'
import { Button, Loader } from '@mantine/core'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

// TODO: Deixar página bonita
export default function LoginPage() {
  const router = useRouter()
  const { useSession, signIn } = authClient
  const { data: session, isPending } = useSession()

  const handleSignIn = async () => {
    // TODO: Colocar data em um contexto? Tem userId
    await signIn.social({
      provider: 'google',
      callbackURL: process.env.NEXT_PUBLIC_WEB_URL
    })
  }

  useEffect(() => {
    if (!isPending && session) {
      router.push('/')
    }
  }, [session, isPending])

  if (isPending || session) {
    return <Loader />
  }

  return <Button onClick={handleSignIn}>Login com o Google</Button>
}
