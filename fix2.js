
const fs = require('fs');
let c = fs.readFileSync('src/components/DeliveryAndCheckinSection.tsx', 'utf8');
c = c.replace(/Math\.random\(\) > 0\.5/g, 'i % 2 === 0');
c = c.replace(/What's/g, 'What&apos;s');
c = c.replace(/it's/g, 'it&apos;s');
fs.writeFileSync('src/components/DeliveryAndCheckinSection.tsx', c);

c = fs.readFileSync('src/components/EventCategorySection.tsx', 'utf8');
c = c.replace(/you're/g, 'you&apos;re');
c = c.replace(/What's/g, 'What&apos;s');
fs.writeFileSync('src/components/EventCategorySection.tsx', c);

c = fs.readFileSync('src/components/EventsDashboardModal.tsx', 'utf8');
c = c.replace(/Math\.random\(\) \* 1000000/g, '910243');
fs.writeFileSync('src/components/EventsDashboardModal.tsx', c);

c = fs.readFileSync('src/components/FeaturesSection.tsx', 'utf8');
c = c.replace(/they're/g, 'they&apos;re');
c = c.replace(/What's/g, 'What&apos;s');
c = c.replace(/It's/g, 'It&apos;s');
fs.writeFileSync('src/components/FeaturesSection.tsx', c);

c = fs.readFileSync('src/components/GuestExperienceSection.tsx', 'utf8');
c = c.replace(/they're/g, 'they&apos;re');
c = c.replace(/What's/g, 'What&apos;s');
c = c.replace(/It's/g, 'It&apos;s');
c = c.replace(/don't/g, 'don&apos;t');
fs.writeFileSync('src/components/GuestExperienceSection.tsx', c);

c = fs.readFileSync('src/components/HowItWorksSection.tsx', 'utf8');
c = c.replace(/they're/g, 'they&apos;re');
c = c.replace(/What's/g, 'What&apos;s');
c = c.replace(/It's/g, 'It&apos;s');
c = c.replace(/we're/g, 'we&apos;re');
fs.writeFileSync('src/components/HowItWorksSection.tsx', c);
