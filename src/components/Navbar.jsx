import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-900/70 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2 text-white">
          <img src="/flame-icon.svg" className="h-6 w-6" alt="logo" />
          <span className="font-semibold">Flames Blue</span>
        </a>
        <nav className="hidden gap-6 text-sm text-blue-100 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#cta" className="hover:text-white">Get Access</a>
          <a href="/test" className="hover:text-white">Status</a>
        </nav>
        <button className="rounded-lg border border-white/10 bg-white/5 p-2 text-white md:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
