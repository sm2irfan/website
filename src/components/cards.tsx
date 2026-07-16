import type { ReactNode } from 'react'
import { pad } from '../lib/utils'

type Project = (typeof import('../data/site'))['projects'][number]

/* ---------------------------- Numbered card ----------------------------- */

/**
 * The `01 / Title / body` cell used for values, benefits and process steps.
 * The caller owns the outer wrapper, since its background varies by section.
 */
export function NumberedCard({
  index,
  title,
  body,
}: {
  index: number
  title: string
  body: string
}) {
  return (
    <>
      <span className="brand-gradient inline-flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold text-ink">
        {pad(index)}
      </span>
      <h3 className="display mt-6 text-2xl">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-ink-dim">{body}</p>
    </>
  )
}

/* ----------------------------- Project card ----------------------------- */

/** Image, sector badge, and — optionally — a scope panel that rises on hover. */
export function ProjectMedia({
  project,
  scopePanel = false,
}: {
  project: Project
  scopePanel?: boolean
}) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/0 to-ink/0 transition-opacity duration-700 group-hover:opacity-0" />

      <span className="absolute top-6 left-6 rounded-full bg-paper/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-ink shadow-lg backdrop-blur-sm">
        {project.sector}
      </span>

      {scopePanel && (
        <div className="absolute inset-x-0 bottom-0 translate-y-full rounded-b-3xl bg-ink/90 px-6 py-5 backdrop-blur-sm transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
          <p className="text-xs font-bold uppercase tracking-wide text-brand-lit">Scope</p>
          <p className="mt-1 text-sm text-paper">{project.scope}</p>
        </div>
      )}
    </div>
  )
}

/** Title, location and year beneath a project image. */
export function ProjectMeta({
  project,
  showScope = false,
  as: Heading = 'h3',
}: {
  project: Project
  showScope?: boolean
  as?: 'h2' | 'h3'
}) {
  return (
    <div className="mt-6 flex items-start justify-between gap-6">
      <div>
        <Heading className="display text-2xl transition-colors duration-300 group-hover:text-brand-deep md:text-3xl">
          {project.title}
        </Heading>
        <p className="mt-2 text-sm font-medium text-ink-dim">{project.location}</p>
      </div>

      <div className="text-right">
        <p className="text-sm font-bold text-brand-deep">{project.year}</p>
        {showScope && <p className="mt-2 text-xs text-ink-dim">{project.scope}</p>}
      </div>
    </div>
  )
}

/* ------------------------------ Detail list ----------------------------- */

/** Bulleted capability chips — used under each service division. */
export function PointList({ points }: { points: readonly string[] }) {
  return (
    <ul className="mt-10 grid gap-3 sm:grid-cols-2">
      {points.map((point) => (
        <li
          key={point}
          className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 text-sm font-medium text-ink-dim transition-colors duration-300 hover:border-brand hover:text-ink"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/15 text-xs text-brand-deep">
            &#10003;
          </span>
          {point}
        </li>
      ))}
    </ul>
  )
}

/* --------------------------------- Row ---------------------------------- */

/** Card row used by the timeline and the careers list. */
export function Row({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`card group grid gap-4 px-6 py-8 md:gap-8 md:px-8 ${className}`}
    >
      {children}
    </div>
  )
}
