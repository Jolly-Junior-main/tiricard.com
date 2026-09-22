"use client";

import { motion } from "framer-motion";

export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "CHOOSE",
      headline: "Find your perfect invitation.",
      copy: "Start with a professionally designed invitation for your celebration.",
      visual: (
        <div className="w-full h-full bg-[#F5F5F7] rounded-[24px] overflow-hidden flex items-center justify-center p-8 relative">
          <div className="absolute grid grid-cols-2 gap-4 w-[120%] rotate-12 opacity-80">
             <div className="h-64 bg-white rounded-2xl shadow-sm border border-black/5" />
             <div className="h-48 bg-white rounded-2xl shadow-sm border border-black/5" />
             <div className="h-56 bg-white rounded-2xl shadow-sm border border-black/5" />
             <div className="h-64 bg-white rounded-2xl shadow-sm border border-black/5" />
          </div>
          <div className="z-10 w-[240px] h-[340px] bg-white rounded-[24px] shadow-2xl border border-black/5 p-6 flex flex-col items-center justify-center text-center">
            <span className="text-[#8B7355] text-[10px] uppercase tracking-widest mb-3">Template</span>
            <div className="w-16 h-16 rounded-full bg-[#FDFBF7] border border-[#8B7355]/20 mb-4" />
            <div className="w-3/4 h-2 bg-black/10 rounded-full mb-2" />
            <div className="w-1/2 h-2 bg-black/10 rounded-full" />
          </div>
        </div>
      )
    },
    {
      step: "02",
      title: "CUSTOMIZE",
      headline: "Make it completely yours.",
      copy: "Theme, typography, colors, photos, and music. Update every detail live.",
      visual: (
        <div className="w-full h-full bg-white border border-black/5 rounded-[24px] shadow-sm flex overflow-hidden">
          <div className="w-1/3 bg-[#F5F5F7] border-r border-black/5 p-4 flex flex-col gap-3">
             <div className="h-6 bg-black/5 rounded-md w-1/2 mb-4" />
             {[1,2,3,4,5].map(i => <div key={i} className="h-8 bg-white rounded-md border border-black/5 w-full" />)}
          </div>
          <div className="w-2/3 flex items-center justify-center bg-[#FDFBF7] p-8">
            <div className="w-[200px] h-[300px] bg-white rounded-[20px] shadow-lg border border-black/5 p-4 text-center">
              <div className="text-xl font-serif mt-8 text-[#8B7355]">SELAM<br/>&<br/>ABEL</div>
            </div>
          </div>
        </div>
      )
    },
    {
      step: "03",
      title: "INVITE",
      headline: "Invite everyone beautifully.",
      copy: "Add guests, import lists, and send invitations via SMS or WhatsApp in one click.",
      visual: (
        <div className="w-full h-full bg-[#1D1D1F] rounded-[24px] overflow-hidden flex flex-col p-6 items-center justify-center">
          <div className="w-full max-w-[280px] bg-white/10 rounded-[16px] p-4 backdrop-blur-md border border-white/10 mb-4">
             <div className="flex justify-between items-center mb-4">
               <div className="h-4 w-24 bg-white/20 rounded" />
               <div className="h-6 w-16 bg-blue-500 rounded-full" />
             </div>
             <div className="space-y-3">
                {[1,2,3].map(i => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20" />
                    <div className="flex-1 h-3 bg-white/20 rounded" />
                  </div>
                ))}
             </div>
          </div>
        </div>
      )
    },
    {
      step: "04",
      title: "RSVP",
      headline: "Know who's coming.",
      copy: "Guests RSVP directly on their invitation. Responses flow straight into your dashboard.",
      visual: (
        <div className="w-full h-full bg-blue-50 rounded-[24px] overflow-hidden flex items-center justify-center p-8">
          <div className="w-[260px] bg-white rounded-[24px] shadow-xl p-6 text-center">
            <h4 className="font-semibold text-[#1D1D1F] mb-6">Will you attend?</h4>
            <div className="space-y-3">
              <div className="w-full py-3 rounded-full bg-[#1D1D1F] text-white font-medium text-sm">Yes, I&apos;ll be there</div>
              <div className="w-full py-3 rounded-full bg-white border border-black/10 text-[#1D1D1F] font-medium text-sm">Unfortunately, no</div>
            </div>
          </div>
        </div>
      )
    },
    {
      step: "05",
      title: "WELCOME",
      headline: "Welcome every guest effortlessly.",
      copy: "Scan their secure digital pass to manage arrivals smoothly.",
      visual: (
        <div className="w-full h-full bg-black rounded-[24px] overflow-hidden relative flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
          <div className="w-[220px] h-[340px] bg-white rounded-[20px] p-5 flex flex-col items-center justify-between z-10">
            <div className="text-center w-full">
              <p className="text-[10px] text-[#6E6E73] uppercase tracking-wider">Event Pass</p>
              <h5 className="font-semibold text-[15px] mt-1">SARA & NOAH</h5>
            </div>
            <div className="w-32 h-32 bg-black rounded-lg" />
            <div className="text-center w-full">
              <p className="text-[15px] font-medium text-[#1D1D1F]">Hana Alemu</p>
              <p className="text-[13px] text-[#6E6E73]">2 Guests</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 px-4 max-w-[1200px] mx-auto">
      <div className="text-center mb-20 md:mb-32">
        <h2 className="text-[36px] md:text-[52px] font-bold text-[#1D1D1F] tracking-tight mb-4 leading-[1.1]">
          Your event.<br />Five simple steps.
        </h2>
      </div>

      <div className="flex flex-col gap-24 md:gap-40">
        {steps.map((s, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>
            <div className="flex-1 w-full text-center md:text-left">
              <span className="text-[#6E6E73] font-semibold text-[13px] tracking-widest uppercase mb-4 block">STEP {s.step} • {s.title}</span>
              <h3 className="text-[32px] md:text-[48px] font-bold text-[#1D1D1F] tracking-tight leading-[1.1] mb-6">{s.headline}</h3>
              <p className="text-[19px] md:text-[21px] text-[#6E6E73] leading-[1.4] max-w-[400px] mx-auto md:mx-0">{s.copy}</p>
            </div>
            <div className="flex-1 w-full aspect-square md:aspect-[4/3] max-w-[500px]">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
              >
                {s.visual}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
