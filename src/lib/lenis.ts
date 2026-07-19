import Lenis from 'lenis'

let instance: Lenis | null = null
let rafId: number | null = null
let refCount = 0

function raf(time: number) {
  instance?.raf(time)
  rafId = requestAnimationFrame(raf)
}

/**
 * Shared, ref-counted Lenis instance — several components can each own an
 * acquire/release pair (mount/unmount) without caring who else is using it
 * or in what order effects fire; the underlying instance is created once
 * and destroyed once the last caller releases it. Returns null under
 * prefers-reduced-motion, so callers should fall back to native scroll.
 */
export function acquireLenis(): Lenis | null {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null

  refCount += 1
  if (!instance) {
    instance = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    })
    rafId = requestAnimationFrame(raf)
  }
  return instance
}

export function releaseLenis() {
  refCount = Math.max(0, refCount - 1)
  if (refCount === 0 && instance) {
    if (rafId !== null) cancelAnimationFrame(rafId)
    instance.destroy()
    instance = null
    rafId = null
  }
}

/** Read-only access to the live instance, without affecting its lifecycle. */
export function getLenis(): Lenis | null {
  return instance
}
