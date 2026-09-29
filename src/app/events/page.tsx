"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/OtherSections";
import { Search, MapPin, Calendar, Users, Filter, ArrowRight, Clock } from "lucide-react";

export default function EventsPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const [activeCategory, setActiveCategory] = useState("All Events");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 14);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = target.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const featuredEvent = {
    title: "Tiricard Exclusive Gala",
    subtitle: "A night of elegance, networking, and celebration",
    date: "December 15, 2026",
    location: "The Grand Ballroom, London",
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80",
  };

  const categories = ["All Events", "Galas", "Weddings", "Corporate", "Exhibitions"];

  const upcomingEvents = [
    {
      title: "Royal Wedding Exhibition",
      date: "Nov 20, 2026",
      loc: "Paris, France",
      price: "$120",
      going: 450,
      tag: "FEATURED",
      img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
      category: "Exhibitions"
    },
    {
      title: "Founders' Winter Banquet",
      date: "Dec 05, 2026",
      loc: "New York, USA",
      price: "$250",
      going: 200,
      tag: "VIP ONLY",
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
      category: "Corporate"
    },
    {
      title: "Annual Charity Gala",
      date: "Dec 12, 2026",
      loc: "Geneva, Switzerland",
      price: "$500",
      going: 150,
      tag: "CHARITY",
      img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80",
      category: "Galas"
    },
    {
      title: "Art Biennale 2026",
      date: "Dec 18, 2026",
      loc: "Venice, Italy",
      price: "Invitation",
      going: 800,
      tag: "ARTS",
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
      category: "Exhibitions"
    }
  ];

  const trendingEvents = [
    { img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&q=80", title: "Global Music Fest", date: "Nov 19", price: "$85" },
    { img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80", title: "Fashion Week Gala", date: "Nov 22", price: "Invite" },
    { img: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=400&q=80", title: "Startup Networking", date: "Dec 1", price: "Free" },
    { img: "https://images.unsplash.com/photo-1509631179647-0c37cb1190bc?w=400&q=80", title: "Luxury Showcase", date: "Nov 25", price: "$150" },
  ];

  const filteredEvents = upcomingEvents.filter(ev => {
    const matchesCat = activeCategory === "All Events" || ev.category === activeCategory;
    const matchesSearch = ev.title.toLowerCase().includes(searchQuery.toLowerCase()) || ev.loc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-brand-bg text-brand-charcoal selection:bg-brand-gold/20 selection:text-brand-charcoal">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-editorial font-medium mb-4">Discover Tiricard Events</h1>
          <p className="text-brand-gray text-lg max-w-xl">
            Curated experiences, exclusive gatherings, and unforgettable moments. Find and book your next prestigious event.
          </p>
        </div>

        {/* Featured & Upcoming Layout */}
        <div className="flex flex-col gap-16 mb-20">
          
          {/* Featured Hero Event - Top */}
          <div className="w-full group rounded-3xl overflow-hidden relative min-h-[400px] md:min-h-[500px] shadow-sm">
            <img src={featuredEvent.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Featured" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />
            
            <div className="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-brand-gold text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              Featured Event
            </div>

            <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
              <h2 className="text-3xl md:text-6xl font-editorial font-medium mb-4">{featuredEvent.title}</h2>
              <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 max-w-2xl">{featuredEvent.subtitle}</p>
              
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <Calendar className="w-5 h-5 text-brand-gold" />
                  <span>{featuredEvent.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                  <span>{featuredEvent.location}</span>
                </div>
              </div>

              {/* Countdown */}
              <div className="flex flex-wrap items-center gap-3 md:gap-8 mb-6 md:mb-8">
                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Mins", value: timeLeft.mins },
                  { label: "Secs", value: timeLeft.secs },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-brand-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-xl md:text-3xl font-bold font-editorial">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <span className="text-[10px] md:text-xs uppercase tracking-widest mt-2 text-white/60">{item.label}</span>
                  </div>
                ))}
              </div>

              <button className="px-6 py-3 md:px-8 md:py-3 rounded-full bg-brand-gold text-white text-sm md:text-base font-medium hover:bg-brand-charcoal transition-colors flex items-center gap-2">
                Get Tickets <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Upcoming Events & Filter - Next Row */}
          <div className="w-full flex flex-col">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-8 gap-6">
              <div className="flex items-center gap-4">
                <h3 className="text-3xl font-editorial font-medium">Upcoming Events</h3>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-4 w-full xl:w-auto">
                {/* Categories */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide w-full md:w-auto">
                  {categories.map((cat, i) => (
                    <button 
                      key={i} 
                      onClick={() => setActiveCategory(cat)}
                      className={"whitespace-nowrap px-4 py-2 rounded-full text-sm transition-colors " + (activeCategory === cat ? 'bg-brand-charcoal text-white' : 'bg-brand-white border border-border-soft text-brand-gray hover:border-brand-gold')}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                
                {/* Search */}
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray" />
                  <input 
                    type="text" 
                    placeholder="Search events..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-brand-white border border-border-soft rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
                
                {/* Filter Button */}
                <button className="w-10 h-10 rounded-full border border-border-soft flex items-center justify-center bg-brand-white hover:border-brand-gold transition-colors shrink-0">
                  <Filter className="w-4 h-4 text-brand-charcoal" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredEvents.length > 0 ? filteredEvents.map((ev, i) => (
                <div key={i} className="bg-brand-white border border-border-soft rounded-2xl p-4 flex flex-col hover:border-brand-gold transition-colors cursor-pointer group">
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-4 relative">
                    <img src={ev.img} alt={ev.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-3 left-3 px-2 py-1 rounded bg-brand-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-brand-gold">{ev.tag}</div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h4 className="font-bold text-lg mb-2 line-clamp-1">{ev.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-brand-gray mb-4">
                      <Clock className="w-4 h-4" /> {ev.date}
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border-soft">
                      <div className="flex items-center gap-1.5 text-sm font-medium">
                        <Users className="w-4 h-4 text-brand-gray" /> {ev.going} attending
                      </div>
                      <span className="text-base font-bold text-brand-charcoal">{ev.price}</span>
                    </div>
                  </div>
                </div>
              )) : (
                <div className="col-span-full text-center py-20 text-brand-gray text-lg">No events found matching your criteria.</div>
              )}
            </div>
          </div>
        </div>

        {/* Trending This Week */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-editorial font-medium mb-2">Trending This Week</h2>
              <p className="text-brand-gray">Highly anticipated events filling up fast</p>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-border-soft bg-brand-white flex items-center justify-center hover:border-brand-gold transition-colors">
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
              <button className="w-10 h-10 rounded-full border border-border-soft bg-brand-white flex items-center justify-center hover:border-brand-gold transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {trendingEvents.map((ev, i) => (
              <div key={i} className="min-w-[300px] bg-brand-white rounded-2xl p-4 border border-border-soft hover:border-brand-gold transition-colors flex gap-4 cursor-pointer group">
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <img src={ev.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={ev.title} />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h4 className="font-bold text-sm mb-1 line-clamp-1">{ev.title}</h4>
                  <span className="text-xs text-brand-gray mb-3">{ev.date}</span>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex -space-x-1.5">
                      <div className="w-5 h-5 rounded-full bg-[#fcfaf5] border border-border-soft overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" alt=""/></div>
                      <div className="w-5 h-5 rounded-full bg-[#fcfaf5] border border-border-soft overflow-hidden"><img src="https://i.pravatar.cc/100?img=2" alt=""/></div>
                    </div>
                    <span className="text-xs font-bold text-brand-gold">{ev.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Host Banner - Tiricard Styled */}
        <div className="w-full rounded-3xl bg-brand-charcoal text-brand-white p-10 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay"></div>
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-gold/20 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-editorial font-medium mb-6 leading-tight">
              Host your own event. <br/> Manage everything in one place.
            </h2>
            <p className="text-brand-white/80 text-lg">
              Tiricard gives you the tools to issue QR tickets, track RSVPs, manage check-ins, and build a prestigious guest list.
            </p>
          </div>
          <button className="relative z-10 px-8 py-4 rounded-full bg-brand-gold text-white font-medium hover:bg-white hover:text-brand-charcoal transition-colors whitespace-nowrap">
            Create an Event
          </button>
        </div>

      </div>
      <Footer />
    </main>
  );
}
