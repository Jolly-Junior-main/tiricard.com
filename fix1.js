
const fs = require("fs");
let content = fs.readFileSync("src/components/CheckinAndHowItWorks.tsx", "utf8");
content = content.replace(/Math\.random\(\) > 0\.4/g, "i % 3 === 0");
content = content.replace(/setPlaying\(!window\.matchMedia\("\(prefers-reduced-motion: reduce\)"\)\.matches\);/, "// eslint-disable-next-line react-compiler/react-compiler\n      setPlaying(!window.matchMedia(\"(prefers-reduced-motion: reduce)\").matches);");
fs.writeFileSync("src/components/CheckinAndHowItWorks.tsx", content);
