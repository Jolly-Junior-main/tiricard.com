"use client";

import { motion } from "framer-motion";
import { MessageCircle, Link2, Share2, ScanLine } from "lucide-react";
import { Button } from "./ui/Button";

export function DeliveryAndCheckinSection() {
  return (
    <>
      {/* Delivery Section */}
      <section className="py-24 md:py-32 bg-[#F5F5F7] px-4">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-[36px] md:text-[52px] font-bold text-[#1D1D1F] tracking-tight mb-6 leading-[1.1]">
            Invite everyone.<br/>However you want.
          </h2>
          <p className="text-[19px] md:text-[21px] text-[#6E6E73] max-w-[600px] mx-auto mb-16">
            Send personalized links via SMS, WhatsApp, or email with a single click.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            
            {/* iMessage Mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-black/5 w-full max-w-[320px]"
            >
              <div className="bg-[#E9E9EB] p-4 rounded-2xl rounded-tl-sm text-left mb-4 w-11/12 text-[#1D1D1F] text-[15px] leading-relaxed">
                Hi Hana! We're so excited to invite you to our wedding. Please tap the link below to see the details and RSVP.
              </div>
              <div className="bg-[#0B84FE] p-4 rounded-2xl rounded-tr-sm text-left w-11/12 ml-auto">
                <div className="bg-white/10 rounded-xl p-3 border border-white/20 text-white">
                  <div className="w-full h-24 bg-white/20 rounded-lg mb-3" />
                  <p className="font-semibold text-[14px]">Selam & Abel's Wedding</p>
                  <p className="text-[12px] opacity-80">October 17, 2026</p>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col gap-4">
              {[
                { label: "Send via SMS", icon: MessageCircle, color: "text-blue-500 bg-blue-50" },
                { label: "Share to WhatsApp", icon: Share2, color: "text-green-500 bg-green-50" },
                { label: "Copy Link", icon: Link2, color: "text-gray-500 bg-gray-100" }
              ].map((m, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-black/5 shadow-sm w-[260px] cursor-pointer hover:scale-[1.02] transition-transform">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${m.color}`}>
                    <m.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-[#1D1D1F]">{m.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* QR Checkin Section */}
      <section className="py-24 md:py-40 bg-[#0A0A0A] px-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-[36px] md:text-[52px] font-bold text-white tracking-tight mb-6 leading-[1.1]">
              From invitation<br/>to entrance.
            </h2>
            <p className="text-[19px] md:text-[21px] text-[#A1A1A6] max-w-[500px] mb-8">
              Give every guest a smoother arrival with secure digital event passes. Scan their QR code and instantly update their attendance.
            </p>
            <Button variant="glass" className="border-white/20 text-white hover:bg-white hover:text-black">Learn about Check-in</Button>
          </div>

          <div className="flex-1 flex justify-center relative">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-[280px] sm:w-[320px] bg-white rounded-[24px] p-6 flex flex-col items-center relative z-20 shadow-[0_0_80px_rgba(255,255,255,0.1)]"
            >
              <span className="text-[#6E6E73] text-[11px] uppercase tracking-widest mb-2">Event Pass</span>
              <h3 className="text-xl font-bold text-[#1D1D1F] mb-8">SELAM & ABEL</h3>
              
              <div className="w-48 h-48 bg-black rounded-2xl relative flex items-center justify-center overflow-hidden mb-8">
                {/* Simulated QR Code */}
                <div className="w-40 h-40 grid grid-cols-5 gap-1 p-2 bg-white">
                   {Array.from({length:25}).map((_,i) => <div key={i} className={`bg-black ${i % 2 === 0 ? 'opacity-100' : 'opacity-0'}`} />)}
                </div>
                
                {/* Scanner Line */}
                <motion.div 
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-1 bg-green-500 shadow-[0_0_10px_#22c55e] z-10"
                />
              </div>

              <div className="w-full text-left">
                <p className="text-[17px] font-bold text-[#1D1D1F]">HANA ALEMU</p>
                <div className="flex justify-between items-center mt-1">
                   <p className="text-[14px] text-[#6E6E73]">Guests: 2</p>
                   <span className="text-green-600 flex items-center gap-1 text-[13px] font-medium"><ScanLine className="w-4 h-4" /> Ready</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
