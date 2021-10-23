import Head from 'next/head'
import { Checker } from '../components/Checker'
import { Footer } from '../components/Footer'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Checker</title>
        <meta name="description" content="Check name disponibility on social media" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Checker />
      </main>

      <Footer />
    </div>
  )
}
