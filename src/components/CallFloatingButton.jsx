import { Phone } from 'lucide-react'
import { BUSINESS } from '../constants'

export default function CallFloatingButton() {
  return (
    <a
      href={`tel:${BUSINESS.phone1Intl}`}
      aria-label="Call us"
      className="md:hidden fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-brand-red hover:bg-brand-redDark text-white font-bold px-4 py-4 rounded-full shadow-premium"
    >
      <Phone className="w-5 h-5" />
      <span className="sr-only">Call {BUSINESS.phone1}</span>
    </a>
  )
}
