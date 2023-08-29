import { useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import AOS from 'aos'

import 'aos/dist/aos.css'
import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-png" />
        <title>IngDesk</title>
        <Component {...pageProps} />
      </Head>
    </>
  )
}

export default MyApp
