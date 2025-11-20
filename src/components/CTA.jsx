import { useState } from 'react'
import { Loader2, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, source: 'landing' })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.detail || 'Something went wrong')
      setStatus({ ok: true, msg: 'You are in! We will be in touch soon.' })
      setEmail('')
      setName('')
    } catch (err) {
      setStatus({ ok: false, msg: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 backdrop-blur"
        >
          <Glow />
          <div className="mx-auto max-w-2xl text-center relative">
            <h3 className="text-2xl font-semibold text-white">Get early access</h3>
            <p className="mt-2 text-blue-100/90">Join the waitlist and be the first to try the builder.</p>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-3 sm:grid-cols-6">
              <input
                type="text"
                placeholder="Your name"
                className="sm:col-span-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email address"
                className="sm:col-span-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="sm:col-span-1 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-3 font-medium text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400 disabled:opacity-60"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />} Join
              </motion.button>
            </form>
            {status && (
              <p className={`mt-3 text-sm ${status.ok ? 'text-green-300' : 'text-red-300'}`}>{status.msg}</p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Glow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-24 left-20 h-56 w-56 rounded-full bg-indigo-400/20 blur-3xl" />
      <div className="absolute -bottom-20 right-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
    </div>
  )
}
