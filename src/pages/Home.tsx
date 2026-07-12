import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { Button, Marquee, Section, SectionHeading, Stat } from '../components/ui'
import { NumberedCard, ProjectMedia, ProjectMeta } from '../components/cards'
import { capabilities, company, projects, services, stats, values } from '../data/site'
import { cssVars } from '../lib/utils'

/* -------------------------------- Hero --------------------------------- */

const HERO_LINES = [
  { delay: 350, content: <>Engineering</> },
  {
    delay: 470,
    content: (
      <>
        <span className="text-brand italic">the</span> standard
      </>
    ),
  },
  { delay: 590, content: <>for the Emirates.</> },
]

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="ken-burns h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-24 md:px-10">
        <div className="rise" style={cssVars({ '--rise-delay': '200ms' })}>
          <span className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-brand" />
            Established {company.founded} · Dubai, UAE
          </span>
        </div>

        <h1 className="display mt-8 text-6xl md:text-8xl lg:text-[7.5rem]">
          {HERO_LINES.map((line, i) => (
            <span key={i} className="rise" style={cssVars({ '--rise-delay': `${line.delay}ms` })}>
              <span>{line.content}</span>
            </span>
          ))}
        </h1>

        <div className="reveal is-visible mt-10 max-w-lg" style={{ transitionDelay: '900ms' }}>
          <p className="text-lg leading-relaxed text-bone-dim">
            Two decades of electromechanical, automation and turnkey MEP delivery across the Gulf —
            built on the promise of{' '}
            <span className="text-bone">
              quality you deserve, and dependability you can count on.
            </span>
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/projects">View Our Work</Button>
            <Button to="/contact" variant="ghost">
              Start a Project
            </Button>
          </div>
        </div>
      </div>

      {/* Vertical scroll cue pinned to the right rail */}
      <div className="absolute right-10 bottom-10 hidden items-center gap-4 lg:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-dim [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="block h-16 w-px bg-gradient-to-b from-brand to-transparent" />
      </div>
    </section>
  )
}

/* ------------------------------ Introduction ---------------------------- */

function Intro() {
  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <SectionHeading eyebrow="Who We Are">
            A single group,
            <br />
            <span className="text-brand italic">seven</span> disciplines.
          </SectionHeading>
        </Reveal>

        <Reveal delay={120} className="flex flex-col justify-center">
          <p className="text-lg leading-relaxed text-bone-dim">
            Dynamic Delta Group was established in {company.founded} in the Emirate of Dubai under
            the leadership of Mr. {company.chairman}. What began as an electromechanical contractor
            now spans automation, power, LPG, interiors, facilities management and landscaping.
          </p>
          <p className="mt-6 leading-relaxed text-bone-dim">
            One contract. One accountable team. Every discipline delivered in-house — which is why
            our programmes hold their dates and our clients keep returning.
          </p>
          <Link
            to="/about"
            className="group mt-8 inline-flex w-fit items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-brand"
          >
            The Full Story
            <span className="inline-block h-px w-10 bg-brand transition-all duration-500 group-hover:w-16" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-24 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 100} className="bg-ink p-8 md:p-10">
            <Stat {...stat} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

/* ------------------------------- Services ------------------------------- */

/**
 * An editorial index of divisions. Hovering a row lifts the matching
 * photograph into the sticky frame beside it — the site's signature move.
 */
