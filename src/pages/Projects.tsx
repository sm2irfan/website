import { useMemo, useState } from 'react'
import Reveal from '../components/Reveal'
import { Button, PageHero, Section } from '../components/ui'
import { ProjectMedia, ProjectMeta } from '../components/cards'
import { projects } from '../data/site'
import { pad } from '../lib/utils'

function Projects() {
  const sectors = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.sector)))],
    [],
  )
  const [filter, setFilter] = useState('All')

  const visible = filter === 'All' ? projects : projects.filter((p) => p.sector === filter)

  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title="Commissioned. Certified. Standing."
        lead="Industrial, commercial and residential programmes delivered across Dubai and the wider Gulf."
        image="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=2400&q=80"
      />

      <Section>
        <Reveal className="flex flex-wrap items-center gap-3 border-b border-line pb-8">
          {sectors.map((sector) => (
            <button
              key={sector}
              type="button"
              onClick={() => setFilter(sector)}
              className={`border px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] transition-all duration-400 ${
                filter === sector
                  ? 'border-bronze bg-bronze text-ink'
                  : 'border-line text-bone-dim hover:border-bone hover:text-bone'
              }`}
            >
              {sector}
            </button>
          ))}
          <span className="ml-auto font-mono text-[11px] tracking-[0.2em] text-bone-dim">
            {pad(visible.length)} Projects
          </span>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-12">
          {visible.map((project, i) => (
            <Reveal
              // Re-key on the filter so cards re-animate when the set changes
              key={`${filter}-${project.id}`}
              delay={(i % 2) * 100}
              className={i % 2 === 1 ? 'md:mt-20' : ''}
            >
              <article className="group">
                <ProjectMedia project={project} scopePanel />
                <ProjectMeta project={project} as="h2" />
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line bg-ink-soft text-center">
        <Reveal>
          <p className="eyebrow justify-center">What&rsquo;s Next</p>
          <h2 className="display mx-auto mt-8 max-w-3xl text-4xl md:text-6xl">
            Your project belongs <span className="text-bronze italic">on this page.</span>
          </h2>
          <div className="mt-12 flex justify-center">
            <Button to="/contact">Start the Conversation</Button>
          </div>
        </Reveal>
      </Section>
    </>
  )
}

export default Projects
