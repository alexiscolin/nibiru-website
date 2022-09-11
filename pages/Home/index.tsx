import type { NextPage } from 'next'
import Head from 'next/head'
import styles from './Home.module.css'
import Header from '@/components/sections/header'
import Hero from './components/hero'
import Hub from './components/hub'

const Home: NextPage = () => {
  return (
    <div className={styles.homepage + ' bg-gray-900 min-h-screen'}>
      <Head>
        <title>Nibiru</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <Hero />
        <Hub />
      </main>
    </div>
  )
}

export default Home
