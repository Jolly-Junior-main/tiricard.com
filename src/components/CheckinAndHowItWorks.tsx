"use client";

import { motion } from "framer-motion";
import { useStore } from "@/lib/store";

export function QRCheckinSection() {
  const { t } = useStore();
  
  return (
    <section className="bg-brand-black text-brand-bg py-32 md:py-48 px-4 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="max-w-[1200px] mx-auto relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
        <div className="w-full md:w-1/2 text-left">
          <span className="block text-[11px] font-sans tracking-[0.2em] uppercase text-white/50 mb-8">
            {t('arrival.eyebrow')}
          </span>
          <h2 className="font-serif text-[clamp(3.5rem,6vw,6rem)] text-white leading-[1.05] tracking-[-0.02em] mb-12 whitespace-pre-line">
            {t('arrival.title')}
          </h2>
          <p className="font-sans text-[16px] md:text-[20px] text-white/70 font-light leading-[1.6]">
            {t('arrival.desc')}
          </p>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex items-center gap-4 text-brand-gold font-sans text-[13px] tracking-widest uppercase"
          >
            <span className="w-4 h-4 rounded-full border border-brand-gold flex items-center justify-center text-[10px]">✓</span>
            {t('arrival.verified')}
          </motion.div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-[300px] bg-brand-white text-brand-charcoal p-8 relative shadow-2xl rounded-sm">
             <p className="font-sans text-[10px] tracking-[0.2em] text-brand-gray uppercase mb-8">{t('arrival.pass')}</p>
             <h3 className="font-serif text-[28px] mb-8">SELAM & ABEL</h3>
             
             <div className="w-full aspect-square bg-brand-black relative mb-8 flex items-center justify-center">
                {/* QR Pattern Placeholder */}
                <div className="w-[80%] h-[80%] bg-white p-2 grid grid-cols-5 gap-1">
                   {Array.from({length:25}).map((_,i) => <div key={i} className={`bg-black ${i % 3 !== 0 ? 'opacity-100' : 'opacity-0'}`} />)}
                </div>
                <motion.div 
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[2px] bg-brand-gold shadow-[0_0_15px_#B89A68] z-10"
                />
             </div>

             <div className="text-left">
               <p className="font-serif text-[20px] mb-1">HANA ALEMU</p>
               <p className="font-sans text-[12px] text-brand-gray">GUESTS: 02</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';

export function HowItWorksSection() {
  const { t } = useStore();
  const scenesCount = 5;
  const names = ["Choose", "Customize", "Invite", "RSVP", "Welcome"];
  const [scene, setScene] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line react-compiler/react-compiler`n      // eslint-disable-next-line react-compiler/react-compiler
      // eslint-disable-next-line react-compiler/react-compiler
      // // eslint-disable-next-line react-compiler/react-compiler
      setPlaying(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    }
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (playing) {
      timer = setInterval(() => {
        setScene((prev) => (prev + 1) % scenesCount);
      }, 2800);
    }
    return () => clearInterval(timer);
  }, [playing]);

  return (
    <section id="how-it-works" className="tour-wrapper bg-brand-bg relative overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        .tour-wrapper { padding: 120px 0 160px; font-family: var(--font-sans, "Inter", sans-serif); }
        .section-head { text-align: center; max-w-[800px]; margin: 0 auto 72px; padding: 0 24px; }
        .eyebrow { font-size: 11px; letter-spacing: .2em; text-transform: uppercase; color: #888; margin-bottom: 24px; display: block; }
        .section-head h2 { font-size: clamp(3.2rem,6vw,5.5rem); line-height: 1; letter-spacing: -.03em; margin-bottom: 20px; font-family: var(--font-serif, "Playfair Display", serif); color: #111; }
        .section-head p { font-size: clamp(16px,2vw,22px); color: #666; font-weight: 300; max-width: 540px; margin: 0 auto; line-height: 1.5; }
        
        .tour-video { max-width: 1040px; margin: 0 auto; background: #0c0b0b; border-radius: 20px; overflow: hidden; box-shadow: 0 40px 100px -20px rgba(0,0,0,.4); }
        .tour-screen { position: relative; min-height: 640px; background: #171515; overflow: hidden; }
        .tour-top { height: 58px; display: flex; align-items: center; padding: 0 24px; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,.06); background: #1d1b1b; color: #fff; }
        .tour-top span { display: flex; gap: 8px; width: 80px; }
        .tour-top i { width: 12px; height: 12px; border-radius: 50%; background: #e5675f; }
        .tour-top i:nth-child(2) { background: #d8a94d; }
        .tour-top i:nth-child(3) { background: #5da970; }
        .tour-top b { font-size: 13px; }
        .tour-top small { color: #aaa; }
        .tour-scene { position: absolute; inset: 58px 0 0; padding: 76px; display: grid; grid-template-columns: .85fr 1.15fr; align-items: center; gap: 70px; opacity: 0; transform: translateX(30px); pointer-events: none; transition: .65s var(--ease); }
        .tour-scene.active { opacity: 1; transform: none; pointer-events: auto; }
        .tour-copy small { color: #d6ad68; letter-spacing: .13em; }
        .tour-copy h3 { font-size: clamp(2.6rem,5vw,4.8rem); line-height: .96; letter-spacing: -.055em; margin: 17px 0; font-family: var(--font-serif, "Playfair Display", serif); }
        .tour-copy p { color: #aaa; font-size: 18px; line-height: 1.5; }
        .tour-templates { height: 350px; position: relative; }
        .tour-templates i { position: absolute; width: 210px; height: 300px; left: 50%; top: 20px; border-radius: 8px; background: #f7efe2; box-shadow: 0 25px 60px rgba(0,0,0,.35); transform: translateX(-50%) rotate(-8deg); }
        .tour-templates i:nth-child(2) { background: #852846; transform: translateX(-20%) rotate(5deg); }
        .tour-templates i:nth-child(3) { background: #d8bf83; transform: translateX(-80%) rotate(-17deg); }
        .tour-card-demo { width: 310px; height: 420px; margin: auto; padding: 145px 32px 30px; background: #f9f3e7; color: #573b3c; text-align: center; box-shadow: 0 30px 70px #000; }
        .tour-card-demo b { font: 40px Georgia, serif; display: block; }
        .tour-card-demo span { display: block; font-size: 11px; letter-spacing: .12em; margin-top: 100px; }
        .tour-message { padding: 32px; border-radius: 24px; background: #fff; color: #2d2929; font-size: 20px; line-height: 1.5; box-shadow: 0 25px 60px #000; }
        .tour-message b { display: block; color: var(--wine); font-size: 14px; margin-top: 22px; }
        .tour-stats { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; }
        .tour-stats span { padding: 28px 16px; border: 1px solid rgba(255,255,255,.12); border-radius: 18px; color: #aaa; }
        .tour-stats b { display: block; color: #fff; font-size: 40px; margin-bottom: 8px; }
        .tour-verified { padding: 32px; border-radius: 24px; background: #e6f4ea; color: #236637; font-size: 36px; display: flex; align-items: center; gap: 20px; }
        .tour-verified span { font-size: 21px; font-weight: 700; }
        .tour-verified small { font-size: 13px; display: block; margin-top: 7px; font-weight: 400; }
        .tour-controls { height: 70px; display: flex; align-items: center; gap: 18px; padding: 0 24px; background: #0c0b0b; }
        .tour-controls button { border: 0; color: #fff; background: transparent; }
        .tour-play { width: 42px; height: 42px; border-radius: 50%!important; background: #fff!important; color: #111!important; font-weight: 700; display:flex; align-items:center; justify-content:center; }
        .tour-progress { height: 4px; flex: 1; border-radius: 99px; background: #343131; overflow: hidden; }
        .tour-progress i { display: block; width: 20%; height: 100%; background: #d7ad67; transition: width .5s var(--ease); }
        .tour-restart { font-size: 13px; }

        .tour-scene:not(.active) { visibility: hidden; }
        .tour-scene.active { visibility: visible; }
        .tour-wrapper :focus-visible { outline: 3px solid #d5a33f; outline-offset: 3px; }
        
        @media(max-width:700px) {
          .tour-wrapper { padding: 60px 0; }
          .section-head { margin-bottom: 42px; }
          .section-head h2 { font-size: clamp(2.4rem,11vw,3.5rem); }
          .tour-screen { min-height: 610px; }
          .tour-scene { padding: 38px 24px; grid-template-columns: 1fr; gap: 22px; align-content: center; }
          .tour-copy h3 { font-size: 2.35rem; }
          .tour-copy p { font-size: 16px; }
          .tour-templates { height: 240px; }
          .tour-templates i { width: 145px; height: 215px; }
          .tour-card-demo { width: 210px; height: 270px; padding: 82px 20px 20px; }
          .tour-card-demo b { font-size: 28px; }
          .tour-card-demo span { margin-top: 55px; }
          .tour-stats { gap: 6px; }
          .tour-stats span { padding: 18px 8px; font-size: 11px; }
          .tour-stats b { font-size: 26px; }
          .tour-controls { padding: 0 14px; }
        }
        @media(prefers-reduced-motion:reduce) {
          .tour-scene, .tour-progress i { transition: none; }
        }
      `}} />
      <div className="section-head">
        <p className="eyebrow">{t('hiw.eyebrow')}</p>
        <h2>{t('hiw.title')}</h2>
        <p>{t('hiw.desc')}</p>
      </div>
      <div className="tour-video" aria-label="Tiricard product walkthrough">
        <div className="tour-screen">
          <div className="tour-top">
            <span><i></i><i></i><i></i></span>
            <b>Tiricard</b>
            <small>{scene + 1} of {scenesCount} &middot; {names[scene]}</small>
          </div>
          
          <div className={`tour-scene ${scene === 0 ? 'active' : ''}`} aria-hidden={scene !== 0}>
            <div className="tour-copy">
              <small>{t('hiw.s1')}</small>
              <h3>{t('hiw.s1.t')}</h3>
              <p>{t('hiw.s1.d')}</p>
            </div>
            <div className="tour-templates"><i></i><i></i><i></i></div>
          </div>
          
          <div className={`tour-scene ${scene === 1 ? 'active' : ''}`} aria-hidden={scene !== 1}>
            <div className="tour-copy">
              <small>{t('hiw.s2')}</small>
              <h3>{t('hiw.s2.t')}</h3>
              <p>{t('hiw.s2.d')}</p>
            </div>
            <div className="tour-card-demo"><b>Sara & Noah</b><span>October 24, 2026</span></div>
          </div>
          
          <div className={`tour-scene ${scene === 2 ? 'active' : ''}`} aria-hidden={scene !== 2}>
            <div className="tour-copy">
              <small>{t('hiw.s3')}</small>
              <h3>{t('hiw.s3.t')}</h3>
              <p>{t('hiw.s3.d')}</p>
            </div>
            <div className="tour-message">{t('hiw.s3.d').replace('Send one beautiful link to everyone.', "You're invited to celebrate with Sara & Noah")} <b>Open invitation &rarr;</b></div>
          </div>
          
          <div className={`tour-scene ${scene === 3 ? 'active' : ''}`} aria-hidden={scene !== 3}>
            <div className="tour-copy">
              <small>{t('hiw.s4')}</small>
              <h3>{t('hiw.s4.t')}</h3>
              <p>{t('hiw.s4.d')}</p>
            </div>
            <div className="tour-stats">
              <span><b>142</b>{t('feat.2.attending')}</span>
              <span><b>18</b>{t('feat.2.pending')}</span>
              <span><b>12</b>{t('feat.2.declined')}</span>
            </div>
          </div>
          
          <div className={`tour-scene ${scene === 4 ? 'active' : ''}`} aria-hidden={scene !== 4}>
            <div className="tour-copy">
              <small>{t('hiw.s5')}</small>
              <h3>{t('hiw.s5.t')}</h3>
              <p>{t('hiw.s5.d')}</p>
            </div>
            <div className="tour-verified">✓ <span>{t('arrival.verified')}<small>Welcome, Hana &middot; 2 {t('feat.2.guests')}</small></span></div>
          </div>
        </div>
        <div className="tour-controls">
          <button type="button" className="tour-play" aria-label={playing ? "Pause walkthrough" : "Play walkthrough"} onClick={() => setPlaying(!playing)}>
            {playing ? "⏸" : "▶"}
          </button>
          <div className="tour-progress" aria-hidden="true">
            <i style={{ width: `${((scene + 1) / scenesCount) * 100}%` }}></i>
          </div>
          <button type="button" className="tour-restart" onClick={() => { setScene(0); setPlaying(true); }}>{t('hiw.restart')}</button>
        </div>
      </div>
    </section>
  );
}
