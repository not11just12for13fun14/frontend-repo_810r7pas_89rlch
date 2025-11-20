import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  const ctaRef = useRef(null)
  const scrollToCta = () => ctaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(2,132,199,0.12),transparent_50%)]" />
      <div className="relative">
        <Navbar />
        <main>
          <Hero onCta={scrollToCta} />
          <div id="features"><Features /></div>
          <div id="cta" ref={ctaRef}><CTA /></div>
        </main>
        <footer className="border-t border-white/10 py-10 text-center text-blue-200/80">
          No coding required • Just describe what you want
        </footer>
      </div>
    </div>
  )
}

export default App
