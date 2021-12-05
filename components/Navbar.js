import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar () {
  return (
  <nav className={styles.navWrap}>
    <ul className={styles.menuLinks}>
      <li>
        <Link href="/">
          <a>Home</a>
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
    </nav>
  )
}
