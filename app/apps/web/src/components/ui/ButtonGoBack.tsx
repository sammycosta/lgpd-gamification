'use client'

import { Button } from '@mantine/core'
import { ArrowLeft } from 'lucide-react'
import type { Route } from 'next'
import { useRouter } from 'next/navigation'

interface ButtonGoBackProps {
  url?: Route
  label?: string
}

export default function ButtonGoBack({ url, label }: ButtonGoBackProps) {
  const router = useRouter()

  const appDomain = typeof window !== 'undefined' ? window.location.hostname : ''

  const defaultGoBack = () => {
    const referrer = document.referrer
    const isInternal = referrer && referrer.includes(appDomain)

    if (isInternal) {
      router.back()
    } else {
      router.push('/')
    }
  }

  const handleGoBack = () => {
    if (url) {
      router.push(url)
    } else {
      defaultGoBack()
    }
  }

  return (
    <Button variant="subtle" onClick={handleGoBack} leftSection={<ArrowLeft size={16} />}>
      {label ?? 'Voltar'}
    </Button>
  )
}
