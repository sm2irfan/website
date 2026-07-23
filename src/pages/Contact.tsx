import { useState, type FormEvent, type ReactNode } from 'react'
import Reveal from '../components/Reveal'
import { Button, Eyebrow, PageHero, Section } from '../components/ui'
import logoImage from '../assets/images/logo_latest.png'
import { company, services } from '../data/site'
import { mailHref, telHref } from '../lib/utils'

const LABEL = 'text-xs font-bold uppercase tracking-wide text-ink-dim transition-colors duration-300 group-focus-within:text-brand-deep'

const CONTROL =
  'mt-3 w-full rounded-2xl border border-line bg-surface px-5 py-3.5 text-base text-ink shadow-sm transition-all duration-300 outline-none focus:border-brand focus:shadow-[0_0_0_4px_rgba(255,107,53,0.15)]'

/** Rounded field whose label lights up brand on focus. */
function Field({
  label,
  required = false,
  children,
}: {
  label: string
  required?: boolean
  children: ReactNode
}) {
  return (
    <label className="group block">
      <span className={LABEL}>
        {label}
        {required && <span className="text-brand-deep"> *</span>}
      </span>
      {children}
    </label>
  )
}

/** Read-only line of contact detail in the coordinates panel. */
function Detail({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wide text-ink-dim">{label}</p>
      {children}
    </div>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)

  // UI only — no backend is wired up yet
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's scope your project."
        lead="Tell us what you need engineered. Our team responds to every enquiry within one working day."
        image="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=2400&q=80"
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          {/* Enquiry form */}
          <Reveal>
            <Eyebrow>Enquiry</Eyebrow>
            <h2 className="display mt-6 text-4xl md:text-5xl">Send us the brief</h2>

            {sent ? (
              <div className="card mt-12 p-10">
                <p className="display text-3xl text-brand-deep">Thank you.</p>
                <p className="mt-4 leading-relaxed text-ink-dim">
                  Your enquiry has been captured. One of our engineers will be in touch within one
                  working day.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-8 text-sm font-bold text-brand-deep transition-colors hover:text-brand"
                >
                  Send another &#8594;
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-12 space-y-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Full Name" required>
                    <input type="text" name="name" required className={CONTROL} />
                  </Field>
                  <Field label="Company">
                    <input type="text" name="company" className={CONTROL} />
                  </Field>
                  <Field label="Email" required>
                    <input type="email" name="email" required className={CONTROL} />
                  </Field>
                  <Field label="Phone">
                    <input type="tel" name="phone" className={CONTROL} />
                  </Field>
                </div>

                <Field label="Division of Interest">
                  <select name="division" defaultValue="" className={CONTROL}>
                    <option value="">Select a division</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Project Details" required>
                  <textarea name="message" rows={4} required className={`${CONTROL} resize-none`} />
                </Field>

                <Button type="submit" padding="px-10 py-4">
                  Submit Enquiry
                </Button>
              </form>
            )}
          </Reveal>

          {/* Coordinates */}
          <Reveal delay={140}>
            <div className="card p-10">
              <Eyebrow>Head Office</Eyebrow>
              <address className="mt-8 space-y-10 not-italic">
                <Detail label="Address">
                  <p className="mt-3 text-lg leading-relaxed text-ink">{company.address}</p>
                  <p className="mt-1 text-sm text-ink-dim">{company.poBox}</p>
                </Detail>

                <Detail label="Telephone">
                  {company.phones.map((phone) => (
                    <a
                      key={phone}
                      href={telHref(phone)}
                      className="mt-3 block font-display text-2xl font-bold text-ink transition-colors duration-300 hover:text-brand-deep"
                    >
                      {phone}
                    </a>
                  ))}
                </Detail>

                <Detail label="Email">
                  <a
                    href={mailHref(company.email)}
                    className="mt-3 block font-display text-2xl font-bold text-ink transition-colors duration-300 hover:text-brand-deep"
                  >
                    {company.email}
                  </a>
                </Detail>

                <Detail label="Working Hours">
                  <p className="mt-3 text-lg text-ink">{company.hours}</p>
                  <p className="mt-1 text-sm text-ink-dim">Closed Sundays</p>
                </Detail>
              </address>
            </div>

            {/* Map placeholder — drop in an embed once the client provides one */}
            <div className="card brand-glow mt-8 flex aspect-[16/10] items-center justify-center overflow-hidden bg-paper-soft">
              <div className="text-center">
                <img src={logoImage} alt="Dynamic Delta" className="mx-auto h-12 w-auto object-contain" />
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-ink-dim">
                  {company.address}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}

export default Contact
