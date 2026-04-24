import { Phone, MapPin, Mail, MessageCircle, Clock } from 'lucide-react'
import { BUSINESS, WHATSAPP_URL } from '../constants'

export default function Contact() {
  return (
    <section id="contact" className="section bg-water">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow">Contact Us</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-brand-navy">
            Let's Talk <span className="text-brand-aquaDark">Fish Farming</span>
          </h2>
          <p className="mt-5 text-lg text-brand-navy/70">
            Reach out today — our aquaculture team is ready to help you start or scale your project.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <a href={`tel:${BUSINESS.phone1Intl}`} className="card flex items-center gap-4 hover:border-brand-red/30">
              <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red grid place-items-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold tracking-widest text-brand-navy/50">CALL US</div>
                <div className="font-display font-bold text-brand-navy text-lg">{BUSINESS.phone1}</div>
                <div className="font-display font-bold text-brand-navy text-lg">{BUSINESS.phone2}</div>
              </div>
            </a>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="card flex items-center gap-4 hover:border-brand-green/30">
              <div className="w-12 h-12 rounded-xl bg-brand-green/15 text-brand-greenDark grid place-items-center shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold tracking-widest text-brand-navy/50">WHATSAPP</div>
                <div className="font-display font-bold text-brand-navy text-lg">Chat Instantly</div>
                <div className="text-sm text-brand-navy/60">Fastest way to get a quote</div>
              </div>
            </a>

            <div className="card flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-aqua/15 text-brand-aquaDark grid place-items-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold tracking-widest text-brand-navy/50">VISIT</div>
                <div className="font-display font-bold text-brand-navy">{BUSINESS.address}</div>
              </div>
            </div>

            <div className="card flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-navy/10 text-brand-navy grid place-items-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold tracking-widest text-brand-navy/50">HOURS</div>
                <div className="font-display font-bold text-brand-navy">Mon – Sat · 8:00 AM – 6:00 PM</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-premium border border-brand-navy/5 min-h-[420px]">
            <iframe
              title="Rock Perfect Fisheries ZW Location"
              src="https://www.google.com/maps?q=Umwinsdale+Highland+Glen+Harare+Zimbabwe&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
