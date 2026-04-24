import { Check, Star, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL, BUSINESS } from '../constants'

const commonIncludes = [
  'Professional pond construction',
  'Plastic damliner 300 micron',
  'Bird / predator net',
  'Water chemical',
  'Fish feed for 6 months',
]

const packages = [
  { size: '10m x 10m', price: 800, fingerlings: '2,000', featured: false },
  { size: '10m x 15m', price: 1200, fingerlings: '3,000', featured: false },
  { size: '10m x 20m', price: 1800, fingerlings: '4,000', featured: true },
  { size: '20m x 20m', price: 3000, fingerlings: '8,000', featured: false },
  { size: '20m x 30m', price: 5400, fingerlings: '12,000', featured: false },
]

export default function Packages() {
  return (
    <section id="packages" className="section bg-gradient-to-b from-white to-brand-aqua/5">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow">Fix & Supply Packages</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-brand-navy">
            Fish Pond Construction <span className="text-brand-red">Packages</span>
          </h2>
          <p className="mt-5 text-lg text-brand-navy/70">
            All-inclusive aquaculture bundles — construction, liner, fingerlings, feed, chemicals and predator net. One price. One trusted team. Zero guesswork.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((p) => (
            <article
              key={p.size}
              className={`relative rounded-3xl p-7 md:p-8 border transition-all duration-300 hover:-translate-y-1 ${
                p.featured
                  ? 'bg-brand-navy text-white border-brand-red shadow-premium scale-[1.02]'
                  : 'bg-white border-brand-navy/10 shadow-card hover:shadow-premium'
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-red text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-white" /> MOST POPULAR
                </div>
              )}

              <div className={`text-sm font-bold tracking-widest ${p.featured ? 'text-brand-aqua' : 'text-brand-aquaDark'}`}>
                POND PACKAGE
              </div>
              <h3 className={`mt-1 font-display font-extrabold text-3xl md:text-4xl ${p.featured ? 'text-white' : 'text-brand-navy'}`}>
                {p.size}
              </h3>

              <div className="mt-5 flex items-baseline gap-1">
                <span className={`text-5xl font-display font-extrabold ${p.featured ? 'text-white' : 'text-brand-red'}`}>
                  ${p.price.toLocaleString()}
                </span>
                <span className={`text-sm font-semibold ${p.featured ? 'text-white/60' : 'text-brand-navy/50'}`}>/ complete setup</span>
              </div>

              <ul className={`mt-6 space-y-3 ${p.featured ? 'text-white/90' : 'text-brand-navy/80'}`}>
                <li className="flex gap-2.5 font-semibold">
                  <Check className={`w-5 h-5 shrink-0 ${p.featured ? 'text-brand-aqua' : 'text-brand-green'}`} />
                  <span>{p.fingerlings} tilapia fingerlings</span>
                </li>
                {commonIncludes.map((inc) => (
                  <li key={inc} className="flex gap-2.5 text-sm">
                    <Check className={`w-5 h-5 shrink-0 ${p.featured ? 'text-brand-aqua' : 'text-brand-green'}`} />
                    <span>{inc}</span>
                  </li>
                ))}
                <li className="flex gap-2.5 text-sm font-semibold">
                  <Check className={`w-5 h-5 shrink-0 ${p.featured ? 'text-brand-aqua' : 'text-brand-green'}`} />
                  <span>Free on-site training</span>
                </li>
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                className={`mt-7 w-full ${p.featured ? 'btn-primary' : 'btn-navy'} justify-center`}
              >
                <MessageCircle className="w-4 h-4" /> Book This Package
              </a>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center bg-white rounded-3xl p-8 md:p-10 shadow-card border border-brand-navy/5 max-w-3xl mx-auto">
          <h3 className="font-display font-extrabold text-2xl md:text-3xl text-brand-navy">
            Not sure which package is right for you?
          </h3>
          <p className="mt-3 text-brand-navy/70">
            Talk to our aquaculture experts — we'll recommend the perfect pond size and setup based on your land, water source and farming goals.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-whatsapp">
              <MessageCircle className="w-5 h-5" /> Get Free Guidance on WhatsApp
            </a>
            <a href={`tel:${BUSINESS.phone1Intl}`} className="btn-outline">
              Call {BUSINESS.phone1}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
