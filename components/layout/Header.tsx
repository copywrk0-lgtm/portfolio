import Link from "next/link";

export function Header(){
  return <header className="site-header">
    <Link className="brand magnetic" href="/">COPYWRK<span>®</span></Link>
    <nav>
      <Link href="/work">Work</Link>
      <Link href="/about">Studio</Link>
      <Link href="/services">Capabilities</Link>
      <Link className="nav-cta" href="/contact">Start a project ↗</Link>
    </nav>
  </header>
}
