"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { useStore } from "@/lib/store";

const templates = [
  { id: 1, type: "Wedding", image: "/slide-wedding.jpg", content: <div className="text-center"><h3 className="font-serif text-[40px] leading-none mb-8">SELAM<br/>&<br/>ABEL</h3><p className="text-[12px] uppercase tracking-widest opacity-90 mb-2">17 October 2026</p><p className="text-[12px] uppercase tracking-widest opacity-90">Addis Ababa</p></div> },
  { id: 2, type: "Birthday", image: "/slide-birthday.jpg", content: <div className="text-center"><h3 className="font-serif text-[40px] leading-none mb-8">LIYA<br/>TWENTY<br/>FIVE</h3><p className="text-[12px] uppercase tracking-widest opacity-90">Saturday<br/>June 21</p></div> },
  { id: 3, type: "Graduation", image: "/slide-graduation.jpg", content: <div className="text-center"><h3 className="font-serif text-[40px] leading-none mb-8">CLASS OF<br/>2026</h3><p className="text-[12px] uppercase tracking-widest opacity-90">Graduation<br/>Celebration</p></div> },
  { id: 4, type: "Engagement", image: "/slide-engagement.jpg", content: <div className="text-center"><h3 className="font-serif text-[40px] leading-none mb-8">RUTH<br/>&<br/>NATI</h3><p className="text-[12px] uppercase tracking-widest opacity-90">We Said Yes</p></div> },
  { id: 5, type: "Corporate", image: "/slide-corporate.jpg", content: <div className="text-center"><h3 className="font-serif text-[40px] leading-none mb-8">ANNUAL<br/>GALA</h3><p className="text-[12px] uppercase tracking-widest opacity-90">2026</p></div> },
];

export function InvitationCollection() {
  const { t } = useStore();
  
  return (
    <section id="templates" className="bg-[#FAF9F6] text-brand-charcoal pt-32 md:pt-48 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-10 mb-20 md:mb-32">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="block text-[11px] font-sans tracking-[0.2em] uppercase text-brand-gray mb-6"
        >
          {t('collection.eyebrow')}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(3rem,6vw,6rem)] leading-[1.05] tracking-[-0.02em] mb-8"
        >
          {t('collection.title')}
        </motion.h2>
      </div>

      {/* Horizontal Draggable / Scrollable Gallery */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 md:gap-16 px-4 md:px-10 pb-16 hide-scrollbar w-full">
        {templates.map((tpl) => (
          <motion.div 
            key={tpl.id}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="shrink-0 snap-center w-[300px] md:w-[400px] aspect-[9/16] relative group cursor-pointer"
          >
            <div className="w-full h-full relative overflow-hidden text-white rounded-lg">
              <img src={tpl.image} alt={tpl.type} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50" />
              
              <div className="w-full h-full p-6 md:p-10 relative z-10 flex flex-col items-center justify-center">
                <div className="w-full h-full border border-white/30 p-6 md:p-8 flex flex-col items-center justify-center relative">
                   <span className="absolute top-8 text-[10px] uppercase tracking-[0.2em] opacity-80">{tpl.type}</span>
                   {tpl.content}
                </div>
              </div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
               <Button className="bg-white text-black hover:bg-white/90 border-none w-48">{t('collection.view')}</Button>
            </div>
          </motion.div>
        ))}
        {/* Spacer for end of scroll */}
        <div className="shrink-0 w-10 md:w-20" />
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
