
import fs from "fs";

let content = fs.readFileSync("src/components/TicketingSection.tsx", "utf-8");

const oldCards = `const CARDS = [
  {
    label: "TICKETING",
    title: "Instant QR Code Generation",
    buttonText: "Read article",
    bgClass: "bg-gradient-to-br from-orange-500 to-amber-500",
    textClass: "text-white",
    labelClass: "text-white/70",
    buttonClass: "bg-white text-orange-500 hover:bg-orange-50",
    shape: (
      <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-yellow-400 opacity-90 shadow-2xl" />
    )
  },
  {
    label: "ANALYTICS",
    title: "Real-time Event Insights",
    buttonText: "Read article",
    bgClass: "bg-brand-black",
    textClass: "text-white",
    labelClass: "text-brand-gray",
    buttonClass: "bg-white text-brand-black hover:bg-gray-100",
    shape: (
      <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-violet-600 rounded-tl-[100px] shadow-2xl rotate-12 transform origin-bottom-right flex items-end justify-end overflow-hidden">
         <div className="w-32 h-32 bg-orange-500 rounded-tl-[100px] -translate-x-4 -translate-y-4" />
      </div>
    )
  },
  {
    label: "CASE STUDY",
    title: "Lightning Fast Check-in",
    buttonText: "Read article",
    bgClass: "bg-gradient-to-br from-pink-500 to-rose-500",
    textClass: "text-white",
    labelClass: "text-white/80",
    buttonClass: "bg-white text-pink-600 hover:bg-pink-50",
    shape: (
      <div className="absolute -bottom-10 -right-4 w-56 h-72 bg-brand-charcoal rounded-[32px] border-4 border-gray-800 shadow-2xl flex flex-col p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="w-20 h-1 bg-gray-800 rounded-full mx-auto mb-4" />
        <div className="flex-1 bg-black rounded-2xl p-3">
          <div className="w-3/4 h-3 bg-gray-800 rounded mb-2" />
          <div className="w-1/2 h-3 bg-gray-800 rounded" />
        </div>
      </div>
    )
  },
  {
    label: "REPORT",
    title: "Secure Global Transactions",
    buttonText: "Read article",
    bgClass: "bg-gradient-to-br from-violet-600 to-indigo-700",
    textClass: "text-white",
    labelClass: "text-white/70",
    buttonClass: "bg-white text-violet-600 hover:bg-violet-50",
    shape: (
      <>
        <div className="absolute -bottom-4 -right-12 w-64 h-64 bg-white/10 rounded-[64px] backdrop-blur-md transform rotate-12 shadow-xl border border-white/20" />
        <div className="absolute bottom-12 -right-4 w-48 h-48 bg-white/5 rounded-[48px] backdrop-blur-sm transform -rotate-12 border border-white/10" />
      </>
    )
  },
  {
    label: "CASE STUDY",
    title: "Dynamic Seat Allocation",
    buttonText: "Read article",
    bgClass: "bg-gradient-to-br from-blue-500 to-cyan-400",
    textClass: "text-white",
    labelClass: "text-white/80",
    buttonClass: "bg-white text-blue-600 hover:bg-blue-50",
    shape: (
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/20 backdrop-blur-md transform rotate-45 shadow-2xl border-l border-t border-white/30" />
    )
  },
  {
    label: "CASE STUDY",
    title: "Brand Your Event Tickets",
    buttonText: "Read article",
    bgClass: "bg-white",
    textClass: "text-brand-charcoal",
    labelClass: "text-gray-400",
    buttonClass: "bg-white border border-gray-200 text-brand-charcoal hover:bg-gray-50 shadow-sm",
    shape: (
      <>
        <div className="absolute -bottom-12 -right-8 w-48 h-48 rounded-full bg-blue-500 shadow-xl" />
        <div className="absolute bottom-24 right-20 w-16 h-16 rounded-full bg-orange-500 shadow-lg" />
        <div className="absolute bottom-16 right-48 w-8 h-8 rounded-full bg-blue-600 shadow-md" />
      </>
    )
  }
];`;

