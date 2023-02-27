import Head from 'next/head'
import { NewTabLink } from 'shared-components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page - A</title>
      </Head>
      <span className='mt-8 text-xl'>This is App A-change2</span>
      <NewTabLink href='/'>this is from a shared library</NewTabLink>
    </>
  )
}
