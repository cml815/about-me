import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar () {
  return (
  <nav className={styles.navWrap}>
    <ul className={styles.menuLinks}>
      <li className={styles.menuItem}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li className={styles.menuItem}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li className={styles.menuItem}>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
      </li>
    </ul>
    </nav>
  )
}
