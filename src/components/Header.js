import Link from "next/link";

function Header() {
  return (
    <>
      <nav className="sticky top-0 p-3 bg-slate-100">
        <Link href="/">Home</Link> <Link href="/portfolio">Portfolio</Link> <Link href="/about">About</Link>
      </nav>
    </>
  );
}

export default Header;
