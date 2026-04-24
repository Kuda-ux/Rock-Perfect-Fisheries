import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../constants'

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-brand-green animate-ping opacity-40" />
      <span className="relative flex items-center gap-2 bg-brand-green hover:bg-brand-greenDark text-white font-bold px-5 py-4 rounded-full shadow-premium transition-colors">
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline pr-1">Chat with us</span>
      </span>
    </a>
  )
}
