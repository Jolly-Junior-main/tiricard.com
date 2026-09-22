"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export function EmotionalBreak() {
  return (
    <section className="relative h-[80svh] w-full overflow-hidden bg-[#FAF9F6] text-brand-charcoal flex items-center justify-center text-center px-4">
      <div className="absolute inset-0 bg-[#FAF9F6]/80 z-10 backdrop-blur-sm" />
      <img 
        src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" 
        alt="Wedding celebration"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      />
      <div className="relative z-20 max-w-[800px]">
        <span className="block text-[11px] font-sans tracking-[0.2em] uppercase text-brand-gray mb-8">
          The First Moment
        </span>
        <h2 className="font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] tracking-[-0.02em] mb-10">
          The celebration<br/>starts before<br/>the day arrives.
        </h2>
        <p className="font-sans text-[16px] md:text-[20px] text-brand-charcoal/80 font-light max-w-[400px] mx-auto">
          The invitation is where anticipation begins.
        </p>
      </div>
    </section>
  );
}

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export function BilingualSection() {
  const [lang, setLang] = useState<"en" | "am">("en");

  return (
    <section className="bg-brand-bg py-32 md:py-48 px-4 border-b border-brand-soft relative z-20">
      <div className="max-w-[1600px] mx-auto px-4 md:px-10 flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        <div className="w-full md:w-[40%]">
          <h2 className="font-serif text-[clamp(3.5rem,6vw,6rem)] text-brand-charcoal leading-[1.05] tracking-[-0.02em] mb-8">
            Your celebration.<br/>Your language.
          </h2>
          <p className="font-sans text-[16px] md:text-[20px] text-brand-gray font-light leading-[1.6] mb-12">
            Create and experience invitations in English or አማርኛ.
          </p>
          <div className="flex gap-4 relative z-30">
             <button 
               type="button"
               onClick={() => setLang('en')} 
               className={`font-sans text-[12px] tracking-widest uppercase px-6 py-3 rounded-full border transition-colors duration-200 cursor-pointer ${lang === 'en' ? 'bg-brand-black text-white border-brand-black' : 'bg-transparent text-brand-gray border-brand-soft hover:border-brand-gray hover:text-brand-black'}`}
             >
               English
             </button>
             <button 
               type="button"
               onClick={() => setLang('am')} 
               className={`font-sans text-[12px] tracking-widest uppercase px-6 py-3 rounded-full border transition-colors duration-200 cursor-pointer ${lang === 'am' ? 'bg-brand-black text-white border-brand-black' : 'bg-transparent text-brand-gray border-brand-soft hover:border-brand-gray hover:text-brand-black'}`}
             >
               አማርኛ
             </button>
          </div>
        </div>
        
        <div className="w-full md:w-[60%] flex justify-center">
          <div className="w-full max-w-[500px] bg-white shadow-xl rounded-3xl p-8 md:p-16 border border-brand-soft text-center h-[400px] flex flex-col justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div 
                 key={lang}
                 initial={{ opacity: 0, y: 10 }} 
                 animate={{ opacity: 1, y: 0 }} 
                 exit={{ opacity: 0, y: -10 }}
                 transition={{ duration: 0.3 }}
                 className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-16"
              >
                <span className="text-[10px] font-sans tracking-widest text-brand-gray uppercase mb-8 block">
                  {lang === 'en' ? 'English' : 'አማርኛ'}
                </span>
                <h3 className="font-serif text-3xl md:text-5xl mb-6 leading-tight text-brand-charcoal">
                  {lang === 'en' ? 'Together with our families,' : 'ከቤተሰቦቻችን ጋር በመሆን፣'}
                </h3>
                <p className="font-sans text-brand-gray text-[16px]">
                  {lang === 'en' ? 'we invite you to celebrate our wedding.' : 'የሰርጋችንን በዓል አብራችሁን እንድታከብሩ ጋብዘናል።'}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-[#FAF9F6] py-32 md:py-48 px-4 flex justify-center text-center">
      <div className="max-w-[1000px]">
        <h2 className="font-serif text-[clamp(2rem,4vw,4rem)] text-brand-charcoal leading-[1.2] mb-12">
          &quot;Our guests were talking about the invitation before the wedding even started.&quot;
        </h2>
        <p className="font-sans text-[14px] uppercase tracking-widest text-brand-gray">
          HELEN & NATI <br/> <span className="text-[11px] opacity-70 mt-2 block">Wedding — Addis Ababa</span>
        </p>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="bg-brand-bg py-32 md:py-48 px-4 border-t border-brand-soft">
      <div className="max-w-[1600px] mx-auto px-4 md:px-10">
        <h2 className="font-serif text-[clamp(3rem,6vw,6rem)] text-brand-charcoal leading-[1.05] tracking-[-0.02em] mb-24 md:mb-32">
          Choose your<br/>celebration.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {[
            {
              title: "ESSENTIAL",
              desc: "For intimate celebrations.",
              features: ["Digital Invitation", "RSVP", "Guest Management", "Shareable Link"],
              cta: "Choose Essential"
            },
            {
              title: "SIGNATURE",
              desc: "For unforgettable events.",
              features: ["Everything in Essential", "Premium Invitations", "SMS", "Music", "Customization", "Analytics"],
              cta: "Choose Signature",
              highlight: true
            },
            {
              title: "EVENT",
              desc: "For larger celebrations.",
              features: ["Everything in Signature", "QR Guest Passes", "Check-In", "Team Access", "Advanced Analytics"],
              cta: "Choose Event"
            }
          ].map((plan, i) => (
            <div key={i} className={`p-8 md:p-12 rounded-3xl border ${plan.highlight ? 'border-brand-black bg-brand-white shadow-xl' : 'border-brand-soft bg-transparent'}`}>
              <h3 className="font-sans text-[16px] tracking-widest uppercase text-brand-charcoal mb-4">{plan.title}</h3>
              <p className="font-serif text-2xl text-brand-gray mb-12">{plan.desc}</p>
              
              <ul className="flex flex-col gap-4 mb-16">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="font-sans text-[14px] text-brand-gray pb-4 border-b border-brand-soft/50 flex justify-between">
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant={plan.highlight ? 'primary' : 'outline'} className="w-full rounded-full">{plan.cta}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative h-[90svh] w-full overflow-hidden bg-[#FAF9F6] text-brand-charcoal flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 bg-[#FAF9F6]/90 z-10 backdrop-blur-sm" />
      <img 
        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" 
        alt="Wedding details"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      />
      
      <div className="relative z-20 max-w-[800px]">
        <span className="block text-[11px] font-sans tracking-[0.2em] uppercase text-brand-gray mb-8">
          Your Moment Starts Here
        </span>
        <h2 className="font-serif text-[clamp(4rem,8vw,8rem)] leading-[0.9] tracking-[-0.02em] mb-10">
          Create something<br/>worth opening.
        </h2>
        <p className="font-sans text-[16px] md:text-[20px] text-brand-charcoal/80 font-light max-w-[500px] mx-auto mb-16">
          Beautiful invitations for life&apos;s unforgettable moments.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-brand-black text-white hover:bg-brand-black/90 rounded-full">Create Your Invitation</Button>
          <Button size="lg" className="bg-transparent border border-brand-charcoal/30 text-brand-charcoal hover:bg-white hover:text-black rounded-full">Explore Templates</Button>
        </div>
      </div>
    </section>
  );
}

import { Phone, Mail } from "lucide-react";
import { useStore } from "@/lib/store";

export function Footer() {
  const { t, lang, setLang } = useStore();
  
  return (
    <footer className="bg-brand-black text-white pt-32 pb-16 px-4">
      <div className="max-w-[1600px] mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-32">
          <div className="max-w-[400px]">
            <div className="flex items-center gap-3 mb-8">
              <img src="/logo.png" alt="Tiricard Logo" className="h-12 md:h-14 w-auto object-contain" />
              <span className="font-serif text-3xl tracking-widest uppercase mt-1">Tiricard</span>
            </div>
            <p className="font-sans text-[16px] text-white/60 font-light leading-[1.6] mb-8">
              {t('footer.desc')}
            </p>
            
            <div className="flex flex-col gap-4 font-sans text-[13px] tracking-wider text-white/80">
              <a href="tel:+251920392784" className="flex items-center gap-3 hover:text-brand-gold transition-colors">
                <Phone className="w-4 h-4 text-brand-gold" />
                +251 92 039 2784
              </a>
              <a href="mailto:contact@viavelatechnologies.com" className="flex items-center gap-3 hover:text-brand-gold transition-colors">
                <Mail className="w-4 h-4 text-brand-gold" />
                contact@viavelatechnologies.com
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 font-sans text-[13px] tracking-widest uppercase">
            <div className="flex flex-col gap-6">
              <span className="text-white/40 mb-2 block text-[10px]">{t('footer.invitations')}</span>
              <a href="#" className="hover:text-brand-gold transition-colors">{t('footer.wedding')}</a>
              <a href="#" className="hover:text-brand-gold transition-colors">{t('footer.birthday')}</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Engagement</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Graduation</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Corporate</a>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-white/40 mb-2 block text-[10px]">{t('nav.features')}</span>
              <a href="#" className="hover:text-brand-gold transition-colors">{t('nav.templates')}</a>
              <a href="#" className="hover:text-brand-gold transition-colors">RSVP</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Guest Management</a>
              <a href="#" className="hover:text-brand-gold transition-colors">SMS</a>
              <a href="#" className="hover:text-brand-gold transition-colors">QR Check-In</a>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-white/40 mb-2 block text-[10px]">{t('footer.company')}</span>
              <a href="#" className="hover:text-brand-gold transition-colors">{t('footer.about')}</a>
              <a href="#" className="hover:text-brand-gold transition-colors">{t('footer.contact')}</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Privacy</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Terms</a>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-white/40 mb-2 block text-[10px]">{t('footer.lang')}</span>
              <button onClick={() => setLang('en')} className={`text-left transition-colors ${lang === 'en' ? 'text-brand-gold' : 'hover:text-brand-gold'}`}>English</button>
              <button onClick={() => setLang('am')} className={`text-left transition-colors ${lang === 'am' ? 'text-brand-gold' : 'hover:text-brand-gold'}`}>አማርኛ</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-8 font-sans text-[11px] tracking-widest uppercase text-white/40">
          <p>© {new Date().getFullYear()} TIRICARD</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
