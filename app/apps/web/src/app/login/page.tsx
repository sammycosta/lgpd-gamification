'use client'

import { authClient } from '@/lib/auth-client'
import { Button, Card, Center, Loader, Stack, Text, ThemeIcon, Title } from '@mantine/core'
import { Puzzle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const { useSession, signIn } = authClient
  const { data: session, isPending } = useSession()
  const [isSigningIn, setIsSigningIn] = useState(false)

  const handleSignIn = async () => {
    setIsSigningIn(true)
    await signIn.social({
      provider: 'google',
      callbackURL: process.env.NEXT_PUBLIC_WEB_URL,
      errorCallbackURL: process.env.NEXT_PUBLIC_WEB_URL,
      newUserCallbackURL: process.env.NEXT_PUBLIC_WEB_URL
    })
  }

  useEffect(() => {
    if (!isPending && session) {
      router.push('/')
    }
  }, [session, isPending])

  if (isPending || session || isSigningIn) {
    return <Loader />
  }

  return (
    <Center style={{ minHeight: 'calc(100vh - 200px)' }} py="xl">
      <Card
        withBorder
        shadow="xl"
        p={{ base: 20, sm: 40 }}
        radius="lg"
        w="100%"
        maw={420}
        bg="white"
      >
        <Stack gap="xl">
          {/* Logo e Título */}
          <Stack gap="md" align="center">
            <ThemeIcon size={80} radius="xl" variant="light" color="blue">
              <Puzzle size={40} />
            </ThemeIcon>
            <Stack gap="xs" align="center">
              <Title order={1} size="h2" fw={700} ta="center">
                LGPD Gamificada
              </Title>
              <Text c="dimmed" size="sm" ta="center">
                Entre para começar sua jornada de aprendizado
              </Text>
            </Stack>
          </Stack>

          <Button
            size="lg"
            variant="default"
            onClick={handleSignIn}
            leftSection={
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            }
            styles={{
              root: {
                border: '2px solid #e0e0e0',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                  borderColor: '#d0d0d0'
                }
              },
              label: {
                fontWeight: 600
              }
            }}
          >
            Continuar com Google
          </Button>
        </Stack>
        {/* <Stack gap="xs" align="center">
              <Text size="sm" c="dimmed" ta="center">
                Ao continuar, você concorda com nossos{' '}
                <Anchor href="#" size="sm" c="blue">
                  Termos de Uso
                </Anchor>
              </Text>
              <Text size="xs" c="dimmed" ta="center">
                Seus dados estão protegidos conforme a LGPD
              </Text>
            </Stack>
          </Stack  */}
      </Card>
    </Center>
  )
}

// <Box
//   style={{
//     minHeight: '100vh',
//     background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 50%, #f0f7ff 100%)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '1rem'
//   }}
// ></Box>
