import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, Sparkles } from 'lucide-react'

export default function Hero({ onCta }) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_0,rgba(147,197,253,0.18),transparent_35%)]" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-blue-100 backdrop-blur">
            <Sparkles className="h-4 w-4 text-blue-300" />
            Launch faster with an AI-native workflow
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl font-bold tracking-tight text-white">
            Build your modern SaaS without touching a line of code
          </h1>
          <p className="mt-6 text-lg leading-8 text-blue-100/90">
            Describe what you want. Watch it come alive. Iterate in minutes — not weeks.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={onCta}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 font-medium text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </button>
            <a href="/test" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 hover:bg-white/10">
              Check Backend
              <Shield className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
      <GradientOrbs />
    </section>
  )
}

function GradientOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute left-20 top-40 h-52 w-52 rounded-full bg-indigo-400/20 blur-3xl" />
      <div className="absolute right-24 top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
    </div>
  )
}
