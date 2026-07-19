import { useEffect, useRef, type ElementType, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Stagger in milliseconds, for revealing siblings in sequence. */
  delay?: number
  className?: string
  as?: ElementType
}

/**
 * Fades + lifts its children into place whenever they enter the viewport,
 * triggering the animation every scroll cycle.
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
        } else {
          entry.target.classList.remove('is-visible')
        }
      },
      // Positive bottom margin so content already near the fold on initial
      // load (e.g. right below a tall hero, like the About page) counts as
      // "in view" immediately instead of rendering blank until the user
      // scrolls. Content further down the page still reveals/hides on the
      // normal scroll cycle once it's this close to entering the viewport.
      { threshold: 0.15, rootMargin: '0px 0px 200px 0px' },
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
