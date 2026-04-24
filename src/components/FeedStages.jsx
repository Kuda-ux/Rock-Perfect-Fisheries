import { Wheat } from 'lucide-react'
import { IMG } from '../images'

const stages = [
  { img: IMG.feedStarter1, label: 'Starter 1', desc: 'Fine-powder feed for fry — the critical first weeks.' },
  { img: IMG.feedStarter2, label: 'Starter 2', desc: 'Nutrient-dense crumble for rapid early growth.' },
  { img: IMG.feedStarter3, label: 'Starter 3', desc: 'Transition feed that prepares fingerlings for pellets.' },
  { img: IMG.feedJuvenile, label: 'Juvenile', desc: 'Small pellets for steady juvenile development.' },
  { img: IMG.feedGrowers, label: 'Growers', desc: 'High-protein pellet feed for strong weight gain.' },
  { img: IMG.feedGrid, label: 'Finisher', desc: 'Premium pellets to fatten fish before harvest.' },
]

export default function FeedStages() {
  return (
    <section className="section bg-gradient-to-b from-brand-green/5 to-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow"><Wheat className="w-3.5 h-3.5" /> Fish Feed Range</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-brand-navy">
            The Right Feed for <span className="text-brand-green">Every Growth Stage</span>
          </h2>
          <p className="mt-5 text-lg text-brand-navy/70">
            From the first day of life to harvest, we supply a complete nutritional program that maximises growth,
            feed conversion and fish health.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {stages.map((s, i) => (
            <div key={s.label} className="group bg-white rounded-2xl overflow-hidden border border-brand-navy/5 shadow-card hover:shadow-premium hover:-translate-y-1 transition-all">
              <div className="relative aspect-square overflow-hidden">
                <img src={s.img} alt={`${s.label} fish feed`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-2 left-2 bg-brand-green text-white text-[10px] font-bold px-2 py-1 rounded-full tracking-wider">STAGE {i + 1}</div>
              </div>
              <div className="p-4">
                <div className="font-display font-extrabold text-brand-navy">{s.label}</div>
                <div className="mt-1 text-xs text-brand-navy/65 leading-relaxed">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
