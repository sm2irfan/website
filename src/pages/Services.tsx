import Reveal from '../components/Reveal'
import { Button, Eyebrow, PageHero, Section, SectionHeading } from '../components/ui'
import { PointList } from '../components/cards'
import { services } from '../data/site'
import { pad } from '../lib/utils'

const process = [
  {
    title: 'Scope & Survey',
    body: 'Site assessment, load calculations and a scope our engineers will stand behind.',
  },
  {
    title: 'Design & Cost',
    body: 'Detailed drawings and an honest, itemised price — no line items discovered later.',
  },
  {
    title: 'Build & Install',
    body: 'In-house crews, sequenced against the master programme and held to HSE standards.',
  },
  {
    title: 'Commission & Maintain',
    body: 'Testing, certification, handover — then lifecycle maintenance under one FM contract.',
  },
]

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Seven divisions. One contract."
        lead="Every discipline delivered in-house, sequenced by one programme and owned by one accountable team."
        image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Division detail — the image side alternates to keep the scroll alive */}
      <Section>
        <div className="space-y-28 md:space-y-40">
          {services.map((service, i) => {
            const flipped = i % 2 === 1
            return (
              <div
                key={service.id}
                id={service.id}
                className="grid scroll-mt-32 items-center gap-12 lg:grid-cols-2 lg:gap-20"
              >
                <Reveal className={flipped ? 'lg:order-2' : ''}>
                  <div className="group relative aspect-[4/3] overflow-hidden border border-line">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                    <span className="display absolute top-6 left-6 text-6xl text-bone/25">
                      {service.index}
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={120} className={flipped ? 'lg:order-1' : ''}>
                  <Eyebrow>Division {service.index}</Eyebrow>
                  <h2 className="display mt-6 text-4xl md:text-5xl">{service.title}</h2>
                  <p className="mt-6 text-lg leading-relaxed text-bone-dim">{service.summary}</p>
                  <PointList points={service.points} />
                </Reveal>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Delivery process */}
      <Section className="border-t border-line bg-ink-soft">
        <Reveal>
          <SectionHeading eyebrow="How We Deliver">
            From survey <span className="text-bronze italic">to</span> handover
          </SectionHeading>
        </Reveal>

        <div className="mt-20 grid gap-px bg-line md:grid-cols-4">
          {process.map((phase, i) => (
            <Reveal
              key={phase.title}
              delay={i * 100}
              className="group bg-ink-soft p-8 transition-colors duration-500 hover:bg-navy md:p-10"
            >
              <span className="display text-5xl text-bone/15 transition-colors duration-500 group-hover:text-bronze/40">
                {pad(i + 1)}
              </span>
              <h3 className="display mt-8 text-2xl">{phase.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-bone-dim">{phase.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-16">
          <Button to="/contact">Request a Scope</Button>
        </Reveal>
      </Section>
    </>
  )
}

export default Services
