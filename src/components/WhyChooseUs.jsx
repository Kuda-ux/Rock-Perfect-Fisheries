import { CheckCircle2, Wrench, BadgeCheck, Users, GraduationCap, LifeBuoy, TrendingUp, Heart } from 'lucide-react'

const reasons = [
  { icon: CheckCircle2, title: 'Complete Start-to-Finish Solutions', text: 'From empty land to first harvest — we handle every stage under one roof.' },
  { icon: Wrench, title: 'Practical Fish Farming Experience', text: 'Field-tested aquaculture expertise in Zimbabwean conditions.' },
  { icon: BadgeCheck, title: 'Quality Materials and Inputs', text: 'Only durable liners, healthy fingerlings and proven feeds.' },
  { icon: Users, title: 'Farmer-Focused Support', text: 'We speak your language and tailor solutions to your goals.' },
  { icon: GraduationCap, title: 'Free On-Site Training', text: 'Hands-on training at your pond, included with every project.' },
  { icon: LifeBuoy, title: 'Ongoing Guidance', text: 'Continued support long after installation is complete.' },
  { icon: TrendingUp, title: 'Designed for Profitability', text: 'Every pond is engineered for maximum yield and ROI.' },
  { icon: Heart, title: 'Passion for Aquaculture Transformation', text: 'Committed to building the aquaculture future of Zimbabwe.' },
]

export default function WhyChooseUs() {
  return (
    <section className="section bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-brand-navy">
            Why Choose <span className="text-brand-red">Rock Perfect Fisheries ZW?</span>
          </h2>
          <p className="mt-5 text-lg text-brand-navy/70">
            We're more than suppliers — we're your aquaculture partners, invested in your success from day one.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group p-6 rounded-2xl border border-brand-navy/5 hover:border-brand-aqua/40 hover:bg-brand-aqua/5 transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white grid place-items-center transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 font-display font-bold text-lg text-brand-navy leading-tight">{title}</h3>
              <p className="mt-2 text-sm text-brand-navy/70 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
