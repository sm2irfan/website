import Reveal from '../components/Reveal'
import { Button, Eyebrow, PageHero, Section, SectionHeading, Stat } from '../components/ui'
import { NumberedCard, Row } from '../components/cards'
import { company, stats, values } from '../data/site'

const timeline = [
  {
    year: '2005',
    title: 'Founded in Dubai',
    body: 'Dynamic Delta Group is established under the leadership of Mr. Abdullah Mohammad Abdalla, trading as a specialist electromechanical contractor.',
  },
  {
    year: '2011',
    title: 'Power & Automation',
    body: 'The group extends into high-voltage transmission, LV switchgear manufacturing and PLC/SCADA control systems.',
  },
  {
    year: '2016',
    title: 'Turnkey Delivery',
    body: 'Interiors, fit-out and landscaping divisions bring complete turnkey packages under a single contract.',
  },
  {
    year: '2020',
    title: 'Lifecycle Services',
    body: 'Facilities management is launched, carrying our accountability well beyond project handover.',
  },
  {
    year: 'Today',
    title: 'Seven Divisions',
    body: 'A diversified engineering group serving industrial, commercial and residential clients across the Gulf region.',
  },
]

function About() {
  return (
    <>
      <PageHero
        eyebrow="About the Group"
        title="Twenty years in the making."
        lead="From a single electromechanical contractor to a seven-division engineering group serving the Emirates."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Chairman's statement */}
      <Section>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <Reveal>
            <div className="relative aspect-[3/4] overflow-hidden border border-line">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
                alt="Dynamic Delta leadership"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="display text-xl">{company.chairman}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-brand">
                  Chairman
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col justify-center">
            <Eyebrow>The Promise</Eyebrow>
            <blockquote className="display mt-8 text-3xl leading-tight md:text-5xl">
              &ldquo;Quality you deserve, <span className="text-brand italic">and</span>{' '}
              dependability you can count on.&rdquo;
            </blockquote>
            <p className="mt-8 leading-relaxed text-bone-dim">
              That sentence has governed every contract we have signed since {company.founded}. It
              is not a marketing line — it is the standard our engineers are held to on site, and
              the reason our clients hand us their next project before the current one closes.
            </p>
            <p className="mt-6 leading-relaxed text-bone-dim">
              We build in-house capability rather than subcontract accountability. Mechanical,
              electrical, plumbing, automation, interiors, facilities and landscaping all sit under
              one roof, one programme and one point of responsibility.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-line bg-ink-soft">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <Stat {...stat} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section className="border-t border-line">
        <Reveal>
          <SectionHeading eyebrow="Our Trajectory">
            How the group <span className="text-brand italic">grew</span>
          </SectionHeading>
        </Reveal>

        <div className="mt-20">
          {timeline.map((entry, i) => (
            <Reveal key={entry.year} delay={i * 80}>
              <Row className="py-10 md:grid-cols-[160px_1fr_2fr] md:gap-10">
                <span className="display text-3xl text-brand md:text-4xl">{entry.year}</span>
                <h3 className="display text-2xl">{entry.title}</h3>
                <p className="leading-relaxed text-bone-dim">{entry.body}</p>
              </Row>
            </Reveal>
          ))}
          <div className="hairline" />
        </div>
      </Section>

      {/* Values */}
      <Section className="border-t border-line bg-ink-soft">
        <Reveal>
          <SectionHeading eyebrow="Our Values">
            What we will <span className="text-brand italic">not</span> compromise
          </SectionHeading>
        </Reveal>

        <div className="mt-16 grid gap-px bg-line md:grid-cols-2">
          {values.map((value, i) => (
            <Reveal
              key={value.title}
              delay={i * 90}
              className="bg-ink-soft p-8 transition-colors duration-500 hover:bg-surface md:p-10"
            >
              <NumberedCard index={i + 1} {...value} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-16">
          <Button to="/contact">Work With Us</Button>
        </Reveal>
      </Section>
    </>
  )
}

export default About
