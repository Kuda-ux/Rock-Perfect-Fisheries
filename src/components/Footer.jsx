import { Phone, MapPin, MessageCircle, Mail } from 'lucide-react'
import { BUSINESS, WHATSAPP_URL } from '../constants'

export default function Footer() {
  return (
    <footer className="bg-brand-navyDark text-white/80">
      <div className="container-px mx-auto max-w-7xl py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.jpeg" alt="Rock Perfect Fisheries ZW" className="h-14 w-14 rounded-full object-cover ring-2 ring-brand-aqua/40" />
            <div>
              <div className="font-display font-extrabold text-white text-lg leading-tight">ROCK PERFECT</div>
              <div className="text-brand-aqua text-xs font-semibold tracking-widest">FISHERIES ZW</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            Empowering farmers. Transforming aquaculture. Feeding the nation.
            Turning water into wealth across Zimbabwe.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              ['About', '#about'],
              ['Services', '#services'],
              ['Process', '#process'],
              ['Packages', '#packages'],
              ['Training', '#training'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="hover:text-brand-aqua transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm">
            <li>Pond Design & Construction</li>
            <li>Plastic Damliners (300–1000μ)</li>
            <li>Tilapia Fingerlings</li>
            <li>Fish Feed</li>
            <li>Water Chemicals</li>
            <li>Predator Nets</li>
            <li>Free On-Site Training</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-4">Get In Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <Phone className="w-4 h-4 mt-1 text-brand-aqua shrink-0" />
              <div>
                <a href={`tel:${BUSINESS.phone1Intl}`} className="hover:text-brand-aqua block">{BUSINESS.phone1}</a>
                <a href={`tel:${BUSINESS.phone2Intl}`} className="hover:text-brand-aqua block">{BUSINESS.phone2}</a>
              </div>
            </li>
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 mt-1 text-brand-aqua shrink-0" />
              <span>{BUSINESS.address}</span>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-whatsapp !py-2.5 !px-4 text-sm mt-2">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p className="italic">Turning Water into Wealth · Feeding Futures · Building Legacies</p>
        </div>
      </div>
    </footer>
  )
}
