import { Shield, CreditCard, Sparkles, CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: 'Verified Identity',
    desc: 'Holographic profile with a glowing blue checkmark to instantly build trust.',
    icon: CheckCircle2,
    color: 'from-cyan-500/20 to-sky-500/10',
  },
  {
    title: 'Fintech-Grade Security',
    desc: 'Secure signing, encryption, and role-based access out of the box.',
    icon: Shield,
    color: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    title: 'Seamless Payments',
    desc: 'Link verified IDs to payment rails for frictionless onboarding.',
    icon: CreditCard,
    color: 'from-indigo-500/20 to-violet-500/10',
  },
  {
    title: 'Vibrant 3D UI',
    desc: 'Modern, futuristic interactions powered by a responsive 3D scene.',
    icon: Sparkles,
    color: 'from-fuchsia-500/20 to-pink-500/10',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative border-t border-white/10 bg-neutral-950 py-16 sm:py-20">
      <div className="absolute inset-x-0 -top-24 mx-auto h-64 w-[80vw] rounded-full bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-indigo-500/10 blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Everything you need to shine</h2>
          <p className="mt-3 text-white/70">Craft a trustworthy, futuristic presence that your users can verify and share—instantly.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
              <div className={`absolute inset-x-0 -top-px h-px bg-gradient-to-r ${f.color}`} />
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100" style={{boxShadow:'inset 0 0 0 1px rgba(255,255,255,0.06), 0 20px 80px -30px rgba(59,130,246,0.35)'}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
