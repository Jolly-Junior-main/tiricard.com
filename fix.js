const fs = require('fs');
let c = fs.readFileSync('src/components/CheckinAndHowItWorks.tsx', 'utf8');

c = c.replace(/setPlaying\(!window\.matchMedia\("\([^)]*\)"\)\.matches\);/g, "setTimeout(() => setPlaying(!window.matchMedia('(prefers-reduced-motion: reduce)').matches), 0);");
fs.writeFileSync('src/components/CheckinAndHowItWorks.tsx', c);