const newCards = `const CARDS = [
  {
    label: "TICKETING",
    title: "Instant QR Code Generation",
    buttonText: "Read article",
    bgClass: "bg-gradient-to-br from-orange-500 to-amber-500",
    textClass: "text-white",
    labelClass: "text-white/70",
    buttonClass: "bg-white text-orange-500 hover:bg-orange-50",
    shape: (
      <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-orange-300/30">
        <img src="https://images.unsplash.com/photo-1540039155732-676231e51c89?w=400&q=80" alt="" className="w-full h-full object-cover" />
      </div>
    )
  },
  {
    label: "ANALYTICS",
    title: "Real-time Event Insights",
    buttonText: "Read article",
    bgClass: "bg-brand-black",
    textClass: "text-white",
    labelClass: "text-brand-gray",
    buttonClass: "bg-white text-brand-black hover:bg-gray-100",
    shape: (
      <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-tl-[80px] shadow-2xl rotate-6 transform origin-bottom-right overflow-hidden border-4 border-violet-500/20">
         <img src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400&q=80" alt="" className="w-full h-full object-cover scale-110 -rotate-6" />
      </div>
    )
  },
  {
    label: "CASE STUDY",
    title: "Lightning Fast Check-in",
    buttonText: "Read article",
    bgClass: "bg-gradient-to-br from-pink-500 to-rose-500",
    textClass: "text-white",
    labelClass: "text-white/80",
    buttonClass: "bg-white text-pink-600 hover:bg-pink-50",
    shape: (
      <div className="absolute -bottom-10 -right-4 w-56 h-72 bg-brand-charcoal rounded-[32px] border-4 border-gray-800 shadow-2xl flex flex-col p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="w-20 h-1 bg-gray-600 rounded-full mx-auto mb-3 shrink-0 relative z-10" />
        <div className="flex-1 rounded-2xl relative overflow-hidden bg-black">
          <img src="https://images.unsplash.com/photo-1576086208577-9be71b402e20?w=400&q=80" alt="" className="absolute inset-0 w-full h-full object-cover opacity-90" />
        </div>
      </div>
    )
  },
  {
    label: "REPORT",
    title: "Secure Global Transactions",
    buttonText: "Read article",
    bgClass: "bg-gradient-to-br from-violet-600 to-indigo-700",
    textClass: "text-white",
    labelClass: "text-white/70",
    buttonClass: "bg-white text-violet-600 hover:bg-violet-50",
    shape: (
      <div className="absolute -bottom-4 -right-12 w-64 h-64 rounded-[40px] transform rotate-12 shadow-2xl border-4 border-white/20 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&q=80" alt="" className="w-full h-full object-cover -rotate-12 scale-125 opacity-90" />
      </div>
    )
  },
  {
    label: "CASE STUDY",
    title: "Dynamic Seat Allocation",
    buttonText: "Read article",
    bgClass: "bg-gradient-to-br from-blue-500 to-cyan-400",
    textClass: "text-white",
    labelClass: "text-white/80",
    buttonClass: "bg-white text-blue-600 hover:bg-blue-50",
    shape: (
      <div className="absolute -bottom-20 -right-20 w-80 h-80 transform rotate-45 shadow-2xl border-4 border-white/30 overflow-hidden rounded-[32px]">
         <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80" alt="" className="w-full h-full object-cover -rotate-45 scale-150 opacity-90" />
      </div>
    )
  },
  {
    label: "CASE STUDY",
    title: "Brand Your Event Tickets",
    buttonText: "Read article",
    bgClass: "bg-white",
    textClass: "text-brand-charcoal",
    labelClass: "text-gray-400",
    buttonClass: "bg-white border border-gray-200 text-brand-charcoal hover:bg-gray-50 shadow-sm",
    shape: (
      <div className="absolute -bottom-10 -right-8 w-60 h-60 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 -rotate-6">
         <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80" alt="" className="w-full h-full object-cover rotate-6 scale-110" />
      </div>
    )
  }
];`;

content = content.replace(oldCards, newCards);
fs.writeFileSync("src/components/TicketingSection.tsx", content, "utf-8");
