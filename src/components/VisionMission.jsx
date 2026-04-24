import { Target, Eye, Flag } from 'lucide-react'

const goals = [
  'Make tilapia farming accessible to farmers at all levels',
  'Increase fish production across Zimbabwe',
  'Promote sustainable and environmentally responsible farming',
  'Create income-generating opportunities in rural and urban communities',
  'Support farmers from setup to harvest and beyond',
]

export default function VisionMission() {
  return (
    <section className="section bg-gradient-to-br from-brand-aqua/10 via-white to-brand-green/10">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow">Vision · Mission · Goals</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-brand-navy">
            Our <span className="text-brand-aquaDark">Purpose</span> & Direction
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <div className="card border-t-4 !border-t-brand-aqua">
            <div className="w-14 h-14 rounded-2xl bg-brand-aqua/15 text-brand-aquaDark grid place-items-center">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="mt-5 font-display font-extrabold text-2xl text-brand-navy">Vision</h3>
            <p className="mt-3 text-brand-navy/75 leading-relaxed">
              To become Zimbabwe's leading aquaculture powerhouse, transforming fish farming into a highly
              productive, sustainable and nationally impactful industry.
            </p>
          </div>

          <div className="card border-t-4 !border-t-brand-red">
            <div className="w-14 h-14 rounded-2xl bg-brand-red/10 text-brand-red grid place-items-center">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="mt-5 font-display font-extrabold text-2xl text-brand-navy">Mission</h3>
            <p className="mt-3 text-brand-navy/75 leading-relaxed">
              To empower farmers with the knowledge, tools and resources needed to build profitable aquaculture
              businesses while contributing to food security and economic growth.
            </p>
          </div>
        </div>

        <div className="mt-6 card border-t-4 !border-t-brand-green">
          <div className="flex items-start gap-5 flex-col md:flex-row">
            <div className="w-14 h-14 rounded-2xl bg-brand-green/15 text-brand-greenDark grid place-items-center shrink-0">
              <Flag className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-extrabold text-2xl text-brand-navy">Our Goals</h3>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                {goals.map((g) => (
                  <li key={g} className="flex gap-3 items-start text-brand-navy/80">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-green shrink-0" />
                    <span className="leading-relaxed">{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
