const categories = [
  {
    title: "Cameras & Optics",
    items: ["Cinema and broadcast camera systems", "Lens kits", "Wireless video transmitters"],
  },
  {
    title: "Switching & Vision",
    items: ["Live switchers", "Multiview monitoring", "Signal converters and routers"],
  },
  {
    title: "Audio",
    items: ["Digital consoles", "Wireless microphones", "IFB and in-ear monitoring"],
  },
  {
    title: "Streaming Stack",
    items: ["Encoders (RTMP/SRT)", "Recording units", "Redundant uplink setups"],
  },
  {
    title: "Comms",
    items: ["Intercom systems", "Producer and stage comms", "Talkback routing"],
  },
  {
    title: "Power & Backup",
    items: ["UPS and power distribution", "Backup capture", "Contingency kits"],
  },
];

export default function EquipmentPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50">
      <header className="sticky top-0 z-50 border-b border-white/15 bg-zinc-950/60 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="interactive-link text-sm font-semibold tracking-wide text-zinc-100">
            Head Production
          </a>
          <nav className="flex items-center gap-6 text-sm text-zinc-300">
            <a href="/about" className="interactive-link">About</a>
            <a href="/services" className="interactive-link">Services</a>
            <a href="/work" className="interactive-link">Work</a>
            <a href="/#contact" className="interactive-link">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Equipment</p>
        <h1 className="mt-3 bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-6xl">
          Technical catalog
        </h1>
        <p className="mt-5 max-w-3xl text-zinc-300">
          Core categories of production equipment used across conferences, esports, concerts, and hybrid events.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <article key={category.title} className="accent-border interactive-gradient rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold">{category.title}</h2>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                {category.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
