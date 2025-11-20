import { Menu } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function Navbar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 })

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-900/70 backdrop-blur">
      <motion.div
        style={{ scaleX }}
        className="origin-left h-[2px] w-full bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400"
      />
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="group flex items-center gap-2 text-white">
          <img src="/flame-icon.svg" className="h-6 w-6" alt="logo" />
          <span className="font-semibold tracking-tight">Flames Blue</span>
          <span className="ml-2 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:scale-125 transition" />
        </a>
        <nav className="hidden items-center gap-6 text-sm text-blue-100 md:flex">
          <a href="#features" className="group relative">
            <span className="hover:text-white transition">Features</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#cta" className="group relative">
            <span className="hover:text-white transition">Get Access</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-400 to-blue-400 transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="/test" className="group relative">
            <span className="hover:text-white transition">Status</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-indigo-400 transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>
        <button className="rounded-lg border border-white/10 bg-white/5 p-2 text-white md:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
