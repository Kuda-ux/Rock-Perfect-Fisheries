import { CheckCircle2, Sprout, Droplets, TrendingUp } from 'lucide-react'
import { IMG } from '../images'

const highlights = [
  { icon: Droplets, title: 'From Pond to Harvest', text: 'End-to-end aquaculture setup and guidance at every stage.' },
  { icon: Sprout, title: 'Sustainable Farming', text: 'Environmentally responsible practices that protect your land and water.' },
  { icon: TrendingUp, title: 'Built for Profit', text: 'Designs optimised for tilapia yield, feed efficiency and ROI.' },
]

export default function About() {
  return (
    <section id="about" className="section bg-water">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-premium">
            <img src={IMG.teamPond2} alt="Rock Perfect Fisheries team constructing a fish pond in rural Zimbabwe" className="w-full h-[460px] object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-white rounded-2xl shadow-premium p-6 w-64 border border-brand-navy/5">
            <div className="text-4xl font-display font-extrabold text-brand-red">100%</div>
            <div className="text-sm font-semibold text-brand-navy/80 mt-1">Farmer-focused, practical aquaculture support across Zimbabwe.</div>
          </div>
          <div className="absolute -top-4 -left-4 hidden md:block bg-brand-aqua text-white rounded-2xl px-5 py-3 shadow-premium font-display font-bold">
            Harare · Zimbabwe
          </div>
        </div>

        <div>
          <span className="eyebrow">About Rock Perfect Fisheries ZW</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-brand-navy leading-tight">
            Building the Future of <span className="text-brand-aquaDark">Sustainable Aquaculture</span> in Zimbabwe
          </h2>
          <p className="mt-5 text-lg text-brand-navy/75 leading-relaxed">
            Rock Perfect Fisheries ZW is more than a fish farming service provider — we are a trusted
            aquaculture partner helping farmers, entrepreneurs and communities turn water into wealth.
            We support clients from pond design and construction to fingerlings, feed, water treatment,
            predator protection and practical training.
          </p>
          <p className="mt-4 text-base md:text-lg text-brand-navy/70 leading-relaxed">
            Whether you are a beginner taking the first step or an experienced farmer scaling up, we help
            you build productive, sustainable and profitable fish farming projects that feed futures and
            build legacies.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-3 p-4 rounded-xl bg-white border border-brand-navy/5 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-brand-green/10 text-brand-greenDark grid place-items-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-bold text-brand-navy">{title}</div>
                  <div className="text-sm text-brand-navy/70 mt-0.5">{text}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-2 text-brand-navy/80">
            <CheckCircle2 className="text-brand-green w-5 h-5" />
            <span className="font-semibold">Empowering Farmers. Transforming Aquaculture. Feeding the Nation.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
