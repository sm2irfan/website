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
      <span className="font-mono text-[11px] text-brand">{pad(index)}</span>
      <h3 className="display mt-6 text-2xl">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-bone-dim">{body}</p>
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
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-ink/30 transition-opacity duration-700 group-hover:opacity-0" />

      <span className="absolute top-6 left-6 border border-bone/30 bg-ink/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-bone backdrop-blur-sm">
        {project.sector}
      </span>

      {scopePanel && (
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/90 px-6 py-5 backdrop-blur-sm transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">Scope</p>
          <p className="mt-1 text-sm text-bone">{project.scope}</p>
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
    <div className="mt-6 flex items-start justify-between gap-6 border-t border-line pt-6">
      <div>
        <Heading className="display text-2xl transition-colors duration-300 group-hover:text-brand md:text-3xl">
          {project.title}
        </Heading>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim">
          {project.location}
        </p>
      </div>

      <div className="text-right">
        <p className="font-mono text-[11px] text-brand">{project.year}</p>
        {showScope && <p className="mt-2 text-xs text-bone-dim">{project.scope}</p>}
      </div>
    </div>
  )
}

/* ------------------------------ Detail list ----------------------------- */

/** Bulleted capability chips — used under each service division. */
export function PointList({ points }: { points: readonly string[] }) {
  return (
    <ul className="mt-10 grid gap-px bg-line sm:grid-cols-2">
      {points.map((point) => (
        <li
          key={point}
          className="flex items-center gap-3 bg-ink px-5 py-4 text-sm text-bone-dim transition-colors duration-300 hover:text-bone"
        >
          <span className="text-brand">&#9670;</span>
          {point}
        </li>
      ))}
    </ul>
  )
}

/* --------------------------------- Row ---------------------------------- */

/** Full-bleed hairline row used by the timeline and the careers list. */
export function Row({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`group grid gap-4 border-t border-line py-8 transition-colors duration-500 hover:bg-ink-soft md:gap-8 md:px-4 ${className}`}
    >
      {children}
    </div>
  )
}
