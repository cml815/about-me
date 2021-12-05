import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar () {
  return (
    <ul>
      <li>
        <Link href="/">
          <a className="coloring">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
      </li>
    </ul>
  )
}
