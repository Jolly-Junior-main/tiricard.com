
import fs from "fs";

let content = fs.readFileSync("src/components/EventsDashboardModal.tsx", "utf-8");

content = content.replace(
  `className={\`fixed inset-0 z-[100] flex overflow-hidden font-sans \${bgMain}\`}`,
  `className={\`fixed inset-0 z-[100] flex flex-col md:flex-row overflow-hidden font-sans \${bgMain}\`}`
);

content = content.replace(
  `{/* Left Sidebar */}\n        <div className={\`w-[280px] border-r flex flex-col h-full shrink-0 \${bgSidebar}\`}>`,
  `{/* Left Sidebar */}\n        <div className={\`hidden md:flex w-[240px] lg:w-[280px] border-r flex-col h-full shrink-0 \${bgSidebar}\`}>`
);

content = content.replace(
  `{/* Right Sidebar (Cart) */}\n        <div className={\`w-[380px] border-l flex flex-col h-full shrink-0 \${bgSidebar}\`}>`,
  `{/* Right Sidebar (Cart) */}\n        <div className={\`hidden lg:flex w-[320px] xl:w-[380px] border-l flex-col h-full shrink-0 \${bgSidebar}\`}>`
);

const mobileHeader = `
          {/* Mobile Header */}
          <div className={\`md:hidden p-4 flex items-center justify-between border-b \${borderBottom}\`}>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-white">T</span>
              TiriCard.
            </h2>
            <div className="flex gap-2">
              <button onClick={() => setIsLightMode(!isLightMode)} className={\`w-8 h-8 rounded flex items-center justify-center transition-colors \${buttonBg}\`}>
                {isLightMode ? (
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                ) : (
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                )}
              </button>
              <button onClick={onClose} className={\`w-8 h-8 rounded flex items-center justify-center transition-colors \${buttonBg}\`}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M11 1L1 11M1 1L11 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Categories */}
          <div className="md:hidden overflow-x-auto whitespace-nowrap p-4 no-scrollbar border-b \${borderBottom}">
              {CATEGORIES.map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => setActiveCategory(cat)} 
                    className={\`px-4 py-2 text-sm rounded-full mr-2 transition-colors \${activeCategory === cat ? "bg-emerald-500 text-white" : (isLightMode ? "bg-gray-200 text-gray-700" : "bg-[#242424] text-gray-300")}\`}
                  >
                    {cat}
                  </button>
              ))}
          </div>
`;

content = content.replace(
  `{/* Main Content (Grid) */}\n        <div className={\`flex-1 flex flex-col h-full \${bgMain}\`}>`,
  `{/* Main Content (Grid) */}\n        <div className={\`flex-1 flex flex-col h-full relative \${bgMain}\`}>\n` + mobileHeader
);

const searchBar = `<div className={\`p-8 pb-4 flex items-center justify-between border-b \${borderBottom}\`}>
            <h1 className="text-3xl font-bold">{activeCategory}</h1>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-gray-400 border-t-transparent" />
              <input type="text" placeholder="Search events..." className={\`text-sm rounded-full pl-10 pr-4 py-2.5 outline-none w-[300px] border transition-all \${searchBg}\`} />
            </div>
          </div>`;

const responsiveSearchBar = `<div className={\`hidden md:flex p-6 lg:p-8 pb-4 items-center justify-between border-b \${borderBottom}\`}>
            <h1 className="text-2xl lg:text-3xl font-bold">{activeCategory}</h1>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-gray-400 border-t-transparent" />
              <input type="text" placeholder="Search events..." className={\`text-sm rounded-full pl-10 pr-4 py-2.5 outline-none w-[200px] lg:w-[300px] border transition-all \${searchBg}\`} />
            </div>
          </div>`;

content = content.replace(searchBar, responsiveSearchBar);

const p8 = `          <div className="flex-1 overflow-y-auto p-8">`;
const pResponsive = `          <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 pb-24 lg:pb-8">`;
content = content.replace(p8, pResponsive);

const mobileCartBottom = `
          {/* Mobile Bottom Cart Bar */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 border-t \${bgSidebar} shadow-2xl z-20">
            <div className="flex items-center justify-between max-w-md mx-auto">
              <div>
                <p className="text-sm \${textMuted}">Total ({cart.reduce((a,c)=>a+c.qty,0)} tickets)</p>
                <p className="font-bold text-lg">\${(subTotal * 1.1).toFixed(2)}</p>
              </div>
              <button className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold transition-colors shadow-lg shadow-emerald-500/20">
                Checkout
              </button>
            </div>
          </div>
`;

content = content.replace(
  `{/* Right Sidebar (Cart) */}`,
  mobileCartBottom + `\n        {/* Right Sidebar (Cart) */}`
);

fs.writeFileSync("src/components/EventsDashboardModal.tsx", content, "utf-8");
