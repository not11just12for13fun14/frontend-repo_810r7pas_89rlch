import { motion } from 'framer-motion'
import { ArrowRight, Shield, Sparkles } from 'lucide-react'

export default function Hero({ onCta }) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <AuroraBg />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.05, duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-blue-100 backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-blue-300" />
            Launch faster with an AI-native workflow
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            Build your modern SaaS without touching a line of code
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6 }}
            className="mt-6 text-lg leading-8 text-blue-100/90"
          >
            Describe what you want. Watch it come alive. Iterate in minutes — not weeks.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCta}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 font-medium text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </motion.button>
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              href="/test"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 hover:bg-white/10"
            >
              Check Backend
              <Shield className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      <ParallaxShapes />
    </section>
  )
}

function AuroraBg() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_0,rgba(147,197,253,0.18),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-[-10%] h-[40rem] opacity-60 [mask-image:radial-gradient(closest-side,white,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-indigo-500/20 blur-3xl" />
      </div>
    </div>
  )
}

function ParallaxShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute left-20 top-40 h-52 w-52 rounded-full bg-indigo-400/20 blur-3xl" />
      <div className="absolute right-24 top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
    </div>
  )
}
