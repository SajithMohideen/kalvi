import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const handleConnectWallet = async () => {
    console.log("Connect Wallet working...")
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Kalvi App</title>
        <meta name="description" content="Incentivizing Learning by streaming rewards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Kalvi!
        </h1>
        <a>
          <span className={styles.logo}>
            <Image src="/Kalvi.jpeg" alt="Kalvi Logo" width={500} height={300} />
          </span>
        </a>
        <p className={styles.description}>
        Incentivizing Learning by streaming rewards
        </p>

        <button id='btn-connect-wallet' onClick={handleConnectWallet} >Connect Wallet</button>
      </main>

      <footer className={styles.footer}>
        <a>
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/polygon.svg" alt="Polygon Logo" width={300} height={60} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
