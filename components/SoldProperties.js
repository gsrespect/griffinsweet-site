import { siteConfig } from '@/lib/config';

export default function SoldProperties() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-white" id="sold">
      <div className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-text-light mb-12 reveal">
        Sold Properties
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.soldProperties.map((property, i) => (
          <div
            key={property.address}
            className={`group cursor-pointer reveal ${i > 0 ? `reveal-d${Math.min(i, 4)}` : ''}`}
          >
            <div className="overflow-hidden">
              <img
                src={property.image}
                alt={property.address}
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading={i < 3 ? 'eager' : 'lazy'}
              />
            </div>
            <div className="pt-4">
              <div className="font-serif text-xl text-black">
                {property.price}
              </div>
              <div className="text-[0.78rem] text-text-light mt-1">
                {property.address}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
