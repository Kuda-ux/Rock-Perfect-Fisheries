import { GraduationCap, Droplets, Wheat, Fish, ClipboardList, HeartPulse, Briefcase, CheckCircle2 } from 'lucide-react'
import { WHATSAPP_URL } from '../constants'
import { IMG } from '../images'

const topics = [
  { icon: Droplets, text: 'Water quality management' },
  { icon: Wheat, text: 'Feeding strategies & schedules' },
  { icon: Fish, text: 'Stocking density & growth cycles' },
  { icon: ClipboardList, text: 'Pond maintenance & record keeping' },
  { icon: HeartPulse, text: 'Fish health monitoring' },
  { icon: Briefcase, text: 'Fish farming business management' },
]

export default function Training() {
  return (
    <section id="training" className="section bg-white">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="rounded-3xl overflow-hidden shadow-premium">
            <img src={IMG.stockingCeremony} alt="Free on-site fish farming training with Zimbabwean farmers" className="w-full h-[480px] object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 -left-4 md:-left-8 bg-brand-green text-white rounded-2xl px-6 py-4 shadow-premium">
            <div className="text-xs font-bold tracking-widest opacity-90">INCLUDED FREE</div>
            <div className="font-display font-extrabold text-xl">On-Site Training</div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="eyebrow">Training</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-brand-navy leading-tight">
            Free <span className="text-brand-green">Practical On-Site</span> Training
          </h2>
          <p className="mt-5 text-lg text-brand-navy/75 leading-relaxed">
            Rock Perfect Fisheries ZW does not just supply materials — we train farmers. Our hands-on training is
            delivered at your pond, in your environment, so you leave with real confidence and skills you can
            apply immediately.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {topics.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 p-3.5 rounded-xl bg-brand-green/5 border border-brand-green/20">
                <span className="w-10 h-10 rounded-lg bg-brand-green/15 text-brand-greenDark grid place-items-center shrink-0">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="font-semibold text-brand-navy text-sm">{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-2 text-brand-navy/80">
            <CheckCircle2 className="w-5 h-5 text-brand-green" />
            <span className="font-semibold">Included with every package — no hidden fees.</span>
          </div>

          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="mt-8 inline-flex btn-whatsapp">
            <GraduationCap className="w-5 h-5" /> Book Free Training
          </a>
        </div>
      </div>
    </section>
  )
}
