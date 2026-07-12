import { Link } from 'react-router-dom'

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

/** Mark + wordmark, linking home. */
export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Dynamic Delta — home">
      <DeltaMark className="h-7 w-auto text-brand" />
      <span className="font-display text-lg tracking-tight text-bone">
        Dynamic<span className="text-brand">Delta</span>
      </span>
    </Link>
  )
}
