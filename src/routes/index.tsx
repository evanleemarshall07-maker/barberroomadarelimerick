import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  ArrowUpRight,
  Radio,
  Route as RouteIcon,
  ClipboardList,
  BellRing,
  Check,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const FEATURES = [
  {
    n: '01',
    icon: <Radio size={22} strokeWidth={1.5} />,
    title: 'Live crew status, without the group chat',
    description:
      "Every truck, tech, and ticket shows up on one board the second a status changes. No more scrolling a 400-message thread to find out if Unit 12 is still on-site.",
    stat: '11 min',
    statLabel: 'average delay before Almanac flags a stalled job',
  },
  {
    n: '02',
    icon: <RouteIcon size={22} strokeWidth={1.5} />,
    title: 'Routes that re-plan themselves at 6:40am',
    description:
      "When a job cancels or a tech calls in, Almanac re-sequences the remaining stops by drive time and skill match — before your dispatcher has finished their coffee.",
    stat: '3.4',
    statLabel: 'fewer miles driven per route, on average',
  },
  {
    n: '03',
    icon: <ClipboardList size={22} strokeWidth={1.5} />,
    title: 'Paperwork that fills itself in from the field',
    description:
      'Photos, signatures, and parts used get attached to the job automatically. Your billing team stops chasing techs for the form they forgot to submit on Friday.',
    stat: '2 days',
    statLabel: 'shaved off the invoice-to-payment cycle',
  },
  {
    n: '04',
    icon: <BellRing size={22} strokeWidth={1.5} />,
    title: 'Alerts tuned to what actually needs you',
    description:
      "Almanac learns which delays are routine and which ones aren't, so you get paged for the stuck truck on the highway, not the one running four minutes late.",
    stat: '68%',
    statLabel: 'fewer after-hours pages in the first month',
  },
]

const TESTIMONIALS = [
  {
    quote:
      "We ran dispatch out of a shared spreadsheet and a group text for six years. I didn't believe software could fix that until I watched our no-show rate drop in the first two weeks.",
    name: 'Marisol Padrón',
    role: 'Director of Field Ops',
    company: 'Cascade Mechanical',
  },
  {
    quote:
      "The re-routing alone paid for the subscription. We used to eat a callback fee almost every week from a tech showing up to a locked gate. Almanac just knows the site notes now.",
    name: 'Dave Okonkwo-Reyes',
    role: 'Operations Manager',
    company: 'Ferrous & Pine Services',
  },
  {
    quote:
      "My favorite feature is the one nobody demos: the audit trail. When a customer disputes a charge, I have the timestamp, the photo, and the signature in about eleven seconds.",
    name: 'Priya Chandrasekaran',
    role: 'Billing Lead',
    company: 'Northbank Utilities',
  },
  {
    quote:
      "Our techs are not technology people, to put it kindly. Three of them were fully onboarded during a lunch break. That tells you everything about how little friction there is.",
    name: 'Tobias Renard',
    role: 'Regional Supervisor',
    company: 'Anchor Line Electrical',
  },
]

function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--paper)' }}>
      <SiteNav />
      <Hero />
      <Proof />
      <Features />
      <Testimonials />
      <CallToAction />
      <SiteFooter />
    </div>
  )
}

