import { MapPinned, PencilRuler, Hammer, Layers, Droplets, Fish, Wheat, Shield, GraduationCap, Trophy } from 'lucide-react'
import { IMG } from '../images'

const steps = [
  { icon: MapPinned, title: 'Site Assessment', text: 'We assess your land, water source, space and farming goals.' },
  { icon: PencilRuler, title: 'Pond Design', text: 'We recommend the right pond size, liner type and setup for your project.' },
  { icon: Hammer, title: 'Pond Construction', text: 'We construct and prepare the pond professionally.' },
  { icon: Layers, title: 'Damliner Installation', text: 'We install quality plastic dam liner to secure water retention.' },
  { icon: Droplets, title: 'Water Treatment', text: 'We prepare the water environment for healthy fish growth.' },
  { icon: Fish, title: 'Stocking Fingerlings', text: 'We supply and guide you on correct stocking density.' },
  { icon: Wheat, title: 'Feeding & Monitoring', text: 'We guide feeding schedules, fish health checks and water management.' },
  { icon: Shield, title: 'Predator Protection', text: 'We help protect your fish from birds and other threats.' },
  { icon: GraduationCap, title: 'Training & Support', text: 'We train you practically so you can manage the project confidently.' },
  { icon: Trophy, title: 'Growth to Harvest', text: 'We support your journey toward a successful harvest and profitable cycle.' },
]

export default function Process() {
  return (
    <section id="process" className="section relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 opacity-20">
        <img src={IMG.damlinerPond} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/80 to-brand-navy" />
      </div>

      <div className="relative container-px mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="eyebrow !bg-white/10 !text-brand-aqua border border-white/10">Our Process</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
            How We Help You <span className="text-brand-aqua">Start Fish Farming</span>
          </h2>
          <p className="mt-4 text-white/75 text-lg">
            A proven 10-step journey that takes you from an empty piece of land to a thriving, profitable tilapia farm.
          </p>
        </div>

        <ol className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="relative group bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:-translate-y-1 transition-all"
            >
              <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-brand-red text-white font-bold grid place-items-center shadow-lg">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="mt-4 w-12 h-12 rounded-xl bg-brand-aqua/20 text-brand-aqua grid place-items-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 font-display font-bold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
