"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useStore } from "@/lib/store";

export function EditorialIntro() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const { t } = useStore();

  return (
    <section ref={ref} className="relative py-16 md:py-24 px-4 flex justify-center text-center overflow-hidden items-center">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <div className="absolute inset-0 bg-brand-bg/80 backdrop-blur-sm z-10" />
        <img 
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
          alt="Elegant event details"
          className="w-full h-full object-cover opacity-60"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 max-w-[800px] bg-brand-bg/60 backdrop-blur-md p-8 md:p-10 border border-brand-charcoal/10"
      >
        <span className="block text-[11px] font-sans tracking-[0.2em] uppercase text-brand-gray mb-4">
          {t('editorial.eyebrow')}
        </span>
        <h2 className="font-serif text-[clamp(2.5rem,5vw,5rem)] text-brand-charcoal leading-[1.1] tracking-[-0.02em] mb-0">
          {t('editorial.text')}
        </h2>
      </motion.div>
    </section>
  );
}

const occasions = [
  {
    id: "01",
    label: "Weddings",
    headline: "Two lives.\nOne beautiful beginning.",
    copy: "Digital invitations designed for a day you'll never forget.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    linkText: "Explore Weddings"
  },
  {
    id: "02",
    label: "Birthdays",
    headline: "Another year.\nAnother story worth celebrating.",
    copy: "From intimate dinners to unforgettable parties.",
    image: "/birthday.png",
    linkText: "Explore Birthdays"
  },
  {
    id: "03",
    label: "Engagements",
    headline: "The beginning\nbefore the beginning.",
    copy: "Celebrate the question that changes everything.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
    linkText: "Explore Engagements"
  },
  {
    id: "04",
    label: "Graduations",
    headline: "One chapter ends.\nAnother begins.",
    copy: "Celebrate the work, memories and next adventure.",
    image: "/graduation.jpg",
    linkText: "Explore Graduations"
  },
  {
    id: "05",
    label: "Corporate",
    headline: "Bring people together.\nBeautifully.",
    copy: "Invitations for launches, conferences, dinners and company events.",
    image: "/corporate.jpg",
    linkText: "Explore Corporate",
    featured: true
  }
];

export function OccasionsSection() {
  return (
    <section id="occasions" className="bg-[#FAF9F6] text-brand-charcoal relative pb-32 md:pb-48">
      {/* Intro Header */}
      <div className="relative py-32 md:py-48 mb-16 md:mb-32 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[#FAF9F6]/80 backdrop-blur-sm z-10" />
           <motion.img 
             initial={{ scale: 1.1 }}
             whileInView={{ scale: 1 }}
             transition={{ duration: 2, ease: "easeOut" }}
             src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop"
             alt="Celebration background"
             className="w-full h-full object-cover opacity-30"
           />
        </div>
        <div className="relative z-20 max-w-[1600px] mx-auto px-4 md:px-10 text-center">
          <span className="block text-[11px] font-sans tracking-[0.2em] uppercase text-brand-gray mb-6">Occasions</span>
          <h2 className="font-serif text-[clamp(3rem,6vw,6rem)] text-brand-charcoal leading-[1] tracking-[-0.02em]">
            Made for every<br/>kind of moment.
          </h2>
        </div>
      </div>

      {/* Occasion Stories - Apple OS Style Grid */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {occasions.map((occ, i) => (
            <motion.div 
              key={occ.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/5] md:aspect-square group overflow-hidden bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-charcoal/5 flex flex-col"
            >
              <div className="h-1/2 w-full relative overflow-hidden rounded-t-3xl border-b border-brand-charcoal/5">
                <motion.div 
                  className="absolute inset-0 z-0 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                >
                  <img src={occ.image} alt={occ.label} className="w-full h-full object-cover" />
                </motion.div>
              </div>

              <div className="relative z-20 w-full h-1/2 p-8 md:p-12 flex flex-col justify-between bg-gradient-to-b from-white/40 to-white/80">
                <div className="flex items-baseline gap-4">
                  <span className="font-sans text-[12px] text-brand-gold tracking-widest">{occ.id}</span>
                  <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-gray">{occ.label}</h3>
                </div>

                <div>
                  <h4 className="font-serif text-[28px] md:text-[32px] text-brand-charcoal leading-[1.1] mb-4 whitespace-pre-line">
                    {occ.headline}
                  </h4>
                  <p className="font-sans text-[14px] md:text-[16px] text-brand-charcoal/70 mb-8 leading-[1.6] font-light max-w-[90%]">
                    {occ.copy}
                  </p>
                  
                  <a href="#" className="inline-flex items-center justify-center font-sans text-[10px] uppercase tracking-[0.2em] text-brand-black bg-brand-bg border border-brand-charcoal/10 rounded-full px-6 py-3 hover:bg-brand-black hover:text-white transition-colors duration-500">
                    {occ.linkText}
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
