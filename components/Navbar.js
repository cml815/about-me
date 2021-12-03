import Link from 'next/link'

export default function Navbar () {
  return (
    <nav className="navMenu">
      <ul className="navLinks">
        <li><a href="/">Home</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Get in Touch!</a></li>
      </ul>
    </nav> 
  )
}
