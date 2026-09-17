"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";

const templates = [
  { id: 1, type: "Wedding", title: "SELAM & ABEL", date: "October 17, 2026", loc: "Addis Ababa", style: "bg-[#FDFBF7] text-[#8B7355] border-[#8B7355]/20" },
  { id: 2, type: "Birthday", title: "LIYA TURNS 25", date: "August 12, 2026", loc: "Skylight Hotel", style: "bg-[#1A1A1A] text-white border-white/10" },
  { id: 3, type: "Graduation", title: "CLASS OF 2026", date: "July 5, 2026", loc: "Millennium Hall", style: "bg-[#F0F4F8] text-[#1E3A8A] border-[#1E3A8A]/20" },
  { id: 4, type: "Corporate", title: "ANNUAL GALA", date: "December 10, 2026", loc: "Sheraton Addis", style: "bg-white text-black border-black/10" },
];

export function TemplateShowcaseSection() {
  return (
    <section id="templates" className="py-24 md:py-32 bg-[#1D1D1F] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 text-center mb-16 md:mb-24">
        <h2 className="text-[36px] md:text-[52px] font-bold text-white tracking-tight mb-4 leading-[1.1]">
          Designed for your moment.
        </h2>
        <p className="text-[19px] md:text-[21px] text-[#A1A1A6] max-w-[600px] mx-auto mb-10">
          Beautiful invitations for every kind of celebration.
        </p>
        <Button variant="glass" className="border-white/20 text-white hover:bg-white hover:text-black">Explore All Templates</Button>
      </div>

      {/* Horizontal Carousel (CSS-based for simplicity and performance) */}
      <div className="relative w-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 pt-4 px-4 md:px-[calc(50vw-600px)] gap-6">
        {templates.map((tpl) => (
          <motion.div 
            key={tpl.id}
            whileHover={{ y: -10 }}
            className="shrink-0 snap-center w-[280px] sm:w-[320px] h-[440px] sm:h-[500px] bg-white rounded-[24px] overflow-hidden relative group cursor-pointer"
          >
            <div className={`w-full h-full p-6 flex flex-col ${tpl.style}`}>
              <div className="h-full border border-inherit rounded-[16px] p-6 flex flex-col items-center justify-center text-center">
                <span className="text-[11px] uppercase tracking-[0.2em] mb-6 opacity-80">{tpl.type}</span>
                <h3 className="text-3xl font-serif mb-4 leading-tight">{tpl.title.split(' ').map((w,i) => <span key={i} className="block">{w}</span>)}</h3>
                <div className="mt-auto">
                  <p className="text-[13px] opacity-80 mb-1">{tpl.date}</p>
                  <p className="text-[13px] opacity-80">{tpl.loc}</p>
                </div>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 backdrop-blur-sm">
              <Button size="sm" className="w-40 bg-white text-black hover:bg-white/90">Use Template</Button>
              <Button size="sm" variant="outline" className="w-40 border-white text-white hover:bg-white hover:text-black">Preview</Button>
            </div>
          </motion.div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
