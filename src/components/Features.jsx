import { CheckCircle2, Blocks, Workflow, Rocket, Globe, Database } from 'lucide-react'

const features = [
  {
    icon: Blocks,
    title: 'Modular building blocks',
    desc: 'Composed sections you can mix and match to shape your product fast.'
  },
  { icon: Workflow, title: 'AI-native workflows', desc: 'Automations that connect your data and actions together.' },
  { icon: Database, title: 'Persistent storage', desc: 'Backed by a real database out of the box — no more mock data.' },
  { icon: Globe, title: 'API ready', desc: 'Real endpoints you can call from anywhere, already configured.' },
  { icon: Rocket, title: 'Deploy in minutes', desc: 'Preview instantly. Iterate with zero setup and HMR.' },
]

export default function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur">
              <f.icon className="h-6 w-6 text-blue-300" />
              <h3 className="mt-3 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-blue-100/80">{f.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm text-blue-300">
                <CheckCircle2 className="h-4 w-4" /> Included by default
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
