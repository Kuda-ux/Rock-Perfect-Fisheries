import { Images } from 'lucide-react'
import { IMG } from '../images'

const shots = [
  { src: IMG.teamPond1, caption: 'Our branded team on a pond construction site', span: 'md:col-span-2 md:row-span-2' },
  { src: IMG.pondBluePipe, caption: 'Completed pond with dam liner & inflow', span: '' },
  { src: IMG.damlinerPond, caption: 'Large commercial dam-lined pond', span: '' },
  { src: IMG.stockingCeremony, caption: 'Pond stocking ceremony with farmers & officials', span: 'md:col-span-2' },
  { src: IMG.harvestNetTilapia, caption: 'Tilapia harvest in net', span: '' },
  { src: IMG.tilapiaScale, caption: 'Market-grade tilapia on the scale', span: '' },
  { src: IMG.communityHarvest, caption: 'Community harvest day', span: 'md:col-span-2' },
  { src: IMG.trophyTilapia, caption: 'Trophy-sized tilapia raised in our ponds', span: '' },
  { src: IMG.fingerlingsTruck, caption: 'Fresh fingerlings ready for delivery', span: '' },
  { src: IMG.pondTour, caption: 'Client site visit & inspection', span: '' },
  { src: IMG.harvestFarmer, caption: 'Farmers proudly presenting their harvest', span: '' },
  { src: IMG.fishJumping, caption: 'Healthy tilapia at harvest', span: '' },
  { src: IMG.pondGreenFish, caption: 'Thriving pond ecosystem with active fish', span: 'md:col-span-2' },
  { src: IMG.marketSale, caption: 'Fresh tilapia reaching the market', span: '' },
  { src: IMG.predatorBirdNet, caption: 'Predator net stopping bird threats', span: '' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="section bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow"><Images className="w-3.5 h-3.5" /> Our Work in Action</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-brand-navy">
            Real Ponds. Real Harvests. <span className="text-brand-red">Real Farmers.</span>
          </h2>
          <p className="mt-5 text-lg text-brand-navy/70">
            A look inside the projects we've built with farmers across Zimbabwe — from the first scoop of soil to full market-size harvest.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {shots.map((s, i) => (
            <figure
              key={i}
              className={`relative group overflow-hidden rounded-2xl shadow-card hover:shadow-premium transition-all ${s.span}`}
            >
              <img
                src={s.src}
                alt={s.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <figcaption className="absolute bottom-3 left-3 right-3 text-white text-xs md:text-sm font-semibold leading-tight drop-shadow">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
