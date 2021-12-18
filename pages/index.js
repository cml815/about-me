import Head from 'next/head'
import Image from 'next/image'
import sample1 from '../public/images/unsample1.jpg'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Date from '../components/date'


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
        <section className={styles.hero}>
          <h1 className={styles.title}>
          Writer &amp; Web Designer  
        </h1>
        <h2 className={styles.subtitle}>
        I use story and design to connect health and tech companies with   those searching for them.  
        </h2>
        </section>
       
        <p className={styles.description}>
          View my work{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="./storytelling" className={styles.card}>
            <Image 
             src={sample1}
             alt="Sample 1"
             // width={500} automatically provided
             // height={500} automatically provided
             // blurDataURL="data:..." automatically provided
             // placeholder="blur" // Optional blur-up while loading
            /> 

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
        <section className={styles.headingMd}>
        <h2 className={styles.container}>Blog</h2>
        <ul className={styles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={styles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
              <a className={styles.boldLink}>{title}</a>
              </Link>
            <small className={styles.lightText}>
              <Date dateString={date} />
            </small>
            </li>
          ))}
        </ul>
      </section>

        
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
