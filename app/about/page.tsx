import SiteHeader from "../components/site-header";

export default function AboutPage() {
  const metrics = [
    { k: "8 years", v: "experience in live production" },
    { k: "100+", v: "events delivered" },
    { k: "20+", v: "countries worked in" },
    { k: "EN", v: "English-speaking crew" },
  ];

  return (
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay" />
      <SiteHeader />

      <div className="pt-16">
      <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">About</p>
        <h1 className="mt-3 bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-6xl">
          History. Team. Execution.
        </h1>
        <p className="mt-5 max-w-3xl text-zinc-300">
          We build reliable live productions for conferences, esports, festivals, and large-scale broadcasts.
          The focus is simple: clean communication, strong engineering, and stable delivery under pressure.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.v} className="accent-border interactive-gradient rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="text-2xl font-semibold text-white">{m.k}</div>
              <div className="mt-1 text-sm text-zinc-300">{m.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1400px] gap-6 px-4 py-10 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="accent-border interactive-gradient rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <div className="mt-4 space-y-2 text-sm text-zinc-300">
            <p><span className="text-zinc-400">Email:</span> hello@headproduction.com</p>
            <p><span className="text-zinc-400">Phone:</span> +995 000 00 00 00</p>
            <p><span className="text-zinc-400">Based in:</span> Tbilisi</p>
            <p><span className="text-zinc-400">Coverage:</span> Worldwide</p>
          </div>
        </div>

        <div className="accent-border interactive-gradient rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold tracking-tight">Request Form</h2>
          <form className="mt-4 grid gap-3">
            <input className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none focus:border-white/20" placeholder="Name" />
            <input className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none focus:border-white/20" placeholder="Company" />
            <input className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none focus:border-white/20" placeholder="WhatsApp / Telegram / Email" />
            <textarea className="min-h-[110px] w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none focus:border-white/20" placeholder="Brief about your event" />
            <button type="button" className="interactive-gradient inline-flex justify-center rounded-xl bg-gradient-to-r from-cyan-300 to-violet-300 px-5 py-3 text-sm font-semibold text-zinc-950">
              Send request
            </button>
          </form>
        </div>
      </section>
      </div>
    </main>
  );
}
