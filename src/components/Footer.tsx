import { Link } from 'react-router-dom'
import { company, nav, services } from '../data/site'
import { mailHref, telHref } from '../lib/utils'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4 md:px-10">
        <div className="md:col-span-1">
          <p className="font-display text-2xl font-extrabold">
            Dynamic<span className="text-brand-lit">Delta</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">{company.tagline}</p>
          <p className="eyebrow mt-6 border-brand-lit/30 bg-brand-lit/10 text-brand-lit">
            Est. {company.founded} · Dubai
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-brand-lit">Navigate</p>
          <ul className="mt-6 space-y-3">
            {nav.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-paper/70 transition-colors duration-300 hover:text-brand-lit"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-brand-lit">Divisions</p>
          <ul className="mt-6 space-y-3">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  to="/services"
                  className="text-sm text-paper/70 transition-colors duration-300 hover:text-brand-lit"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-brand-lit">Contact</p>
          <address className="mt-6 space-y-4 text-sm not-italic text-paper/70">
            <p className="leading-relaxed">{company.address}</p>
            <p className="text-xs text-paper/50">{company.poBox}</p>
            <div>
              {company.phones.map((phone) => (
                <a
                  key={phone}
                  href={telHref(phone)}
                  className="block font-medium transition-colors duration-300 hover:text-brand-lit"
                >
                  {phone}
                </a>
              ))}
            </div>
            <a
              href={mailHref(company.email)}
              className="block transition-colors duration-300 hover:text-brand-lit"
            >
              {company.email}
            </a>
            <p className="text-xs text-paper/50">{company.hours}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-paper/50 md:flex-row md:items-center md:justify-between md:px-10">
          <p>
            &copy; {year} {company.name}. All rights reserved.
          </p>
          <p className="font-semibold uppercase tracking-wide text-paper/60">
            Mechanical · Electrical · Plumbing
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
