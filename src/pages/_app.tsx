import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import nProgress from 'nprogress'
import { useEffect } from 'react'
import { SWRConfig } from 'swr'

import fetchJson from '~/utils/fetchJson'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      nProgress.start()
    }

    const handleStop = () => {
      nProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: (err) => {
          console.error(err)
        },
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  )
}
