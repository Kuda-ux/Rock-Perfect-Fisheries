import { Hammer, Layers, Fish, Wheat, FlaskConical, Shield, BookOpen, GraduationCap, ArrowRight } from 'lucide-react'
import { WHATSAPP_URL } from '../constants'
import { IMG } from '../images'

const services = [
  {
    icon: Hammer,
    color: 'from-brand-red to-brand-redDark',
    title: 'Pond Design & Construction',
    text: 'We design and construct strong, high-performance fish ponds tailored to your land, budget and production goals — built for water retention, durability and ideal tilapia growth.',
    image: IMG.teamPond3,
    alt: 'Rock Perfect Fisheries team constructing a fish pond',
  },
  {
    icon: Layers,
    color: 'from-brand-aqua to-brand-aquaDark',
    title: 'Plastic Damliners (300–1000μ)',
    text: 'Quality dam liners from 300 micron to 1000 micron — supplied and professionally installed to prevent leaks, improve water management and extend pond lifespan.',
    image: IMG.damlinerTruck,
    alt: 'Rolls of plastic dam liner ready for delivery',
  },
  {
    icon: Fish,
    color: 'from-brand-aquaDark to-brand-navy',
    title: 'Tilapia Fingerlings',
    text: 'Healthy, fast-growing tilapia fingerlings selected for strong survival rates, excellent growth performance and high production yield.',
    image: IMG.fingerlingsBags,
    alt: 'Tilapia fingerlings in transport bags',
  },
  {
    icon: Wheat,
    color: 'from-brand-green to-brand-greenDark',
    title: 'Fish Feed',
    text: 'Nutritionally balanced starter, grower and finisher feeds for every stage of tilapia growth — boosting growth rate, fish health and harvest quality.',
    image: IMG.feedGrid,
    alt: 'Range of fish feed pellet sizes for all growth stages',
  },
  {
    icon: FlaskConical,
    color: 'from-brand-aqua to-brand-green',
    title: 'Water Chemicals',
    text: 'Water treatment solutions that improve water quality, reduce harmful bacteria, enhance clarity and create a healthier environment for your fish.',
    image: IMG.waterChemical,
    alt: 'Plankton booster and water treatment chemicals',
  },
  {
    icon: Shield,
    color: 'from-brand-navy to-brand-aquaDark',
    title: 'Predator Net',
    text: 'Premium predator protection nets to safeguard your fish from birds and other threats — reducing losses and protecting your harvest.',
    image: IMG.pondNetCover,
    alt: 'Fish pond covered with predator protection net',
  },
  {
    icon: BookOpen,
    color: 'from-brand-red to-brand-aquaDark',
    title: 'Manual Book',
    text: 'A practical fish farming manual guiding clients on pond care, feeding, water quality, stocking, maintenance and record keeping.',
    image: IMG.trainerHands,
    alt: 'Practical fish farming guidance',
  },
  {
    icon: GraduationCap,
    color: 'from-brand-green to-brand-aqua',
    title: 'Free On-Site Training',
    text: 'Free practical training at your site so you can confidently manage your pond, feed fish, monitor water and run a profitable project.',
    image: IMG.stockingCeremony,
    alt: 'Free on-site fish farming training with farmers',
  },
]

export default function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow">Our Services</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-brand-navy">
            Everything You Need to Run a <span className="text-brand-red">Profitable Fish Farm</span>
          </h2>
          <p className="mt-5 text-lg text-brand-navy/70">
            From pond construction to your first successful harvest — we deliver every component, input and skill your aquaculture project needs.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, color, title, text, image, alt }, i) => (
            <article
              key={title}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-card border border-brand-navy/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-premium flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/10 to-transparent`} />
                <div className={`absolute top-3 left-3 w-11 h-11 rounded-xl bg-gradient-to-br ${color} text-white grid place-items-center shadow-lg`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="absolute top-3 right-3 text-[10px] font-bold tracking-widest text-white/90 bg-black/30 backdrop-blur px-2 py-1 rounded-full">
                  SERVICE 0{i + 1}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display font-extrabold text-lg text-brand-navy leading-tight">{title}</h3>
                <p className="mt-2 text-brand-navy/70 text-sm leading-relaxed">{text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-primary">
            Request a Service Consultation <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
