import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Navbar from '../components/Navbar'

export default function Layout ({ children }) {
  return (
  <> 
  <Head>
    <link rel="icon" href="/favicon.ico" />
    <meta
      name="description"
      content="Learn about writer and web designer Caroline Leopold. View portfolio."
        />
  </Head>
  <Navbar />
  <main>{children}</main>
  </>
  )
}


