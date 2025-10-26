export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-white/60 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} HoloID. All rights reserved.</p>
        <nav className="flex items-center gap-5">
          <a className="hover:text-white" href="#">Privacy</a>
          <a className="hover:text-white" href="#">Terms</a>
          <a className="hover:text-white" href="#">Status</a>
        </nav>
      </div>
    </footer>
  );
}
