import { create } from 'zustand';

type Language = 'en' | 'am';

interface LanguageState {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const dictionary: Record<string, Record<Language, string>> = {
  'nav.templates': { en: 'Templates', am: 'ንድፎች' },
  'nav.features': { en: 'Features', am: 'ገጽታዎች' },
  'nav.pricing': { en: 'Pricing', am: 'ዋጋዎች' },
  'nav.signin': { en: 'Sign In', am: 'ግባ' },
  'nav.create': { en: 'Create Invitation', am: 'መጋበዣ ፍጠር' },

  'hero.title': { en: "Beautiful digital invitations for life's unforgettable moments.", am: 'ለሕይወት የማይረሱ አፍታዎች የሚያምሩ ዲጂታል መጋበዣዎች።' },
  'hero.desc': { en: 'Create stunning digital invitations, manage RSVPs, and check-in guests beautifully. All in one place.', am: 'አስደናቂ ዲጂታል መጋበዣዎችን ይፍጠሩ፣ መልሶችን ያስተዳድሩ፣ እና እንግዶችን በሚያምር ሁኔታ ይቀበሉ። ሁሉም በአንድ ቦታ።' },
  'hero.btn.create': { en: 'Create Your Invitation', am: 'መጋበዣዎን ይፍጠሩ' },
  'hero.btn.explore': { en: 'Explore Templates', am: 'ንድፎችን ያስሱ' },

  'editorial.eyebrow': { en: 'Setting the tone', am: 'ስሜቱን ማዘጋጀት' },
  'editorial.text': { en: 'An invitation is more than a date and time. It’s the beginning of your story.', am: 'መጋበዣ ከቀን እና ሰዓት በላይ ነው። የእርስዎ ታሪክ ጅማሬ ነው።' },

  'collection.eyebrow': { en: 'Curated Collection', am: 'የተመረጡ ስብስቦች' },
  'collection.title': { en: 'Find the perfect design for your celebration.', am: 'ለበዓልዎ ትክክለኛውን ንድፍ ያግኙ።' },
  'collection.view': { en: 'View Template', am: 'ንድፍን ይመልከቱ' },

  'partners.eyebrow': { en: 'Trusted By', am: 'የታመነ' },

  'feat.eyebrow': { en: 'Beyond the invitation', am: 'ከመጋበዣ ባሻገር' },
  'feat.title': { en: 'More than\nan invitation.', am: 'ከመጋበዣ\nበላይ።' },
  'feat.desc': { en: 'Everything you need from the first guest to the front door.', am: 'ከመጀመሪያው እንግዳ እስከ መግቢያ በር ድረስ የሚፈልጉት ሁሉ።' },
  
  'feat.1.title': { en: "Know who's coming.", am: 'ማን እንደሚመጣ ይወቁ።' },
  'feat.1.desc': { en: 'Guests can respond directly from their invitation — without complicated forms or unnecessary downloads.', am: 'እንግዶች በቀጥታ ከመጋበዣቸው ላይ ምላሽ መስጠት ይችላሉ — ያለ ውስብስብ ቅጾች ወይም አላስፈላጊ ማውረዶች።' },
  'feat.1.q': { en: 'Will you attend?', am: 'ይገኛሉ?' },
  'feat.1.yes': { en: "Yes, I'll be there", am: 'አዎ፣ እገኛለሁ' },
  'feat.1.no': { en: 'Unfortunately, no', am: 'በሚያሳዝን ሁኔታ፣ አልገኝም' },

  'feat.2.title': { en: 'Everyone,\nbeautifully organized.', am: 'ሁሉም ሰው፣\nበሚያምር ሁኔታ ተደራጅቷል።' },
  'feat.2.desc': { en: 'Track RSVPs, manage party sizes, and see who has arrived in real time.', am: 'መልሶችን ይከታተሉ፣ የቡድን መጠኖችን ያስተዳድሩ፣ እና ማን እንደደረሰ በቅጽበት ይመልከቱ።' },
  'feat.2.guests': { en: 'Guests', am: 'እንግዶች' },
  'feat.2.attending': { en: 'Attending', am: 'የሚገኙ' },
  'feat.2.pending': { en: 'Pending', am: 'የሚጠበቁ' },
  'feat.2.declined': { en: 'Declined', am: 'ያልተቀበሉ' },

  'feat.3.title': { en: 'Send once.\nReach everyone.', am: 'አንድ ጊዜ ይላኩ።\nሁሉንም ያግኙ።' },
  'feat.3.desc': { en: 'Send beautiful digital invitations via SMS, WhatsApp, or simply share a custom link.', am: 'የሚያምሩ ዲጂታል መጋበዣዎችን በኤስኤምኤስ፣ ዋትስአፕ ወይም ሊንክ በማጋራት ይላኩ።' },
  'feat.3.msg': { en: "Hi Hana! We're so excited to invite you to our wedding. Tap the link below to view the invitation and RSVP.", am: 'ሰላም ሃና! ለሠርጋችን ልንጋብዝሽ በጣም ጓጉተናል። መጋበዣውን ለማየት እና ምላሽ ለመስጠት ከታች ያለውን ሊንክ ይጫኑ።' },
  'feat.3.date': { en: 'Saturday, October 17', am: 'ቅዳሜ, ጥቅምት 17' },

