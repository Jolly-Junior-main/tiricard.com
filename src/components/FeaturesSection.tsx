"use client";

import { motion } from "framer-motion";

import { useStore } from "@/lib/store";

export function FeaturesSection() {
  const { t } = useStore();
  
  return (
    <section id="features" className="bg-[#FAF9F6] text-brand-charcoal pt-16 md:pt-24 pb-32 md:pb-48 overflow-hidden">
      {/* Product Intro */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-10 mb-20 md:mb-32">
        <span className="block text-[11px] font-sans tracking-[0.2em] uppercase text-brand-gray mb-6">
          {t('feat.eyebrow')}
        </span>
        <h2 className="font-serif text-[clamp(3rem,6vw,6rem)] leading-[1.05] tracking-[-0.02em] mb-8 whitespace-pre-line">
          {t('feat.title')}
        </h2>
        <p className="font-sans text-[16px] md:text-[20px] text-brand-gray max-w-[500px] font-light leading-[1.6]">
          {t('feat.desc')}
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-10">
        <div className="relative w-full flex overflow-hidden group pb-8">
        <motion.div
          className="flex flex-nowrap w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {[0, 1].map((blockIdx) => (
            <div key={blockIdx} className="flex flex-nowrap items-center gap-6 md:gap-8 pr-6 md:pr-8">
          
          {/* Card 01 - Dark */}
          <div className="flex flex-col flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] lg:w-[480px] h-[650px] md:h-[750px] rounded-[20px] relative overflow-hidden bg-brand-charcoal text-white shadow-2xl border border-brand-charcoal/10">
            {/* Window Chrome */}
            <div className="h-[50px] px-5 border-b border-white/10 flex items-center justify-between bg-[#1f1d1d]">
              <div className="flex gap-2 w-16">
                <div className="w-3 h-3 rounded-full bg-[#e5675f]"></div>
                <div className="w-3 h-3 rounded-full bg-[#d8a94d]"></div>
                <div className="w-3 h-3 rounded-full bg-[#5da970]"></div>
              </div>
              <span className="font-sans text-[12px] font-medium text-white/50">RSVP</span>
              <div className="w-16"></div>
            </div>

            <div className="flex-1 flex flex-col items-center text-center pt-12 md:pt-16 px-6 md:px-8 relative">
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase mb-6 text-white/40">01</span>
              <h3 className="font-serif text-[32px] md:text-[40px] leading-[1.1] mb-6 max-w-[90%]">
                {t('feat.1.title')}
              </h3>
              <p className="font-sans text-[14px] md:text-[16px] text-white/60 font-light leading-[1.6] max-w-[90%] z-10 relative">
                {t('feat.1.desc')}
              </p>
              
              <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-12 px-6">
                 <div className="w-full max-w-[280px] bg-white text-brand-charcoal shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-8 flex flex-col text-center justify-center rounded-sm">
                    <h4 className="font-serif text-xl mb-6">SELAM & ABEL</h4>
                    <p className="font-sans text-[12px] mb-4 text-brand-gray">{t('feat.1.q')}</p>
                    <div className="flex flex-col gap-3">
                      <div className="bg-brand-black text-white py-3 font-sans text-[10px] tracking-widest uppercase cursor-pointer rounded-sm">{t('feat.1.yes')}</div>
                      <div className="bg-transparent border border-brand-soft text-brand-charcoal py-3 font-sans text-[10px] tracking-widest uppercase cursor-pointer hover:bg-brand-bg transition-colors rounded-sm">{t('feat.1.no')}</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Card 02 - Light */}
          <div className="flex flex-col flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] lg:w-[480px] h-[650px] md:h-[750px] rounded-[20px] relative overflow-hidden bg-white text-brand-charcoal shadow-2xl border border-brand-soft">
            {/* Window Chrome */}
            <div className="h-[50px] px-5 border-b border-brand-soft flex items-center justify-between bg-[#F9F9F9]">
              <div className="flex gap-2 w-16">
                <div className="w-3 h-3 rounded-full bg-[#e5675f]"></div>
                <div className="w-3 h-3 rounded-full bg-[#d8a94d]"></div>
                <div className="w-3 h-3 rounded-full bg-[#5da970]"></div>
              </div>
              <span className="font-sans text-[12px] font-medium text-brand-gray">Guest List</span>
              <div className="w-16"></div>
            </div>

            <div className="flex-1 flex flex-col items-center text-center pt-12 md:pt-16 px-6 md:px-8 relative">
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase mb-6 text-brand-gray">02</span>
              <h3 className="font-serif text-[32px] md:text-[40px] leading-[1.1] mb-6 max-w-[90%] whitespace-pre-line">
                {t('feat.2.title')}
              </h3>
              <p className="font-sans text-[14px] md:text-[16px] text-brand-gray font-light leading-[1.6] max-w-[90%] z-10 relative">
                {t('feat.2.desc')}
              </p>
              
              <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-12 px-6 w-full">
                 <div className="w-full max-w-[340px] bg-white text-brand-charcoal shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-brand-soft p-6 md:p-8 rounded-sm">
                    <div className="flex justify-between items-end mb-8 border-b border-brand-soft pb-6">
                       <div className="text-left">
                         <p className="font-sans text-[10px] tracking-widest text-brand-gray mb-2 uppercase">{t('feat.2.guests')}</p>
                         <p className="font-serif text-4xl">184</p>
                       </div>
                       <div className="flex gap-5 text-right">
                         <div>
                           <p className="font-sans text-[9px] tracking-widest text-brand-gray mb-2 uppercase">{t('feat.2.attending')}</p>
                           <p className="font-sans text-xl">142</p>
                         </div>
                         <div>
                           <p className="font-sans text-[9px] tracking-widest text-brand-gray mb-2 uppercase">{t('feat.2.pending')}</p>
                           <p className="font-sans text-xl text-brand-gray">18</p>
                         </div>
                       </div>
                    </div>
                    
                    <div className="flex flex-col gap-4 font-sans text-[12px]">
                      <div className="flex justify-between items-center border-b border-brand-soft pb-4">
                        <span className="w-1/3 text-left">Hana Alemu</span>
                        <span className="w-1/3 text-center text-green-600">{t('feat.2.attending')}</span>
                        <span className="w-1/3 text-right text-brand-gray">2 {t('feat.2.guests')}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-brand-soft pb-4">
                        <span className="w-1/3 text-left">Daniel Bekele</span>
                        <span className="w-1/3 text-center text-brand-gray">{t('feat.2.pending')}</span>
                        <span className="w-1/3 text-right text-brand-gray">2 {t('feat.2.guests')}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2">
                        <span className="w-1/3 text-left">Meron Tadesse</span>
                        <span className="w-1/3 text-center text-brand-gray">{t('feat.2.declined')}</span>
                        <span className="w-1/3 text-right text-brand-gray">—</span>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Card 03 - Dark */}
          <div className="flex flex-col flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] lg:w-[480px] h-[650px] md:h-[750px] rounded-[20px] relative overflow-hidden bg-[#181515] text-white shadow-2xl border border-white/10">
            {/* Window Chrome */}
            <div className="h-[50px] px-5 border-b border-white/5 flex items-center justify-between bg-[#1D1B1B]">
              <div className="flex gap-2 w-16">
                <div className="w-3 h-3 rounded-full bg-[#e5675f]"></div>
                <div className="w-3 h-3 rounded-full bg-[#d8a94d]"></div>
                <div className="w-3 h-3 rounded-full bg-[#5da970]"></div>
              </div>
              <span className="font-sans text-[12px] font-medium text-white/50">Delivery</span>
              <div className="w-16"></div>
            </div>

            <div className="flex-1 flex flex-col items-center text-center pt-12 md:pt-16 px-6 md:px-8 relative">
              <span className="text-[10px] font-sans tracking-[0.2em] uppercase mb-6 text-white/40">03</span>
              <h3 className="font-serif text-[32px] md:text-[40px] leading-[1.1] mb-6 max-w-[90%] whitespace-pre-line">
                {t('feat.3.title')}
              </h3>
              <p className="font-sans text-[14px] md:text-[16px] text-white/60 font-light leading-[1.6] max-w-[90%] mb-6 z-10 relative">
                {t('feat.3.desc')}
              </p>
              <div className="flex gap-3 font-sans text-[9px] uppercase tracking-[0.15em] text-brand-gold z-10 relative">
                 <span>SMS</span> • <span>WhatsApp</span> • <span>Link</span>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-12 px-6">
                 <div className="w-full max-w-[320px] bg-[#F9F9F9] text-brand-charcoal border border-black/5 p-4 rounded-[1.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                    <div className="bg-[#E9E9EB] text-black p-4 rounded-2xl rounded-tl-sm w-[90%] mb-3 font-sans text-[13.5px] leading-[1.4] text-left">
                      {t('feat.3.msg')}
                    </div>
                    <div className="bg-[#0B84FE] p-4 rounded-2xl rounded-tr-sm w-[90%] ml-auto text-white text-left shadow-md">
                      <div className="bg-white/10 border border-white/20 p-4 rounded-xl backdrop-blur-sm">
                        <div className="w-full h-14 bg-white/20 mb-3 rounded-md" />
                        <p className="font-serif text-[16px] mb-1 leading-tight">Selam & Abel's Wedding</p>
                        <p className="font-sans text-[11px] opacity-80">{t('feat.3.date')}</p>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

        {/* Card 04 - Light */}
        <div className="flex flex-col flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] lg:w-[480px] min-h-[650px] h-auto md:h-[750px] rounded-[20px] relative overflow-hidden bg-[#FAF9F6] text-brand-charcoal shadow-2xl border border-brand-soft">
          {/* Window Chrome */}
          <div className="h-[50px] px-5 border-b border-brand-soft flex items-center justify-between bg-white flex-shrink-0">
            <div className="flex gap-2 w-16">
              <div className="w-3 h-3 rounded-full bg-[#e5675f]"></div>
              <div className="w-3 h-3 rounded-full bg-[#d8a94d]"></div>
              <div className="w-3 h-3 rounded-full bg-[#5da970]"></div>
            </div>
            <span className="font-sans text-[12px] font-medium text-brand-gray">Check-in</span>
            <div className="w-16"></div>
          </div>

          <div className="flex-1 flex flex-col items-center text-center pt-10 md:pt-16 px-4 md:px-8 relative">
            <span className="text-[10px] font-sans tracking-[0.2em] uppercase mb-4 md:mb-6 text-brand-gray">04</span>
            <h3 className="font-serif text-[28px] md:text-[40px] leading-[1.1] mb-4 md:mb-6 max-w-[90%] whitespace-pre-line">
              {t('arrival.title')}
            </h3>
            <p className="font-sans text-[13px] md:text-[16px] text-brand-gray font-light leading-[1.6] max-w-[95%] md:max-w-[90%] z-10 relative">
              {t('arrival.desc')}
            </p>
            
            <div className="w-full flex justify-center mt-8 pb-8 md:pb-12 px-4 z-20">
               <div className="w-full max-w-[280px] bg-white text-brand-charcoal p-6 md:p-8 relative shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-sm border border-brand-soft">
                  <p className="font-sans text-[9px] md:text-[10px] tracking-[0.2em] text-brand-gray uppercase mb-6 md:mb-8">{t('arrival.pass')}</p>
                  <h4 className="font-serif text-[20px] md:text-[24px] mb-6 md:mb-8 truncate">SELAM & ABEL</h4>
                  
                  <div className="w-full aspect-square bg-brand-black relative mb-6 md:mb-8 flex items-center justify-center">
                     <div className="w-[80%] h-[80%] bg-white p-2 grid grid-cols-5 gap-1">
                        {Array.from({length:25}).map((_,i) => <div key={i} className={`bg-black ${Math.random() > 0.4 ? 'opacity-100' : 'opacity-0'}`} />)}
                     </div>
                     <div className="absolute left-0 right-0 h-[2px] bg-brand-gold shadow-[0_0_15px_#B89A68] z-10 top-1/2" />
                  </div>

                  <div className="mt-6 md:mt-8 flex items-center justify-center gap-2 md:gap-3 text-brand-gold font-sans text-[10px] md:text-[11px] tracking-widest uppercase">
                    <span className="w-4 h-4 rounded-full border border-brand-gold flex items-center justify-center text-[9px]">✓</span>
                    {t('arrival.verified')}
                  </div>
               </div>
            </div>
          </div>
        </div>

            </div>
          ))}
        </motion.div>
      </div>
      </div>
    </section>
  );
}
