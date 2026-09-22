const fs = require('fs');

let c = fs.readFileSync('src/components/GuestExperienceSection.tsx', 'utf8');
c = c.replace(/I'll/g, 'I&apos;ll');
fs.writeFileSync('src/components/GuestExperienceSection.tsx', c);

c = fs.readFileSync('src/components/HowItWorksSection.tsx', 'utf8');
c = c.replace(/I'll/g, 'I&apos;ll');
fs.writeFileSync('src/components/HowItWorksSection.tsx', c);

c = fs.readFileSync('src/components/CheckinAndHowItWorks.tsx', 'utf8');
c = c.replace(/window !== 'undefined'\) \{\n.*\n.*\n.*\n.*\}/g, "window !== 'undefined') {\n      setPlaying(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);\n    }");
fs.writeFileSync('src/components/CheckinAndHowItWorks.tsx', c);
