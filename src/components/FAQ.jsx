import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'How do I start fish farming in Zimbabwe?',
    a: 'At Rock Perfect Fisheries ZW we walk you through the full setup: site assessment, pond design and construction, dam liner installation, water treatment, supply of tilapia fingerlings, feed for every growth stage, predator nets and free on-site training — everything you need from an empty plot to your first profitable harvest.',
  },
  {
    q: 'How much does it cost to build a fish pond in Zimbabwe?',
    a: 'Our complete starter packages begin at around USD 800 and scale to USD 5,400+ for commercial setups. The price depends on pond size, dam liner thickness (300–1000 micron), number of fingerlings and feed required. Contact us on WhatsApp +263 78 957 9859 for a free quotation.',
  },
  {
    q: 'What fish species do you supply?',
    a: 'We supply healthy Nile Tilapia fingerlings — the most profitable and fast-growing farmed fish species in Africa — selected for strong survival rates, excellent growth performance and high market yield.',
  },
  {
    q: 'Do you deliver and operate across all of Zimbabwe?',
    a: 'Yes. We service Harare, Bulawayo, Mutare, Gweru, Masvingo, Kwekwe, Chinhoyi, Bindura, Marondera, Chitungwiza and most rural districts. Delivery, installation and training are arranged directly with each client.',
  },
  {
    q: 'Is the on-site training really free?',
    a: 'Yes — every client who works with Rock Perfect Fisheries ZW receives free practical on-site training covering water quality, feeding, stocking density, fish health, pond maintenance and record keeping.',
  },
  {
    q: 'How long until I can harvest tilapia?',
    a: 'With the right feed program and water management, Nile Tilapia typically reach market size within 6 months. Trophy-size fish of up to 5 kg are achievable with longer grow-out cycles.',
  },
  {
    q: 'What dam liner thickness should I use?',
    a: 'For most tilapia ponds in Zimbabwe we recommend 800 micron HDPE dam liner. We also supply 300, 500, 750 and 1000 micron options depending on your soil type, pond size and budget.',
  },
  {
    q: 'Can I run a fish farm as a small backyard project?',
    a: 'Absolutely. Many of our clients start with a single 5×10 m pond on a residential plot in Harare or other towns and scale up after their first successful cycle.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section bg-white">
      <div className="container-px mx-auto max-w-4xl">
        <div className="text-center">
          <span className="eyebrow"><HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-brand-navy">
            Everything you need to know about <span className="text-brand-aquaDark">fish farming in Zimbabwe</span>
          </h2>
          <p className="mt-5 text-lg text-brand-navy/70">
            Real questions we hear from farmers across Harare, Bulawayo, Mutare, Gweru and beyond.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className={`rounded-2xl border transition-all ${isOpen ? 'border-brand-aqua/40 bg-brand-aqua/5 shadow-card' : 'border-brand-navy/10 bg-white hover:border-brand-aqua/30'}`}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between text-left px-5 md:px-6 py-5 gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-brand-navy text-base md:text-lg leading-snug">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-aquaDark shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-6 text-brand-navy/75 leading-relaxed">{f.a}</div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
