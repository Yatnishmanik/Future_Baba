// src/utils/destinyModules.js
// ─────────────────────────────────────────────────────────────
// Dynamic Destiny Engine & Detailed Category Data
// Contains dynamic numerology/astrology calculations and
// highly personalized, psychologically addictive predictions for all 12 signs.
// ─────────────────────────────────────────────────────────────

// ─── DYNAMIC NUMEROLOGY CALCULATIONS ─────────────────────────

export function getLoveMarriagePercent(dob, name) {
  const cleanDob = dob.replace(/-/g, '');
  const dobSum = cleanDob.split('').map(Number).reduce((a, b) => a + b, 0);
  const nameLen = name ? name.length : 6;
  const score = ((dobSum * 7 + nameLen * 3) % 40) + 50; // 50% - 90%
  return { love: score, arranged: 100 - score };
}

export function getRichMindsetScore(dob, name) {
  const date = new Date(dob);
  const day = date.getDate() || 15;
  const nameLen = name ? name.length : 6;
  return ((nameLen * 9 + day * 4) % 30) + 70; // 70 - 100
}

export function getMoneyMagnetPercent(dob, name) {
  const cleanDob = dob.replace(/-/g, '');
  const dobEnd = Number(cleanDob.slice(-2)) || 25;
  const nameLen = name ? name.length : 6;
  return ((dobEnd * 5 + nameLen * 7) % 40) + 60; // 60% - 100%
}

export function getGovJobEnergy(dob) {
  const date = new Date(dob);
  const m = (date.getMonth() + 1) || 5;
  const d = date.getDate() || 15;
  const score = ((m * 11 + d * 7) % 50) + 30; // 30% - 80%
  return { gov: score, startup: 100 - score };
}

export function getDominantPartnerPercent(name) {
  const nameLen = name ? name.length : 6;
  return ((nameLen * 13) % 30) + 40; // 40% - 70%
}

export function getBreakupRecoveryScore(dob) {
  const date = new Date(dob);
  const d = date.getDate() || 15;
  return ((d * 8) % 45) + 55; // 55 - 100
}

export function getManipulationResistance(name) {
  const nameLen = name ? name.length : 6;
  return ((nameLen * 11 + 5) % 35) + 65; // 65 - 100
}

export function getKarmaBalance(dob) {
  const date = new Date(dob);
  const d = date.getDate() || 15;
  return ((d * 9 + 4) % 20) + 80; // 80 - 100
}

export function getPartnerAuraColor(dob) {
  const date = new Date(dob);
  const m = (date.getMonth() + 1) || 5;
  const colors = ["Crimson Red", "Golden Amber", "Royal Violet", "Electric Blue", "Emerald Green"];
  return colors[m % colors.length];
}

export function getSoulmateTiming(dob) {
  const date = new Date(dob);
  const m = (date.getMonth() + 1) || 5;
  const windows = ["24 - 27 saal", "26 - 29 saal", "25 - 28 saal", "28 - 31 saal"];
  const windowsEn = ["24 - 27 years", "26 - 29 years", "25 - 28 years", "28 - 31 years"];
  return { hi: windows[m % windows.length], en: windowsEn[m % windows.length] };
}

export function getLuckActivationAge(dob) {
  const date = new Date(dob);
  const d = date.getDate() || 15;
  return (d % 10) + 23; // Age 23 - 32
}

export function getHiddenMoneyLuckYears(dob) {
  const year = new Date().getFullYear();
  const date = new Date(dob);
  const d = date.getDate() || 15;
  const offset = d % 3;
  return [year + offset + 1, year + offset + 3, year + offset + 6];
}

export function getLifespan(dob) {
  const date = new Date(dob);
  const d = date.getDate() || 15;
  const m = (date.getMonth() + 1) || 5;
  // Lifespan ranging from 75 to 95
  return 75 + ((d * m) % 20);
}

export function getChildrenCount(name, dob) {
  const date = new Date(dob);
  const nameLen = name ? name.length : 6;
  const val = (date.getDate() + nameLen) % 4;
  // 0 to 3 children, with 1 or 2 being most common
  if (val === 0) return "1 (Most Likely)";
  if (val === 1) return "2 (A Boy and a Girl)";
  if (val === 2) return "1 or 2 depending on your career focus";
  return "2 or 3 (A lively household)";
}

// ─── ZODIAC SPECIFIC DETAILED PREDICTIONS ────────────────────

