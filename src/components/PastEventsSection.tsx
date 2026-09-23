"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { DiscoverEventsModal } from "./DiscoverEventsModal";

const CARDS = [
  {
    label: "PAST EVENT",
    title: "Addis Tech Summit '24",
    buttonText: "View Gallery",
    bgClass: "bg-gradient-to-br from-emerald-500 to-teal-600", bgImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    textClass: "text-white",
    labelClass: "text-white/80",
    buttonClass: "bg-white text-emerald-600 hover:bg-emerald-50",
    shape: (
      <div className="absolute -bottom-10 -right-4 w-72 h-72 rounded-[40px] border-4 border-white/20 shadow-2xl overflow-hidden rotate-[-12deg]">
        <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&q=80" alt="Tech Summit" className="w-full h-full object-cover scale-110 rotate-12" />
      </div>
    )
  },
  {
    label: "PAST EVENT",
    title: "Global Music Fest",
    buttonText: "View Gallery",
    bgClass: "bg-gradient-to-br from-purple-600 to-indigo-800", bgImage: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
    textClass: "text-white",
    labelClass: "text-white/80",
    buttonClass: "bg-white text-purple-600 hover:bg-purple-50",
    shape: (
      <div className="absolute -bottom-4 -right-12 w-64 h-64 rounded-full shadow-2xl border-4 border-purple-400/30 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80" alt="Music Fest" className="w-full h-full object-cover" />
      </div>
    )
  },
  {
    label: "PAST EVENT",
    title: "Startup Networking '25",
    buttonText: "View Gallery",
    bgClass: "bg-gradient-to-br from-gray-800 to-gray-900", bgImage: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&q=80",
    textClass: "text-white",
    labelClass: "text-white/80",
    buttonClass: "bg-white text-gray-800 hover:bg-gray-100",
    shape: (
      <div className="absolute -bottom-12 -right-8 w-64 h-64 rounded-xl overflow-hidden shadow-xl border-4 border-gray-600 rotate-[8deg]">
         <img src="https://images.unsplash.com/photo-1515169067868-5387ec356754?w=400&q=80" alt="Startup Networking" className="w-full h-full object-cover rotate-[-8deg] scale-110" />
      </div>
    )
  },
  {
    label: "PAST EVENT",
    title: "Fashion Week Gala",
    buttonText: "View Gallery",
    bgClass: "bg-gradient-to-br from-rose-400 to-red-500", bgImage: "https://images.unsplash.com/photo-1509631179647-0c37cb1190bc?w=800&q=80",
    textClass: "text-white",
    labelClass: "text-white/80",
    buttonClass: "bg-white text-rose-500 hover:bg-rose-50",
    shape: (
      <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full shadow-2xl overflow-hidden border-4 border-red-300/30">
        <img src="https://images.unsplash.com/photo-1509631179647-0c37cb1190bc?w=400&q=80" alt="Fashion Week" className="w-full h-full object-cover" />
      </div>
    )
  },
  {
    label: "PAST EVENT",
    title: "Art Biennale 2023",
    buttonText: "View Gallery",
    bgClass: "bg-gradient-to-br from-orange-400 to-amber-600", bgImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    textClass: "text-white",
    labelClass: "text-white/80",
    buttonClass: "bg-white text-orange-600 hover:bg-orange-50",
    shape: (
      <div className="absolute -bottom-10 -right-8 w-60 h-60 rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/20 -rotate-6">
         <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80" alt="" className="w-full h-full object-cover rotate-6 scale-110" />
      </div>
    )
  },
  {
    label: 'PAST EVENT',
    title: 'Global Music Fest',
    buttonText: 'View Gallery',
    bgClass: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    bgImage: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80',
    textClass: 'text-white',
    labelClass: 'text-white/80',
    buttonClass: 'bg-white text-purple-600 hover:bg-purple-50',
    shape: (
      <div className="absolute -bottom-4 -right-12 w-64 h-64 rounded-full shadow-2xl border-4 border-purple-400/30 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80" alt="Music Fest" className="w-full h-full object-cover" />
      </div>
    )
  },
  {
    label: 'PAST EVENT',
    title: 'Startup Networking 25',
    buttonText: 'View Gallery',
    bgClass: 'bg-gradient-to-br from-gray-800 to-gray-900',
    bgImage: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&q=80',
    textClass: 'text-white',
    labelClass: 'text-white/80',
    buttonClass: 'bg-white text-gray-800 hover:bg-gray-100',
    shape: (
      <div className="absolute -bottom-12 -right-8 w-64 h-64 rounded-xl overflow-hidden shadow-xl border-4 border-gray-600 rotate-[8deg]">
         <img src="https://images.unsplash.com/photo-1515169067868-5387ec356754?w=400&q=80" alt="Startup Networking" className="w-full h-full object-cover rotate-[-8deg] scale-110" />
      </div>
    )
  },
  {
    label: 'PAST EVENT',
    title: 'Fashion Week Gala',
    buttonText: 'View Gallery',
    bgClass: 'bg-gradient-to-br from-rose-400 to-red-500',
    bgImage: 'https://images.unsplash.com/photo-1509631179647-0c37cb1190bc?w=800&q=80',
    textClass: 'text-white',
    labelClass: 'text-white/80',
    buttonClass: 'bg-white text-rose-500 hover:bg-rose-50',
    shape: (
      <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full shadow-2xl overflow-hidden border-4 border-red-300/30">
        <img src="https://images.unsplash.com/photo-1509631179647-0c37cb1190bc?w=400&q=80" alt="Fashion Week" className="w-full h-full object-cover" />
      </div>
    )
  }
];

export function PastEventsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 md:py-32 bg-[#faf9f6] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 mb-12 md:mb-16">
        <h2 className="font-serif text-[36px] md:text-[54px] lg:text-[72px] leading-tight text-brand-charcoal mb-4">
          Experience the <br />
          <span className="italic text-brand-gold">moments again.</span>
        </h2>
        <p className="font-sans text-[16px] md:text-[18px] text-brand-gray max-w-xl">
          A glimpse into the magical atmospheres of our past events. The memories live on.
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden group pb-8">
        <motion.div
          className="flex flex-nowrap w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        >
          {[0, 1].map((blockIdx) => (
            <div key={blockIdx} className="flex flex-nowrap items-center gap-6 md:gap-8 pr-6 md:pr-8">
              {CARDS.map((card, i) => (
                <div 
                  key={i} 
                  className={`relative flex-shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] h-[500px] md:h-[550px] rounded-[32px] p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl ${card.bgClass}`}
                >
                  {/* Decorative shape */}
                  <div className="absolute inset-0 z-0">{card.bgImage && <img src={card.bgImage} className="w-full h-full object-cover mix-blend-overlay opacity-30" alt="" />}</div>{card.shape}
                  
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

      <div className="flex justify-center mt-12 pb-8">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-3 px-10 py-4 bg-[#0a0a0f] text-white rounded-full font-sans font-semibold tracking-wide hover:bg-[#15151a] transition-all shadow-2xl hover:-translate-y-1 hover:shadow-fuchsia-500/20 group"
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
          PulseHub Portal
        </button>
      </div>

      <DiscoverEventsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