function ServicesIndex() {
  const [active, setActive] = useState(0)

  return (
    <Section className="border-t border-line">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <SectionHeading eyebrow="What We Do">
            Capabilities <span className="text-brand italic">in full</span>
          </SectionHeading>
        </Reveal>
        <Reveal delay={120}>
          <Button to="/services" variant="ghost">
            All Services
          </Button>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_0.8fr]">
        <div>
          {services.map((service, i) => {
            const isActive = active === i
            return (
              <Reveal key={service.id} delay={i * 60}>
                <Link
                  to="/services"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group flex items-center gap-6 border-t border-line py-7 last:border-b md:gap-10"
                >
                  <span
                    className={`font-mono text-xs transition-colors duration-300 ${
                      isActive ? 'text-brand' : 'text-bone-dim'
                    }`}
                  >
                    {service.index}
                  </span>

                  <span
                    className={`display flex-1 text-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:text-4xl ${
                      isActive ? 'translate-x-2 text-brand' : 'text-bone'
                    }`}
                  >
                    {service.title}
                  </span>

                  <span
                    className={`font-mono text-lg transition-all duration-500 ${
                      isActive ? 'translate-x-0 text-brand opacity-100' : '-translate-x-3 opacity-0'
                    }`}
                  >
                    &#8594;
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>

        {/* Sticky frame cross-fading to whichever row is hovered */}
        <Reveal delay={150} className="hidden lg:block">
          <div className="sticky top-32 aspect-[4/5] overflow-hidden border border-line">
            {services.map((service, i) => (
              <img
                key={service.id}
                src={service.image}
                alt={service.title}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  active === i ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="text-sm leading-relaxed text-bone-dim">{services[active].summary}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

/* ------------------------------- Projects ------------------------------- */

function FeaturedProjects() {
  return (
    <Section className="border-t border-line bg-ink-soft">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <SectionHeading eyebrow="Selected Work">
            Delivered <span className="text-brand italic">across</span> the Gulf
          </SectionHeading>
        </Reveal>
        <Reveal delay={120}>
          <Button to="/projects" variant="ghost">
            All Projects
          </Button>
        </Reveal>
      </div>

      {/* Offset grid — alternate columns drop to break the rigid rhythm */}
      <div className="mt-20 grid gap-8 md:grid-cols-2 md:gap-12">
        {projects.slice(0, 4).map((project, i) => (
          <Reveal
            key={project.id}
            delay={(i % 2) * 120}
            className={i % 2 === 1 ? 'md:mt-24' : ''}
          >
            <Link to="/projects" className="group block">
              <ProjectMedia project={project} />
              <ProjectMeta project={project} showScope />
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

/* -------------------------------- Values -------------------------------- */

function Values() {
  return (
    <Section className="border-t border-line">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <Reveal className="lg:sticky lg:top-32 lg:h-fit">
          <SectionHeading eyebrow="Why Dynamic Delta">
            The standards
            <br />
            we <span className="text-brand italic">refuse</span>
            <br />
            to lower.
          </SectionHeading>
          <p className="mt-8 max-w-sm leading-relaxed text-bone-dim">
            Reputation in this industry is built one commissioned system at a time — and lost in a
            single shortcut. We have never taken one.
          </p>
        </Reveal>

        <div className="grid gap-px bg-line sm:grid-cols-2">
          {values.map((value, i) => (
            <Reveal
              key={value.title}
              delay={i * 90}
              className="bg-ink p-8 transition-colors duration-500 hover:bg-surface md:p-10"
            >
              <NumberedCard index={i + 1} {...value} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ---------------------------------- CTA --------------------------------- */

function CallToAction() {
  return (
    <section className="relative overflow-hidden border-t border-line">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2400&q=80"
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 text-center md:px-10 md:py-40">
        <Reveal>
          <p className="eyebrow justify-center">Let&rsquo;s Build</p>
          <h2 className="display mx-auto mt-8 max-w-4xl text-5xl md:text-7xl">
            Tell us what you need <span className="text-brand italic">engineered.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl leading-relaxed text-bone-dim">
            From a single system to a full turnkey package — our engineers will scope it, price it
            honestly, and deliver it on the date we promised.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button to="/contact">Request a Consultation</Button>
            <Button to="/services" variant="ghost">
              Explore Capabilities
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* --------------------------------- Page --------------------------------- */

function Home() {
  return (
    <>
      <Hero />
      <Marquee items={capabilities} />
      <Intro />
      <ServicesIndex />
      <FeaturedProjects />
      <Values />
      <CallToAction />
    </>
  )
}

export default Home
