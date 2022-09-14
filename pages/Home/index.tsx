import type { NextPage } from 'next'
// import Image from 'next/future/image'
import Head from 'next/head'
import styles from './Home.module.css'
import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'
import Hero from './components/hero'
import Hub from './components/hub'

const Home: NextPage = () => {
  return (
    <div className={styles.homepage + '  min-h-screen'}>
      <Head>
        <title>Nibiru Ecosystem</title>
        <meta
          name="description"
          content="Nibiru unlock leverage at scale for the Cosmos ecosystem"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Nibiru" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nibiru Ecosystem" />
        <meta
          property="og:description"
          content="Nibiru unlock leverage at scale for the Cosmos ecosystem"
        />
        <meta
          property="og:image"
          content="https://nibiru-website.netlify.app/og-img.jpg"
        />
        <meta
          name="twitter:image"
          content="https://nibiru-website.netlify.app/og-img.jpg"
        />
        <meta property="og:url" content="https://nibiru.fi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NibiruChain" />
        <meta name="twitter:title" content="Nibiru" />
        <meta
          name="twitter:image"
          content="https://nibiru-website.netlify.app/og-img.jpg"
        />
        <meta name="twitter:image:alt" content="NibiruChain" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Hub />
      </main>
      <Footer />
    </div>
  )
}

export default Home
