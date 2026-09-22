const fs = require('fs');
let c = fs.readFileSync('src/components/CheckinAndHowItWorks.tsx', 'utf8');
c = c.replace(/Math\.random\(\) > 0\.4/g, 'i % 3 === 0');
c = c.replace(/setPlaying\(!window\.matchMedia\(\"\(prefers-reduced-motion: reduce\)\"\)\.matches\);/g, '// eslint-disable-next-line react-compiler/react-compiler\n      setPlaying(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);');
fs.writeFileSync('src/components/CheckinAndHowItWorks.tsx', c);
