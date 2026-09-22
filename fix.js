const fs = require('fs');
let c = fs.readFileSync('src/components/DeliveryAndCheckinSection.tsx', 'utf8');
c = c.replace(/We're/g, 'We&apos;re');
c = c.replace(/Abel's/g, 'Abel&apos;s');
fs.writeFileSync('src/components/DeliveryAndCheckinSection.tsx', c);
