import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">{/* Ambient gradient glow */}
        <div className="absolute -top-16 left-1/2 h-64 w-[90vw] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-indigo-500/20 blur-3xl pointer-events-none" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-400"></span>
            Live identity preview
          </div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Your digital identity, verified in holographic clarity
          </h1>
          <p className="max-w-xl text-base text-white/70 sm:text-lg">
            Introduce yourself with a futuristic, iridescent profile card. HoloID lets users verify, share, and manage identity with fintech-grade security and delightful 3D interactions.
          </p>
          <div className="flex flex-col items-start gap-3 sm:flex-row">
            <a href="#features" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-[0_10px_40px_-12px_rgba(56,189,248,0.6)] hover:brightness-110">
              Explore features
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10">
              Watch demo
            </a>
          </div>
          <ul className="mt-4 grid grid-cols-2 gap-4 text-sm text-white/70">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>Blue-check verification</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>Fintech-ready security</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-violet-400"></span>Instant sharing</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span>Modern API</li>
          </ul>
        </div>

        <div className="relative md:h-[680px] h-[560px]">
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_40px_120px_-40px_rgba(56,189,248,0.35)] pointer-events-none" />
          <div className="absolute inset-0 rounded-2xl">
            <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
