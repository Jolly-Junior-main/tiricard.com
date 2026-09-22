
"use client";

import { motion } from "framer-motion";

const CARDS = [
  {
    label: "TICKETING",
    title: "Instant QR Code Generation",
    buttonText: "Read article",
    bgClass: "bg-gradient-to-br from-orange-500 to-amber-500",
    textClass: "text-white",
    labelClass: "text-white/70",
    buttonClass: "bg-white text-orange-500 hover:bg-orange-50",
    shape: (
      <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-yellow-400 opacity-90 shadow-2xl" />
    )
  },
  {
    label: "ANALYTICS",
    title: "Real-time Event Insights",
    buttonText: "Read article",
    bgClass: "bg-brand-black",
    textClass: "text-white",
    labelClass: "text-brand-gray",
    buttonClass: "bg-white text-brand-black hover:bg-gray-100",
    shape: (
      <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-violet-600 rounded-tl-[100px] shadow-2xl rotate-12 transform origin-bottom-right flex items-end justify-end overflow-hidden">
         <div className="w-32 h-32 bg-orange-500 rounded-tl-[100px] -translate-x-4 -translate-y-4" />
      </div>
    )
  },
  {
    label: "CASE STUDY",
    title: "Lightning Fast Check-in",
    buttonText: "Read article",
    bgClass: "bg-gradient-to-br from-pink-500 to-rose-500",
    textClass: "text-white",
    labelClass: "text-white/80",
    buttonClass: "bg-white text-pink-600 hover:bg-pink-50",
    shape: (
      <div className="absolute -bottom-10 -right-4 w-56 h-72 bg-brand-charcoal rounded-[32px] border-4 border-gray-800 shadow-2xl flex flex-col p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="w-20 h-1 bg-gray-800 rounded-full mx-auto mb-4" />
        <div className="flex-1 bg-black rounded-2xl p-3">
          <div className="w-3/4 h-3 bg-gray-800 rounded mb-2" />
          <div className="w-1/2 h-3 bg-gray-800 rounded" />
        </div>
      </div>
    )
  },
  {
    label: "REPORT",
    title: "Secure Global Transactions",
    buttonText: "Read article",
    bgClass: "bg-gradient-to-br from-violet-600 to-indigo-700",
    textClass: "text-white",
    labelClass: "text-white/70",
    buttonClass: "bg-white text-violet-600 hover:bg-violet-50",
    shape: (
      <>
        <div className="absolute -bottom-4 -right-12 w-64 h-64 bg-white/10 rounded-[64px] backdrop-blur-md transform rotate-12 shadow-xl border border-white/20" />
        <div className="absolute bottom-12 -right-4 w-48 h-48 bg-white/5 rounded-[48px] backdrop-blur-sm transform -rotate-12 border border-white/10" />
      </>
    )
  },
  {
    label: "CASE STUDY",
    title: "Dynamic Seat Allocation",
    buttonText: "Read article",
    bgClass: "bg-gradient-to-br from-blue-500 to-cyan-400",
    textClass: "text-white",
    labelClass: "text-white/80",
    buttonClass: "bg-white text-blue-600 hover:bg-blue-50",
    shape: (
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/20 backdrop-blur-md transform rotate-45 shadow-2xl border-l border-t border-white/30" />
    )
  },
  {
    label: "CASE STUDY",
    title: "Brand Your Event Tickets",
    buttonText: "Read article",
    bgClass: "bg-white",
    textClass: "text-brand-charcoal",
    labelClass: "text-gray-400",
    buttonClass: "bg-white border border-gray-200 text-brand-charcoal hover:bg-gray-50 shadow-sm",
    shape: (
      <>
        <div className="absolute -bottom-12 -right-8 w-48 h-48 rounded-full bg-blue-500 shadow-xl" />
        <div className="absolute bottom-24 right-20 w-16 h-16 rounded-full bg-orange-500 shadow-lg" />
        <div className="absolute bottom-16 right-48 w-8 h-8 rounded-full bg-blue-600 shadow-md" />
      </>
    )
  }
];

export function TicketingSection() {
  return (
    <section className="py-20 md:py-32 bg-brand-bg relative overflow-hidden border-t border-brand-charcoal/10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 mb-12 md:mb-16">
        <h2 className="font-serif text-[36px] md:text-[54px] lg:text-[72px] leading-tight text-brand-charcoal mb-4">
          Complete event<br />
          <span className="italic text-brand-gold">ticketing system.</span>
        </h2>
        <p className="font-sans text-[16px] md:text-[18px] text-brand-gray max-w-xl">
          From robust check-in apps to real-time analytics, everything you need 
          to manage event access effortlessly.
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden group pb-8">
        <motion.div
          className="flex flex-nowrap w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 45, repeat: Infinity }}
        >
          {[0, 1].map((blockIdx) => (
            <div key={blockIdx} className="flex flex-nowrap items-center gap-6 md:gap-8 pr-6 md:pr-8">
              {CARDS.map((card, i) => (
                <div 
                  key={i} 
                  className={`relative flex-shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] h-[500px] md:h-[550px] rounded-[32px] p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl ${card.bgClass}`}
                >
                  {/* Decorative shape */}
                  {card.shape}
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <p className={`font-sans text-[11px] md:text-[12px] font-bold tracking-widest uppercase mb-4 ${card.labelClass}`}>
                      {card.label}
                    </p>
                    <h3 className={`font-sans text-[32px] md:text-[40px] font-bold leading-[1.1] tracking-tight ${card.textClass}`}>
                      {card.title}
                    </h3>
                  </div>

                  <div className="relative z-10">
                    <button className={`px-6 py-3 rounded-lg font-sans text-[14px] font-semibold transition-colors ${card.buttonClass}`}>
                      {card.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
