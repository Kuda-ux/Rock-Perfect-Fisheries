import { MessageCircle, ArrowRight, ShieldCheck, GraduationCap, Fish, MapPin } from 'lucide-react'
import { WHATSAPP_URL } from '../constants'
import { IMG } from '../images'

const badges = [
  { icon: ShieldCheck, text: 'Complete Start-to-Finish Setup' },
  { icon: GraduationCap, text: 'Free On-Site Training' },
  { icon: Fish, text: 'Quality Fingerlings & Feed' },
  { icon: MapPin, text: 'Zimbabwe-Based Aquaculture Support' },
]

export default function Hero() {
  return (
    <section id="top" className="relative isolate pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-brand-navy">
      {/* Background image */}
      <img
        src={IMG.pondBluePipe}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      {/* Gradient overlays for premium depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navyDark/95 via-brand-navy/90 to-brand-aquaDark/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(27,167,224,0.35),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(47,168,79,0.18),transparent_60%)]" />
      {/* Decorative blurred orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-aqua/25 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-red/15 blur-3xl" />

      <div className="container-px mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-white animate-fade-up">
            <span className="eyebrow !bg-white/10 !text-brand-aqua border border-white/10">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              Empowering Farmers · Transforming Aquaculture · Feeding the Nation
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-extrabold leading-[1.05] tracking-tight">
              Build a <span className="relative inline-block"><span className="relative z-10 bg-gradient-to-r from-brand-aqua via-cyan-300 to-brand-aqua bg-clip-text text-transparent">Profitable Fish Farm</span><span className="absolute inset-x-0 bottom-1 h-3 bg-brand-aqua/20 -z-0 rounded"></span></span> in Zimbabwe
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Complete fish pond construction, dam liners, fingerlings, fish feed, water treatment,
              predator protection and <strong className="text-white">free on-site training</strong> —
              everything you need to start and grow a successful aquaculture business in Zimbabwe.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#packages" className="btn-primary text-base">
                Start Your Fish Farming Project <ArrowRight className="w-5 h-5" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-whatsapp text-base">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-3 max-w-xl">
              {badges.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 bg-white/10 backdrop-blur border border-white/10 rounded-xl px-4 py-3">
                  <span className="w-9 h-9 grid place-items-center rounded-lg bg-brand-aqua/20 text-brand-aqua shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-sm font-semibold text-white/95 leading-tight">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-premium ring-1 ring-white/20">
              <img
                src={IMG.teamPond1}
                alt="Rock Perfect Fisheries team constructing a fish pond in Zimbabwe"
                className="w-full h-[420px] md:h-[520px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-2xl p-5 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red grid place-items-center shrink-0">
                    <Fish className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest text-brand-aquaDark">OUR PROMISE</div>
                    <div className="font-display font-extrabold text-brand-navy text-lg leading-tight mt-0.5">
                      Turning Water into Wealth — from pond to harvest.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-brand-green text-white font-bold text-sm px-4 py-2 rounded-full shadow-lg animate-float hidden md:block">
              Free On-Site Training
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
