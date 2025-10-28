'use client'

import { queryClient } from '@/utils/trpc'
import { createTheme, MantineProvider } from '@mantine/core'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function Providers({ children }: { children: React.ReactNode }) {
  const customTheme = createTheme({
    fontFamily: 'Inter, sans-serif',
    headings: {
      fontFamily: 'Outfit, sans-serif'
    },
    primaryShade: 7
  })
  return (
    <MantineProvider theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </MantineProvider>
  )
}
