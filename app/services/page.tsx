const serviceGroups = [
  {
    title: "Live Event Production",
    desc: "End-to-end production for conferences, summits, ceremonies, and branded live formats.",
  },
  {
    title: "Broadcast Production",
    desc: "Multi-camera directing, switching, signal routing, monitoring, graphics, and delivery.",
  },
  {
    title: "Esports Production",
    desc: "Tournament-ready workflows: overlays, commentary, dynamic switching, and platform output.",
  },
  {
    title: "Streaming & Hybrid Events",
    desc: "Reliable hybrid architecture with remote speakers, translation channels, and backups.",
  },
  {
    title: "Full Technical Setup",
    desc: "Camera plan, comms, audio, vision, routing, and onsite operational control.",
  },
  {
    title: "Crew & Engineering",
    desc: "Experienced operators, engineers, and technical leadership for high-pressure shows.",
  },
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50">
      <header className="sticky top-0 z-50 border-b border-white/15 bg-zinc-950/60 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="interactive-link text-sm font-semibold tracking-wide text-zinc-100">
            Head Production
          </a>
          <nav className="flex items-center gap-6 text-sm text-zinc-300">
            <a href="/about" className="interactive-link">About</a>
            <a href="/work" className="interactive-link">Work</a>
            <a href="/equipment" className="interactive-link">Equipment</a>
            <a href="/#contact" className="interactive-link">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Services</p>
        <h1 className="mt-3 bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-6xl">
          Clear structure. Full-cycle delivery.
        </h1>
        <p className="mt-5 max-w-3xl text-zinc-300">
          Services are grouped by real production needs, so your team can quickly choose the right scope.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {serviceGroups.map((service) => (
            <article key={service.title} className="accent-border interactive-gradient rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold">{service.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{service.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
