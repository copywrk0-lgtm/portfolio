import Link from "next/link";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "Studio" },
  { href: "/services", label: "Capabilities" },
];

export function Header(){
  return <header className="site-header">
    <Link className="brand magnetic" href="/">COPYWRK<span>®</span></Link>
    <nav className="desktop-nav">
      {links.map(link=><Link key={link.href} href={link.href}>{link.label}</Link>)}
      <Link className="nav-cta" href="/contact">Start a project ↗</Link>
    </nav>
    <details className="mobile-menu">
      <summary>Menu</summary>
      <div className="mobile-menu-panel">
        {links.map((link,index)=><Link key={link.href} href={link.href}><span>0{index+1}</span>{link.label}<b>↗</b></Link>)}
        <Link href="/contact"><span>04</span>Start a project<b>↗</b></Link>
      </div>
    </details>
  </header>
}
