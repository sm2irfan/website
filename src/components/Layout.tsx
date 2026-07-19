import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'
import { acquireLenis, getLenis, releaseLenis } from '../lib/lenis'

function Layout() {
  const { pathname } = useLocation()

  // Owns the smooth-scroll instance for the app's lifetime.
  useEffect(() => {
    acquireLenis()
    return () => releaseLenis()
  }, [])

  // Land at the top of each page rather than inheriting the previous scroll
  useEffect(() => {
    const lenis = getLenis()
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    }
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
