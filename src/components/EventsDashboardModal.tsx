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
  { id: 1, title: "Addis Tech Summit", price: 150, category: "Tech Conferences", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80" },
  { id: 2, title: "Jazz Night Live", price: 45, category: "Music Concerts", image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400&q=80" },
  { id: 3, title: "Startup Founders Gala", price: 200, category: "Gala Dinners", image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&q=80" },
  { id: 4, title: "AI Masterclass", price: 80, category: "Workshops", image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&q=80" },
  { id: 5, title: "The Grand Wedding Expo", price: 25, category: "Weddings", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=80" },
  { id: 6, title: "Afrobeat Festival", price: 65, category: "Music Concerts", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80" },
  { id: 7, title: "Web3 Developers Meetup", price: 15, category: "Tech Conferences", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&q=80" },
  { id: 8, title: "Exclusive VIP Lounge", price: 500, category: "VIP Access", image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=400&q=80" },
  { id: 9, title: "Design Thinking Workshop", price: 55, category: "Workshops", image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=400&q=80" }
];

export function EventsDashboardModal({ isOpen, onClose }: EventsDashboardModalProps) {
  const [activeCategory, setActiveCategory] = useState("All Events");
  const [cart, setCart] = useState<{ eventId: number; qty: number }[]>([]);
  const [isLightMode, setIsLightMode] = useState(true);

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

  // Theme Classes
  const bgMain = isLightMode ? "bg-[#f5f5f7] text-[#1d1d1f]" : "bg-[#1a1a1a] text-white";
  const bgSidebar = isLightMode ? "bg-white border-gray-200" : "bg-[#121212] border-white/5";
  const bgCard = isLightMode ? "bg-white border-gray-100 hover:shadow-xl" : "bg-[#242424] border-white/5 hover:bg-[#2a2a2a]";
  const textMuted = isLightMode ? "text-gray-500" : "text-gray-400";
  const searchBg = isLightMode ? "bg-gray-100 text-[#1d1d1f] placeholder-gray-500 border-transparent focus:border-emerald-500 focus:bg-white" : "bg-[#242424] text-white placeholder-gray-500 border-white/5 focus:border-emerald-500";
  const buttonBg = isLightMode ? "bg-gray-100 hover:bg-gray-200 text-gray-800" : "bg-white/10 hover:bg-white/20 text-white";
  const qtyBg = isLightMode ? "bg-gray-100 border-gray-200" : "bg-[#242424] border-white/5";
  const borderBottom = isLightMode ? "border-gray-200" : "border-white/5";

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className={`fixed inset-0 z-[100] flex flex-col md:flex-row overflow-hidden font-sans ${bgMain}`}
      >
        {/* Left Sidebar */}
        <div className={`hidden md:flex w-[240px] lg:w-[280px] border-r flex-col h-full shrink-0 ${bgSidebar}`}>
          <div className="p-6 flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-white">T</span>
              TiriCard.
            </h2>
            <div className="flex gap-2">
              <button onClick={() => setIsLightMode(!isLightMode)} className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${buttonBg}`}>
                {isLightMode ? (
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                ) : (
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                )}
              </button>
              <button onClick={onClose} className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${buttonBg}`}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M11 1L1 11M1 1L11 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto py-4">
            <h3 className="px-6 text-xs text-gray-500 font-semibold uppercase tracking-wider mb-4">Categories</h3>
            <ul className="space-y-1">
              {CATEGORIES.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-6 py-3 text-sm transition-colors ${activeCategory === cat ? "bg-emerald-500 text-white font-medium" : (isLightMode ? "text-gray-600 hover:bg-gray-100" : "text-gray-400 hover:bg-white/5")}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content (Grid) */}
        <div className={`flex-1 flex flex-col h-full relative ${bgMain}`}>

          {/* Mobile Header */}
          <div className={`md:hidden p-4 flex items-center justify-between border-b ${borderBottom}`}>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-white">T</span>
              TiriCard.
            </h2>
            <div className="flex gap-2">
              <button onClick={() => setIsLightMode(!isLightMode)} className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${buttonBg}`}>
                {isLightMode ? (
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                ) : (
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                )}
              </button>
              <button onClick={onClose} className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${buttonBg}`}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M11 1L1 11M1 1L11 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Categories */}
          <div className={`md:hidden overflow-x-auto whitespace-nowrap p-4 no-scrollbar border-b ${borderBottom}`}>
              {CATEGORIES.map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => setActiveCategory(cat)} 
                    className={`px-4 py-2 text-sm rounded-full mr-2 transition-colors ${activeCategory === cat ? "bg-emerald-500 text-white" : (isLightMode ? "bg-gray-200 text-gray-700" : "bg-[#242424] text-gray-300")}`}
                  >
                    {cat}
                  </button>
              ))}
          </div>

          <div className={`hidden md:flex p-6 lg:p-8 pb-4 items-center justify-between border-b ${borderBottom}`}>
            <h1 className="text-2xl lg:text-3xl font-bold">{activeCategory}</h1>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-gray-400 border-t-transparent" />
              <input type="text" placeholder="Search events..." className={`text-sm rounded-full pl-10 pr-4 py-2.5 outline-none w-[200px] lg:w-[300px] border transition-all ${searchBg}`} />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 pb-24 lg:pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map(event => (
                <div 
                  key={event.id}
                  onClick={() => addToCart(event.id)}
                  className={`rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer transition-all hover:-translate-y-1 border hover:border-emerald-500/50 group ${bgCard}`}
                >
                  <div className="w-32 h-32 rounded-full mb-6 shadow-xl relative overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-emerald-500 transition-colors">{event.title}</h3>
                  <p className={`text-sm mb-4 ${textMuted}`}>{event.category}</p>
                  <p className="text-xl font-bold">${event.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        
          {/* Mobile Bottom Cart Bar */}
          <div className={`lg:hidden fixed bottom-0 left-0 right-0 p-4 border-t ${bgSidebar} shadow-2xl z-20 bg-white/80 backdrop-blur-md`}>
            <div className="flex items-center justify-between max-w-md mx-auto">
              <div>
                <p className={`text-sm ${textMuted}`}>Total ({cart.reduce((a,c)=>a+c.qty,0)} tickets)</p>
                <p className="font-bold text-lg">${(subTotal * 1.1).toFixed(2)}</p>
              </div>
              <button className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-colors shadow-lg shadow-emerald-500/20">
                Checkout
              </button>
            </div>
          </div>

        {/* Right Sidebar (Cart) */}
        <div className={`hidden lg:flex w-[320px] xl:w-[380px] border-l flex-col h-full shrink-0 ${bgSidebar}`}>
          <div className="p-8 pb-4">
            <h2 className="text-2xl font-bold">Tickets Order</h2>
            <p className="text-sm text-gray-500 mt-1">Order #{(Math.random() * 1000000).toFixed(0)}</p>
          </div>
          
          <div className="flex-1 overflow-y-auto px-8 py-4">
            <div className={`flex text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 border-b pb-2 ${borderBottom}`}>
              <span className="flex-1">Item</span>
              <span className="w-12 text-center">Qty</span>
              <span className="w-16 text-right">Price</span>
            </div>
            
            <div className="space-y-4">
              {cart.map((item, idx) => {
                const event = EVENTS.find(e => e.id === item.eventId)!;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded shrink-0 overflow-hidden shadow-sm">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm truncate">{event.title}</p>
                      <p className={`text-xs ${textMuted}`}>${event.price.toFixed(2)}</p>
                    </div>
                    <div className={`w-8 h-8 rounded flex items-center justify-center text-sm border ${qtyBg}`}>
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
          
          <div className={`p-8 border-t ${borderBottom}`}>
            <div className={`flex justify-between text-sm mb-3 ${textMuted}`}>
              <span>Sub Total</span>
              <span className={isLightMode ? "text-[#1d1d1f]" : "text-white"}>${subTotal.toFixed(2)}</span>
            </div>
            <div className={`flex justify-between text-sm mb-6 ${textMuted}`}>
              <span>Tax (10%)</span>
              <span className={isLightMode ? "text-[#1d1d1f]" : "text-white"}>${(subTotal * 0.1).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold mb-8">
              <span>Grand Total</span>
              <span>${(subTotal * 1.1).toFixed(2)}</span>
            </div>
            
            <button className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-colors shadow-lg shadow-emerald-500/20">
              Proceed to Payment
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
