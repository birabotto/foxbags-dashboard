import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-zinc-900">
          Test<span className="text-orange-500">Test</span>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-zinc-600 sm:flex">
          <a href="#products" className="hover:text-orange-500">
            Products
          </a>
          <a href="#about" className="hover:text-orange-500">
            About
          </a>
          <a href="/dashboard" className="hover:text-orange-500">
            Dashboard
          </a>
        </div>
      </nav>
    </header>
  );
}
