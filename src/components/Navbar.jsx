import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Rooms', path: '/rooms' },
  { name: 'Experiences', path: '/experiences' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Booking', path: '/booking' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : -50 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="glass px-6 lg:px-12 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/" className="font-serif text-2xl text-gold tracking-wider">AURELIA</Link>
            
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs tracking-widest uppercase transition-colors ${
                    location.pathname === link.path ? 'text-gold' : 'text-white/70 hover:text-gold'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <Link to="/booking" className="magnetic-btn text-xs py-3 px-6 hidden md:inline-flex">
              Reserve Now
            </Link>
            
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-dark/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-serif text-3xl text-white hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button 
              className="absolute top-6 right-6 text-white"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}