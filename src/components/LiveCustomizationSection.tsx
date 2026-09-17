"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Type, Image as ImageIcon, Music, MapPin, Calendar, Globe, Settings2 } from "lucide-react";

export function LiveCustomizationSection() {
  const [activeTheme, setActiveTheme] = useState('Minimal');
  
  const themes = ['Minimal', 'Elegant', 'Romantic', 'Modern', 'Habesha', 'Classic'];

  return (
    <section className="py-24 md:py-32 bg-[#F5F5F7] px-4">
      <div className="max-w-[1200px] mx-auto text-center mb-16 md:mb-24">
        <h2 className="text-[36px] md:text-[52px] font-bold text-[#1D1D1F] tracking-tight mb-4 leading-[1.1]">
          Yours, down to every detail.
        </h2>
      </div>

      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* LEFT: Customization Panel */}
        <div className="flex-1 w-full max-w-[400px] bg-white rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-black/5 overflow-hidden">
          <div className="h-12 border-b border-black/5 flex items-center px-4 bg-[#F5F5F7]/50">
            <h3 className="text-[13px] font-semibold text-[#6E6E73] flex items-center gap-2"><Settings2 className="w-4 h-4" /> Editor</h3>
          </div>
          <div className="flex">
            {/* Sidebar */}
            <div className="w-[60px] border-r border-black/5 flex flex-col items-center py-4 gap-6 bg-[#F5F5F7]/30">
              {[Palette, Type, ImageIcon, Music, Calendar, MapPin, Globe].map((Icon, i) => (
                <button key={i} className={`p-2 rounded-lg ${i === 0 ? 'bg-black text-white' : 'text-[#6E6E73] hover:text-black hover:bg-black/5'}`}>
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
            {/* Content */}
            <div className="flex-1 p-6">
              <h4 className="text-[15px] font-semibold text-[#1D1D1F] mb-4">Theme</h4>
              <div className="flex flex-col gap-2">
                {themes.map(t => (
                  <button 
                    key={t}
                    onClick={() => setActiveTheme(t)}
                    className={`text-left px-4 py-2.5 rounded-xl text-[14px] transition-colors ${activeTheme === t ? 'bg-[#F5F5F7] font-semibold text-black border border-black/10' : 'text-[#6E6E73] hover:bg-black/5 border border-transparent'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Smartphone Preview */}
        <div className="flex-1 flex justify-center w-full relative">
          <div className="w-[300px] h-[600px] bg-black rounded-[48px] p-2 shadow-[0_30px_60px_rgba(0,0,0,0.2)] border-4 border-black relative">
            {/* Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20" />
            
            {/* Screen */}
            <div className="w-full h-full bg-white rounded-[40px] overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTheme}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                  style={{
                    backgroundColor: activeTheme === 'Elegant' ? '#FDFBF7' : activeTheme === 'Habesha' ? '#2A5C22' : activeTheme === 'Romantic' ? '#FFF0F5' : '#FFFFFF',
                    color: activeTheme === 'Habesha' ? '#F7D046' : '#1D1D1F'
                  }}
                >
                  <div className={`w-full h-full border ${activeTheme === 'Habesha' ? 'border-[#F7D046]/50' : 'border-black/10'} rounded-2xl p-6 flex flex-col items-center justify-center`}>
                    <h3 className={`text-3xl ${activeTheme === 'Elegant' ? 'font-serif' : 'font-sans font-bold'} mb-8`}>
                      SARA & NOAH
                    </h3>
                    <p className="text-sm opacity-80 mb-2">October 24, 2026</p>
                    <p className="text-sm opacity-80">Addis Ababa</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
