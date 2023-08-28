import { AppProps } from 'next/app'
import Head from 'next/head'

import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>IngDesk</title>
        <Component {...pageProps} />
      </Head>
    </>
  )
}

export default MyApp
