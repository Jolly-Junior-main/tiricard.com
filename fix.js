const fs = require('fs');
let c = fs.readFileSync('src/components/CheckinAndHowItWorks.tsx', 'utf8');

const lines = c.split('\n');
const newLines = lines.filter(line => !line.includes('eslint-disable-next-line'));
fs.writeFileSync('src/components/CheckinAndHowItWorks.tsx', newLines.join('\n'));
