import Image from "next/image";
import SiteHeader from "./components/site-header";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50 selection:bg-cyan-300/30 selection:text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
           style={{
             backgroundImage:
               "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
           }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-[-120px] top-40 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-[-100px] h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-3xl" />
      </div>
      <SiteHeader />

      <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 right-[-120px] h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-4 py-16 sm:px-6 md:grid-cols-12 md:py-24 lg:px-8">
          <div className="relative md:col-span-7">
            <p className="mb-3 text-sm text-zinc-300">
              Based in Tbilisi · Working worldwide · English-speaking crew
            </p>

            <h1 className="bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-6xl">
              High-end live event & broadcast production that feels effortless.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 md:text-lg">
              Conferences, concerts & festivals, esports and large-scale events. Full-cycle delivery —
              from technical design to the final signal. Up to 16 cameras, 4K workflow, 100+ events delivered.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-300 to-violet-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:from-cyan-200 hover:to-violet-200"
              >
                Discuss your event
              </a>
              <a
                href="#showreel"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-200/50 hover:bg-white/10"
              >
                Watch showreel
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { k: "8", v: "years experience" },
                { k: "100+", v: "events delivered" },
                { k: "16", v: "cameras max" },
                { k: "4K", v: "workflow" },
              ].map((item) => (
                <div
                  key={item.v}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <div className="text-2xl font-semibold">{item.k}</div>
                  <div className="mt-1 text-xs text-zinc-300">{item.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Showreel */}
          <div id="showreel" className="relative md:col-span-5">
            <div className="aspect-video overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5">
              <div className="flex h-full w-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-3 h-12 w-12 rounded-2xl bg-white/10 ring-1 ring-white/15" />
                  <p className="text-sm font-semibold">Showreel</p>
                  <p className="mt-1 text-xs text-zinc-300">Recent productions, behind-the-scenes, and key moments.</p>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-300">
              Recent locations: Dubai · Belgrade · Turkey · Bali · China · USA · Europe
            </div>
          </div>
        </div>
      </section>

      {/* Selected Clients */}
      <section className="mx-auto w-full max-w-[1400px] px-4 pb-10 sm:px-6 md:pb-16 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Selected clients</p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-100 md:text-2xl">
              Trusted for live shows where failure isn't an option.
            </h2>
          </div>
        </div>

        <div className="mt-8 overflow-hidden">
          <div className="relative">
            {/* subtle shine */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-cyan-200/10 to-transparent" />
            <div className="flex w-[200%] animate-marquee-slow items-center gap-4 py-6">
              {[
                "NOVA STAGE",
                "ATLAS SUMMIT",
                "VERTEX ESPORTS",
                "LUMEN FEST",
                "ORBIT MEDIA",
                "PULSE CONFERENCE",
                "AURORA EVENTS",
                "NEXUS LIVE",
                "HORIZON FORUM",
                "SPECTRA GROUP",
              ]
                .concat([
                  "NOVA STAGE",
                  "ATLAS SUMMIT",
                  "VERTEX ESPORTS",
                  "LUMEN FEST",
                  "ORBIT MEDIA",
                  "PULSE CONFERENCE",
                  "AURORA EVENTS",
                  "NEXUS LIVE",
                  "HORIZON FORUM",
                  "SPECTRA GROUP",
                ])
                .map((name, i) => (
                  <div
                    key={`${name}-${i}`}
                    className="mx-1.5 flex h-14 items-center rounded-2xl bg-white/[0.07] px-7 text-sm font-semibold tracking-[0.18em] text-zinc-100 md:h-16 md:text-base"
                  >
                    {name}
                  </div>
                ))}
            </div>
          </div>
        </div>

      </section>

      {/* About */}
      <section className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">What we do</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              Head Production is a live event and broadcast production company. We handle the technical complexity
              so your team can focus on the event itself — and your audience gets a smooth, high-quality live experience.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7">
              <p className="text-sm leading-relaxed text-zinc-200">
                From venue planning and signal routing to live directing, graphics, and multi-platform streaming —
                we deliver end-to-end production with clear communication and predictable results.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Pre-production & technical design",
                  "Multi-camera live directing",
                  "Broadcast graphics & sponsor integration",
                  "Streaming + recording + deliverables",
                ].map((t) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Services</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Full-cycle live production, scaled to your venue and format.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Live broadcast production",
              desc: "Multi-camera setup, directing, switching, monitoring — the full live control room workflow.",
            },
            {
              title: "Conferences & hybrid events",
              desc: "Presentations, remote speakers, translation channels, audience engagement, clean delivery.",
            },
            {
              title: "Concerts, festivals, esports",
              desc: "Fast-paced live coverage built for pressure, dynamic environments, and large audiences.",
            },
            {
              title: "Broadcast graphics",
              desc: "Lower thirds, overlays, scoreboards, sponsor placements, branded visual packages.",
            },
            {
              title: "Streaming to any platform",
              desc: "YouTube, Twitch, corporate platforms — RTMP/SRT workflows, redundancy where needed.",
            },
            {
              title: "Recording & post-deliverables",
              desc: "Clean recordings, highlight assets, and organized delivery for your team and partners.",
            },
          ].map((s) => (
            <div key={s.title} className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Where we work</h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-300">
          Same standards, different formats. We adapt the workflow to the event, not the other way around.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Esports",
              points: ["Tournament-ready live switching", "Live score/overlay graphics", "Commentator studio setups"],
            },
            {
              title: "Conferences",
              points: ["Speaker & slide feeds", "Hybrid + remote guests", "Translation & clean audio"],
            },
            {
              title: "Concerts & Festivals",
              points: ["Stage coordination", "Multi-camera live coverage", "LED & on-site integration"],
            },
          ].map((c) => (
            <div key={c.title} className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-base font-semibold">{c.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Projects */}
      <section className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Selected projects</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              A few recent productions.
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-300">
              Highlights from recent productions. We can expand these into full case studies with photos, setup details, gear lists, and outcomes.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-2 inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 md:mt-0"
          >
            Get a quote
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "International Business Conference (Hybrid)",
              meta: "Europe · 2025",
              tags: ["Hybrid", "Multi-cam", "Translation", "Slides"],
              desc: "Multi-camera live production with speaker feeds, slide routing, and translation channels. Stable streaming + clean recordings.",
            },
            {
              title: "Esports Tournament Broadcast",
              meta: "Dubai · 2024",
              tags: ["Esports", "Overlays", "Commentary", "Fast switching"],
              desc: "Tournament-ready switching, live score/overlay package, commentator studio workflow, platform streaming + highlight outputs.",
            },
            {
              title: "Concert / Festival Live Coverage",
              meta: "Turkey · 2024",
              tags: ["Live show", "Stage", "LED", "4K"],
              desc: "High-pressure live environment with stage coordination and multi-camera directing. Optimized routing and on-site comms.",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="accent-border relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs text-zinc-400">{p.meta}</p>
                  <div className="rounded-full border border-white/10 bg-zinc-950/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-300">
                    4K / up to 16 cams
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-100 hover:text-white"
                >
                  View details <span className="text-zinc-400">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Founders */}
      <section id="founders" className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Founders</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Two hands-on operators: production + engineering, working side by side on every show.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            {
              name: "Peter Babitsky",
              photo: "/founders/peter-babitsky.jpg",
              role: "Co-Founder · Executive Producer",
              bio: "Production planning, show flow, venue coordination, and client communication. International delivery across formats.",
            },
            {
              name: "Nikita Priimak",
              photo: "/founders/nikita-priimak.jpg",
              role: "Co-Founder · Technical Director",
              bio: "Broadcast engineering: routing, camera workflows, audio, streaming, redundancy, and on-site technical leadership.",
            },
          ].map((f, idx) => (
            <div key={idx} className="accent-border rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex flex-col items-center text-center">
                <div className="h-28 w-28 overflow-hidden rounded-full border border-white/20 bg-zinc-900/70 p-1 ring-1 ring-white/15">
                  <Image
                    src={f.photo}
                    alt={f.name}
                    width={112}
                    height={112}
                    className="h-full w-full rounded-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 text-base font-semibold">{f.name}</div>
                <div className="mt-1 text-sm text-zinc-300">{f.role}</div>
              </div>
              <p className="mt-4 text-center text-sm leading-relaxed text-zinc-300">{f.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">How it works</h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-300">
          Clear steps, predictable delivery, and no surprises on show day.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {[
            { n: "01", t: "Brief", d: "Format, venue, date, platforms, requirements." },
            { n: "02", t: "Design", d: "Technical plan: cameras, audio, graphics, streaming." },
            { n: "03", t: "Setup", d: "On-site build, routing, tests, rehearsals." },
            { n: "04", t: "Live", d: "Directing, monitoring, backups, comms." },
            { n: "05", t: "Deliver", d: "Recordings, highlights, assets, handover." },
          ].map((p) => (
            <div key={p.n} className="accent-border rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs text-zinc-400">{p.n}</div>
              <div className="mt-2 text-sm font-semibold">{p.t}</div>
              <div className="mt-2 text-sm text-zinc-300">{p.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="accent-border rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Let’s talk</h2>
              <p className="mt-2 text-sm text-zinc-300">
                Tell us about the event — we’ll suggest the setup, timeline, and next steps.
              </p>

              <div className="mt-6 space-y-2 text-sm text-zinc-300">
                <div>
                  <span className="text-zinc-400">Email:</span> hello@headprod.com
                </div>
                <div>
                  <span className="text-zinc-400">Telegram:</span> @hp_prod
                </div>
                <div>
                  <span className="text-zinc-400">Based in:</span> Tbilisi · Worldwide production
                </div>
              </div>
            </div>

            <form className="md:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <div className="text-xs text-zinc-400">Name</div>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none ring-0 placeholder:text-zinc-600 focus:border-white/20"
                    placeholder="Your name"
                  />
                </label>
                <label className="space-y-2">
                  <div className="text-xs text-zinc-400">Company</div>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none placeholder:text-zinc-600 focus:border-white/20"
                    placeholder="Company / brand"
                  />
                </label>
                <label className="space-y-2">
                  <div className="text-xs text-zinc-400">Event date</div>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none placeholder:text-zinc-600 focus:border-white/20"
                    placeholder="DD/MM/YYYY"
                  />
                </label>
                <label className="space-y-2">
                  <div className="text-xs text-zinc-400">Preferred contact</div>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none placeholder:text-zinc-600 focus:border-white/20"
                    placeholder="WhatsApp / Telegram / Email + your handle"
                  />
                </label>
                <label className="space-y-2 sm:col-span-2">
                  <div className="text-xs text-zinc-400">Estimated budget</div>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-200 outline-none focus:border-white/20">
                      <option value="">Select a range</option>
                      <option>Under $2k</option>
                      <option>$2k-$5k</option>
                      <option>$5k-$10k</option>
                      <option>$10k-$25k</option>
                      <option>$25k+</option>
                    </select>
                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-zinc-400">
                      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </label>
                <label className="space-y-2 sm:col-span-2">
                  <div className="text-xs text-zinc-400">Message</div>
                  <textarea
                    className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm outline-none placeholder:text-zinc-600 focus:border-white/20"
                    placeholder="Format, platforms, venue, number of speakers, anything important…"
                  />
                </label>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-300 to-violet-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:from-cyan-200 hover:to-violet-200"
                >
                  Send request
                </button>
                <p className="text-xs text-zinc-400">We usually reply within 24 hours.</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-3 px-4 py-10 text-sm text-zinc-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>© {new Date().getFullYear()} Head Production</div>
          <div className="flex gap-6">
            <a className="transition-colors hover:text-white" href="/services">
              Services
            </a>
            <a className="transition-colors hover:text-white" href="/work">
              Work
            </a>
            <a className="transition-colors hover:text-white" href="/about">
              About
            </a>
          </div>
        </div>
      </footer>
      </div>
    </main>
  );
}