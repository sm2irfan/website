import { useEffect, useRef, type ElementType, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Stagger in milliseconds, for revealing siblings in sequence. */
  delay?: number
  className?: string
  as?: ElementType
}

/**
 * Fades + lifts its children into place the first time they come near the
 * viewport, then stays settled — it doesn't hide again on scroll-up. The
 * generous bottom rootMargin pre-triggers content that's already close to
 * the fold on load (e.g. right below a tall hero), so pages don't render
 * with a blank gap before the user scrolls.
 */
function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0, rootMargin: '0px 0px 150px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  )
}

export default Reveal
