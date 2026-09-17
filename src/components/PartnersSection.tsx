"use client";

import { motion } from "framer-motion";
import { useStore } from "@/lib/store";

const partners = [
  { id: 1, name: "Adwa Victory Memorial", logo: "/partners/adwa.png" },
  { id: 2, name: "Ibex Technologies and Promotion", logo: "/partners/ibex.png" },
  { id: 3, name: "Seven Event", logo: "/partners/seven.png" },
  { id: 4, name: "Liyu Skin", logo: "/partners/liyu.png" },
  { id: 5, name: "Events by Lauren", logo: "/partners/lauren.png", className: "scale-150" },
  { id: 6, name: "Safira Events", logo: "/partners/safira.png", className: "scale-[1.7]" },
  { id: 7, name: "Jellow Wedding and Event Management", logo: "/partners/jellow.png", className: "scale-125" },
];

export function PartnersSection() {
  const { t } = useStore();

  return (
    <section className="bg-[#FAF9F6] py-8 md:py-12 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-10 mb-8 md:mb-10 text-center">
        <span className="block text-[11px] font-sans tracking-[0.2em] uppercase text-brand-gray">
          {t('partners.eyebrow')}
        </span>
      </div>
      
      {/* Marquee container */}
      <div className="relative w-full flex overflow-hidden group">
        
        {/* Gradients for smooth fade on edges */}
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex flex-nowrap w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {/* We render the same block twice to create a seamless loop */}
          {[0, 1].map((blockIdx) => (
            <div 
              key={blockIdx} 
              className="flex flex-nowrap items-center gap-24 md:gap-32 pr-24 md:pr-32"
            >
              {partners.map((partner) => (
                <div 
                  key={partner.id} 
                  className="flex-shrink-0 flex items-center justify-center transition-all duration-500"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className={`h-16 md:h-20 w-auto object-contain max-w-[200px] mix-blend-multiply contrast-125 ${partner.className || ''}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