function SiteNav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm" style={{ background: 'rgba(243,237,226,0.86)', borderBottom: '1px solid var(--line)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-xl italic tracking-tight" style={{ color: 'var(--ink)' }}>
          Almanac
        </a>
        <nav className="hidden md:flex items-center gap-8 text-[13px] uppercase tracking-[0.12em]" style={{ color: 'var(--ink-soft)' }}>
          <a href="#features" className="underline-swipe">Product</a>
          <a href="#testimonials" className="underline-swipe">Customers</a>
          <a href="#signup" className="underline-swipe">Field notes</a>
        </nav>
        <a
          href="#signup"
          className="text-[13px] uppercase tracking-[0.12em] font-semibold px-5 py-2.5 rounded-full transition-transform hover:-translate-y-0.5"
          style={{ background: 'var(--ink)', color: 'var(--paper)' }}
        >
          Get a walkthrough
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28">
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-32 w-[520px] h-[520px] rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--gold), transparent 70%)' }}
      />
      <div className="max-w-6xl mx-auto relative grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-8 items-end">
        <div className="reveal">
          <p
            className="text-[13px] uppercase tracking-[0.2em] font-semibold mb-6"
            style={{ color: 'var(--rust-deep)' }}
          >
            Dispatch software for field service teams
          </p>
          <h1 className="font-display text-[13vw] md:text-[5.2rem] leading-[0.95] tracking-tight" style={{ color: 'var(--ink)' }}>
            Nobody should find
            <br />
            out about a missed
            <br />
            <span className="italic" style={{ color: 'var(--rust)' }}>job</span> from a customer.
          </h1>
        </div>
        <div className="reveal md:pb-3" style={{ animationDelay: '120ms' }}>
          <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--ink-soft)' }}>
            Almanac watches your routes, your crews, and your paperwork in one place —
            and tells you what's about to go wrong two hours before it does, not two
            hours after the angry call.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#signup"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[15px] transition-transform hover:-translate-y-0.5"
              style={{ background: 'var(--rust)', color: 'var(--paper)' }}
            >
              Start a 14-day pilot <ArrowUpRight size={17} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[15px] border transition-colors"
              style={{ borderColor: 'var(--ink)', color: 'var(--ink)' }}
            >
              See how it works
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 md:mt-20 pt-8" style={{ borderTop: '1px solid var(--line)' }}>
        <p className="text-[12px] uppercase tracking-[0.18em] mb-5" style={{ color: 'var(--ink-soft)' }}>
          Running dispatch for
        </p>
        <div className="flex flex-wrap gap-x-10 gap-y-3 font-display text-xl md:text-2xl italic" style={{ color: 'var(--ink-soft)' }}>
          <span>Cascade Mechanical</span>
          <span>Ferrous &amp; Pine</span>
          <span>Northbank Utilities</span>
          <span>Anchor Line Electrical</span>
          <span>Kestrel HVAC Group</span>
        </div>
      </div>
    </section>
  )
}

