import Layout from './../components/layout'
import Link from 'next/link'

export default function Story () {
  return (
    <Layout>
      <h1>Your Company's Story</h1>
      <Link href='#'>
        <a>Case Study</a>
      </Link>
      <Link href='#'>
        <a>Interview</a>
      </Link>
      <Link href='#'>
        <a>Brand storytelling</a>
      </Link>
    </Layout>
  )
}


