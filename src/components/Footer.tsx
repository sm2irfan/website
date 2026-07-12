import { Link } from 'react-router-dom'
import { company, nav, services } from '../data/site'
import { mailHref, telHref } from '../lib/utils'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-ink-soft">
      {/* Oversized wordmark anchoring the base of every page */}
      <div className="overflow-hidden border-b border-line px-6 py-16 md:px-10">
        <p className="display mx-auto max-w-7xl text-[13vw] leading-none text-bone/[0.07] select-none">
          DYNAMIC DELTA
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4 md:px-10">
        <div className="md:col-span-1">
          <p className="font-display text-2xl">
            Dynamic<span className="text-bronze">Delta</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone-dim">
            {company.tagline}
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-bronze">
            Est. {company.founded} · Dubai
          </p>
        </div>

        <div>
          <p className="eyebrow">Navigate</p>
          <ul className="mt-6 space-y-3">
            {nav.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-bone-dim transition-colors duration-300 hover:text-bronze"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Divisions</p>
          <ul className="mt-6 space-y-3">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  to="/services"
                  className="text-sm text-bone-dim transition-colors duration-300 hover:text-bronze"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Contact</p>
          <address className="mt-6 space-y-4 text-sm not-italic text-bone-dim">
            <p className="leading-relaxed">{company.address}</p>
            <div>
              {company.phones.map((phone) => (
                <a
                  key={phone}
                  href={telHref(phone)}
                  className="block font-mono transition-colors duration-300 hover:text-bronze"
                >
                  {phone}
                </a>
              ))}
            </div>
            <a
              href={mailHref(company.email)}
              className="block transition-colors duration-300 hover:text-bronze"
            >
              {company.email}
            </a>
            <p className="font-mono text-xs">{company.hours}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 font-mono text-[11px] tracking-[0.15em] text-bone-dim md:flex-row md:items-center md:justify-between md:px-10">
          <p>
            &copy; {year} {company.name}. All rights reserved.
          </p>
          <p className="uppercase">Mechanical · Electrical · Plumbing</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
