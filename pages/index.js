import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

// https://nextjs.org/learn/basics/assets-metadata-css/polishing-layout

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>CL</title>
        <meta name="description" content="Work by Caroline Leopold: Creator and technical writer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={styles.main}>
        <section className="hero">

          <h1 className={styles.title}>
           Technical == Creative 
        </h1>
        <h2 className={styles.title}>
        (Creative&#41; Technical Designer and Writer
        </h2>
        </section>
       
        <p className={styles.description}>
          View my work{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Stories on Tech Companies and Startups &rarr;</h2>
            <p>Interviews, case studies and feature articles.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>COVID-19 and other Medical Topics. &amp; Medicine Made Accessible &rarr;</h2>
            <p>Content ranging from wellness to health systems.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        <section>
        <h2>Add Blog Section Here</h2>
        <a href="https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops">Link to Tutorial</a>

        
      </section>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      </div>
    </>
  )
}
