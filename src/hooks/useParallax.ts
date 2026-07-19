import { useEffect, useRef } from 'react'
import { acquireLenis, releaseLenis } from '../lib/lenis'

/**
 * Subtle scroll-linked vertical parallax for a hero/section image. Moves
 * the element up to `range` px in either direction as it crosses the
 * viewport, settling at zero when the element is vertically centered.
 * No-ops under prefers-reduced-motion (transform is simply never touched).
 *
 * Apply the ref to a wrapper around the image, not the image itself, if
 * the image also has a CSS transform-animation (like .ken-burns) — an
 * inline `style.transform` set here would otherwise fight that animation
 * for the same property. The wrapper should overhang its container by at
 * least `range` px (e.g. `-inset-y-12` for range=40) so the translated
 * image never reveals empty space at the edges.
 */
export function useParallax<T extends HTMLElement>(range = 40) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let ticking = false
    const update = () => {
      ticking = false
      const rect = el.getBoundingClientRect()
      const viewportH = window.innerHeight
      // -1 (bottom at viewport top) .. 0 (centered) .. 1 (top at viewport bottom)
      const center = rect.top + rect.height / 2
      const raw = (center - viewportH / 2) / (viewportH / 2 + rect.height / 2)
      const clamped = Math.max(-1, Math.min(1, raw))
      el.style.transform = `translate3d(0, ${(-clamped * range).toFixed(1)}px, 0)`
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    update()
    const lenis = acquireLenis()
    if (lenis) {
      lenis.on('scroll', onScroll)
    } else {
      window.addEventListener('scroll', onScroll, { passive: true })
    }
    window.addEventListener('resize', onScroll)

    return () => {
      if (lenis) {
        lenis.off('scroll', onScroll)
        releaseLenis()
      } else {
        window.removeEventListener('scroll', onScroll)
      }
      window.removeEventListener('resize', onScroll)
    }
  }, [range])

  return ref
}
