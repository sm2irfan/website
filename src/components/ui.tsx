import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

/* ----------------------------- Section shell ---------------------------- */

export function Section({
  children,
  className = '',
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={`px-6 py-24 md:px-10 md:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}

/* ------------------------------ Typography ------------------------------ */

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3">
      <span className="inline-block h-px w-8 bg-bronze" />
      {children}
    </p>
  )
}

/** Eyebrow + display heading — the opening pair of nearly every section. */
export function SectionHeading({
  eyebrow,
  size = 'text-4xl md:text-6xl',
  children,
}: {
  eyebrow: string
  size?: string
  children: ReactNode
}) {
  return (
    <>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className={`display mt-6 ${size}`}>{children}</h2>
    </>
  )
}

/* ------------------------------- Buttons -------------------------------- */

type Variant = 'solid' | 'ghost'

const SWEEP_BASE =
  'group relative inline-flex items-center gap-3 overflow-hidden border font-mono text-[11px] uppercase tracking-[0.22em] transition-colors duration-500'

const VARIANTS: Record<Variant, string> = {
  solid: 'border-bronze text-bronze hover:text-ink',
  ghost: 'border-line text-bone hover:border-bone hover:text-ink',
}

const FILLS: Record<Variant, string> = {
  solid: 'bg-bronze',
  ghost: 'bg-bone',
}

/** Bronze fill sweeping up from the bottom edge — the site's one CTA motif. */
function SweepBody({ variant, children }: { variant: Variant; children: ReactNode }) {
  return (
    <>
      <span
        className={`absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100 ${FILLS[variant]}`}
      />
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
        &#8594;
      </span>
    </>
  )
}

type ButtonProps = {
  children: ReactNode
  variant?: Variant
  /** Renders a router Link when set, a native button otherwise. */
  to?: string
  type?: 'button' | 'submit'
  padding?: string
  className?: string
}

export function Button({
  children,
  variant = 'solid',
  to,
  type = 'button',
  padding = 'px-8 py-4',
  className = '',
}: ButtonProps) {
  const classes = `${SWEEP_BASE} ${VARIANTS[variant]} ${padding} ${className}`
  const body = <SweepBody variant={variant}>{children}</SweepBody>

  return to ? (
    <Link to={to} className={classes}>
      {body}
    </Link>
  ) : (
    <button type={type} className={classes}>
      {body}
    </button>
  )
}

/* ---------------------------- Animated counter --------------------------- */

/** Counts up from zero the first time the number scrolls into view. */
export function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.unobserve(entry.target)

        const duration = 1600
        const start = performance.now()

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          // ease-out-expo, so the number decelerates into its final value
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
          setDisplay(Math.round(eased * value))
          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className="display text-5xl text-bone md:text-6xl">
      {display}
      <span className="text-bronze">{suffix}</span>
    </span>
  )
}

/** A counted figure with its caption. */
export function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  return (
    <>
      <Counter value={value} suffix={suffix} />
      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim">{label}</p>
    </>
  )
}

/* ------------------------------- Marquee -------------------------------- */

/** Seamless ticker — the list is rendered twice and translated by -50%. */
export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items]

  return (
    <div className="relative flex overflow-hidden border-y border-line bg-ink-soft py-6">
      <div className="marquee-track flex shrink-0 items-center gap-12 pr-12">
        {row.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center gap-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-bone-dim">
              {item}
            </span>
            <span className="text-bronze">&#9670;</span>
          </div>
        ))}
      </div>
      {/* Fade the ticker into the page edges instead of cutting it hard */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink to-transparent" />
    </div>
  )
}

/* ----------------------------- Page banner ------------------------------ */

/** Shared masthead for every inner page. */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
}: {
  eyebrow: string
  title: string
  lead: string
  image: string
}) {
  return (
    <header className="relative flex min-h-[60vh] items-end overflow-hidden pt-32">
      <div className="absolute inset-0">
        <img src={image} alt="" className="ken-burns h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 md:px-10">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="rise display mt-6 text-5xl md:text-7xl">
          <span>{title}</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone-dim">{lead}</p>
      </div>
    </header>
  )
}
