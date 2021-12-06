import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Layout from './../components/layout'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function About () {
  return (
  <Layout>
    <h1>About</h1>
    <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
  </Layout>
  )
  
}