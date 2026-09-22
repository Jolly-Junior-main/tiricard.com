
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface DiscoverEventsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DiscoverEventsModal({ isOpen, onClose }: DiscoverEventsModalProps) {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed inset-0 z-[100] bg-[#0a0a0f] text-white overflow-y-auto"
      >
        {/* Header / Nav */}
        <div className="sticky top-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-500" />
              <span className="font-bold text-xl tracking-tight">PulseHub</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
              <span className="text-white cursor-pointer">Explore</span>
              <span className="hover:text-white cursor-pointer transition-colors">Categories</span>
              <span className="hover:text-white cursor-pointer transition-colors">Venues</span>
              <span className="hover:text-white cursor-pointer transition-colors">For Hosts</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Sign In</button>
              <button className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-sm font-medium transition-colors">Get Started</button>
              <button onClick={onClose} className="p-2 ml-2 hover:bg-white/10 rounded-full transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-32">
          {/* Hero Section */}
          <div className="text-center mb-16 relative">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 mb-6">
              ✨ Over 12,000 events happening near you
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Discover <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
                What&apos;s Next
              </span>
            </h1>
            <p className="text-gray-400 max-w-lg mx-auto mb-10 text-lg">
              Curated events that spark curiosity, creativity, and connection.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto flex items-center bg-[#15151a] border border-white/10 rounded-full p-2 pl-6 shadow-2xl">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" className="mr-3"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              <input type="text" placeholder="Search events, artists, venues..." className="bg-transparent outline-none flex-1 text-sm" />
              <div className="w-[1px] h-6 bg-white/10 mx-4" />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" className="mr-2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span className="text-sm text-gray-400 mr-4">Los Angeles</span>
              <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white font-medium text-sm hover:opacity-90 transition-opacity">
                Search
              </button>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {["All", "Concerts", "Workshops", "Camps", "Seminars"].map((cat, i) => (
                <button key={i} className={`px-5 py-2 rounded-full text-sm font-medium border ${i === 0 ? "bg-fuchsia-500/20 border-fuchsia-500 text-fuchsia-300" : "bg-[#15151a] border-white/10 text-gray-400 hover:bg-white/5"}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Event */}
          <div className="relative w-full h-[400px] rounded-[32px] overflow-hidden mb-20 group cursor-pointer shadow-[0_0_50px_rgba(217,70,239,0.1)]">
            <img src="https://images.unsplash.com/photo-1540039155732-676231e51c89?w=1200&q=80" alt="Featured" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent" />
            
            <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-md bg-fuchsia-500 text-white text-[10px] font-bold tracking-wider uppercase w-max mb-4">
                ★ Featured Event
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 max-w-xl leading-tight">
                Chromatic Festival 2026
              </h2>
              <p className="text-gray-300 max-w-md mb-8">
                The largest multi-sensory art & music experience in the West.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  December 20, 2026
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Dreamfields, Joshua Tree
                </div>
                <div className="text-cyan-400 font-semibold">$149 /person</div>
              </div>

              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white font-medium text-sm w-max hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all">
                Get Tickets →
              </button>
            </div>

            {/* Countdown Timer */}
            <div className="absolute top-1/2 -translate-y-1/2 right-14 hidden lg:flex gap-6 text-center">
              {[ { l: "DAYS", v: "142" }, { l: "HRS", v: "02" }, { l: "MIN", v: "41" }, { l: "SEC", v: "38" } ].map((t, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-4xl font-bold mb-1">{t.v}</span>
                  <span className="text-xs text-gray-400 font-medium tracking-wider">{t.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="flex flex-col lg:flex-row gap-10 mb-20">
            {/* Sidebar Filters */}
            <div className="w-full lg:w-64 shrink-0">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-semibold text-lg">Filters</h3>
                <span className="text-xs text-gray-500 cursor-pointer hover:text-white">Clear all</span>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Categories</h4>
                  <div className="space-y-3">
                    {["Concerts", "Workshops", "Camps", "Seminars"].map((c, i) => (
                      <label key={i} className="flex items-center gap-3 cursor-pointer group">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${i === 0 ? "bg-fuchsia-500 border-fuchsia-500" : "border-gray-600 group-hover:border-gray-400"}`}>
                          {i === 0 && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>}
                        </div>
                        <span className={`text-sm ${i === 0 ? "text-white" : "text-gray-400 group-hover:text-gray-300"}`}>{c}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Max Price</h4>
                    <span className="text-xs text-fuchsia-400 font-medium">$500</span>
                  </div>
                  <div className="h-1 w-full bg-gray-800 rounded-full relative">
                    <div className="absolute left-0 top-0 h-full w-2/3 bg-fuchsia-500 rounded-full"></div>
                    <div className="absolute left-2/3 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md cursor-grab"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Free</span>
                    <span>$1000+</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">When</h4>
                  <div className="space-y-3">
                    {["Today", "This Week", "This Month"].map((w, i) => (
                      <label key={i} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center transition-colors group-hover:border-gray-400">
                        </div>
                        <span className="text-sm text-gray-400 group-hover:text-gray-300">{w}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Format</h4>
                  <div className="flex flex-wrap gap-2">
                    {["In person", "Virtual", "Hybrid"].map((f, i) => (
                      <button key={i} className={`px-4 py-1.5 rounded-lg text-xs font-medium border ${i === 0 ? "bg-white/10 border-white/20 text-white" : "bg-transparent border-gray-800 text-gray-400 hover:border-gray-600"}`}>
                        {f}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Event Cards Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">All Events <span className="text-gray-500 text-sm font-normal">(12 found)</span></h2>
                <div className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer hover:text-white">
                  Sort by: Upcoming
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400&q=80", tag: "Concert", tagColor: "bg-fuchsia-500/20 text-fuchsia-400", title: "Neon Nights: Synthwave", date: "Nov 18, 2026 - 8:00 PM", loc: "Staples Arena, LA", going: "2.1k", price: "$45" },
                  { img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80", tag: "Workshop", tagColor: "bg-blue-500/20 text-blue-400", title: "AI for Creatives", date: "Dec 2, 2026 - 10:00 AM", loc: "Studio House, SF", going: "342", price: "$69" },
                  { img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&q=80", tag: "Camp", tagColor: "bg-emerald-500/20 text-emerald-400", title: "Wild Roots Summer", date: "Aug 12, 2026 - 5 Day", loc: "Redwood Reserve, CA", going: "87", price: "$420" },
                  { img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&q=80", tag: "Seminar", tagColor: "bg-amber-500/20 text-amber-400", title: "Future of Web3", date: "Nov 28, 2026 - 2:00 PM", loc: "The Verge Centre, NY", going: "654", price: "$35" },
                  { img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80", tag: "Workshop", tagColor: "bg-purple-500/20 text-purple-400", title: "Pottery & Chill", date: "Dec 7, 2026 - 11:00 AM", loc: "Clay & Co Studio, OR", going: "48", price: "Free" },
                  { img: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=400&q=80", tag: "Event", tagColor: "bg-rose-500/20 text-rose-400", title: "Indie Film Festival", date: "Dec 15, 2026 - 6:00 PM", loc: "Cinema Paradiso, TX", going: "1.1k", price: "$22" },
                ].map((ev, i) => (
                  <div key={i} className="bg-[#15151a] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-colors group">
                    <div className="relative h-48 overflow-hidden">
                      <img src={ev.img} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute top-3 left-3 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider backdrop-blur-md bg-[#0a0a0f]/50 border border-white/10 flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${ev.tagColor.split(" ")[0].replace("/20", "")}`} />
                        {ev.tag}
                      </div>
                      <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0a0a0f]/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
                      </button>
                    </div>
                    
                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-3 line-clamp-1 group-hover:text-fuchsia-400 transition-colors">{ev.title}</h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                          {ev.date}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                          {ev.loc}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full bg-fuchsia-500 border border-[#15151a]" />
                            <div className="w-6 h-6 rounded-full bg-cyan-500 border border-[#15151a]" />
                            <div className="w-6 h-6 rounded-full bg-blue-500 border border-[#15151a]" />
                          </div>
                          <span className="text-[10px] text-gray-500 font-medium">{ev.going} going</span>
                        </div>
                        <span className="font-bold text-white">{ev.price}</span>
                      </div>
                      
                      <button className="w-full mt-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-sm font-medium transition-colors">
                        Register →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trending This Week */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold mb-1">Trending This Week</h2>
                <p className="text-sm text-gray-500">What everyone&apos;s talking about right now</p>
              </div>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                </button>
              </div>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {[
                { img: "https://images.unsplash.com/photo-1470229722913-7c090be5c520?w=400&q=80", title: "Bass Protocol Underground", date: "Nov 19", price: "$25" },
                { img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80", title: "UX Research Sprint", date: "Nov 22", price: "$80" },
                { img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400&q=80", title: "Climate Action Summit", date: "Dec 1", price: "Free" },
                { img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=80", title: "Jazz Under the Stars", date: "Nov 25", price: "$35" },
              ].map((ev, i) => (
                <div key={i} className="min-w-[280px] bg-[#15151a] rounded-xl p-3 border border-white/5 hover:border-white/20 transition-colors flex gap-4 cursor-pointer">
                  <img src={ev.img} className="w-20 h-20 rounded-lg object-cover" alt="" />
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="font-bold text-sm mb-1 line-clamp-1">{ev.title}</h4>
                    <span className="text-xs text-gray-400 mb-2">{ev.date}</span>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex -space-x-1.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-500 border border-[#15151a]" />
                        <div className="w-4 h-4 rounded-full bg-cyan-500 border border-[#15151a]" />
                      </div>
                      <span className="text-xs font-bold text-fuchsia-400">{ev.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Host Banner */}
          <div className="w-full rounded-[32px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between relative overflow-hidden mb-20 shadow-[0_20px_50px_rgba(217,70,239,0.2)]">
            <div className="absolute inset-0 bg-[url(&apos;https://www.transparenttextures.com/patterns/cubes.png&apos;)] opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10 max-w-xl text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Host your own event. <br/> Reach thousands instantly.
              </h2>
              <p className="text-white/80 font-medium">
                PulseHub gives creators the tools to sell tickets, manage RSVPs, and build a loyal audience.
              </p>
            </div>
            <button className="relative z-10 px-8 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold hover:bg-white/30 transition-colors whitespace-nowrap">
              Start for Free →
            </button>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
