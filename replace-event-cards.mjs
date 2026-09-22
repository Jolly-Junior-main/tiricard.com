
import fs from "fs";

let content = fs.readFileSync("src/components/EventsDashboardModal.tsx", "utf-8");

const oldCard = `{filteredEvents.map(event => (
                <div 
                  key={event.id}
                  onClick={() => addToCart(event.id)}
                  className={\`rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer transition-all hover:-translate-y-1 border hover:border-emerald-500/50 group \${bgCard}\`}
                >
                  <div className="w-32 h-32 rounded-full mb-6 shadow-xl relative overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-emerald-500 transition-colors">{event.title}</h3>
                  <p className={\`text-sm mb-4 \${textMuted}\`}>{event.category}</p>
                  <p className="text-xl font-bold">\${event.price.toFixed(2)}</p>
                </div>
              ))}`;

const newCard = `{filteredEvents.map(event => (
                <div 
                  key={event.id}
                  onClick={() => addToCart(event.id)}
                  className="relative h-[280px] rounded-2xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1 group shadow-lg border border-black/10"
                >
                  <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 group-hover:opacity-90" />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-left z-10">
                    <h3 className="font-bold text-xl mb-1 text-white group-hover:text-emerald-400 transition-colors drop-shadow-md">{event.title}</h3>
                    <p className="text-sm text-gray-300 mb-3 font-medium drop-shadow-md">{event.category}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-black text-white drop-shadow-md">\${event.price.toFixed(2)}</p>
                      <button className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}`;

content = content.replace(oldCard, newCard);
fs.writeFileSync("src/components/EventsDashboardModal.tsx", content, "utf-8");
