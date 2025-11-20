import { useState } from 'react'
import { Loader2, Mail } from 'lucide-react'

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
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 backdrop-blur">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-semibold text-white">Get early access</h3>
            <p className="mt-2 text-blue-100/90">Join the waitlist and be the first to try the builder.</p>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-3 sm:grid-cols-6">
              <input
                type="text"
                placeholder="Your name"
                className="sm:col-span-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email address"
                className="sm:col-span-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="sm:col-span-1 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-3 font-medium text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400 disabled:opacity-60"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />} Join
              </button>
            </form>
            {status && (
              <p className={`mt-3 text-sm ${status.ok ? 'text-green-300' : 'text-red-300'}`}>{status.msg}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