function Proof() {
  const stats = [
    { value: '212', label: 'field teams dispatching on Almanac' },
    { value: '1.8M', label: 'jobs routed through the platform to date' },
    { value: '96%', label: 'of customers still onboard after year one' },
  ]
  return (
    <section className="px-6 md:px-10 py-4">
      <div
        className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8 md:gap-6 rounded-3xl px-8 md:px-12 py-10"
        style={{ background: 'var(--ink)', color: 'var(--paper)' }}
      >
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-4xl md:text-5xl italic mb-2" style={{ color: 'var(--gold)' }}>
              {s.value}
            </p>
            <p className="text-sm leading-snug opacity-80">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="features" className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="text-[13px] uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: 'var(--rust-deep)' }}>
            What changes on week one
          </p>
          <h2 className="font-display text-4xl md:text-5xl italic leading-tight" style={{ color: 'var(--ink)' }}>
            Four ways your Monday morning gets quieter
          </h2>
        </div>

        <div className="flex flex-col">
          {FEATURES.map((f, i) => (
            <div
              key={f.n}
              className={`grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 ${i !== 0 ? 'border-t' : ''}`}
              style={{ borderColor: 'var(--line)' }}
            >
              <div className={`md:col-span-5 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <span className="font-display italic text-sm block mb-3" style={{ color: 'var(--rust)' }}>
                  {f.n}
                </span>
                <div className="flex items-center gap-3 mb-4" style={{ color: 'var(--moss)' }}>
                  {f.icon}
                </div>
                <h3 className="font-display text-2xl md:text-3xl leading-snug mb-4" style={{ color: 'var(--ink)' }}>
                  {f.title}
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                  {f.description}
                </p>
              </div>
              <div
                className={`md:col-span-6 flex items-center ${i % 2 === 1 ? 'md:order-1 md:col-start-1' : 'md:col-start-7'}`}
              >
                <div
                  className="w-full rounded-2xl p-8 md:p-10"
                  style={{ background: 'var(--paper-dim)', border: '1px solid var(--line)' }}
                >
                  <p className="font-display text-6xl md:text-7xl italic mb-3" style={{ color: 'var(--ink)' }}>
                    {f.stat}
                  </p>
                  <p className="text-sm uppercase tracking-[0.1em]" style={{ color: 'var(--ink-soft)' }}>
                    {f.statLabel}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS]
  return (
    <section id="testimonials" className="py-24 md:py-28" style={{ background: 'var(--paper-dim)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 mb-14">
        <p className="text-[13px] uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: 'var(--rust-deep)' }}>
          From the dispatch floor
        </p>
        <h2 className="font-display text-4xl md:text-5xl italic leading-tight max-w-xl" style={{ color: 'var(--ink)' }}>
          People who used to dread Mondays
        </h2>
      </div>

      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex gap-6 w-max marquee-track hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <figure
              key={i}
              className="w-[320px] md:w-[380px] shrink-0 rounded-2xl p-8 flex flex-col justify-between"
              style={{ background: 'var(--paper)', border: '1px solid var(--line)' }}
            >
              <blockquote className="leading-relaxed mb-6" style={{ color: 'var(--ink)' }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="text-sm">
                <span className="font-semibold block" style={{ color: 'var(--ink)' }}>
                  {t.name}
                </span>
                <span style={{ color: 'var(--ink-soft)' }}>
                  {t.role}, {t.company}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-28">
      <div
        className="max-w-6xl mx-auto rounded-3xl px-8 md:px-16 py-16 md:py-20 text-center relative overflow-hidden"
        style={{ background: 'var(--ink)' }}
      >
        <div
          aria-hidden="true"
          className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--rust), transparent 70%)' }}
        />
        <p className="text-[13px] uppercase tracking-[0.2em] font-semibold mb-6 relative" style={{ color: 'var(--gold)' }}>
          Fourteen days, your real routes
        </p>
        <h2
          className="font-display text-4xl md:text-6xl italic leading-tight mb-8 max-w-2xl mx-auto relative"
          style={{ color: 'var(--paper)' }}
        >
          Bring one route tomorrow. We'll show you what it missed today.
        </h2>
        <a
          href="#signup"
          className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-[15px] transition-transform hover:-translate-y-0.5"
          style={{ background: 'var(--rust)', color: 'var(--paper)' }}
        >
          Book the pilot <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  )
}

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/newsletter-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'newsletter', email }),
      })
      if (!res.ok) throw new Error('submission failed')
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <p className="flex items-center gap-2 text-sm" style={{ color: 'var(--gold)' }}>
        <Check size={16} /> You're on the list — first note lands next Tuesday.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
      <input type="hidden" name="form-name" value="newsletter" />
      <p style={{ display: 'none' }}>
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        required
        placeholder="you@fieldcompany.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 rounded-full text-sm outline-none border"
        style={{ background: 'var(--ink-soft)', color: 'var(--paper)', borderColor: 'rgba(243,237,226,0.25)' }}
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        style={{ background: 'var(--rust)', color: 'var(--paper)' }}
      >
        {status === 'submitting' ? 'Sending…' : 'Get field notes'}
      </button>
      {status === 'error' && (
        <p className="text-sm sm:absolute" style={{ color: 'var(--rust)' }}>
          Something went wrong — try again in a moment.
        </p>
      )}
    </form>
  )
}

function SiteFooter() {
  return (
    <footer id="signup" className="px-6 md:px-10 pt-20 pb-10" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-14 pb-14" style={{ borderBottom: '1px solid rgba(243,237,226,0.14)' }}>
          <div>
            <p className="font-display text-3xl italic mb-4">Field notes, monthly</p>
            <p className="mb-6 max-w-sm opacity-75 leading-relaxed">
              One email a month on routing math, dispatcher habits, and the small
              process changes that saved our customers real hours. No product
              pitches, unsubscribe whenever.
            </p>
            <NewsletterForm />
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="uppercase tracking-[0.15em] text-xs opacity-60 mb-4">Product</p>
              <ul className="space-y-3 opacity-85">
                <li><a href="#features" className="underline-swipe">Routing</a></li>
                <li><a href="#features" className="underline-swipe">Dispatch board</a></li>
                <li><a href="#features" className="underline-swipe">Field forms</a></li>
              </ul>
            </div>
            <div>
              <p className="uppercase tracking-[0.15em] text-xs opacity-60 mb-4">Company</p>
              <ul className="space-y-3 opacity-85">
                <li><a href="#testimonials" className="underline-swipe">Customers</a></li>
                <li><a href="#top" className="underline-swipe">About</a></li>
                <li><a href="#signup" className="underline-swipe">Talk to us</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 text-xs opacity-60">
          <span>© 2026 Almanac Dispatch, Inc. Built for crews that hate surprises.</span>
          <span className="font-display italic text-sm opacity-90">Almanac</span>
        </div>
      </div>
    </footer>
  )
}
