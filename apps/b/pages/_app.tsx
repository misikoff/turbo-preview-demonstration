import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'

import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
      </Head>
      <div className='flex w-full flex-col items-center'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
