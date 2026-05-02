import { MapPin } from 'lucide-react'

const locations = [
  { city: 'Harare', province: 'Harare Metro' },
  { city: 'Chitungwiza', province: 'Harare Metro' },
  { city: 'Bulawayo', province: 'Bulawayo Metro' },
  { city: 'Mutare', province: 'Manicaland' },
  { city: 'Rusape', province: 'Manicaland' },
  { city: 'Gweru', province: 'Midlands' },
  { city: 'Kwekwe', province: 'Midlands' },
  { city: 'Zvishavane', province: 'Midlands' },
  { city: 'Masvingo', province: 'Masvingo' },
  { city: 'Chiredzi', province: 'Masvingo' },
  { city: 'Chinhoyi', province: 'Mash West' },
  { city: 'Karoi', province: 'Mash West' },
  { city: 'Kariba', province: 'Mash West' },
  { city: 'Bindura', province: 'Mash Central' },
  { city: 'Mt Darwin', province: 'Mash Central' },
  { city: 'Marondera', province: 'Mash East' },
  { city: 'Murehwa', province: 'Mash East' },
  { city: 'Hwange', province: 'Matabeleland North' },
  { city: 'Victoria Falls', province: 'Matabeleland North' },
  { city: 'Beitbridge', province: 'Matabeleland South' },
  { city: 'Plumtree', province: 'Matabeleland South' },
  { city: 'Gokwe', province: 'Midlands' },
]

export default function LocationsZW() {
  return (
    <section id="locations" className="section bg-gradient-to-b from-white to-brand-aqua/5">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow"><MapPin className="w-3.5 h-3.5" /> Service Areas</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-brand-navy">
            Serving Fish Farmers <span className="text-brand-aquaDark">Across Zimbabwe</span>
          </h2>
          <p className="mt-5 text-lg text-brand-navy/70">
            From the Harare Metro to the deepest rural districts — we deliver, install and train wherever you are.
            Pond construction, dam liners, fingerlings, feed and on-site training in every province.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {locations.map((l) => (
            <div
              key={l.city}
              className="group bg-white border border-brand-navy/5 rounded-xl p-4 text-center shadow-card hover:shadow-premium hover:-translate-y-1 hover:border-brand-aqua/40 transition-all"
            >
              <div className="w-10 h-10 mx-auto rounded-lg bg-brand-aqua/10 text-brand-aquaDark grid place-items-center group-hover:bg-brand-aqua group-hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="mt-3 font-display font-bold text-brand-navy text-sm">Fish Farming · {l.city}</div>
              <div className="mt-0.5 text-[11px] text-brand-navy/55">{l.province}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-brand-navy/60">
          Don't see your area? We still serve you — call <a className="text-brand-aquaDark font-semibold" href="tel:+263789579859">+263 78 957 9859</a>.
        </div>
      </div>
    </section>
  )
}
