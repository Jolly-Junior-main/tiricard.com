
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EventsDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORIES = [
  "All Events",
  "Music Concerts",
  "Tech Conferences",
  "Gala Dinners",
  "Workshops",
  "Weddings",
  "VIP Access"
];

const EVENTS = [
  { id: 1, title: "Addis Tech Summit", price: 150, category: "Tech Conferences" },
  { id: 2, title: "Jazz Night Live", price: 45, category: "Music Concerts" },
  { id: 3, title: "Startup Founders Gala", price: 200, category: "Gala Dinners" },
  { id: 4, title: "AI Masterclass", price: 80, category: "Workshops" },
  { id: 5, title: "The Grand Wedding Expo", price: 25, category: "Weddings" },
  { id: 6, title: "Afrobeat Festival", price: 65, category: "Music Concerts" },
  { id: 7, title: "Web3 Developers Meetup", price: 15, category: "Tech Conferences" },
  { id: 8, title: "Exclusive VIP Lounge", price: 500, category: "VIP Access" },
  { id: 9, title: "Design Thinking Workshop", price: 55, category: "Workshops" }
];

export function EventsDashboardModal({ isOpen, onClose }: EventsDashboardModalProps) {
  const [activeCategory, setActiveCategory] = useState("All Events");
  const [cart, setCart] = useState<{ eventId: number; qty: number }[]>([]);

  if (!isOpen) return null;

  const filteredEvents = activeCategory === "All Events" 
    ? EVENTS 
    : EVENTS.filter(e => e.category === activeCategory);

  const addToCart = (eventId: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.eventId === eventId);
      if (existing) {
        return prev.map(item => item.eventId === eventId ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { eventId, qty: 1 }];
    });
  };

  const subTotal = cart.reduce((acc, item) => {
    const event = EVENTS.find(e => e.id === item.eventId);
    return acc + (event ? event.price * item.qty : 0);
  }, 0);

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed inset-0 z-[100] bg-[#1a1a1a] text-white flex overflow-hidden font-sans"
      >
        {/* Left Sidebar */}
        <div className="w-[280px] bg-[#121212] border-r border-white/5 flex flex-col h-full shrink-0">
          <div className="p-6 flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-white">T</span>
              TiriCard.
            </h2>
            <button onClick={onClose} className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M11 1L1 11M1 1L11 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto py-4">
            <h3 className="px-6 text-xs text-gray-500 font-semibold uppercase tracking-wider mb-4">Categories</h3>
            <ul className="space-y-1">
              {CATEGORIES.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-6 py-3 text-sm transition-colors ${activeCategory === cat ? "bg-emerald-500 text-white font-medium" : "text-gray-400 hover:bg-white/5"}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content (Grid) */}
        <div className="flex-1 bg-[#1a1a1a] flex flex-col h-full">
          <div className="p-8 pb-4 flex items-center justify-between border-b border-white/5">
            <h1 className="text-3xl font-bold">{activeCategory}</h1>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-gray-500 border-t-transparent" />
              <input type="text" placeholder="Search events..." className="bg-[#242424] text-sm text-white placeholder-gray-500 rounded-full pl-10 pr-4 py-2.5 outline-none w-[300px] border border-white/5 focus:border-emerald-500" />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map(event => (
                <div 
                  key={event.id}
                  onClick={() => addToCart(event.id)}
                  className="bg-[#242424] rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer hover:bg-[#2a2a2a] transition-all hover:-translate-y-1 border border-white/5 hover:border-emerald-500/30 group"
                >
                  <div className={`w-32 h-32 rounded-full mb-6 flex items-center justify-center shadow-2xl relative overflow-hidden bg-gradient-to-br ${event.id % 2 === 0 ? "from-blue-500 to-emerald-500" : "from-orange-500 to-rose-500"}`}>
                    <div className="absolute inset-2 rounded-full border border-white/20 backdrop-blur-sm bg-white/10 flex items-center justify-center font-serif text-2xl font-bold text-white shadow-inner">
                      {event.title.charAt(0)}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-emerald-400 transition-colors">{event.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{event.category}</p>
                  <p className="text-xl font-bold">${event.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar (Cart) */}
        <div className="w-[380px] bg-[#121212] border-l border-white/5 flex flex-col h-full shrink-0">
          <div className="p-8 pb-4">
            <h2 className="text-2xl font-bold">Tickets Order</h2>
            <p className="text-sm text-gray-500 mt-1">Order #{(Math.random() * 1000000).toFixed(0)}</p>
          </div>
          
          <div className="flex-1 overflow-y-auto px-8 py-4">
            <div className="flex text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 border-b border-white/5 pb-2">
              <span className="flex-1">Item</span>
              <span className="w-12 text-center">Qty</span>
              <span className="w-16 text-right">Price</span>
            </div>
            
            <div className="space-y-4">
              {cart.map((item, idx) => {
                const event = EVENTS.find(e => e.id === item.eventId)!;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded bg-gradient-to-br shrink-0 ${event.id % 2 === 0 ? "from-blue-500 to-emerald-500" : "from-orange-500 to-rose-500"}`} />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm truncate">{event.title}</p>
                      <p className="text-xs text-gray-500">${event.price.toFixed(2)}</p>
                    </div>
                    <div className="w-8 h-8 rounded bg-[#242424] flex items-center justify-center text-sm border border-white/5">
                      {item.qty}
                    </div>
                    <div className="w-16 text-right font-semibold text-sm">
                      ${(event.price * item.qty).toFixed(2)}
                    </div>
                  </div>
                );
              })}
              {cart.length === 0 && (
                <div className="text-center py-10 text-gray-500 text-sm">
                  No tickets selected.
                </div>
              )}
            </div>
          </div>
          
          <div className="p-8 bg-[#1a1a1a] border-t border-white/5">
            <div className="flex justify-between text-sm mb-3 text-gray-400">
              <span>Sub Total</span>
              <span className="text-white">${subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm mb-6 text-gray-400">
              <span>Tax (10%)</span>
              <span className="text-white">${(subTotal * 0.1).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold mb-8">
              <span>Grand Total</span>
              <span>${(subTotal * 1.1).toFixed(2)}</span>
            </div>
            
            <button className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-colors">
              Proceed to Payment
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
