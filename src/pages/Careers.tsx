import Reveal from '../components/Reveal'
import { PageHero, Section, SectionHeading } from '../components/ui'
import { NumberedCard, Row } from '../components/cards'
import { company } from '../data/site'
import { mailHref } from '../lib/utils'

const openings = [
  { role: 'Senior MEP Project Engineer', division: 'Electromechanical', type: 'Full Time', location: 'Business Bay, Dubai' },
  { role: 'HV Commissioning Engineer', division: 'Electrical & Power', type: 'Full Time', location: 'Jebel Ali, Dubai' },
  { role: 'SCADA / PLC Programmer', division: 'Automation', type: 'Full Time', location: 'Business Bay, Dubai' },
  { role: 'QHSE Officer', division: 'Group', type: 'Full Time', location: 'Site-based, UAE' },
  { role: 'Interior Fit-Out Foreman', division: 'Interiors', type: 'Contract', location: 'Downtown Dubai' },
]

const benefits = [
  {
    title: 'Continuous Learning',
    body: 'Certification pathways and training budgets across every discipline the group holds.',
  },
  {
    title: 'Care for People',
    body: 'Housing, transport, medical cover and a leadership team that knows your name.',
  },
  {
    title: 'Safety First',
    body: 'HSE is the precondition for every hour worked — never a target we trade against.',
  },
  {
    title: 'Real Progression',
    body: 'Our engineers grow into division leads. Most of our management started on site.',
  },
]

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build a career that stands up."
        lead="We hire engineers and technicians who take the work personally — and we invest in them for the long term."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Open roles */}
      <Section>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading eyebrow="Open Positions">
              Currently <span className="text-brand-deep italic">hiring</span>
            </SectionHeading>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-sm text-sm leading-relaxed text-ink-dim">
              Don&rsquo;t see your discipline? Send your CV to{' '}
              <a
                href={mailHref(company.email)}
                className="font-semibold text-brand-deep transition-colors hover:text-brand"
              >
                {company.email}
              </a>{' '}
              — we keep strong applications on file.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-4">
          {openings.map((job, i) => (
            <Reveal key={job.role} delay={i * 70}>
              <a href={mailHref(company.email, `Application — ${job.role}`)} className="block">
                <Row className="items-center md:grid-cols-[2fr_1fr_1fr_auto]">
                  <h3 className="display text-2xl transition-colors duration-300 group-hover:text-brand-deep md:text-3xl">
                    {job.role}
                  </h3>
                  <p className="text-sm font-bold text-brand-deep">{job.division}</p>
                  <p className="text-sm text-ink-dim">{job.location}</p>

                  <div className="flex items-center gap-6">
                    <span className="rounded-full border border-line px-4 py-2 text-xs font-semibold text-ink-dim">
                      {job.type}
                    </span>
                    <span className="text-lg text-brand-deep transition-transform duration-500 group-hover:translate-x-1">
                      &#8594;
                    </span>
                  </div>
                </Row>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Why work here */}
      <Section className="bg-paper-soft">
        <Reveal>
          <SectionHeading eyebrow="Life at Dynamic Delta">
            We look after <span className="text-brand-deep italic">our own</span>
          </SectionHeading>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <Reveal
              key={benefit.title}
              delay={i * 90}
              direction={i % 2 === 0 ? 'left' : 'right'}
              className="card p-8"
            >
              <NumberedCard index={i + 1} {...benefit} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}

export default Careers