  'arrival.eyebrow': { en: 'The Arrival', am: 'አቀባበል' },
  'arrival.title': { en: 'From invitation\nto arrival.', am: 'ከመጋበዣ\nእስከ መድረሻ።' },
  'arrival.desc': { en: 'Give every guest a smoother arrival with secure digital event passes. Scan their QR code and instantly update their attendance without searching through paper lists.', am: 'ለእያንዳንዱ እንግዳ ደህንነቱ የተጠበቀ ዲጂታል ማለፊያ በመስጠት አቀባበሉን የተስተካከለ ያድርጉ። የQR ኮዳቸውን ስካን በማድረግ መገኘታቸውን ወዲያውኑ ያረጋግጡ።' },
  'arrival.pass': { en: 'Event Pass', am: 'የክስተት ማለፊያ' },
  'arrival.verified': { en: 'Guest Verified', am: 'እንግዳ ተረጋግጧል' },

  'hiw.eyebrow': { en: 'How it works', am: 'እንዴት እንደሚሰራ' },
  'hiw.title': { en: 'See your event come together.', am: 'ዝግጅትዎ ሲስተካከል ይመልከቱ።' },
  'hiw.desc': { en: 'From choosing a design to welcoming your guests, see the complete Tiricard journey.', am: 'ንድፍ ከመምረጥ ጀምሮ እንግዶችዎን እስከ መቀበል ድረስ፣ ሙሉውን የቲሪካርድ ጉዞ ይመልከቱ።' },
  'hiw.s1': { en: 'STEP 01', am: 'ደረጃ 01' },
  'hiw.s1.t': { en: 'Choose your invitation.', am: 'መጋበዣዎን ይምረጡ።' },
  'hiw.s1.d': { en: 'Find a design made for your moment.', am: 'ለእርስዎ አፍታ የተሰራ ንድፍ ያግኙ።' },
  'hiw.s2': { en: 'STEP 02', am: 'ደረጃ 02' },
  'hiw.s2.t': { en: 'Make it yours.', am: 'የእርስዎ ያድርጉት።' },
  'hiw.s2.d': { en: 'Personalize every detail and see it update live.', am: 'እያንዳንዱን ዝርዝር ያብጁ እና በቀጥታ ሲዘመን ይመልከቱ።' },
  'hiw.s3': { en: 'STEP 03', am: 'ደረጃ 03' },
  'hiw.s3.t': { en: 'Invite your guests.', am: 'እንግዶችዎን ይጋብዙ።' },
  'hiw.s3.d': { en: 'Send one beautiful link to everyone.', am: 'አንድ የሚያምር ሊንክ ለሁሉም ሰው ይላኩ።' },
  'hiw.s4': { en: 'STEP 04', am: 'ደረጃ 04' },
  'hiw.s4.t': { en: 'Watch replies arrive.', am: 'ምላሾች ሲደርሱ ይመልከቱ።' },
  'hiw.s4.d': { en: 'Keep every RSVP organized in one place.', am: 'እያንዳንዱን ምላሽ በአንድ ቦታ ተደራጅቶ ያቆዩ።' },
  'hiw.s5': { en: 'STEP 05', am: 'ደረጃ 05' },
  'hiw.s5.t': { en: 'Welcome every guest.', am: 'እያንዳንዱን እንግዳ ይቀበሉ።' },
  'hiw.s5.d': { en: 'Scan the pass and keep the entrance moving.', am: 'ማለፊያውን ስካን በማድረግ መግቢያውን ፈጣን ያድርጉ።' },
  'hiw.restart': { en: 'Restart', am: 'እንደገና ጀምር' },
  
  'footer.desc': { en: "Digital invitations for life's unforgettable moments.", am: 'ለሕይወት የማይረሱ አፍታዎች የሚያምሩ ዲጂታል መጋበዣዎች።' },
  'footer.invitations': { en: 'Invitations', am: 'መጋበዣዎች' },
  'footer.company': { en: 'Company', am: 'ድርጅት' },
  'footer.lang': { en: 'Language', am: 'ቋንቋ' },
  'footer.wedding': { en: 'Wedding', am: 'ሰርግ' },
  'footer.birthday': { en: 'Birthday', am: 'ልደት' },
  'footer.about': { en: 'About', am: 'ስለ እኛ' },
  'footer.contact': { en: 'Contact', am: 'አግኙን' },
};

export const useStore = create<LanguageState>((set, get) => ({
  lang: 'en',
  setLang: (lang) => set({ lang }),
  t: (key) => {
    const entry = dictionary[key];
    if (!entry) return key;
    return entry[get().lang] || key;
  },
}));
