"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useStore } from "@/lib/store";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'bg-[#F5F3EE]/80 backdrop-blur-[22px] saturate-[160%] border-b border-brand-black/5 py-4' : 'bg-transparent py-8'}`}>
        <nav className="w-full max-w-[1600px] mx-auto px-4 md:px-10 flex items-center justify-between">
          <div className="flex-1 flex items-center gap-3">
            <img src="/logo.png" alt="Tiricard Logo" className="h-10 md:h-12 w-auto object-contain" />
            <span className={`font-serif text-xl md:text-2xl tracking-widest uppercase ${scrolled ? 'text-brand-black' : 'text-white'} transition-colors duration-700 mt-1`}>Tiricard</span>
          </div>

          <div className={`hidden lg:flex items-center gap-10 text-[13px] font-semibold tracking-[0.15em] uppercase ${scrolled ? 'text-brand-charcoal' : 'text-white/90'} transition-colors duration-700`}>
            <a href="#templates" className="hover:opacity-60 transition-opacity">{t('nav.templates')}</a>
            <a href="#how-it-works" className="hover:opacity-60 transition-opacity">{t('hiw.eyebrow')}</a>
            <a href="#features" className="hover:opacity-60 transition-opacity">{t('nav.features')}</a>
            <a href="#pricing" className="hover:opacity-60 transition-opacity">{t('nav.pricing')}</a>
          </div>

          <div className={`hidden lg:flex flex-1 justify-end items-center gap-8 text-[13px] font-semibold tracking-[0.15em] uppercase ${scrolled ? 'text-brand-charcoal' : 'text-white'} transition-colors duration-700`}>
            <button className="hover:opacity-60 transition-opacity" onClick={() => setLang(lang === 'en' ? 'am' : 'en')}>
              {lang === 'en' ? 'EN / አማርኛ' : 'አማርኛ / EN'}
            </button>
            <a href="#signin" className="hover:opacity-60 transition-opacity">{t('nav.signin')}</a>
            <a href="#create" className={`px-6 py-3 border ${scrolled ? 'border-brand-black hover:bg-brand-black hover:text-brand-white' : 'border-white hover:bg-white hover:text-brand-black'} transition-all duration-500`}>
              {t('nav.create')}
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex flex-1 justify-end items-center gap-6">
            <a href="#create" className={`text-[13px] font-semibold tracking-widest uppercase ${scrolled ? 'text-brand-black' : 'text-white'}`}>{t('nav.create')}</a>
            <button 
              className={`flex items-center gap-2 text-[13px] font-semibold tracking-widest uppercase ${scrolled ? 'text-brand-black' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(true)}
            >
              Menu <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-brand-bg z-[100] flex flex-col px-6 py-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Tiricard Logo" className="h-10 md:h-12 w-auto object-contain" />
                <span className="font-serif text-2xl tracking-widest uppercase text-brand-black mt-1">Tiricard</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-brand-black p-2"><X className="w-8 h-8" /></button>
            </div>
            
            <nav className="flex flex-col gap-6 text-[32px] font-serif mb-auto">
              {[
                { num: "01", label: t('nav.templates'), href: "#templates" },
                { num: "02", label: t('hiw.eyebrow'), href: "#how-it-works" },
                { num: "03", label: t('nav.features'), href: "#features" },
                { num: "04", label: t('nav.pricing'), href: "#pricing" },
              ].map((item) => (
                <a key={item.num} href={item.href} onClick={() => setMobileMenuOpen(false)} className="flex items-baseline gap-6 group">
                  <span className="text-[14px] font-sans text-brand-gray tracking-widest">{item.num}</span>
                  <span className="text-brand-black group-hover:opacity-60 transition-opacity">{item.label}</span>
                </a>
              ))}
            </nav>
            
            <div className="mt-16 pt-8 border-t border-brand-soft flex justify-between items-end">
              <div className="flex flex-col gap-4 text-[13px] tracking-widest uppercase text-brand-gray">
                <button className={`text-left ${lang === 'en' ? 'text-brand-black' : 'hover:text-brand-black'}`} onClick={() => setLang('en')}>English</button>
                <button className={`text-left ${lang === 'am' ? 'text-brand-black' : 'hover:text-brand-black'}`} onClick={() => setLang('am')}>አማርኛ</button>
              </div>
              <div className="flex flex-col gap-4 text-[13px] tracking-widest uppercase text-brand-gray text-right">
                <a href="#" className="hover:text-brand-black">Instagram</a>
                <a href="#" className="hover:text-brand-black">Contact</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
