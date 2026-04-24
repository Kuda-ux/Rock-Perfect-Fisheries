import { Fish, Scale, Droplets, Timer } from 'lucide-react'
import { IMG } from '../images'

const stats = [
  { icon: Scale, label: 'Up to 5 kg', desc: 'trophy-size tilapia achievable' },
  { icon: Timer, label: '6 months', desc: 'typical grow-out cycle' },
  { icon: Fish, label: '12,000', desc: 'fingerlings per 20×30m pond' },
  { icon: Droplets, label: '300–1000μ', desc: 'liner range for every budget' },
]

export default function TilapiaSpotlight() {
  return (
    <section className="section bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-brand-aqua/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-brand-green/15 blur-3xl" />

      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img src={IMG.nileTilapia} alt="Nile Tilapia — our prime farming species" className="col-span-2 rounded-3xl object-cover h-56 md:h-72 w-full shadow-premium" loading="lazy" />
            <img src={IMG.tilapiaScale} alt="5kg market-ready tilapia" className="rounded-2xl object-cover h-48 md:h-56 w-full shadow-card" loading="lazy" />
            <img src={IMG.tilapiaDuckweed} alt="Healthy tilapia in pond environment" className="rounded-2xl object-cover h-48 md:h-56 w-full shadow-card" loading="lazy" />
          </div>
          <div className="absolute -bottom-5 -right-3 md:-right-6 bg-brand-red text-white font-display font-bold px-5 py-3 rounded-2xl shadow-premium">
            Prime Nile Tilapia
          </div>
        </div>

        <div>
          <span className="eyebrow !bg-white/10 !text-brand-aqua border border-white/10"><Fish className="w-3.5 h-3.5" /> Our Species</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
            Proven Tilapia Genetics for <span className="text-brand-aqua">Maximum Profit</span>
          </h2>
          <p className="mt-5 text-lg text-white/80 leading-relaxed">
            We stock Nile Tilapia — the world's most productive and profitable farmed fish species — selected for
            fast growth, strong survival and market-ready size. Every fingerling is carefully chosen to deliver
            returns, not excuses.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, label, desc }) => (
              <li key={label} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5">
                <div className="w-10 h-10 rounded-lg bg-brand-aqua/20 text-brand-aqua grid place-items-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="mt-3 text-2xl font-display font-extrabold">{label}</div>
                <div className="text-sm text-white/70">{desc}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
