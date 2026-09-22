import fs from 'fs';
let content = fs.readFileSync('src/components/FeaturesSection.tsx', 'utf-8');
content = content.replace('<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">', '<div className="relative w-full flex overflow-hidden group pb-8">
        <motion.div
          className="flex flex-nowrap w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {[0, 1].map((blockIdx) => (
            <div key={blockIdx} className="flex flex-nowrap items-center gap-6 md:gap-8 pr-6 md:pr-8">');
content = content.replace('w-full h-[650px]', 'flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] lg:w-[480px] h-[650px]');
content = content.replace('w-full h-[650px]', 'flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] lg:w-[480px] h-[650px]');
content = content.replace('w-full h-[650px]', 'flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] lg:w-[480px] h-[650px]');
content = content.replace('w-full min-h-[650px]', 'flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] lg:w-[480px] min-h-[650px]');
const endStr = '      </div>
    </div>
    </section>';
const newEndStr = '            </div>
          ))}
        </motion.div>
      </div>
    </section>';
content = content.replace(endStr, newEndStr);
fs.writeFileSync('src/components/FeaturesSection.tsx', content, 'utf-8');