import Layout from '../components/layout'
import Link from 'next/link'

export default function Story () {
  return (
    <Layout>
      <div className='hero projects'>
        <h1>How to tell stories that stick</h1>
      </div>
      <section className="">
        <ul className="grid projects">
          <li>
            <figure className="card">
            <figcaption>
            <Link href='#'>
              <a>Case Study</a>
            </Link>
            </figcaption>
            </figure>
          </li>
          <li>
          <figure>
          <figcaption>
            <Link href='#'>
              <a>Interview</a>
            </Link>
            </figcaption>
            </figure>
          </li>
          <li>
          <figure>
            <figcaption>
            <Link href='#'>
              <a>Brand storytelling</a>
            </Link>
            </figcaption>
            </figure>
          </li>
        </ul>
      </section>
    </Layout>
  )
}


