import { useState, useEffect } from 'react'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { BUSINESS, WHATSAPP_URL } from '../constants'

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#packages', label: 'Packages' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#training', label: 'Training' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-md' : 'bg-white/80 backdrop-blur'
      }`}
    >
      <nav className="container-px mx-auto max-w-7xl flex items-center justify-between h-18 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="Rock Perfect Fisheries ZW" className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-aqua/30" />
          <div className="leading-tight hidden sm:block">
            <div className="font-display font-extrabold text-brand-red text-lg">ROCK PERFECT</div>
            <div className="text-brand-aquaDark text-xs font-semibold tracking-widest">FISHERIES ZW</div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-semibold text-brand-navy/80 hover:text-brand-red transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href={`tel:${BUSINESS.phone1Intl}`} className="btn-outline !px-4 !py-2 text-sm">
            <Phone className="w-4 h-4" /> {BUSINESS.phone1}
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-whatsapp !px-5 !py-2.5 text-sm">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-brand-navy/5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-brand-navy/5 shadow-lg">
          <ul className="container-px mx-auto max-w-7xl py-4 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-2 font-semibold text-brand-navy hover:text-brand-red"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-3 flex flex-col gap-2">
              <a href={`tel:${BUSINESS.phone1Intl}`} className="btn-outline text-sm">
                <Phone className="w-4 h-4" /> Call {BUSINESS.phone1}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-whatsapp text-sm">
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
