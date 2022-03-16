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
        <p className="text-3xl font-bold underline">
        Incentivizing Learning by streaming rewards
        </p>
        <br></br>

        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={handleConnectWallet} >Connect Wallet</button>
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
