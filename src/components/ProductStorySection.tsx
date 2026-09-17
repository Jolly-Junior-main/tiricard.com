"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Mail, Users, CheckCircle2, MessageSquare, QrCode, BarChart3, Settings } from "lucide-react";

export function ProductStorySection() {
  return (
    <section className="py-24 md:py-32 bg-white px-4 overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center mb-16 md:mb-24">
        <h2 className="text-[21px] md:text-[24px] font-semibold text-[#6E6E73] tracking-tight mb-4">
          Everything your event needs.
        </h2>
        <p className="text-[40px] md:text-[64px] font-bold text-[#1D1D1F] leading-[1.05] tracking-[-0.02em] max-w-[800px] mx-auto">
          From the first invitation <br className="hidden md:block"/>to the front door.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1100px] mx-auto bg-[#F5F5F7] rounded-[24px] md:rounded-[32px] shadow-[0_40px_80px_rgba(0,0,0,0.1)] border border-[rgba(0,0,0,0.05)] overflow-hidden flex flex-col"
      >
        {/* macOS-style Header */}
        <div className="h-12 w-full bg-white/50 backdrop-blur-md border-b border-[rgba(0,0,0,0.05)] flex items-center px-4 gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>
          <div className="mx-auto font-medium text-[13px] text-[#6E6E73] select-none flex-1 text-center pr-12">
            Tiricard — Sara & Noah's Wedding
          </div>
        </div>

        {/* App Body */}
        <div className="flex flex-1 min-h-[600px]">
          {/* Sidebar */}
          <div className="hidden md:flex w-[240px] bg-white/40 border-r border-[rgba(0,0,0,0.05)] flex-col p-4">
            <div className="mb-8 px-2">
              <h3 className="font-semibold text-[#1D1D1F]">Sara & Noah</h3>
              <p className="text-[13px] text-[#6E6E73]">October 24, 2026</p>
            </div>
            
            <nav className="flex flex-col gap-1">
              {[
                { icon: LayoutDashboard, label: "Overview", active: true },
                { icon: Mail, label: "Invitation" },
                { icon: Users, label: "Guests" },
                { icon: CheckCircle2, label: "RSVP" },
                { icon: MessageSquare, label: "Messages" },
                { icon: QrCode, label: "Check-in" },
                { icon: BarChart3, label: "Analytics" },
                { icon: Settings, label: "Settings" }
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[14px] font-medium transition-colors cursor-pointer ${item.active ? 'bg-black/5 text-[#1D1D1F]' : 'text-[#6E6E73] hover:bg-black/5 hover:text-[#1D1D1F]'}`}>
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </div>
              ))}
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-white p-6 md:p-10 flex flex-col gap-8 overflow-y-auto">
            <div>
              <h2 className="text-[28px] font-bold text-[#1D1D1F] mb-1">Overview</h2>
              <p className="text-[#6E6E73]">Your wedding is in 39 days.</p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Guests", val: "184", color: "text-[#1D1D1F]" },
                { label: "Attending", val: "142", color: "text-green-600" },
                { label: "Pending", val: "18", color: "text-amber-500" },
                { label: "Declined", val: "12", color: "text-rose-500" },
              ].map((m, i) => (
                <div key={i} className="bg-[#F5F5F7] p-5 rounded-[20px] border border-[rgba(0,0,0,0.03)]">
                  <p className="text-[13px] text-[#6E6E73] font-medium mb-1">{m.label}</p>
                  <p className={`text-[32px] font-bold tracking-tight ${m.color}`}>{m.val}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Event Status */}
              <div className="bg-white border border-[rgba(0,0,0,0.08)] rounded-[20px] p-6 shadow-sm">
                <h3 className="text-[17px] font-semibold text-[#1D1D1F] mb-6">Event Status</h3>
                <div className="flex flex-col gap-6 relative">
                  <div className="absolute left-3 top-2 bottom-4 w-px bg-black/10" />
                  {[
                    { label: "Invitation", status: "Published", done: true },
                    { label: "Invitations", status: "Sent", done: true },
                    { label: "RSVP", status: "Active", done: true },
                    { label: "QR Check-in", status: "Ready", done: true },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 relative z-10">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${step.done ? 'bg-green-500 text-white' : 'bg-[#F5F5F7] border border-black/10'}`}>
                        {step.done && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                      <div>
                        <p className="text-[15px] font-medium text-[#1D1D1F]">{step.label}</p>
                        <p className="text-[13px] text-[#6E6E73]">{step.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white border border-[rgba(0,0,0,0.08)] rounded-[20px] p-6 shadow-sm">
                <h3 className="text-[17px] font-semibold text-[#1D1D1F] mb-6">Recent Activity</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { name: "Hana Alemu", action: "accepted invitation", time: "2m ago", color: "bg-green-100 text-green-700" },
                    { name: "Daniel Bekele", action: "opened invitation", time: "15m ago", color: "bg-blue-100 text-blue-700" },
                    { name: "Meron Tadesse", action: "submitted RSVP", time: "1h ago", color: "bg-green-100 text-green-700" },
                    { name: "Abel Sisay", action: "declined invitation", time: "3h ago", color: "bg-rose-100 text-rose-700" },
                  ].map((act, i) => (
                    <div key={i} className="flex items-center gap-4 border-b border-black/5 pb-4 last:border-0 last:pb-0">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-[14px] ${act.color}`}>
                        {act.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <p className="text-[14px]"><span className="font-semibold text-[#1D1D1F]">{act.name}</span> <span className="text-[#6E6E73]">{act.action}</span></p>
                        <p className="text-[12px] text-[#6E6E73]">{act.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
