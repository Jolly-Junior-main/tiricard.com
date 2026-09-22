"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, Gift, GraduationCap, Gem, GlassWater, Briefcase, Music, Globe2 } from "lucide-react";

const categories = [
  { id: 'wedding', title: 'Weddings', desc: 'Save the date. Ceremony. Reception.', icon: Heart, count: 124, color: 'bg-rose-50 text-rose-600' },
  { id: 'birthday', title: 'Birthdays', desc: 'Kids. Milestones. Surprises.', icon: Gift, count: 86, color: 'bg-blue-50 text-blue-600' },
  { id: 'graduation', title: 'Graduation', desc: 'High school. College. Masters.', icon: GraduationCap, count: 42, color: 'bg-amber-50 text-amber-600' },
  { id: 'engagement', title: 'Engagement', desc: 'Proposals. Parties. Announcements.', icon: Gem, count: 38, color: 'bg-purple-50 text-purple-600' },
  { id: 'anniversary', title: 'Anniversary', desc: 'Milestones. Vow renewals.', icon: GlassWater, count: 24, color: 'bg-emerald-50 text-emerald-600' },
  { id: 'corporate', title: 'Corporate', desc: 'Galas. Product launches. Conferences.', icon: Briefcase, count: 56, color: 'bg-slate-100 text-slate-600' },
  { id: 'party', title: 'Parties', desc: 'Dinner. Holiday. Casual get-togethers.', icon: Music, count: 92, color: 'bg-pink-50 text-pink-600' },
  { id: 'cultural', title: 'Cultural Events', desc: 'Holidays. Traditional celebrations.', icon: Globe2, count: 45, color: 'bg-indigo-50 text-indigo-600' },
];

export function EventCategorySection() {
  return (
    <section id="events" className="py-20 md:py-32 px-4 max-w-[1200px] mx-auto">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-[36px] md:text-[52px] font-bold text-[#1D1D1F] tracking-tight mb-4 leading-[1.1]">
          One place for every celebration.
        </h2>
        <p className="text-[19px] md:text-[21px] text-[#6E6E73] max-w-[600px] mx-auto">
          Whatever you&apos;re celebrating, start with an invitation that feels like you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <motion.a
            href={`#${cat.id}`}
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group block bg-white rounded-[24px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
          >
            <div className={`w-12 h-12 rounded-2xl ${cat.color} flex items-center justify-center mb-6`}>
              <cat.icon className="w-6 h-6" />
            </div>
            <h3 className="text-[21px] font-semibold text-[#1D1D1F] mb-2">{cat.title}</h3>
            <p className="text-[15px] text-[#6E6E73] mb-8 leading-[1.4] h-[42px]">{cat.desc}</p>
            
            <div className="flex items-center justify-between mt-auto">
              <span className="text-[13px] font-medium text-[#6E6E73] bg-[#F5F5F7] px-3 py-1 rounded-full">
                {cat.count} Templates
              </span>
              <div className="w-8 h-8 rounded-full bg-[#F5F5F7] group-hover:bg-[#1D1D1F] group-hover:text-white text-[#1D1D1F] flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
