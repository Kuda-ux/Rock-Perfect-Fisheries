import { MessageCircle, Phone } from 'lucide-react'
import { BUSINESS, WHATSAPP_URL } from '../constants'
import { IMG } from '../images'

export default function CTA() {
  return (
    <section className="relative isolate section overflow-hidden bg-brand-navy">
      <img src={IMG.massiveHarvest} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/90 to-brand-aquaDark/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(27,167,224,0.3),transparent_60%)]" />
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-aqua/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-red/15 blur-3xl" />

      <div className="container-px mx-auto max-w-5xl text-center text-white relative z-10">
        <span className="eyebrow !bg-white/10 !text-brand-aqua border border-white/10">Let's Build</span>
        <h2 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
          Ready to Start Your <span className="text-brand-aqua">Fish Farming Project?</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
          Whether you are starting small or building a commercial fish farming project, Rock Perfect Fisheries ZW is
          ready to walk the journey with you — from pond construction to your first successful harvest.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-whatsapp text-base">
            <MessageCircle className="w-5 h-5" /> WhatsApp Us Now
          </a>
          <a href={`tel:${BUSINESS.phone1Intl}`} className="btn-primary text-base">
            <Phone className="w-5 h-5" /> Call {BUSINESS.phone1}
          </a>
          <a href={`tel:${BUSINESS.phone2Intl}`} className="btn text-base bg-white text-brand-navy hover:bg-white/90">
            <Phone className="w-5 h-5" /> Call {BUSINESS.phone2}
          </a>
        </div>
      </div>
    </section>
  )
}
