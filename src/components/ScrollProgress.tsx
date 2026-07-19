import { useEffect, useRef } from 'react'
import { acquireLenis, releaseLenis } from '../lib/lenis'

/** Thin brand-gradient bar pinned to the very top of the viewport, tracking read progress. */
function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const lenis = acquireLenis()

    if (!lenis) {
      const onScroll = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        const progress = max > 0 ? window.scrollY / max : 0
        bar.style.transform = `scaleX(${progress})`
      }
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll)
      return () => {
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onScroll)
      }
    }

    const onLenisScroll = () => {
      bar.style.transform = `scaleX(${lenis.progress})`
    }
    lenis.on('scroll', onLenisScroll)
    return () => {
      lenis.off('scroll', onLenisScroll)
      releaseLenis()
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] bg-line/40">
      <div ref={barRef} className="brand-gradient h-full w-full origin-left" style={{ transform: 'scaleX(0)' }} />
    </div>
  )
}

export default ScrollProgress
