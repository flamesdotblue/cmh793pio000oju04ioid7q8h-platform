import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-violet-500 shadow-[0_0_30px_-10px_rgba(99,102,241,0.8)]">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold tracking-tight">HoloID</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#security" className="hover:text-white">Security</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden rounded-md border border-white/15 px-3 py-1.5 text-sm text-white/90 hover:bg-white/5 md:inline-flex">Sign in</button>
          <button className="rounded-md bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 px-3 py-1.5 text-sm font-medium text-white shadow-[0_10px_40px_-12px_rgba(56,189,248,0.6)] hover:brightness-110">Get Started</button>
        </div>
      </div>
    </header>
  );
}
