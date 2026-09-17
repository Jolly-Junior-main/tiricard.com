"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/Button";
import { useStore } from "@/lib/store";

const slides = [
  {
    id: 0,
    image: "/slide-tiricard.png",
    text1: "Your Special Moments,",
    text2: "Digitally Delivered"
  },
  {
    id: 1,
    image: "/slide-wedding.jpg",
    text1: "Two Lives. One",
    text2: "Beautiful Beginning"
  },
  {
    id: 2,
    image: "/slide-birthday.jpg",
    text1: "Another Year. Another",
    text2: "Story to Celebrate"
  },
  {
    id: 3,
    image: "/slide-engagement.jpg",
    text1: "The Beginning Before",
    text2: "The Beginning"
  },
  {
    id: 4,
    image: "/slide-graduation.jpg",
    text1: "One Chapter Ends.",
    text2: "Another Begins"
  },
  {
    id: 5,
    image: "/slide-corporate.jpg",
    text1: "Bring People Together.",
    text2: "Beautifully"
  }
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, lang } = useStore();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={slides[currentIndex].image}
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "10%" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Celebration background"
          />
        </AnimatePresence>
      </div>

      <div className="relative z-20 w-full h-full max-w-[1600px] mx-auto px-4 md:px-10 flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-[1200px]">
          <h1 className="font-sans font-bold text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.2] tracking-tight mb-8 md:mb-12 flex flex-col min-h-[3em]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-white pb-1">{slides[currentIndex].text1}</div>
                <div className="text-brand-gold pb-1">{slides[currentIndex].text2}</div>
              </motion.div>
            </AnimatePresence>
            
            <motion.div 
              initial={{ scaleX: 0 }} 
              animate={{ scaleX: 1 }} 
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }} 
              className="w-16 h-1 bg-brand-gold mt-6 origin-left"
            />
          </h1>
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-start gap-12 md:gap-24 w-full">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex gap-6 md:gap-12"
            >
              <div className="flex flex-col items-start text-left max-w-[100px]">
                <div className="w-12 h-12 rounded-full border-2 border-brand-gold flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <span className="text-[11px] font-sans font-medium text-white">Fast &<br/>Convenient</span>
              </div>
              <div className="flex flex-col items-start text-left max-w-[100px]">
                <div className="w-12 h-12 rounded-full border-2 border-brand-gold flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <span className="text-[11px] font-sans font-medium text-white">Secure &<br/>Reliable</span>
              </div>
              <div className="flex flex-col items-start text-left max-w-[100px]">
                <div className="w-12 h-12 rounded-full border-2 border-brand-gold flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>
                </div>
                <span className="text-[11px] font-sans font-medium text-white">Eco-Friendly</span>
              </div>
              <div className="flex flex-col items-start text-left max-w-[100px]">
                <div className="w-12 h-12 rounded-full border-2 border-brand-gold flex items-center justify-center mb-3 relative">
                  <svg className="w-5 h-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  <div className="absolute inset-0 flex items-center justify-center"><div className="w-8 h-[2px] bg-brand-gold transform -rotate-45" /></div>
                </div>
                <span className="text-[11px] font-sans font-medium text-white">No Paper<br/>Invitation</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-brand-gold text-brand-black hover:bg-white hover:text-black font-semibold border-none">{t('hero.btn.create')}</Button>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/60">Scroll to discover</span>
        <motion.div 
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
