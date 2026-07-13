import { Link } from 'react-router-dom'
import logoImage from '../assets/images/logo_latest.png'

/**
 * The Dynamic Delta spiral, hand-authored from the brand mark.
 * Inherits `currentColor`, so it takes the accent of whatever it sits in.
 */
export function DeltaMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 240" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 216 C45 205 75 178 99 145 A97 97 0 1 1 232 199 C170 218 85 224 14 216 Z
           M235 118 A52 52 0 1 0 131 118 A52 52 0 1 0 235 118 Z"
      />
    </svg>
  )
}

/** Brand plaque — the original logo artwork, on a transparent background. */
export function Logo() {
  return (
    <Link to="/" aria-label="Dynamic Delta — home" className="group block h-14 md:h-16">
      <img
        src={logoImage}
        alt="Dynamic Delta — since 2005"
        className="h-full w-auto object-contain transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-105"
      />
    </Link>
  )
}
