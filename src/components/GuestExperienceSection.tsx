"use client";

import { motion } from "framer-motion";
import { MapPin, CalendarPlus, MessageCircle } from "lucide-react";
import { Button } from "./ui/Button";

export function GuestExperienceSection() {
  return (
    <section className="py-24 md:py-32 bg-white px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
        
        <div className="flex-1 max-w-[500px] text-center md:text-left">
          <h2 className="text-[36px] md:text-[52px] font-bold text-[#1D1D1F] tracking-tight mb-6 leading-[1.1]">
            No apps.<br/>No complicated instructions.
          </h2>
          <p className="text-[19px] md:text-[21px] text-[#6E6E73] leading-[1.4] mb-8">
            Your guests simply open their invitation and respond. It works beautifully on every device, right in the browser.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-[#1D1D1F] font-medium"><div className="w-10 h-10 rounded-full bg-[#F5F5F7] flex items-center justify-center"><MapPin className="w-5 h-5"/></div> View Location</div>
            <div className="flex items-center gap-4 text-[#1D1D1F] font-medium"><div className="w-10 h-10 rounded-full bg-[#F5F5F7] flex items-center justify-center"><CalendarPlus className="w-5 h-5"/></div> Add to Calendar</div>
            <div className="flex items-center gap-4 text-[#1D1D1F] font-medium"><div className="w-10 h-10 rounded-full bg-[#F5F5F7] flex items-center justify-center"><MessageCircle className="w-5 h-5"/></div> Contact Host</div>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-[320px] h-[640px] bg-white rounded-[48px] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-4 border-[#F5F5F7] relative"
          >
             <div className="w-full h-full bg-[#FDFBF7] rounded-[36px] overflow-hidden flex flex-col p-6 text-center border border-black/5 relative">
               <div className="flex-1 mt-8">
                 <h3 className="text-2xl font-serif text-[#2C2C2C] mb-6">SELAM & ABEL</h3>
                 <p className="text-[14px] text-[#6E6E73] leading-relaxed mb-6">
                   Together with our families, we invite you to celebrate our wedding.
                 </p>
                 <p className="text-[15px] font-medium text-[#1D1D1F] mb-1">Saturday</p>
                 <p className="text-[15px] text-[#1D1D1F] mb-1">October 17, 2026</p>
                 <p className="text-[15px] text-[#1D1D1F] mb-6">5:00 PM</p>
               </div>
               
               <div className="bg-white p-5 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-black/5 mb-4">
                 <p className="font-medium text-[#1D1D1F] mb-4">Will you attend?</p>
                 <div className="flex flex-col gap-2">
                   <button className="w-full py-3 rounded-full bg-black text-white text-[14px] font-medium hover:bg-black/80 transition-colors">Yes, I&apos;ll be there</button>
                   <button className="w-full py-3 rounded-full bg-[#F5F5F7] text-[#1D1D1F] text-[14px] font-medium hover:bg-black/5 transition-colors">Unfortunately, no</button>
                 </div>
               </div>
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
