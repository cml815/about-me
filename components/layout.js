import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'


export default function Layout ({ children }) {
  return
  <> 
  <Head>
    <link rel="icon" href="/favicon.ico" />
    <meta
      name="description"
      content="Learn about writer and web designer Caroline Leopold. View portfolio."
        />
  </Head>
  <div className={styles.headline}>{children}</div>
  </>
}

