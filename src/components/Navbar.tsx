import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Logo } from './Logo'
import { company, nav } from '../data/site'
import { pad, telHref, mailHref } from '../lib/utils'

/** How long the sliding doors take to meet — content waits for this. */
const DOOR_TRAVEL = 900
const DOORS_CLOSED = DOOR_TRAVEL - 150 // start the cascade just as they land

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  // Solidify the bar once the hero has scrolled past
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Lock the page behind the overlay while it's open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled && !menuOpen
            ? 'border-b border-line bg-ink/85 backdrop-blur-md'
            : 'border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Logo />

          <nav className="hidden items-center gap-10 lg:flex">
            {nav.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative font-mono text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                    isActive ? 'text-brand' : 'text-bone-dim hover:text-bone'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-px bg-brand transition-all duration-400 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a
              href={telHref(company.phones[0])}
              className="hidden font-mono text-[11px] tracking-[0.15em] text-bone-dim transition-colors hover:text-brand xl:block"
            >
              {company.phones[0]}
            </a>

            {/* Two bars that cross into an X while the overlay is open */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="group relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-2"
            >
              <span
                className={`h-px w-7 bg-bone transition-all duration-400 ${
                  menuOpen ? 'translate-y-[4.5px] rotate-45' : 'group-hover:w-5'
                }`}
              />
              <span
                className={`h-px w-7 bg-bone transition-all duration-400 ${
                  menuOpen ? '-translate-y-[4.5px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay menu — two panels close like sliding doors, then content fades up */}
      <div
        inert={!menuOpen}
        className={`fixed inset-0 z-40 ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {/* Left door. Overlaps the seam by a pixel so no hairline shows between halves. */}
        <div
          className={`absolute inset-y-0 left-0 w-[calc(50%+1px)] bg-ink transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        />
        {/* Right door */}
        <div
          className={`absolute inset-y-0 right-0 w-[calc(50%+1px)] bg-ink transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        />

        <div className="relative mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-16 px-6 pt-24 md:px-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Left panel: links enter from the left, top one first */}
          <nav>
            <ul>
              {nav.map((link, i) => (
                <li key={link.to} className="overflow-hidden">
                  {/* Border lives on the animated element, so it hides with the link */}
                  <Link
                    to={link.to}
                    className="group flex items-baseline gap-6 border-b border-line py-4 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      opacity: menuOpen ? 1 : 0,
                      transform: menuOpen ? 'none' : 'translateX(-100%)',
                      // Wait for the doors to shut, then cascade down the list
                      transitionDelay: `${menuOpen ? DOORS_CLOSED + i * 130 : 0}ms`,
                    }}
                  >
                    <span className="font-mono text-[11px] text-brand">{pad(i + 1)}</span>
                    <span className="display text-4xl text-bone transition-colors duration-300 group-hover:text-brand md:text-6xl">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right panel: blocks enter from the right, on the same cascade */}
          <div className="space-y-8">
            {[
              <>
                <p className="eyebrow">Studio</p>
                <p className="mt-4 max-w-xs leading-relaxed text-bone-dim">{company.address}</p>
              </>,
              <>
                <p className="eyebrow">Enquiries</p>
                <a
                  href={mailHref(company.email)}
                  className="mt-4 block font-display text-2xl text-bone transition-colors hover:text-brand"
                >
                  {company.email}
                </a>
                {company.phones.map((phone) => (
                  <a
                    key={phone}
                    href={telHref(phone)}
                    className="mt-1 block font-mono text-sm text-bone-dim transition-colors hover:text-brand"
                  >
                    {phone}
                  </a>
                ))}
              </>,
            ].map((block, i) => (
              <div
                key={i}
                className="overflow-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'none' : 'translateX(100%)',
                  transitionDelay: `${menuOpen ? DOORS_CLOSED + i * 200 : 0}ms`,
                }}
              >
                {block}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
