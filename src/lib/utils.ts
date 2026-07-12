import type { CSSProperties } from 'react'

/** Strip spaces so a display phone number is valid in a tel: href. */
export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, '')}`

export const mailHref = (email: string, subject?: string) =>
  subject ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : `mailto:${email}`

/** Typed escape hatch for passing CSS custom properties via `style`. */
export const cssVars = (vars: Record<string, string>) => vars as CSSProperties

/** Zero-pads a 1-based index to the `01`, `02` … form used across the site. */
export const pad = (n: number) => String(n).padStart(2, '0')
