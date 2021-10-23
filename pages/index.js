import Head from 'next/head'
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
        checker
      </main>

      <Footer />
    </div>
  )
}
