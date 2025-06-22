import Link from "next/link";

export default function Navigation() {
  return (
    <header className="grid grid-cols-2">
      <div className="Chacha">Logo</div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/clientcomp">ClientComponent</Link>
          </li>
          <li>
            <Link href="/servercomp">ServerComponent</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
