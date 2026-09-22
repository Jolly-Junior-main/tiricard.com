const fs = require('fs');

function fix(file) {
  let c = fs.readFileSync(file, 'utf8');
  c = c.replace(/We're/g, 'We&apos;re');
  c = c.replace(/Abel's/g, 'Abel&apos;s');
  c = c.replace(/won't/g, 'won&apos;t');
  c = c.replace(/let's/g, 'let&apos;s');
  c = c.replace(/they're/g, 'they&apos;re');
  c = c.replace(/What's/g, 'What&apos;s');
  c = c.replace(/It's/g, 'It&apos;s');
  c = c.replace(/didn't/g, 'didn&apos;t');
  c = c.replace(/haven't/g, 'haven&apos;t');
  c = c.replace(/you'll/g, 'you&apos;ll');
  c = c.replace(/they'll/g, 'they&apos;ll');
  c = c.replace(/hasn't/g, 'hasn&apos;t');
  c = c.replace(/Let's/g, 'Let&apos;s');
  c = c.replace(/don't/g, 'don&apos;t');
  c = c.replace(/it's/g, 'it&apos;s');
  c = c.replace(/we're/g, 'we&apos;re');
  c = c.replace(/you're/g, 'you&apos;re');
  fs.writeFileSync(file, c);
}

fix('src/components/FeaturesSection.tsx');
fix('src/components/GuestExperienceSection.tsx');
fix('src/components/HowItWorksSection.tsx');
fix('src/components/CheckinAndHowItWorks.tsx');
