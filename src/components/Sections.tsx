"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export function BilingualSection() {
  return (
    <section className="py-24 md:py-32 bg-white px-4 border-b border-black/5">
      <div className="max-w-[1200px] mx-auto text-center mb-16 md:mb-24">
        <h2 className="text-[36px] md:text-[52px] font-bold text-[#1D1D1F] tracking-tight mb-4 leading-[1.1]">
          Made for celebrations here.<br/>And everywhere.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 max-w-[900px] mx-auto">
        <div className="w-[300px] h-[400px] bg-[#F5F5F7] rounded-[24px] p-8 flex flex-col items-center justify-center text-center shadow-sm">
          <span className="text-[#6E6E73] font-medium mb-8">English</span>
          <p className="text-[17px] font-serif text-[#1D1D1F] leading-relaxed">
            Together with our families, we invite you to celebrate our wedding.
          </p>
        </div>

        <div className="w-[300px] h-[400px] bg-[#FDFBF7] rounded-[24px] p-8 flex flex-col items-center justify-center text-center shadow-sm border border-[#8B7355]/10">
          <span className="text-[#8B7355] font-medium mb-8">አማርኛ</span>
          <p className="text-[20px] font-serif text-[#1D1D1F] leading-relaxed">
            ከቤተሰቦቻችን ጋር በመሆን፣ የጋብቻ ስነ-ስርዓታችንን አብረውን እንዲያከብሩ በክብር ተጋብዘዋል::
          </p>
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#F5F5F7] px-4">
      <div className="max-w-[1200px] mx-auto text-center mb-16 md:mb-24">
        <h2 className="text-[36px] md:text-[52px] font-bold text-[#1D1D1F] tracking-tight mb-4 leading-[1.1]">
          Simple plans.<br/>Beautiful events.
        </h2>
      </div>

      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: "ESSENTIAL", desc: "For intimate gatherings.", price: "Free", features: ["Digital invitation", "Guest management", "RSVP", "Shareable link"] },
          { name: "PREMIUM", desc: "For weddings and large events.", price: "4,500 ETB", featured: true, features: ["Everything in Essential", "Premium templates", "SMS invitations", "Music", "Advanced customization"] },
          { name: "EVENT PRO", desc: "For event organizers.", price: "Custom", features: ["Everything in Premium", "QR check-in", "Guest scanning", "Team access", "Advanced analytics"] }
        ].map((plan, i) => (
          <div key={i} className={`bg-white rounded-[24px] p-8 flex flex-col ${plan.featured ? 'border-2 border-black shadow-[0_20px_40px_rgba(0,0,0,0.08)] scale-105 z-10' : 'border border-black/5'}`}>
            <h3 className="text-[13px] font-bold text-[#1D1D1F] tracking-widest mb-2">{plan.name}</h3>
            <p className="text-[#6E6E73] text-[14px] mb-6 h-10">{plan.desc}</p>
            <div className="text-[32px] font-bold text-[#1D1D1F] mb-8">{plan.price}</div>
            
            <ul className="flex flex-col gap-4 mb-8 flex-1">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-3 text-[14px] text-[#1D1D1F]">
                  <div className="w-1.5 h-1.5 rounded-full bg-black/40" />
                  {f}
                </li>
              ))}
            </ul>

            <Button variant={plan.featured ? 'primary' : 'outline'} className="w-full">
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FinalCTASection() {
  return (
    <section className="py-32 md:py-48 bg-white px-4 relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <h2 className="text-[40px] md:text-[64px] font-bold text-[#1D1D1F] leading-[1.05] tracking-[-0.02em] mb-6 z-10">
        Your moment deserves<br/>more than a message.
      </h2>
      <p className="text-[19px] md:text-[21px] text-[#6E6E73] mb-10 z-10">
        Create an invitation your guests will remember.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 z-10">
        <Button size="lg" className="w-full sm:w-auto">Create Your Invitation</Button>
        <Button size="lg" variant="secondary" className="w-full sm:w-auto">Explore Templates</Button>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#F5F5F7] py-16 px-4 border-t border-black/5 text-[13px] text-[#6E6E73]">
      <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div>
          <h4 className="font-semibold text-[#1D1D1F] mb-4">PRODUCT</h4>
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="hover:text-[#1D1D1F]">Templates</a></li>
            <li><a href="#" className="hover:text-[#1D1D1F]">Weddings</a></li>
            <li><a href="#" className="hover:text-[#1D1D1F]">Birthdays</a></li>
            <li><a href="#" className="hover:text-[#1D1D1F]">Events</a></li>
            <li><a href="#" className="hover:text-[#1D1D1F]">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[#1D1D1F] mb-4">FEATURES</h4>
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="hover:text-[#1D1D1F]">Digital Invitations</a></li>
            <li><a href="#" className="hover:text-[#1D1D1F]">RSVP</a></li>
            <li><a href="#" className="hover:text-[#1D1D1F]">Guest Management</a></li>
            <li><a href="#" className="hover:text-[#1D1D1F]">SMS Invitations</a></li>
            <li><a href="#" className="hover:text-[#1D1D1F]">QR Check-in</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[#1D1D1F] mb-4">COMPANY</h4>
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="hover:text-[#1D1D1F]">About</a></li>
            <li><a href="#" className="hover:text-[#1D1D1F]">Contact</a></li>
            <li><a href="#" className="hover:text-[#1D1D1F]">Privacy</a></li>
            <li><a href="#" className="hover:text-[#1D1D1F]">Terms</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[#1D1D1F] mb-4">LANGUAGE</h4>
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="hover:text-[#1D1D1F]">English</a></li>
            <li><a href="#" className="hover:text-[#1D1D1F]">አማርኛ</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Tiricard. All rights reserved.</p>
        <div className="font-semibold text-[#1D1D1F]">Tiricard</div>
      </div>
    </footer>
  );
}