export const DESTINY_DATA = {
  Aries: {
    love: {
      partnerAttractedEn: "Independent and fiery souls who match your speed but respect your boundaries.",
      partnerAttractedHi: "Independent aur strong-willed log jo tumhare fast speed se match kar sakein aur space dein.",
      toxicReasonEn: "You fall in love with potential and think you can 'save' or 'fix' them, ignoring red flags.",
      toxicReasonHi: "Tum logo ke 'potential' se pyar karte ho aur sochte ho ki tum unhe heal kar loge, red flags ignore karke.",
      partnerVibeEn: "Intense, passionate, slightly protective, and deeply loyal behind closed doors.",
      partnerVibeHi: "Behad protective, passionate, aur akele mein behad loyal rehne wala.",
      exWhyEn: "Your chaotic fire and protection are irreplaceable. Once they leave you, everything else feels boring.",
      exWhyHi: "Kyunki tumhare jaisa passionate care aur protective nature unhe kahi nahi mil sakta. Tumhare baad sab pheeka lagta hai.",
      redFlagsEn: "Extreme impatience, blocking them out when angry, and reactive communication.",
      redFlagsHi: "Extreme jaldbaazi, gusse mein aakar partner ko block karna, aur reactive ho jana."
    },
    money: {
      paisaTikegaEn: "Flows in like a river but burns a hole in your pocket due to impulsive spending and styling choice.",
      paisaTikegaHi: "Paisa paani ki tarah aata hai par jaldbaazi mein kharch ho jata hai — khaskar impulsive choices ki wajah se.",
      safePlayerEn: "A complete risk-taker who would rather crash trying than play it safe and bored.",
      safePlayerHi: "Ekdum nidar player! Safe khelna aur boring life jeena tumhari dictionary mein nahi hai.",
      enemiesEn: "Envious close associates who borrow money and secretly pray for your downfall.",
      enemiesHi: "Aise dost ya associates jo paisa udhaar lete hain par wapas nahi karte aur secretly tumse jealous rehte hain.",
      borrowEn: "You project a strong, highly independent aura, so people assume you have infinite cash flow.",
      borrowHi: "Tumhara aura itna strong aur rich lagta hai ki log assume kar lete hain ki tumhare paas paise ki koi kami nahi hai."
    },
    career: {
      talentEn: "Ability to take immediate charge of a collapsing project without showing a single sign of fear.",
      talentHi: "Kisi tootte huye project ya emergency ko bina darr ke akele apne dum par sambhal lena.",
      respectFieldEn: "Startup leadership, bold business negotiations, creative directions, or leading a team.",
      respectFieldHi: "Startup leadership, bold negotiations, creative directions, aur team leading.",
      famePotentialEn: "High. Your voice commands attention, making you a natural influencer or public speaker.",
      famePotentialHi: "Bohot high. Tumhari voice aur confidence doosro ko khichta hai, log secretly tumhari style follow karte hain."
    },
    darkPsych: {
      secretJealousEn: "They are jealous of your magnetic confidence and ability to restart from zero without looking broken.",
      secretJealousHi: "Log tumse isliye jalte hain kyunki tum tootne ke baad bhi zero se khade ho jaate ho, bina kisi self-pity ke.",
      darkSideEn: "A streak of absolute ruthlessness. If crossed permanently, you can erase them from your life like they never existed.",
      darkSideHi: "Ek gehra ruthlessness — agar kisi ne trust toda, toh tum unhe life se aise gayab kar doge jaise woh kabhi existence mein the hi nahi.",
      whoUsesYouEn: "Emotional manipulators who play the victim card, knowing your protective warrior instinct will kick in.",
      whoUsesYouHi: "Victim card khelne wale manipulators, jo jaante hain ki tumhara protective nature unki help karne ke liye dauda chala aayega."
    },
    palmistry: {
      turningPointEn: "A major relocation or career rebirth between ages 27-30 that changes your destiny completely.",
      turningPointHi: "Ek bada life shift jo 27 se 30 saal ke beech foreign relocation ya career change se tumhara bhagya badal dega."
    },
    matches: {
      celebrityMale: "Ranveer Singh", celebrityFemale: "Kangana Ranaut",
      cricketer: "Virat Kohli",
      anime: "Goku (Dragon Ball Z)",
      archetype: "The Revolutionary Warrior (Hero)"
    }
  },

  Taurus: {
    love: {
      partnerAttractedEn: "Calm, grounded, and aesthetically polished souls who value loyalty over drama.",
      partnerAttractedHi: "Shaant, grounded aur polished log jo relationship mein drama se zyada loyalty ko value dete hain.",
      toxicReasonEn: "You ignore red flags for years because you hate change and want to keep your commitment.",
      toxicReasonHi: "Tum badlav se darrte ho, isliye toxic relationship ko bhi saalo tak kheechte rehte ho ki shayad sab theek ho jaye.",
      partnerVibeEn: "Sensual, highly reliable, creating a comfortable cocoon of luxury and safety.",
      partnerVibeHi: "Behad reliable, comfortable life dene wala, aur sukoon bhara vibe.",
      exWhyEn: "Because you are their peace. After you, they realize the world is full of chaotic, unstable people.",
      exWhyHi: "Kyunki tum unka sukoon the. Tumhare jaane ke baad unhe lagta hai ki baaki duniya kitni unstable aur chaotic hai.",
      redFlagsEn: "Silent treatment, stubborn cold wars, and refusing to communicate your hurt directly.",
      redFlagsHi: "Silent treatment dena, ziddi cold war chalana, aur apne dard ko openly share na karna."
    },
    money: {
      paisaTikegaEn: "Yes, you are a natural accumulator. You build stability block by block, spending only on quality.",
      paisaTikegaHi: "Haan, tum naturally saving aur accumulation mein master ho. Paisa invest karna aur quality par hi spend karna tumhara rule hai.",
      safePlayerEn: "A safe and steady player who builds assets slowly but holds onto them forever.",
      safePlayerHi: "Bilkul solid aur safe player, jo dheere-dheere assets banata hai par lifetime unhe safe rakhta hai.",
      enemiesEn: "Opportunistic family members or friends who expect you to finance their failures.",
      enemiesHi: "Aise log jo tumse financial help toh chahte hain par tumhari savings se secretly jealous rehte hain.",
      borrowEn: "Because you radiate material success and comfort. People think you are a walking bank account.",
      borrowHi: "Kyunki tum comfort aur stability radiate karte ho. Logo ko lagta hai tumse help maangna sabse safe hai."
    },
    career: {
      talentEn: "An unbreakable endurance that outlasts everyone else in the room during a long crisis.",
      talentHi: "Aisa zabardast sabar aur endurance jo bade se bade career crisis mein bhi sabse aakhir tak tika rehta hai.",
      respectFieldEn: "Real estate wealth, luxury brand design, financial consulting, or asset management.",
      respectFieldHi: "Real estate wealth, luxury brands, banking/finance, ya creative product design.",
      famePotentialEn: "Steady. You build a lasting name through consistent excellence rather than flash-in-the-pan viral trends.",
      famePotentialHi: "Dheere par bohot solid. Tum temporary viral trends se nahi, balki apne work ki quality se ek bada naam banate ho."
    },
    darkPsych: {
      secretJealousEn: "They are jealous of your quiet luxury and the fact that you stay calm and stable while their lives are chaotic.",
      secretJealousHi: "Log tumhare quiet luxury vibe aur stable mental health se jalte hain, jabki unki khud ki life bikhri padi hoti hai.",
      darkSideEn: "Possessiveness that can turn toxic. You treat the people you love as assets you own, suffocating them.",
      darkSideHi: "Extreme possessiveness. Jisse tum pyar karte ho unhe assets ki tarah treat karne lagte ho, jo partner ka dum ghot sakta hai.",
      whoUsesYouEn: "People-pleasing friends who exploit your loyalty, knowing you hate throwing people away.",
      whoUsesYouHi: "Aise lazy friends jo tumhari loyalty ka fayda uthate hain, kyunki woh jaante hain tum dosti todne se darrte ho."
    },
    palmistry: {
      turningPointEn: "A massive wealth activation age between 29-32 where your investments start paying monumental rewards.",
      turningPointHi: "29 se 32 saal ke beech ek bada wealth turning point, jaha tumhare investments aur savings exponential growth denge."
    },
    matches: {
      celebrityMale: "Varun Dhawan", celebrityFemale: "Anushka Sharma",
      cricketer: "Rohit Sharma",
      anime: "Zoro (One Piece)",
      archetype: "The Silent Builder (Mastermind)"
    }
  },

  Gemini: {
    love: {
      partnerAttractedEn: "Witty, intellectually sharp, and highly conversational minds who keep you guessing.",
      partnerAttractedHi: "Witty aur smart log jo tumhare sath ghanto baatein kar sakein aur hamesha surprise karte rahein.",
      toxicReasonEn: "You get bored fast and confuse chaotic, dramatic lovers with 'excitement'.",
      toxicReasonHi: "Tum bohot jaldi bore ho jaate ho, isliye toxicity aur drama ko exciting samajh kar us rishte mein fas jaate ho.",
      partnerVibeEn: "Playful, electric, full of laughter, and constantly changing colors.",
      partnerVibeHi: "Behad playful, electric, mazaakiya, aur hamesha dynamic rehne wala vibe.",
      exWhyEn: "Your conversations. Nobody else can stimulate their mind, make them laugh, and understand their duality like you did.",
      exWhyHi: "Tumhari chat-patee baatein! Tumhare baad unhe aisa koi nahi milta jo unke dimaag ko stimulate kar sake aur hasa sake.",
      redFlagsEn: "Double-minded decisions, flirting with boundaries, and leaving when talks get emotional.",
      redFlagsHi: "Indecisiveness, boundary cross karna, aur jab baatein emotional ho toh waha se bhaag khade hona."
    },
    money: {
      paisaTikegaEn: "Hardly. You earn through smart ideas but lose it to impulsive online shopping and trendy gadgets.",
      paisaTikegaHi: "Mushkil hai! Tum smart ideas se kama toh lete ho par fancy gadgets aur impulse shopping mein uda dete ho.",
      safePlayerEn: "A high-frequency risk taker who bets on fast schemes, trends, and new ideas.",
      safePlayerHi: "Fast risk-taker! Jo naye trends, ideas, aur fast returns par risk lena pasand karta hai.",
      enemiesEn: "Fake friends who gossip behind your back while utilizing your connections and funds.",
      enemiesHi: "Aise doghle dost jo tumse connections aur paisa lene ke liye mithi baatein karte hain aur peeth peeche burai.",
      borrowEn: "Because you are generous and friendly. People find it easy to sweet-talk you out of your savings.",
      borrowHi: "Kyunki tum bohot friendly aur approachable ho. Log mithi-mithi baatein karke tumse paise nikalwa lete hain."
    },
    career: {
      talentEn: "The superpower to sell any idea, product, or vision to literally anyone within minutes.",
      talentHi: "Kisi bhi product, idea, ya vision ko anjaan logo ko bhi 5 minute mein bech dene ka kamaal ka talent.",
      respectFieldEn: "Content creation, digital marketing, PR branding, tech innovation, or dynamic sales.",
      respectFieldHi: "Content creation, media branding, tech platforms, PR, ya fast growth businesses.",
      famePotentialEn: "Viral potential. Your mind catches cultural trends instantly, making you highly visible in public.",
      famePotentialHi: "Viral potential! Tumhare paas internet trends pakadne ki asimit power hai, public image bohot fast banti hai."
    },
    darkPsych: {
      secretJealousEn: "They are jealous of your popularity, your wit, and how easily you make friends and capture attention.",
      secretJealousHi: "Log tumhare wide social circle, witty nature aur logon se asani se ghul-mil jaane ki quality se jalte hain.",
      darkSideEn: "Using your words to manipulate reality. You can spin lies so beautifully that even you start believing them.",
      darkSideHi: "Baaton se sachai ko modh dena. Tum itna khoobsurat jhooth bol sakte ho ki samne wala asani se hypnotize ho jaye.",
      whoUsesYouEn: "Superficial charmers who use your dynamic networks and social connections to build their own career.",
      whoUsesYouHi: "Aise matlabi log jo tumhari dynamic networks aur connections ka use karke khud aage nikalna chahte hain."
    },
    palmistry: {
      turningPointEn: "A massive career breakthrough between ages 25-28 through a creative project or digital venture.",
      turningPointHi: "25 se 28 saal ke beech ek bada career turning point, jaha koi creative project ya startup tumhari fate badlega."
    },
    matches: {
      celebrityMale: "Karan Johar", celebrityFemale: "Sonam Kapoor",
      cricketer: "Hardik Pandya",
      anime: "Killua (Hunter x Hunter)",
      archetype: "The Electric Messenger (Trickster)"
    }
  },

  Cancer: {
    love: {
      partnerAttractedEn: "Deeply sensitive, emotionally mature souls who need a safe harbor to open up.",
      partnerAttractedHi: "Sensible aur emotionally mature log, jo ek safe aur loving support system chahte hain.",
      toxicReasonEn: "You try to play the mother/healer role, staying with broken people hoping you can fix their trauma.",
      toxicReasonHi: "Tum toote huye logo ko heal karne ke chakkar mein unke trauma ko apna bana lete ho aur toxic rishte mein fass jaate ho.",
      partnerVibeEn: "Warm, protective, intensely caring, making the relationship feel like a cozy home.",
      partnerVibeHi: "Behad warm, domestic comfort dene wala, aur partner ko bilkul bachon ki tarah pamper karne wala vibe.",
      exWhyEn: "Because they will never find that maternal, pure, soul-level warmth anywhere else. You were their home.",
      exWhyHi: "Kyunki tumhare jaisa unconditional care aur soul-level warmth unhe poori duniya mein kahi nahi milega. Tum unka ghar the.",
      redFlagsEn: "Passive-aggressive silent treatments, manipulation through guilt, and holding onto past mistakes.",
      redFlagsHi: "Passive-aggressive gussa dikhana, guilt-trip karwana, aur partner ki purani galtiyon ko kabhi na bhoolna."
    },
    money: {
      paisaTikegaEn: "Yes, you save out of a deep fear of instability. You always have hidden savings for rainy days.",
      paisaTikegaHi: "Haan, tum insecurity ke darr se humesha extra savings rakhte ho. Hidden bank accounts aur deposits tumhari aadat hain.",
      safePlayerEn: "A highly cautious player who prefers safe, traditional savings over risky financial bets.",
      safePlayerHi: "Behad cautious player! Risk lene se zyada traditional investments (gold, FD, property) par trust karte ho.",
      enemiesEn: "Manipulative dependents or partners who guilt-trip you into spending your security funds on them.",
      enemiesHi: "Aise family members ya friends jo emotional card khelkar tumhari security funds ko apne upar kharch karwa lete hain.",
      borrowEn: "Because you are soft-hearted. People know that if they cry in front of you, you won't say no.",
      borrowHi: "Kyunki tumhara dil bohot narm hai. Log jaante hain ki agar woh tumhare samne royenge, toh tum mana nahi kar paoge."
    },
    career: {
      talentEn: "An unmatched emotional intelligence that reads the unspoken atmosphere of any meeting room.",
      talentHi: "Aisa gehra EQ (emotional quotient) jo client ya boss ke dimaag aur mood ko bina bole read kar leta hai.",
      respectFieldEn: "Psychological counseling, human resources, organic lifestyle businesses, or creative writing.",
      respectFieldHi: "Psychological counseling, human resources, hospitality, ya creative lifestyle businesses.",
      famePotentialEn: "Deep connection. You build an audience that loves you like family, creating a fiercely loyal community.",
      famePotentialHi: "Gehra par silent. Log tumse family ki tarah pyar karte hain, tumhara presence public mein comfort deta hai."
    },
    darkPsych: {
      secretJealousEn: "They are jealous of your pure heart, your deep intuition, and how everyone naturally seeks comfort in you.",
      secretJealousHi: "Log tumhare pure heart aur intuition se jalte hain, aur isse ki sab tumhare paas comfortable feel karte hain.",
      darkSideEn: "Using emotional guilt as a weapon. You can make people feel like monsters for simply exercising their boundaries.",
      darkSideHi: "Emotional guilt ko weapon banana. Tum doosro ko unke normal boundaries par bhi aisi guilt de sakte ho ki unhe sharm aaye.",
      whoUsesYouEn: "Narcissistic takers who absorb your warm, healing maternal energy and give nothing but empty promises in return.",
      whoUsesYouHi: "Narcissistic log jo tumhari positive aur warm energy ko absorb karke badle mein sirf jhoothe promises dete hain."
    },
    palmistry: {
      turningPointEn: "A significant family transition or property acquisition between ages 26-28 that grounds your life path.",
      turningPointHi: "26 se 28 saal ke beech koi bada family event ya real estate gain, jo tumhari life ko stable kar dega."
    },
    matches: {
      celebrityMale: "Arjun Kapoor", celebrityFemale: "Katrina Kaif",
      cricketer: "MS Dhoni",
      anime: "Deku (My Hero Academia)",
      archetype: "The Soul Nurturer (Protector)"
    }
  },

  Leo: {
    love: {
      partnerAttractedEn: "Admiring, expressive, and highly loyal souls who treat you like the center of the universe.",
      partnerAttractedHi: "Tareef karne wale, loyalty dene wale aur tumhe apni life ka centre of attraction banane wale log.",
      toxicReasonEn: "You fall for grand validation and flattery, ignoring toxic behaviors as long as they fuel your ego.",
      toxicReasonHi: "Tum jhoothi tareefon ke chakkar mein aa jaate ho, aur ego boost ke badle toxic qualities ko ignore kar dete ho.",
      partnerVibeEn: "Cinematic, grand, intensely passionate, and fiercely possessive in public.",
      partnerVibeHi: "Bilkul filmy, grand, passionate, aur doosro ke samne proud feel karane wala vibe.",
      exWhyEn: "Because your radiant warmth is like sun. After you, their lives feel cold, grey, and completely average.",
      exWhyHi: "Kyunki tumhare andar ki solar energy unhe zinda rakhti thi. Tumhare baad unki life cold aur boring ho jaati hai.",
      redFlagsEn: "Arrogance, turning every argument into a dramatic theatrical performance, and refusing to say sorry.",
      redFlagsHi: "Ghamand dikhana, choti baat ka bada drama banana, aur apni galti par sorry bolne se katrana."
    },
    money: {
      paisaTikegaEn: "No. You love the premium lifestyle. You spend on luxury brands, fine dining, and grand gifts to show your big heart.",
      paisaTikegaHi: "Nahi! Tum premium lifestyle aur luxury brands par open-heartedly spend karte ho doosro ko impress karne ke liye.",
      safePlayerEn: "A high-stakes risk taker who bets on highly visible opportunities to build an empire.",
      safePlayerHi: "Bade risk-taker! Jo bada dikhta hai, waha bada risk lekar empire khada karna tumhara shouk hai.",
      enemiesEn: "Jealous competitors or smooth talkers who borrow money to fuel their luxury lifestyle under your name.",
      enemiesHi: "Aise smart log jo tumhare bade dil ka use karke tumse premium treatments ya paise lete hain aur secretly jalte hain.",
      borrowEn: "Because you act like a king/queen. People assume you have a money tree in your backyard.",
      borrowHi: "Kyunki tumhara style bilkul royal hota hai. Logon ko lagta hai tumhare paas hamesha paisa rehta hai."
    },
    career: {
      talentEn: "Inspiring an entire room to execute your grand vision through pure, infectious charisma.",
      talentHi: "Apni infectious positivity aur charisma se ek poori team ko bade goals achieve karne ke liye motivate kar dena.",
      respectFieldEn: "Brand building, creative direction, show business, high-level corporate management, or entertainment.",
      respectFieldHi: "Brand building, creative direction, modeling/entertainment, corporate management, ya startup funding.",
      famePotentialEn: "Exceptional. The spotlight naturally finds you, making you a memorable name in your industry.",
      famePotentialHi: "Outstanding! Spotlight naturally tumpar hi aati hai, tum industry mein apna ek alag trend set karte ho."
    },
    darkPsych: {
      secretJealousEn: "They are jealous of your natural star aura and how easily you capture the spotlight without even trying.",
      secretJealousHi: "Log tumhare star aura se jalte hain, ki kaise tum bina kisi effort ke pure room ke centre of attraction ban jaate ho.",
      darkSideEn: "Extreme vanity. You can block out or ignore people completely if they fail to validate or appreciate your presence.",
      darkSideHi: "Extreme vanity (apne aap se behad pyaar) — agar koi tumhari respect na kare, toh tum unke existence ko hi block kar dete ho.",
      whoUsesYouEn: "Insecure sycophants who feed your ego with fake compliments to climb up using your social leverage.",
      whoUsesYouHi: "Aise insecure log jo tumhari jhoothi chamchagiri karte hain taaki tumhare connections ka use karke aage badh sakein."
    },
    palmistry: {
      turningPointEn: "A monumental public breakthrough or brand launch between ages 28-32 that defines your legacy.",
      turningPointHi: "28 se 32 saal ke beech ek bada fame turning point, jaha tumhara koi brand ya status monumentally high hoga."
    },
    matches: {
      celebrityMale: "Saif Ali Khan", celebrityFemale: "Kareena Kapoor",
      cricketer: "KL Rahul",
      anime: "All Might (My Hero Academia)",
      archetype: "The Radiant Sovereign (Mastermind)"
    }
  },

  Virgo: {
    love: {
      partnerAttractedEn: "Intellectually solid, organized, and reliable minds who appreciate mental clarity over loud drama.",
      partnerAttractedHi: "Smart, organized aur solid log, jo daily life mein stability aur clear conversation pasand karte hain.",
      toxicReasonEn: "You treat toxic partners as 'rehabilitation projects', thinking you can repair their broken life habits.",
      toxicReasonHi: "Tum toote huye logo ko ek 'project' ki tarah treat karte ho aur sochte ho ki tum unki life ko structure dekar theek kar doge.",
      partnerVibeEn: "Meticulous, deeply devoted, showcasing love through countless invisible acts of helper service.",
      partnerVibeHi: "Behad devoted, sensible, aur partner ki life ko smooth aur worry-free banane wala vibe.",
      exWhyEn: "Because your organization and care were irreplaceable. After you, their daily lives fall into absolute chaos.",
      exWhyHi: "Kyunki tumhare bina unki life ka structure collapse ho jata hai. Tumhare baad unhe realize hota hai tum kitne organized the.",
      redFlagsEn: "Chronic micromanagement, constant critical complaining, and overanalyzing every text message for hidden meanings.",
      redFlagsHi: "Har baat par tokna (micromanagement), over-critical gussa dikhana, aur text messages ko over-analyze karna."
    },
    money: {
      paisaTikegaEn: "Absolutely. You manage every rupee with robotic precision, saving and investing logically.",
      paisaTikegaHi: "Haan, bilkul! Tum apna budget kisi computer program ki tarah manage karte ho, फालतू kharch tumhari dictionary mein nahi hai.",
      safePlayerEn: "A safe, analytical player who calculates returns to the decimal point before investing.",
      safePlayerHi: "Behad safe aur math-oriented player, jo investment se pehle uske risk ko thoroughly analyze karta hai.",
      enemiesEn: "Irresponsible coworkers or relatives who play on your sense of duty to extract cash from you.",
      enemiesHi: "Aise irresponsible relatives ya friends jo tumhari duty aur helping nature ka use karke tumse paise nikalwa lete hain.",
      borrowEn: "Because you are stable and responsible. People know you won't lose your temper while discussing money.",
      borrowHi: "Kyunki tum balanced aur secure ho. Log jaante hain tumse udhaar lena sabse clean aur safe business hoga."
    },
    career: {
      talentEn: "An unshakeable focus that spots invisible flaws in systems or strategies that everyone else missed.",
      talentHi: "Aisa focus jo system ke andar ke un bugs ya flaws ko dhoond leta hai jo kisi aur ko dikh hi nahi rahe the.",
      respectFieldEn: "System auditing, medical analytics, precise coding, corporate law, or high-level writing projects.",
      respectFieldHi: "Precise coding/tech, data analytics, corporate auditing, medical systems, ya core writing.",
      famePotentialEn: "Steady authority. You get recognized as the absolute ultimate expert in your specific niche.",
      famePotentialHi: "Mastery fame. Log tumhari field mein tumse badi authority kisi aur ko nahi samajhte, respect solid milti hai."
    },
    darkPsych: {
      secretJealousEn: "They are jealous of your intelligence, your flawless memory, and how you manage to have your life together.",
      secretJealousHi: "Log tumhari mental sharp memory, flawless execution aur unki comparison mein balanced life se jalte hain.",
      darkSideEn: "Cold emotional detachedness. When hurt, you can dissect a person's flaws logically to destroy their confidence completely.",
      darkSideHi: "Ekdam thandi chalak-dimaag. Agar kisi ne bura kiya, toh tum uski flaws ko point out karke uski self-respect to tod sakte ho.",
      whoUsesYouEn: "Lazy, unorganized partners or colleagues who shift all their hard mental work onto your responsible shoulders.",
      whoUsesYouHi: "Aise lazy aur careless log jo apna saara mental stress aur responsibility tumhare kandhe par daal dete hain."
    },
    palmistry: {
      turningPointEn: "A major career stabilization and high-level recognition window between ages 30-33 through systems mastery.",
      turningPointHi: "30 se 33 saal ke beech ek bada career stabilization point, jaha tumhari mastery ko industry standard banaya jayega."
    },
    matches: {
      celebrityMale: "Akshay Kumar", celebrityFemale: "Kareena Kapoor",
      cricketer: "Shubman Gill",
      anime: "Levi Ackerman (Attack on Titan)",
      archetype: "The Methodical Architect (Mastermind)"
    }
  },

  Libra: {
    love: {
      partnerAttractedEn: "Charming, artistic, socially popular, and visually stunning partners who carry a balanced aesthetic aura.",
      partnerAttractedHi: "Charming, social, aur visually stylish log, jo aesthetic aur visual harmony ko bohot value dete hain.",
      toxicReasonEn: "You compromise on your own peace, tolerating toxic behavior just to avoid the pain of conflict and arguments.",
      toxicReasonHi: "Tum arguments aur jhagdo se darrte ho, isliye shanti banaye rakhne ke liye partner ke toxic behavior ko bhi sahte rehte ho.",
      partnerVibeEn: "Highly romantic, diplomatic, visually perfect, making the love story feel like a designer movie.",
      partnerVibeHi: "Ekdam classy aur romantic, jo relationship ko bilkul aesthetically beautiful banaye rakhta hai.",
      exWhyEn: "Because you were their balance and grace. After you, their lives feel unrefined, loud, and full of friction.",
      exWhyHi: "Kyunki tum unki life ki grace aur smooth balance the. Tumhare jaane ke baad unhe har jagah friction aur shor dikhta hai.",
      redFlagsEn: "Indecisiveness, sweet-talking out of hard decisions, and pretending everything is fine while suffering inside.",
      redFlagsHi: "Faisle na le paana, mithi baaton se serious topics ko talna, aur andar hi andar jalte huye bhi smile karna."
    },
    money: {
      paisaTikegaEn: "Moderate. You spend extensively on beautiful clothes, premium fragrances, and aesthetic interiors.",
      paisaTikegaHi: "Thoda mushkil! Tumhe sundar cheezein, luxury clothes, perfumes aur home decor pasand hai — isliye balance up-down rehta hai.",
      safePlayerEn: "A balanced player who prefers joint ventures, stable partnerships, and low-conflict asset classes.",
      safePlayerHi: "Balanced player! Tum akele bada risk lene se zyada partnerships aur low-conflict assets par trust karte ho.",
      enemiesEn: "Extravagant friends or partners who manipulate your desire to stay elegant to make you pay for luxury trips.",
      enemiesHi: "Aise show-off wale dost jo tumhare sophisticated nature ka use karke tumse luxury trips aur parties pay karwate hain.",
      borrowEn: "Because you project elegance. People think you are wealthy because your taste is extremely sophisticated.",
      borrowHi: "Kyunki tumhare rehne ka tareeqa bohot rich hota hai. Log tumhari class ko dekh kar paise mangne chale aate hain."
    },
    career: {
      talentEn: "Pure diplomacy. The gift to make hostile enemies sit at the same table and agree on a deal.",
      talentHi: "Zabardast diplomacy! Aise do logo ko ek sath bitha kar deal sign karwa lena jo ek doosre ki shakal nahi dekhna chahte.",
      respectFieldEn: "Design direction, high-profile law, public branding, artistic curation, or luxury hospitality.",
      respectFieldHi: "Design direction, creative styling, legal consulting, corporate branding, ya fashion curation.",
      famePotentialEn: "Elegant visibility. You get known for your immaculate style, taste, and social popularity in refined circles.",
      famePotentialHi: "Classy fame! Tumhe apne outstanding style, classy behavior, aur elite circles mein social popularity milti hai."
    },
    darkPsych: {
      secretJealousEn: "They are jealous of your natural charm, your styling sense, and how easily people get attracted to you.",
      secretJealousHi: "Log tumhari natural attraction power, unmatched style sense aur logon ko asani se win karne ki quality se jalte hain.",
      darkSideEn: "Passive manipulation. You can act sweet and fragile to get others to do your hard work and fights for you.",
      darkSideHi: "Passive manipulation (mitha zehar) — tum bohot sweet aur helpless pretend karke doosro se apna mushkil kaam nikalwa sakte ho.",
      whoUsesYouEn: "Opportunistic social climbers who use your elegance and contacts to access higher elite networks.",
      whoUsesYouHi: "Aise matlabi climbers jo tumhari elite social connections ka use karke higher networks mein ghusna chahte hain."
    },
    palmistry: {
      turningPointEn: "A major aesthetic or creative breakthrough between ages 27-29 that elevates your lifestyle permanently.",
      turningPointHi: "27 se 29 saal ke beech ek bada turning point, jaha koi artistic venture tumhari life-style ko permanent high level dega."
    },
    matches: {
      celebrityMale: "Ranbir Kapoor", celebrityFemale: "Deepika Padukone",
      cricketer: "Hardik Pandya",
      anime: "Naruto Uzumaki (Naruto)",
      archetype: "The Elegant Diplomat (Mastermind)"
    }
  },

  Scorpio: {
    love: {
      partnerAttractedEn: "Mysterious, intense, emotionally deep, and highly protective souls who crave soul-level connection.",
      partnerAttractedHi: "Mysterious aur deep log, jo normal relationship se zyada ek all-consuming roohani connection chahte hain.",
      toxicReasonEn: "You mistake emotional intensity and jealousy for 'real love', staying in chaotic traps for depth.",
      toxicReasonHi: "Tum obsessive gusse aur jealousy ko 'sacha pyar' samajh lete ho, aur intensity ke chakkar mein toxic traps mein fass jaate ho.",
      partnerVibeEn: "Intense, magnetic, fiercely loyal, making the relationship feel like a cinematic thriller.",
      partnerVibeHi: "Fiercely loyal, magnetic, aur highly emotional vibe, jo relationship ko ek cinematic movie bana deta hai.",
      exWhyEn: "Because you merged with their soul. No one else can read their dark thoughts and touch their depth like you did.",
      exWhyHi: "Kyunki tumne unki rooh ko touch kiya tha. Tumhare jaane ke baad unhe lagta hai ki baaki log kitne superficial aur hollow hain.",
      redFlagsEn: "Absolute secrecy, toxic possessiveness, holding grudges, and testing partner's loyalty endlessly.",
      redFlagsHi: "Behad secretive rehna, ziddi possessiveness, purani dushmani na bhoolna, aur partner ka loyalty test lete rehna."
    },
    money: {
      paisaTikegaEn: "Yes, you save in secret blocks. You build financial power quietly from the shadows to ensure control.",
      paisaTikegaHi: "Haan, tumhare paas hidden assets hote hain. Tum chupchap background mein wealth build karte ho power aur control ke liye.",
      safePlayerEn: "A highly strategic risk taker who invests in high-risk high-reward assets but only in complete secrecy.",
      safePlayerHi: "Behad chalak risk-taker! Jo calculated par bade risks leta hai aur un investments ko hamesha secret rakhta hai.",
      enemiesEn: "Bitter rivals or ex-partners who try to attack your financial security out of pure revenge.",
      enemiesHi: "Aise purane rivals ya ex-partners jo tumse badla lene ke liye tumhari financial stability ko nuksaan pahunchana chahte hain.",
      borrowEn: "Because you look powerful and unshakeable. People assume you have hidden gold mines.",
      borrowHi: "Kyunki tumhara control aur aura bohot solid hota hai. Logon ko lagta hai tumse panga ya paisa lena aasan hai."
    },
    career: {
      talentEn: "An extraordinary psychic-like research ability to uncover deep secrets or master highly complex systems.",
      talentHi: "Kisi bhi chhupe huye sach ko nikal lena, aur complex se complex system ya strategy ko master kar lene ka talent.",
      respectFieldEn: "Strategic analysis, crisis management, tax investigation, psychology therapy, or cyber security.",
      respectFieldHi: "Crisis management, strategic business consulting, psychology research, cyber security, ya intelligence agencies.",
      famePotentialEn: "Magnetic aura. You build a highly dedicated, almost cult-like following that respects your deep authority.",
      famePotentialHi: "Magnetic power! Log tumhare work se darrte bhi hain aur respect bhi karte hain, tumhara name industry mein bada hota hai."
    },
    darkPsych: {
      secretJealousEn: "They are jealous of your magnetic power, your mystery, and how you command respect without saying a word.",
      secretJealousHi: "Log tumhare magnet aura aur khamosh shakti se jalte hain, ki kaise tum bina bole bhi respect command karte ho.",
      darkSideEn: "A complete cold war mechanism. If crossed, you can quietly destroy a person's reputation while looking innocent.",
      darkSideHi: "Ekdam silent destroy mode. Agar kisi ne bura kiya, toh tum bina shor machaye background mein unka reputation khatam kar sakte ho.",
      whoUsesYouEn: "Parasitic attention-seekers who feed on your deep intensity and magnetic protective shield.",
      whoUsesYouHi: "Aise parasitic log jo tumhari gehrai aur protective energy ko absorb karte hain aur badle mein nafrat dete hain."
    },
    palmistry: {
      turningPointEn: "A major transformation or spiritual awakening between ages 29-31 that alters your entire life purpose.",
      turningPointHi: "29 se 31 saal ke beech ek bada life rebirth, jo tumhare purane self ko khatam karke naya destiny path khol dega."
    },
    matches: {
      celebrityMale: "Shah Rukh Khan", celebrityFemale: "Aishwarya Rai",
      cricketer: "Virat Kohli",
      anime: "Sasuke Uchiha (Naruto)",
      archetype: "The Phoenix Mastermind (Destroyer)"
    }
  },

  Sagittarius: {
    love: {
      partnerAttractedEn: "Adventurous, philosophical, highly independent minds who are travel-buddies and lovers in one.",
      partnerAttractedHi: "Azaad, adventure-loving aur philosophical log, jo travel partner aur lover dono ban kar rahein.",
      toxicReasonEn: "You confuse short-term chemical sparks and adventure with deep love, escaping when talks get heavy.",
      toxicReasonHi: "Tum temporary fun ko sacha pyar samajh lete ho, aur jaise hi relationship serious hoti hai, tum bhaag jaate ho.",
      partnerVibeEn: "Electric, highly optimistic, full of fun, travel, and constant growth.",
      partnerVibeHi: "Behad positive, full of humor, aur life ko ek adventure ki tarah jeene wala vibe.",
      exWhyEn: "Because you were their adventure. After you, their lives feel like a repetitive, boring cage.",
      exWhyHi: "Kyunki tum unki life ki sabse badi adventure the. Tumhare jaane ke baad unki life ek boring jail lagti hai.",
      redFlagsEn: "Blunt words that pierce the heart, running away from emotional responsibility, and chronic restlessness.",
      redFlagsHi: "Bina soche aisi kadwi baat bolna jo seedhe dil par lage, aur serious situations se bhaag khade hona."
    },
    money: {
      paisaTikegaEn: "Rarely. You believe 'paisa toh haath ki mail hai' and spend on trips, experiences, and learning.",
      paisaTikegaHi: "Bilkul nahi! Tum 'paisa toh haath ki mail hai' par believe karte ho aur trips, education aur fun par dil kholkar udate ho.",
      safePlayerEn: "A wild risk taker who bets on overseas projects, bold ideas, and anything that promises massive growth.",
      safePlayerHi: "Ekdum wild player! Naye startup ideas, overseas ventures aur bold growth areas par aakhein band karke risk lete ho.",
      enemiesEn: "Jealous friends who borrow your travel funds or take advantage of your extremely generous nature.",
      enemiesHi: "Aise lazy log jo tumhare bade dil aur positive behavior ka misuse karke tumse paise udate hain.",
      borrowEn: "Because you are highly positive and happy. People assume you are extremely lucky and rich.",
      borrowHi: "Kyunki tum hamesha happy aur chill rehte ho. Logon ko lagta hai tumhara luck outstanding hai aur tum ameer ho."
    },
    career: {
      talentEn: "An infectious optimism that lifts the team's energy during the darkest project failures.",
      talentHi: "Aisi positivity aur energy, jo team ke bilkul toote huye morale ko bhi ek second mein high kar sake.",
      respectFieldEn: "Travel entrepreneurship, philosophical training, import-export business, public relations, or media.",
      respectFieldHi: "Travel business, media and PR, foreign trade, public speaking, coaching, ya international projects.",
      famePotentialEn: "Global visibility. You get known for your original philosophical views and bold style.",
      famePotentialHi: "Global potential! Tumhe apne unique, bold views, aur cool dynamic nature ke liye door-door tak jana jata hai."
    },
    darkPsych: {
      secretJealousEn: "They are jealous of your freedom, your constant good luck, and how easily you bounce back from setbacks.",
      secretJealousHi: "Log tumhari absolute freedom, dynamic luck aur har failure ke baad turant haskar khade ho jaane se jalte hain.",
      darkSideEn: "Emotional detachment. You can switch off your feelings for a close person in a second and move on without looking back.",
      darkSideHi: "Ekdam thanda cut-off. Agar tumhara dhyan hata, toh tum saalo purane rishte ko ek second mein chhod kar bina peeche dekhe aage badh sakte ho.",
      whoUsesYouEn: "Emotional leeches who absorb your highly positive energy while contributing nothing but complaints.",
      whoUsesYouHi: "Aise negative log jo sirf tumhari high postive energy choosne aate hain aur badle mein sirf rona rote hain."
    },
    palmistry: {
      turningPointEn: "A major foreign connection or international breakthrough between ages 27-29 that changes your base.",
      turningPointHi: "27 se 29 saal ke beech ek bada turning point, jaha koi international project ya foreign trip tumhara base shift karegi."
    },
    matches: {
      celebrityMale: "John Abraham", celebrityFemale: "Dia Mirza",
      cricketer: "Jasprit Bumrah",
      anime: "Luffy (One Piece)",
      archetype: "The Free Explorer (Hero)"
    }
  },

  Capricorn: {
    love: {
      partnerAttractedEn: "Mature, ambitious, stable, and highly classy minds who share your desire for legacy.",
      partnerAttractedHi: "Classy, ambitious aur mature log jo status aur stability ko utna hi value dete hain jitna tum.",
      toxicReasonEn: "You stay in cold, empty relationships because you hate public failure and divorce/separation drama.",
      toxicReasonHi: "Tum publicly fail hona ya relationships mein 'separation' drama se darrte ho, isliye saalo tak ek empty rishte ko kheechte rehte ho.",
      partnerVibeEn: "Immaculate, silent provider, creating a powerful block of security and elite status.",
      partnerVibeHi: "Behad stable, silent provider, aur society mein ek powerful status dene wala vibe.",
      exWhyEn: "Because you were their rock. After you, they realize no one else can handle their chaotic life like a mountain.",
      exWhyHi: "Kyunki tum unka solid pillar the. Tumhare jaane ke baad unki life bikhari padi rehti hai aur koi support nahi hota.",
      redFlagsEn: "Treating the partner like an employee, emotional coldness, and choosing work over relationship health.",
      redFlagsHi: "Partner ko aam employee ki tarah treat karna, cold behavior dikhana, aur work ke liye partner ko side-line karna."
    },
    money: {
      paisaTikegaEn: "Robotic savings. You build an empire brick by brick, knowing Saturn rewards your extreme discipline.",
      paisaTikegaHi: "Robotic precision saving! Tum block-by-block wealth build karte ho, investment tumhare dimaag mein 24 ghante chalta hai.",
      safePlayerEn: "A long-term strategic player who only buys solid assets (land, blue-chips) and holds them forever.",
      safePlayerHi: "Long-term master player! Jo sirf solid assets (real estate, long-term bonds) par trust karta hai aur unhe hold rakhta hai.",
      enemiesEn: "Lazy dependents or partners who expect you to pay for their lack of discipline and financial mistakes.",
      enemiesHi: "Aise lazy aur careless relatives/friends jo tumse financial stability chahte hain aur secretly tumhari wealth se jalte hain.",
      borrowEn: "Because you are a natural authority. People know that if they ask you, they are dealing with a solid bank.",
      borrowHi: "Kyunki tumhara style bilkul solid hota hai. Logon ko lagta hai tum har mushkil mein madad karne wale permanent backup ho."
    },
    career: {
      talentEn: "An unbreakable work discipline that can grind 16 hours a day under high pressure without complaining.",
      talentHi: "Aisa work ethic aur discipline jo 16 ghante bina kisi complaint ke pressure ke andar kaam kar sakta hai.",
      respectFieldEn: "Corporate CEO leadership, administrative services, building construction, financial institutions, or law.",
      respectFieldHi: "Corporate CEO posts, administrative services (IAS/IPS), real estate construction, ya top financial sectors.",
      famePotentialEn: "Monumental legacy. You get known globally for the empire or institution you build over decades.",
      famePotentialHi: "Permanent name! Tum temporary fame ke liye nahi, balki ek lasting institutional empire khada karne ke liye jaane jaoge."
    },
    darkPsych: {
      secretJealousEn: "They are jealous of your relentless focus, your high status, and how you silently climb to the top of every mountain.",
      secretJealousHi: "Log tumhare discipline, high status aur chupchap har field mein top par pahunch jaane ki capacity se jalte hain.",
      darkSideEn: "Absolute coldness. If someone crosses your career or respect, you can freeze them out of your life permanently in a second.",
      darkSideHi: "Extreme coldness — agar kisi ne respect ya career ke beech rukawat dali, toh tum unhe humesha ke liye 'freeze' kar doge.",
      whoUsesYouEn: "Incompetent freeloaders who piggyback on your hard work, knowing you'll finish the job perfectly no matter what.",
      whoUsesYouHi: "Incompetent log jo tumhare hard work ke kandhe par baith kar success pana chahte hain, kyunki woh jaante hain tum kaam perfect karoge."
    },
    palmistry: {
      turningPointEn: "A massive status activation and empire expansion age between 32-35 that defines your ultimate legacy.",
      turningPointHi: "32 se 35 saal ke beech ek bada status activation point, jaha tumhare career ka golden phase shuru hoga."
    },
    matches: {
      celebrityMale: "Hrithik Roshan", celebrityFemale: "Deepika Padukone",
      cricketer: "Rahul Dravid",
      anime: "Sasuke Uchiha (Naruto)",
      archetype: "The Mastermind Sovereign (Mastermind)"
    }
  },

  Aquarius: {
    love: {
      partnerAttractedEn: "Unconventional, rebellious, highly intellectual minds who fall in love with concepts and freedom.",
      partnerAttractedHi: "Sabse alag, smart aur progressive log jo concepts aur azaadi se pyar karte hain.",
      toxicReasonEn: "You mistake emotional unavailability and cold, detached partners for 'intellectual independence'.",
      toxicReasonHi: "Tum partner ki emotional unavailability aur unki coldness ko 'intellectual independence' samajh kar toxic loop mein fass jaate ho.",
      partnerVibeEn: "Unconventional, extremely unique, priority on pure friendship, full of progressive learning.",
      partnerVibeHi: "Ekdam unique aur different, jaha dosti sabse badi priority hoti hai aur drama zero.",
      exWhyEn: "Because your mind is an alien. After you, they realize everyone else is highly repetitive, average, and full of daily drama.",
      exWhyHi: "Kyunki tumhara dimaag unique hai. Tumhare jaane ke baad unhe har koi boring, dynamic zero aur drama-centric lagta hai.",
      redFlagsEn: "Intellectualizing your feelings, hiding behind cold theories, and running away when relationship gets deeply emotional.",
      redFlagsHi: "Apne emotions ko logic ke peeche chhupana, cold ho jana, aur jab rishta highly emotional ho toh waha se door bhaagna."
    },
    money: {
      paisaTikegaEn: "Moderate. You earn through highly unique side-hustles or tech platforms but spend on tech gadgets, humanitarian causes.",
      paisaTikegaHi: "Normal! Tum unique ideas aur tech platforms se accha kamaate ho, par advanced tech gadgets aur public welfare par udate ho.",
      safePlayerEn: "A visionary risk taker who bets on emerging tech, future start-ups, crypto, and highly unconventional ideas.",
      safePlayerHi: "Visionary risk-taker! Jo naye tech ideas, crypto, startups aur dynamic future investments par aakhein band karke risk leta hai.",
      enemiesEn: "Fake friends or NGOs who exploit your generous humanitarian nature to extract funding from you.",
      enemiesHi: "Aise matlabi social friends jo tumhari generous social nature aur help karne ki aadat ka galat use karte hain.",
      borrowEn: "Because you are progressive and open-minded. People assume you don't care about money and will forgive the loan.",
      borrowHi: "Kyunki tum bohot chill aur open-minded ho. Logon ko lagta hai tum paise ke peeche jhagda nahi karoge aur maaf kar doge."
    },
    career: {
      talentEn: "Spotting future societal trends and building tech or social systems 5 years before anyone else thinks of them.",
      talentHi: "Aane wale 5 saal ke trends ko aaj hi sense karke koi aisi unique technology ya brand khada kar lena jo bilkul new ho.",
      respectFieldEn: "Technology innovation, AI development, global social welfare, creative design, or future flight systems.",
      respectFieldHi: "AI technology, tech startups, space flight systems, global branding, ya progressive social training.",
      famePotentialEn: "Unconventional authority. You get highly respected globally as a visionary thinker who changed the old system.",
      famePotentialHi: "Visionary status! Tumhe system ko todne aur ek naya rasta dikhane wale kraantikari leader ke roop mein jaana jayega."
    },
    darkPsych: {
      secretJealousEn: "They are jealous of your intelligence, your absolute independence, and how you don't care about fitting in.",
      secretJealousHi: "Log tumhari absolute independence aur logic se jalte hain, aur isse ki tumhe logo ke 'fit-in' hone se koi farq nahi padta.",
      darkSideEn: "Absolute emotional detachment. You can freeze a person out of your mental reality completely while they are standing in front of you.",
      darkSideHi: "Absolute mental detachment — tum kisi insaan ko apne dimaag se aisa delete kar sakte ho ki samne khada rehne par bhi woh invisible lage.",
      whoUsesYouEn: "Social parasites who absorb your visionary ideas and networks to launch their own career while giving you no credit.",
      whoUsesYouHi: "Aise chatur parasites jo tumhare unique ideas aur strategy ko copy karke khud ameer ban jaate hain aur credit gayab."
    },
    palmistry: {
      turningPointEn: "A massive visionary shift or tech breakthrough between ages 27-30 that establishes your global name.",
      turningPointHi: "27 se 30 saal ke beech ek bada tech or creative turning point, jaha tumhara koi original idea globally establish hoga."
    },
    matches: {
      celebrityMale: "Abhishek Bachchan", celebrityFemale: "Preity Zinta",
      cricketer: "MS Dhoni",
      anime: "L (Death Note)",
      archetype: "The Rebel Visionary (Mastermind)"
    }
  },

  Pisces: {
    love: {
      partnerAttractedEn: "Poetic, artistic, deeply empathetic, and highly protective souls who crave deep soul merging.",
      partnerAttractedHi: "Shayrana, artistic aur deeply sensitive log, jo relationship mein roohani level par merge hona chahte hain.",
      toxicReasonEn: "You see the world through rose-colored glasses, making excuses for toxic behaviors and ignoring red flags out of pure hope.",
      toxicReasonHi: "Tum reality se bhaagte ho, aur partner ki toxic habits ko 'woh sudhar jayega' bol kar protect karte rehte ho.",
      partnerVibeEn: "Unconditional, deeply spiritual, poetic, making the love story feel like a mystical saga.",
      partnerVibeHi: "Behad unconditional, pure, aur roohani vibe, jo rishte ko ek divine experience bana deta hai.",
      exWhyEn: "Because your empathy was a drug. After you, they realize everyone else is dry, self-centered, and lacks soul-level depth.",
      exWhyHi: "Kyunki tumhare jaisa asimit empathy aur emotional drug unhe kahi nahi milega. Tumhare baad sab dry aur mechanical lagte hain.",
      redFlagsEn: "Victimhood drama, escaping from hard reality into daydreaming, and absolute emotional dependency.",
      redFlagsHi: "Apne aap ko humesha victim dikhana, serious situations mein daydreaming karna, aur partner par completely depend ho jana."
    },
    money: {
      paisaTikegaEn: "Hardly. You spend on artistic pursuits, helping broken friends, and spiritual books rather than savings.",
      paisaTikegaHi: "Kaafi mushkil! Tum paise ko save karne se zyada art, spiritual books, ya kisi dost ki madad par spend kar dete ho.",
      safePlayerEn: "A spiritual risk taker who bets on creative assets, art projects, and anything that feeds the soul rather than plain numbers.",
      safePlayerHi: "Spiritual risk-taker! Tum boring figures ki jagah aisi cheezon par risk lete ho jo tumhari soul ko sukoon deti hain (art, media).",
      enemiesEn: "Emotional leeches or fake friends who cry in front of you to steal your savings under the name of emergency.",
      enemiesHi: "Aise emotional thag jo tumhare samne apni jhoothi kahani sunakar tumse emergency ke naam par paise thag lete hain.",
      borrowEn: "Because you are soft and highly compassionate. People know you will feel guilty if you deny their request.",
      borrowHi: "Kyunki tumhara heart bohot soft hai. Log jaante hain agar tumne mana kiya, toh tum khud guilt mein fass jaoge."
    },
    career: {
      talentEn: "An extraordinary imagination that creates magnificent art, music, or stories from pure pain.",
      talentHi: "Aisi asimit imagination, jo apne gehre se gehre dard aur emotions ko outstanding art, music ya story mein badal sake.",
      respectFieldEn: "Music production, psychological healing, artistic curation, dynamic movie direction, or spiritual leadership.",
      respectFieldHi: "Music production, movie direction, psychological healing, creative writing, ya spiritual teaching.",
      famePotentialEn: "Emotional cult. You get highly loved by people who feel saved, healed, or inspired by your original creation.",
      famePotentialHi: "Ruhaani name! Log tumhare work se spiritually connect hote hain, tumhara name unke dil mein bas jata hai."
    },
    darkPsych: {
      secretJealousEn: "They are jealous of your creative genius, your endless empathy, and how easily you tap into universal wisdom.",
      secretJealousHi: "Log tumhari unmatched creative power, gehre sukoon, aur directly divine intuition se connect karne se jalte hain.",
      darkSideEn: "Spiritual escapism and denial. You can spin dynamic illusions in your head, completely ignoring real-world facts and damage.",
      darkSideHi: "Absolute escape mode — tum apne dimaag mein aisi jhoothi fantasy bana sakte ho jo aam duniya ke har fact ko ignore kar de.",
      whoUsesYouEn: "Narcissistic energy vampires who absorb your infinite healing light while leaving you completely empty and depressed.",
      whoUsesYouHi: "Aise energy vampires jo tumhara pure light aur comfort choose kar chale jaate hain aur tumhe dry chhod dete hain."
    },
    palmistry: {
      turningPointEn: "A monumental creative release or spiritual transformation between ages 25-28 that changes your global audience.",
      turningPointHi: "25 se 28 saal ke beech ek bada turning point, jaha koi creative creation tumhe hazaro logo se directly connect karega."
    },
    matches: {
      celebrityMale: "Aamir Khan", celebrityFemale: "Alia Bhatt",
      cricketer: "MS Dhoni",
      anime: "Shinji Ikari (Evangelion)",
      archetype: "The Mystic Dreamer (Destroyer)"
    }
  }
};
