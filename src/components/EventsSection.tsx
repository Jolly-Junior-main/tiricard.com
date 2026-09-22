"use client";

import { EVENTS } from "./EventsDashboardModal";

export function EventsSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="font-serif text-[40px] md:text-[60px] leading-tight text-brand-charcoal mb-4">
              Upcoming <span className="italic text-brand-gold">Events</span>
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] text-brand-gray max-w-xl">
              Discover and book tickets for the most exclusive events, conferences, and parties happening near you.
            </p>
          </div>
          <button className="px-8 py-3 rounded-full border-2 border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white font-sans font-semibold transition-all">
            View All Events
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENTS.slice(0, 4).map(event => (
            <div 
              key={event.id}
              className="relative h-[320px] rounded-2xl overflow-hidden cursor-pointer transition-all hover:-translate-y-2 group shadow-xl border border-black/5"
            >
              <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 group-hover:opacity-90" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-left z-10">
                <h3 className="font-bold text-2xl mb-1 text-white group-hover:text-emerald-400 transition-colors drop-shadow-md">{event.title}</h3>
                <p className="text-sm text-gray-300 mb-4 font-medium drop-shadow-md">{event.category}</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-black text-white drop-shadow-md">\${event.price.toFixed(2)}</p>
                  <button className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

