// src/utils/zodiac.js
// ─────────────────────────────────────────────────────────────
// Zodiac detection + full personality + emotional psychology data
// Used by ResultsPage and AnalysisLoader
// ─────────────────────────────────────────────────────────────

export const ZODIAC_DATA = {
  Aries: {
    symbol: '♈', element: 'Fire', planet: 'Mars',
    dates: 'Mar 21 – Apr 19', color: '#FF6B6B', bgGradient: 'linear-gradient(135deg, #FF6B6B22, #FF000011)',
    emoji: '🐏',
    tagline: 'The fearless pioneer who charges ahead.',
    positiveTraits: ['Courageous', 'Determined', 'Passionate', 'Confident', 'Enthusiastic', 'Leader'],
    negativeTraits: ['Impatient', 'Impulsive', 'Aggressive', 'Self-centered', 'Moody'],
    career: 'Entrepreneurship, Military, Sports, Surgery, Politics',
    emotionalProfile: 'Fiery and intense, Aries feels emotions strongly and acts on them quickly. They love deeply but can be reactive.',
    communicationStyle: 'Direct, bold, sometimes blunt. They say what they mean and rarely beat around the bush.',
    relationshipBehavior: 'Passionate partners who pursue what they want. They need excitement and independence in relationships.',
    compatibility: { best: ['Leo', 'Sagittarius', 'Gemini'], challenging: ['Cancer', 'Capricorn'] },
    lucky: { color: 'Red', number: '1, 9', gemstone: 'Diamond', day: 'Tuesday', flower: 'Thistle' },
    radar: { confidence: 90, creativity: 70, logic: 60, empathy: 55, ambition: 95, social: 75 },

    // ── NEW EMOTIONAL FIELDS ──
    misunderstoodBecause: "You react fast and speak before thinking — so people label you aggressive. But the truth is, you just can't stand injustice. You fight for the people you love, even when nobody asks you to.",
    hiddenStrengths: ["Unshakeable courage under pressure", "Ability to restart from zero without self-pity", "Natural leadership that inspires action in others"],
    emotionalWeakness: "You pretend you don't care when someone hurts you. But at 2 AM, you replay every word they said. You carry anger on the outside and pain on the inside — and nobody ever checks on the strong one.",
    rareBadge: { name: "The Fearless Warrior", percentage: "4.1%", description: "You belong to a rare group who would rather burn out than give up. People admire your fire — even when they fear it." },
    careerDestiny: "You're not built for 9-to-5 cubicles. Your destiny lies in leading — whether it's a startup, a team, or a movement. Between ages 27-35, a career breakthrough will define your legacy.",
    moneyAura: { score: 76, insight: "Money comes to you through bold moves, not safe bets. Your biggest financial gains will come from taking a risk everyone else was too scared to take. Watch for a major financial opportunity between 2027-2029." },
    relationshipEnergy: { type: "The Protector", description: "You love hard and fiercely. In relationships, you become a shield for the people you care about. But you struggle to show vulnerability — which sometimes makes your partner feel locked out." },
    familyBehavior: "You're the one everyone calls when there's a crisis. You fix things, you fight for your family, but you never admit when you're the one who needs help. Your parents may not always understand your intensity — but deep down, they know you'd move mountains for them.",
    biggestLifeShift: "after age 28",
    luckyYears: [2026, 2028, 2031],
    palmInsights: ["Your life line suggests immense physical vitality and a long, energetic life", "A strong head line indicates decisive thinking and natural leadership ability", "Your heart line reveals passionate but sometimes turbulent emotional experiences"],
    cosmicWarning: "Between 2026-2027, be careful with impulsive decisions in finances and relationships. Mars retrograde will test your patience — those who rush will lose, those who wait will gain everything.",
    spiritualEnergy: { chakra: "Solar Plexus", auraColor: "Fiery Orange", description: "Your solar plexus chakra is highly activated — giving you immense willpower and drive. But when imbalanced, it creates anger and control issues. Meditation on stillness will unlock your next level." },
    viralStatement: "I don't need everyone to like me. I just need the right people to understand me — and I'll burn the world down for them.",
    destinyMeter: 82,
  },

  Taurus: {
    symbol: '♉', element: 'Earth', planet: 'Venus',
    dates: 'Apr 20 – May 20', color: '#4ECDC4', bgGradient: 'linear-gradient(135deg, #4ECDC422, #2ECC7111)',
    emoji: '🐂',
    tagline: 'The steadfast builder who creates lasting beauty.',
    positiveTraits: ['Reliable', 'Patient', 'Practical', 'Devoted', 'Responsible', 'Artistic'],
    negativeTraits: ['Stubborn', 'Possessive', 'Uncompromising', 'Materialistic', 'Lazy'],
    career: 'Finance, Art, Agriculture, Architecture, Hospitality',
    emotionalProfile: 'Deeply emotional but reserved. Taurus processes feelings slowly and needs security before opening up.',
    communicationStyle: 'Calm, measured, and deliberate. They think before speaking and prefer honest, grounded conversations.',
    relationshipBehavior: 'Loyal and devoted partners who value stability. Once committed, they are in it for the long haul.',
    compatibility: { best: ['Virgo', 'Capricorn', 'Cancer'], challenging: ['Leo', 'Aquarius'] },
    lucky: { color: 'Green', number: '2, 6', gemstone: 'Emerald', day: 'Friday', flower: 'Poppy' },
    radar: { confidence: 65, creativity: 80, logic: 75, empathy: 70, ambition: 70, social: 60 },

    misunderstoodBecause: "You take your time with everything — decisions, feelings, trust. People call you stubborn or slow. But you're not slow. You just refuse to build your life on shaky foundations. You'd rather wait 5 years for the right thing than rush into the wrong one.",
    hiddenStrengths: ["Unmatched patience that outlasts everyone", "Deep artistic sensibility hidden behind a practical exterior", "Emotional stability that anchors everyone around you"],
    emotionalWeakness: "You hold on too long — to people, to memories, to versions of people that no longer exist. Your loyalty becomes your prison. And when you finally let go, it breaks you quietly, in places no one will ever see.",
    rareBadge: { name: "The Silent Anchor", percentage: "2.8%", description: "You are the person who holds everything together. Without you, systems collapse. People don't appreciate you until you're gone." },
    careerDestiny: "Your success isn't flashy — it's monumental. You're destined for wealth-building, real estate, design, or luxury brands. Your career peak comes through patience — what you build between 25-40 will sustain you for life.",
    moneyAura: { score: 84, insight: "You have one of the strongest money auras in the zodiac. Venus blesses you with material abundance — but it comes through persistence, not luck. By your early 30s, your financial foundation will become unshakeable." },
    relationshipEnergy: { type: "The Devoted One", description: "When you love, you love completely — with your body, your time, your resources. You create a world of comfort for your partner. But you need them to show up consistently. Inconsistency breaks your heart faster than betrayal." },
    familyBehavior: "You're the silent backbone of your family. You show love through actions — cooking, providing, fixing things. You rarely say 'I love you' but everyone knows you'd sacrifice everything for them. Your biggest pain? When your family doesn't notice your efforts.",
    biggestLifeShift: "after age 30",
    luckyYears: [2027, 2029, 2032],
    palmInsights: ["Your mount of Venus is prominently developed, indicating a life rich in love, comfort, and sensory pleasures", "A deep, steady life line suggests remarkable endurance and a grounded approach to challenges", "Your fate line indicates career stability with gradual but assured financial growth"],
    cosmicWarning: "Beware of holding onto toxic relationships or dead-end jobs out of comfort. Between 2026-2028, the universe will force you to release what no longer serves you. Let go willingly — or life will pry it from your hands.",
    spiritualEnergy: { chakra: "Heart Chakra", auraColor: "Emerald Green", description: "Your heart chakra resonates with Venus — making you deeply connected to love, beauty, and nature. Spending time in gardens, near trees, or with animals recharges your spiritual battery instantly." },
    viralStatement: "I don't open up easily. So if I let you in, understand — you're standing in a place where very few people have ever been allowed.",
    destinyMeter: 78,
  },

  Gemini: {
    symbol: '♊', element: 'Air', planet: 'Mercury',
    dates: 'May 21 – Jun 20', color: '#F7DC6F', bgGradient: 'linear-gradient(135deg, #F7DC6F22, #F39C1211)',
    emoji: '👯',
    tagline: 'The curious mind that bridges worlds.',
    positiveTraits: ['Adaptable', 'Outgoing', 'Intelligent', 'Versatile', 'Witty', 'Expressive'],
    negativeTraits: ['Inconsistent', 'Indecisive', 'Nervous', 'Superficial', 'Impulsive'],
    career: 'Journalism, Teaching, Sales, Writing, Technology, PR',
    emotionalProfile: 'Emotionally complex with a dual nature. Gemini can switch from joyful to anxious quickly and needs mental stimulation.',
    communicationStyle: 'Eloquent, quick-witted, and entertaining. They excel at conversation and can adapt their style to any audience.',
    relationshipBehavior: 'Charming and fun partners who need intellectual connection and variety to stay engaged.',
    compatibility: { best: ['Libra', 'Aquarius', 'Aries'], challenging: ['Pisces', 'Virgo'] },
    lucky: { color: 'Yellow', number: '3, 7', gemstone: 'Agate', day: 'Wednesday', flower: 'Lavender' },
    radar: { confidence: 75, creativity: 90, logic: 85, empathy: 65, ambition: 70, social: 95 },

    misunderstoodBecause: "You change your mind, your mood, your energy — and people call you 'fake' or 'two-faced.' But you're not fake. You're just too complex for people who only have one way of seeing the world. You contain multitudes — and that terrifies small minds.",
    hiddenStrengths: ["Ability to connect with literally anyone within minutes", "Mental processing speed that leaves others behind", "Adapting to any crisis with humor and intelligence"],
    emotionalWeakness: "You overthink everything — especially at night. Your mind won't stop. You replay conversations, second-guess your choices, and create problems that don't exist yet. The hardest part? You smile through it all, so nobody ever knows you're struggling.",
    rareBadge: { name: "The Mind Alchemist", percentage: "3.7%", description: "Your brain works in ways most people can't comprehend. You can turn chaos into clarity, boredom into brilliance, and strangers into friends — all in one conversation." },
    careerDestiny: "Your career won't follow a straight line — it'll zigzag through multiple passions. And that's your superpower. You'll succeed in content creation, tech, marketing, or any field that rewards adaptability. Your breakthrough comes through ideas, not degrees.",
    moneyAura: { score: 71, insight: "Your relationship with money is unpredictable — feast or famine. You earn well but spend impulsively. Between 2027-2030, a creative project or side business will become your most reliable income stream. Trust your ideas." },
    relationshipEnergy: { type: "The Electric Companion", description: "You make every relationship exciting. But you need a partner who can match your mental speed — someone who surprises you, challenges you, and never gets boring. The moment a relationship becomes predictable, you start pulling away." },
    familyBehavior: "You're the entertainer, the mediator, the one who lightens the mood when family tension gets heavy. But behind closed doors, you feel like nobody in your family truly 'gets' you. You love them deeply — but sometimes feel like a stranger in your own home.",
    biggestLifeShift: "after age 26",
    luckyYears: [2026, 2029, 2030],
    palmInsights: ["Multiple fine lines across your palm suggest a highly active mind and diverse life interests", "Your Mercury mount is well-developed, confirming exceptional communication abilities", "A forked head line reveals your dual nature — the ability to see both sides of every situation"],
    cosmicWarning: "Your biggest enemy is your own scattered energy. Between 2026-2028, Mercury retrogrades will hit you harder than other signs. Avoid signing contracts or making major decisions during retrograde periods. Focus is your superpower — if you choose to use it.",
    spiritualEnergy: { chakra: "Throat Chakra", auraColor: "Sky Blue", description: "Your throat chakra is naturally strong — giving you the gift of speech and expression. But when blocked, it creates anxiety and overthinking. Journaling, singing, or speaking your truth aloud will clear the blockage instantly." },
    viralStatement: "I'm not complicated. I'm just too many beautiful things packed into one person — and not everyone has the range to appreciate that.",
    destinyMeter: 74,
  },

  Cancer: {
    symbol: '♋', element: 'Water', planet: 'Moon',
    dates: 'Jun 21 – Jul 22', color: '#85C1E9', bgGradient: 'linear-gradient(135deg, #85C1E922, #2E86C111)',
    emoji: '🦀',
    tagline: 'The intuitive nurturer who feels everything.',
    positiveTraits: ['Compassionate', 'Intuitive', 'Loyal', 'Creative', 'Protective', 'Empathetic'],
    negativeTraits: ['Moody', 'Clingy', 'Suspicious', 'Pessimistic', 'Over-sensitive'],
    career: 'Healthcare, Counseling, Teaching, Real Estate, Culinary Arts',
    emotionalProfile: 'Deeply empathetic and intuitive, Cancer absorbs the emotions of those around them and needs time to recharge.',
    communicationStyle: 'Nurturing and indirect. They prefer to gauge the emotional climate before expressing themselves fully.',
    relationshipBehavior: 'Devoted and protective partners who create warm, stable homes. They need emotional security above all.',
    compatibility: { best: ['Scorpio', 'Pisces', 'Taurus'], challenging: ['Aries', 'Libra'] },
    lucky: { color: 'Silver', number: '2, 7', gemstone: 'Pearl', day: 'Monday', flower: 'White Rose' },
    radar: { confidence: 55, creativity: 80, logic: 60, empathy: 97, ambition: 65, social: 70 },

    misunderstoodBecause: "You feel things 10x deeper than everyone else — but you hide it behind a wall of 'I'm fine.' People think you're moody or oversensitive. But the truth is, you feel the pain of everyone around you. You're not weak — you're just carrying more than one person's emotions.",
    hiddenStrengths: ["Emotional intelligence that reads rooms before anyone speaks", "Creating safe spaces where people finally feel heard", "Intuition so sharp it borders on psychic ability"],
    emotionalWeakness: "You give and give until there's nothing left — then wonder why you feel empty. You remember every kind word AND every hurtful one. Your memory is both your gift and your curse. You forgive, but you never truly forget.",
    rareBadge: { name: "The Emotional Healer", percentage: "2.4%", description: "People feel safe around you without knowing why. You carry a rare healing energy that mends invisible wounds. The world needs more people like you." },
    careerDestiny: "You'll thrive in careers where you can nurture — healthcare, counseling, education, real estate, or building your own family-oriented business. Your intuition is your career compass. Trust your gut over any spreadsheet.",
    moneyAura: { score: 72, insight: "Money for you is about security, not luxury. You're a natural saver and protector of resources. A property investment or family business between 2027-2031 will become your financial anchor for decades." },
    relationshipEnergy: { type: "The Heart Guardian", description: "You love with your entire soul. In relationships, you create a cocoon of warmth and safety. But your biggest fear — abandonment — sometimes makes you hold on too tight. The right partner will make you feel safe enough to loosen your grip." },
    familyBehavior: "You ARE the family. You remember birthdays, you cook when someone's sick, you carry the emotional weight of everyone's problems. But here's what hurts: you're the one who takes care of everyone, but when you break down, the house goes silent.",
    biggestLifeShift: "after age 27",
    luckyYears: [2027, 2028, 2031],
    palmInsights: ["An exceptionally deep heart line confirms your immense capacity for love and emotional depth", "Your intuition line (Line of Luna) is clearly visible — a rare marker of psychic sensitivity", "Protective cross marks on your palm suggest you are naturally shielded from negative energies"],
    cosmicWarning: "Emotional manipulation is your kryptonite. Between 2026-2028, someone close may try to use your empathy against you. Set boundaries — even with people you love. Saying 'no' is not selfish. It's survival.",
    spiritualEnergy: { chakra: "Sacral Chakra", auraColor: "Moonlit Silver", description: "Your sacral chakra is deeply connected to the Moon — making your emotions ebb and flow with lunar cycles. You may notice heightened intuition during full moons. Moon bathing and water meditation will amplify your gifts." },
    viralStatement: "I feel too much. I know too much. I care too deeply. And that's exactly why this world needs someone like me.",
    destinyMeter: 79,
  },

  Leo: {
    symbol: '♌', element: 'Fire', planet: 'Sun',
    dates: 'Jul 23 – Aug 22', color: '#F39C12', bgGradient: 'linear-gradient(135deg, #F39C1222, #E67E2211)',
    emoji: '🦁',
    tagline: 'The radiant performer born to shine.',
    positiveTraits: ['Generous', 'Warm-hearted', 'Enthusiastic', 'Creative', 'Humorous', 'Charismatic'],
    negativeTraits: ['Arrogant', 'Stubborn', 'Inflexible', 'Self-centered', 'Melodramatic'],
    career: 'Entertainment, Politics, Design, Management, Performance Arts',
    emotionalProfile: 'Warm and expressive, Leo wears their heart on their sleeve. They love grand gestures and genuine appreciation.',
    communicationStyle: 'Theatrical, confident, and entertaining. Natural storytellers who command any room they enter.',
    relationshipBehavior: 'Devoted and generous partners who love romance and grand gestures. They need admiration and loyalty in return.',
    compatibility: { best: ['Aries', 'Sagittarius', 'Gemini'], challenging: ['Taurus', 'Scorpio'] },
    lucky: { color: 'Gold', number: '1, 5', gemstone: 'Ruby', day: 'Sunday', flower: 'Sunflower' },
    radar: { confidence: 97, creativity: 88, logic: 65, empathy: 70, ambition: 90, social: 93 },

    misunderstoodBecause: "People see your confidence and assume you're arrogant. They see your need for appreciation and call it 'attention-seeking.' But the truth is, you pour so much energy into making others feel special — all you want is for someone to do the same for you. That's not ego. That's a generous heart asking to be seen.",
    hiddenStrengths: ["Unwavering loyalty that turns friends into family", "Ability to lift the energy of any room you enter", "Creative vision that turns ordinary moments into extraordinary memories"],
    emotionalWeakness: "Behind all that confidence, there's a child who's terrified of being forgotten. You fear being replaceable. You smile the biggest, laugh the loudest — but on quiet nights, you wonder if anyone would notice if your light went out.",
    rareBadge: { name: "The Golden Soul", percentage: "3.5%", description: "You radiate warmth that people can literally feel when you walk into a room. Your presence is medicine for broken spirits. Very few people carry this kind of solar energy." },
    careerDestiny: "You were born for the spotlight — content creation, acting, politics, brand building, or running a creative empire. Your career explodes when you stop dimming your light for others. Between 28-35, you'll build something that carries your name forever.",
    moneyAura: { score: 80, insight: "You attract money through charisma and personal brand. But you also spend generously — sometimes too generously. Your wealth destiny is tied to recognition: the more visible you become, the more abundance flows. A major income breakthrough is coming between 2027-2030." },
    relationshipEnergy: { type: "The Royal Lover", description: "You love like a movie — grand, passionate, and all-consuming. You need a partner who treats you like a priority, not an option. But remember: real love isn't a performance. The right person will love you in sweatpants, not just on stage." },
    familyBehavior: "You're the pride of your family — the one everyone expects great things from. But that expectation is heavy. You make your parents proud in public, but privately, you wish they'd just say 'we're proud of you exactly as you are' — without the conditions.",
    biggestLifeShift: "after age 29",
    luckyYears: [2026, 2029, 2033],
    palmInsights: ["A prominent Sun line on your palm confirms leadership qualities and public recognition in your destiny", "Your heart line shows generous, expressive love — but with a tendency to give more than you receive", "A strong, clear fate line indicates a destined path toward fame, influence, or creative legacy"],
    cosmicWarning: "Your biggest risk is surrounding yourself with people who love your spotlight but not your struggles. Between 2026-2028, some relationships will be tested. Those who stay during your darkest moment are your real ones. Let the rest go without guilt.",
    spiritualEnergy: { chakra: "Solar Plexus", auraColor: "Golden Yellow", description: "You carry literal solar energy — your aura radiates warmth and positivity. But when depleted, you crash hard. Regular sunlight exposure and creative expression recharge your spiritual core faster than anything else." },
    viralStatement: "I was never designed to blend in. I was born to stand out — and if that threatens you, that says more about you than it does about me.",
    destinyMeter: 86,
  },

  Virgo: {
    symbol: '♍', element: 'Earth', planet: 'Mercury',
    dates: 'Aug 23 – Sep 22', color: '#82E0AA', bgGradient: 'linear-gradient(135deg, #82E0AA22, #27AE6011)',
    emoji: '🌾',
    tagline: 'The analytical perfectionist who sees every detail.',
    positiveTraits: ['Analytical', 'Loyal', 'Hardworking', 'Practical', 'Kind', 'Meticulous'],
    negativeTraits: ['Critical', 'Worrying', 'Overly cautious', 'All-work mentality', 'Shy'],
    career: 'Medicine, Research, Accounting, Law, Data Science, Writing',
    emotionalProfile: 'Analytical about their own feelings. Virgo tends to overthink emotions, but once they trust, they are deeply caring.',
    communicationStyle: 'Precise, helpful, and detailed. They give advice freely and notice things others miss.',
    relationshipBehavior: 'Devoted partners who show love through acts of service. They need intellectual respect and order in relationships.',
    compatibility: { best: ['Taurus', 'Capricorn', 'Cancer'], challenging: ['Gemini', 'Sagittarius'] },
    lucky: { color: 'Navy Blue', number: '5, 14', gemstone: 'Sapphire', day: 'Wednesday', flower: 'Chrysanthemum' },
    radar: { confidence: 60, creativity: 72, logic: 97, empathy: 75, ambition: 80, social: 58 },

    misunderstoodBecause: "You notice everything — every flaw, every inconsistency, every unspoken tension. People call you 'too critical' or 'overthinking.' But you're not critical for fun. You genuinely want to help everyone be their best version. Your standards come from love, not judgment.",
    hiddenStrengths: ["Solving problems that paralyze everyone else", "Memory that retains details most people forget instantly", "Quiet consistency that builds empires while others chase trends"],
    emotionalWeakness: "You are your own harshest critic. No one will ever judge you as brutally as you judge yourself. You carry guilt for things that aren't your fault and replay your 'failures' on infinite loop. You deserve the same grace you give to everyone else.",
    rareBadge: { name: "The Quiet Genius", percentage: "3.1%", description: "Your intelligence works in the background — solving, organizing, perfecting. By the time others see the result, they have no idea how much invisible work went into it. You are the engine, not the billboard." },
    careerDestiny: "Your destiny is in precision — medicine, data, law, research, or building systems that others depend on. You won't be the loudest in the room, but you'll be the most indispensable. Your career peak comes when you stop undervaluing your contributions.",
    moneyAura: { score: 81, insight: "You're naturally good with money — budgeting, saving, planning. But you undercharge for your work because you underestimate your value. The moment you start pricing yourself correctly, your income will double. Watch for career growth between 2027-2030." },
    relationshipEnergy: { type: "The Acts-of-Love Partner", description: "You don't say 'I love you' often — you show it. You remember their medicine schedule, you fix things before they ask, you notice when something's wrong before they admit it. Your love language is invisible — and that's what makes it powerful." },
    familyBehavior: "You're the responsible one — paying bills, managing logistics, remembering appointments. You carry mental load that nobody recognizes. When things go wrong, you're the fixer. When things go right, nobody credits you. But without you, everything falls apart.",
    biggestLifeShift: "after age 31",
    luckyYears: [2027, 2030, 2032],
    palmInsights: ["Exceptionally fine and detailed lines across your palm mirror your analytical nature", "Your head line is long and clear — indicating sharp intellectual capabilities and methodical thinking", "A well-defined health line suggests you'll maintain vitality through disciplined habits and self-care"],
    cosmicWarning: "Stop sacrificing your mental health for productivity. Between 2026-2028, burnout is your biggest threat. The universe is telling you: rest is not laziness. You cannot pour from an empty cup. Schedule rest like you schedule work.",
    spiritualEnergy: { chakra: "Root Chakra", auraColor: "Forest Green", description: "Your root chakra grounds you — giving you stability and order. But when over-activated, it creates anxiety about control. Barefoot walks in nature, gardening, or simply sitting on the earth will reset your nervous system." },
    viralStatement: "I notice everything. I just don't say everything. There's a difference between being quiet and being unaware — and people often confuse the two with me.",
    destinyMeter: 77,
  },

  Libra: {
    symbol: '♎', element: 'Air', planet: 'Venus',
    dates: 'Sep 23 – Oct 22', color: '#F1948A', bgGradient: 'linear-gradient(135deg, #F1948A22, #E74C3C11)',
    emoji: '⚖️',
    tagline: 'The graceful diplomat who seeks perfect balance.',
    positiveTraits: ['Diplomatic', 'Charming', 'Fair-minded', 'Social', 'Cooperative', 'Romantic'],
    negativeTraits: ['Indecisive', 'Avoids conflict', 'Self-pitying', 'Holding grudges', 'Gullible'],
    career: 'Law, Diplomacy, Art, Design, Counseling, Fashion',
    emotionalProfile: 'Emotionally balanced and peace-seeking. Libra avoids conflict but needs to feel heard and appreciated.',
    communicationStyle: 'Charming, tactful, and balanced. They listen well and present multiple sides of any argument.',
    relationshipBehavior: 'Romantic idealists who seek soulmate-level connection. They need equality, beauty, and intellectual partnership.',
    compatibility: { best: ['Gemini', 'Aquarius', 'Leo'], challenging: ['Cancer', 'Capricorn'] },
    lucky: { color: 'Pink', number: '4, 6', gemstone: 'Opal', day: 'Friday', flower: 'Rose' },
    radar: { confidence: 68, creativity: 85, logic: 78, empathy: 82, ambition: 65, social: 92 },

    misunderstoodBecause: "You keep the peace so well that people think you don't have opinions. They mistake your diplomacy for weakness. But the truth is, you see every side of every argument — and choosing to stay balanced takes more strength than picking a fight ever will.",
    hiddenStrengths: ["Turning enemies into allies through pure charm", "Seeing beauty and potential in things others dismiss", "Creating harmony in chaos without anyone noticing your effort"],
    emotionalWeakness: "You avoid conflict so much that you swallow your own feelings to keep others comfortable. You say 'it's fine' when it's not. You smile when you want to scream. And over time, all those unspoken words become a weight that only you can feel.",
    rareBadge: { name: "The Harmony Architect", percentage: "2.9%", description: "You possess a rare ability to make everyone around you feel balanced, heard, and at ease. In a world of chaos, you are the calm. That's not common — that's cosmic." },
    careerDestiny: "Your calling is in spaces where beauty meets justice — law, design, fashion, diplomacy, or creative direction. Your career thrives when you stop people-pleasing and start creating from your own vision. Between 27-34, partnerships will define your biggest wins.",
    moneyAura: { score: 73, insight: "Venus gives you refined taste — which means you spend well on quality. Money comes to you through partnerships, collaborations, and beauty-related ventures. A creative partnership between 2027-2029 will unlock unexpected wealth." },
    relationshipEnergy: { type: "The Romantic Idealist", description: "You believe in soulmates, grand love stories, and perfect partnerships. You pour your heart into creating a beautiful relationship — but sometimes you romanticize people who haven't earned it. Choose reality over fantasy, and your love life transforms." },
    familyBehavior: "You're the peacemaker — the one who mediates fights, smooths tensions, and makes sure everyone feels included. But this role is exhausting. Sometimes you wish someone else would step up so you could finally just be yourself instead of being the glue.",
    biggestLifeShift: "after age 27",
    luckyYears: [2026, 2028, 2030],
    palmInsights: ["A beautifully balanced palm suggests a life devoted to harmony, aesthetics, and meaningful connections", "Your Venus mount is prominently developed — confirming artistic talent and deep romantic nature", "Marriage lines suggest significant partnership energy, with a deeply transformative relationship ahead"],
    cosmicWarning: "Stop putting everyone's happiness before your own. Between 2026-2028, you'll face a choice: keep pleasing others or finally choose yourself. The universe is begging you to be selfish — just this once. Your future depends on it.",
    spiritualEnergy: { chakra: "Heart Chakra", auraColor: "Rose Pink", description: "Your heart chakra vibrates at the frequency of love and beauty. You're naturally drawn to aesthetics, art, and romantic connection. Rose quartz, pink candles, and beautiful environments activate your spiritual power." },
    viralStatement: "I keep peace not because I'm weak — but because I've seen what happens when people choose war over understanding. I choose grace. Every single time.",
    destinyMeter: 75,
  },

  Scorpio: {
    symbol: '♏', element: 'Water', planet: 'Pluto',
    dates: 'Oct 23 – Nov 21', color: '#8B5CF6', bgGradient: 'linear-gradient(135deg, #8B5CF622, #6C348311)',
    emoji: '🦂',
    tagline: 'The transformative soul who sees beyond the veil.',
    positiveTraits: ['Resourceful', 'Brave', 'Passionate', 'Loyal', 'Focused', 'Magnetic'],
    negativeTraits: ['Jealous', 'Secretive', 'Manipulative', 'Distrusting', 'Vindictive'],
    career: 'Psychology, Research, Finance, Investigation, Surgery, Occult Science',
    emotionalProfile: 'Deeply emotional but masters at hiding it. Scorpio feels everything intensely and never forgets a betrayal or a kindness.',
    communicationStyle: 'Penetrating and strategic. They ask the questions no one else dares to and reveal little about themselves in return.',
    relationshipBehavior: 'Intensely loyal partners who demand total trust and honesty. They transform those they love through deep connection.',
    compatibility: { best: ['Cancer', 'Pisces', 'Virgo'], challenging: ['Leo', 'Aquarius'] },
    lucky: { color: 'Deep Red', number: '8, 11', gemstone: 'Topaz', day: 'Tuesday', flower: 'Geranium' },
    radar: { confidence: 88, creativity: 80, logic: 85, empathy: 75, ambition: 92, social: 62 },

    misunderstoodBecause: "You guard your emotions behind walls of steel — so people call you cold, secretive, or intimidating. But you're not cold. You're protecting a heart that feels everything at maximum intensity. You've been hurt before, and you've learned that not everyone deserves access to your depth.",
    hiddenStrengths: ["Reading people's real intentions behind their words", "Rising from complete destruction like nothing happened", "Emotional depth that creates bonds most people only dream of"],
    emotionalWeakness: "You never fully trust anyone — not completely. There's always a small part of you waiting for betrayal, prepared for the worst. And when someone does hurt you, you don't just feel it. You absorb it. You carry it. And sometimes, you let it poison you from the inside.",
    rareBadge: { name: "The Phoenix Soul", percentage: "2.1%", description: "You have been broken and rebuilt yourself more times than anyone knows. Each time, you came back stronger, sharper, more powerful. The universe doesn't break Scorpios — it forges them." },
    careerDestiny: "You're destined for power — not the loud kind, but the kind that moves things from the shadows. Psychology, investigation, finance, surgery, or strategic leadership. Your career peak comes when you channel your intensity into building, not destroying.",
    moneyAura: { score: 85, insight: "You have an almost supernatural ability to spot financial opportunities others miss. Investments, strategic moves, calculated risks — money respects your intensity. Between 2027-2030, a major financial transformation will redefine your wealth permanently." },
    relationshipEnergy: { type: "The Soul Merger", description: "You don't do 'casual.' When you love someone, you want to merge souls — know their secrets, heal their wounds, possess their loyalty completely. This intensity is beautiful, but it can suffocate partners who aren't ready for your depth." },
    familyBehavior: "You're the most private member of your family — the one with secrets nobody knows about. You protect your family fiercely but rarely show vulnerability at home. Your parents may never fully understand the depth of what you carry inside.",
    biggestLifeShift: "after age 30",
    luckyYears: [2027, 2029, 2032],
    palmInsights: ["An unusually deep and intense set of palm lines suggests extraordinary emotional depth and transformative life experiences", "Your Pluto influence is visible in the complexity of your minor lines — indicating a life of multiple rebirths", "A strong intuition line confirms psychic sensitivity and an ability to read people beyond their words"],
    cosmicWarning: "Forgiveness is your greatest challenge — and your greatest liberation. Between 2026-2028, holding onto old grudges will block new blessings. The person you need to forgive most might be yourself. Let it go. Your next chapter needs space to arrive.",
    spiritualEnergy: { chakra: "Third Eye", auraColor: "Deep Indigo", description: "Your third eye is naturally awakened — giving you piercing intuition, prophetic dreams, and an ability to sense truth. But when overactive, it creates paranoia and obsession. Meditation in complete darkness will balance this extraordinary gift." },
    viralStatement: "I don't hate people. I just know exactly who they are — and most of them haven't figured that out about themselves yet.",
    destinyMeter: 88,
  },

  Sagittarius: {
    symbol: '♐', element: 'Fire', planet: 'Jupiter',
    dates: 'Nov 22 – Dec 21', color: '#E67E22', bgGradient: 'linear-gradient(135deg, #E67E2222, #D4AC0D11)',
    emoji: '🏹',
    tagline: 'The eternal explorer chasing the horizon.',
    positiveTraits: ['Generous', 'Idealistic', 'Enthusiastic', 'Humorous', 'Adventurous', 'Free-spirited'],
    negativeTraits: ['Impatient', 'Careless', 'Tactless', 'Over-confident', 'Inconsistent'],
    career: 'Travel, Philosophy, Teaching, Law, Sports, Exploration',
    emotionalProfile: 'Optimistic and expansive. Sagittarius bounces back quickly from setbacks and carries infectious positive energy.',
    communicationStyle: 'Blunt, funny, and philosophical. They speak their truth without sugarcoating and love debating big ideas.',
    relationshipBehavior: 'Freedom-loving partners who need adventure and growth. They commit when they find someone who keeps them curious.',
    compatibility: { best: ['Aries', 'Leo', 'Libra'], challenging: ['Virgo', 'Pisces'] },
    lucky: { color: 'Purple', number: '3, 9', gemstone: 'Turquoise', day: 'Thursday', flower: 'Dandelion' },
    radar: { confidence: 85, creativity: 78, logic: 70, empathy: 65, ambition: 75, social: 90 },

    misunderstoodBecause: "You speak the truth without filters — and people mistake your honesty for cruelty. You leave when things feel stagnant — and people call you disloyal. But you're not cruel or disloyal. You're just allergic to fakeness. You'd rather be honest and alone than comfortable and lying.",
    hiddenStrengths: ["Turning any setback into an adventure", "Infectious optimism that lifts entire groups out of darkness", "Philosophical depth hidden behind a fun, carefree exterior"],
    emotionalWeakness: "You run — from feelings, from commitment, from anything that pins you down. Not because you don't care, but because depth terrifies you. What if you go deep and it doesn't work out? So you keep moving. But someday, you'll have to stop — and face what you've been running from.",
    rareBadge: { name: "The Eternal Optimist", percentage: "4.3%", description: "No matter how many times life knocks you down, you get back up with a smile and a plan. Your optimism isn't naive — it's earned through survival. That makes it unbreakable." },
    careerDestiny: "Your career is an adventure, not a ladder. Travel, education, content creation, law, or entrepreneurship — you'll thrive wherever freedom and growth intersect. Your biggest career leap comes from saying yes to the opportunity that scares you most.",
    moneyAura: { score: 68, insight: "Jupiter blesses you with luck, but also extravagance. Money comes to you in bursts — especially through travel, education, or publishing. Your wealth grows when you learn to save during the feast so you're prepared for the famine. Big opportunity window: 2028-2031." },
    relationshipEnergy: { type: "The Freedom Lover", description: "You need a partner who is a travel buddy, a debate partner, and a co-adventurer — all in one. The moment someone tries to cage you, you vanish. But when you find the right person, you'll realize freedom isn't about running away — it's about choosing to stay." },
    familyBehavior: "You're the free spirit of the family — the one who moved away, traveled, or chose an unconventional path. Your family might not always understand your choices, but they secretly admire your courage. You love them from a distance — which is its own kind of loyalty.",
    biggestLifeShift: "after age 28",
    luckyYears: [2026, 2028, 2031],
    palmInsights: ["A long, arching travel line on your palm confirms a life defined by exploration and constant movement", "Your Jupiter mount is highly developed — indicating luck, wisdom, and philosophical inclination", "A branching fate line suggests multiple career paths and reinventions throughout your lifetime"],
    cosmicWarning: "Restlessness will be your undoing if you don't learn to sit still. Between 2026-2028, the universe will present something worth staying for — a person, a project, a purpose. If you run this time, you'll regret it. This one is different. Trust it.",
    spiritualEnergy: { chakra: "Crown Chakra", auraColor: "Violet Gold", description: "Your crown chakra connects you to higher wisdom and universal truth. You're a natural philosopher and seeker. Time spent in nature, mountains, or foreign lands activates your spiritual growth exponentially." },
    viralStatement: "I'd rather be hated for being real than loved for being fake. My honesty isn't a flaw — it's my most expensive gift. Not everyone can afford it.",
    destinyMeter: 80,
  },

  Capricorn: {
    symbol: '♑', element: 'Earth', planet: 'Saturn',
    dates: 'Dec 22 – Jan 19', color: '#AAB7B8', bgGradient: 'linear-gradient(135deg, #AAB7B822, #6C757D11)',
    emoji: '🐐',
    tagline: 'The disciplined achiever who climbs every mountain.',
    positiveTraits: ['Responsible', 'Disciplined', 'Self-controlled', 'Persistent', 'Ambitious', 'Traditional'],
    negativeTraits: ['Know-it-all', 'Unforgiving', 'Condescending', 'Expecting the worst', 'Workaholic'],
    career: 'Finance, Management, Government, Engineering, Real Estate, Law',
    emotionalProfile: 'Reserved and controlled. Capricorn takes time to open up emotionally but is deeply loyal once committed.',
    communicationStyle: 'Authoritative, measured, and goal-oriented. They speak to solve problems and dislike small talk.',
    relationshipBehavior: 'Serious partners who commit fully when ready. They build relationships like they build careers — steadily and for the long term.',
    compatibility: { best: ['Taurus', 'Virgo', 'Scorpio'], challenging: ['Aries', 'Libra'] },
    lucky: { color: 'Dark Green', number: '4, 8', gemstone: 'Garnet', day: 'Saturday', flower: 'Ivy' },
    radar: { confidence: 78, creativity: 58, logic: 92, empathy: 60, ambition: 98, social: 55 },

    misunderstoodBecause: "You're quiet, focused, and ambitious — so people assume you're cold or emotionless. They don't see the late nights, the sacrifices, the times you wanted to give up but didn't. You're not cold. You're just built differently. Your emotions run deep — you just don't waste them on performances.",
    hiddenStrengths: ["Discipline that turns impossible goals into inevitable outcomes", "Emotional resilience forged through years of silent struggle", "Strategic thinking that sees 10 steps ahead while others see 1"],
    emotionalWeakness: "You suppress your emotions so effectively that sometimes you forget you have them. You were told to be strong so many times that you forgot it's okay to be weak. The hardest thing for you? Admitting you need someone. Because needing someone feels like losing control.",
    rareBadge: { name: "The Silent Empire Builder", percentage: "2.6%", description: "While others talk about their dreams, you're silently building yours — brick by brick, year by year. When they finally notice, you'll already be at the top." },
    careerDestiny: "You are destined for authority — CEO, founder, senior leader, or institution builder. Saturn delays your success but makes it permanent. Your 30s and 40s will be your golden decades. Everything you sacrificed in your 20s will pay compound interest.",
    moneyAura: { score: 89, insight: "You have the strongest wealth-building potential in the zodiac. Saturn teaches you through scarcity first, then rewards through abundance. By 35, your financial discipline will place you in the top tier. Long-term investments made between 2026-2029 will define your wealth forever." },
    relationshipEnergy: { type: "The Provider", description: "You show love through stability — a home, financial security, a future plan. You're not the most romantic partner, but you're the most reliable one. The right person will see your quiet devotion as the love story it truly is." },
    familyBehavior: "You grew up fast — maybe too fast. You've been the responsible one since childhood, carrying weights that weren't yours to carry. Your family depends on you, and you never say no. But deep inside, there's a child in you who just wanted to play without worrying about tomorrow.",
    biggestLifeShift: "after age 32",
    luckyYears: [2028, 2030, 2033],
    palmInsights: ["A remarkably strong fate line indicates a life driven by purpose, ambition, and destined achievement", "Saturn's influence is visible in the structured, deep lines — confirming discipline as your greatest asset", "Your success line emerges strongly in the upper palm — indicating late-blooming but monumental success"],
    cosmicWarning: "Don't sacrifice your health, relationships, and youth on the altar of ambition. Between 2026-2028, Saturn asks you: what's the point of building an empire if there's no one to share it with? Schedule joy. It's not optional — it's essential.",
    spiritualEnergy: { chakra: "Root Chakra", auraColor: "Slate Gray", description: "Your root chakra is powerfully grounded — giving you unshakeable foundations. But when over-grounded, it creates rigidity and fear of change. Mountain hiking, cold showers, and structured meditation will keep your energy balanced." },
    viralStatement: "I don't announce my moves. I make them. And by the time you realize what happened, I've already moved three steps ahead.",
    destinyMeter: 85,
  },

  Aquarius: {
    symbol: '♒', element: 'Air', planet: 'Uranus',
    dates: 'Jan 20 – Feb 18', color: '#5DADE2', bgGradient: 'linear-gradient(135deg, #5DADE222, #1A527611)',
    emoji: '🏺',
    tagline: 'The visionary rebel ahead of every era.',
    positiveTraits: ['Progressive', 'Original', 'Independent', 'Humanitarian', 'Inventive', 'Intellectual'],
    negativeTraits: ['Aloof', 'Temperamental', 'Uncompromising', 'Extremist', 'Detached'],
    career: 'Technology, Science, Social Work, Invention, Aviation, Activism',
    emotionalProfile: 'Emotionally detached but deeply caring about humanity. They need intellectual connection before emotional intimacy.',
    communicationStyle: 'Unconventional, visionary, and idealistic. They talk about concepts and the future rather than feelings.',
    relationshipBehavior: 'Unique partners who prioritize friendship and freedom. They fall for minds before bodies and need space to evolve.',
    compatibility: { best: ['Gemini', 'Libra', 'Sagittarius'], challenging: ['Taurus', 'Scorpio'] },
    lucky: { color: 'Electric Blue', number: '4, 7', gemstone: 'Amethyst', day: 'Saturday', flower: 'Orchid' },
    radar: { confidence: 80, creativity: 95, logic: 90, empathy: 68, ambition: 82, social: 78 },

    misunderstoodBecause: "You think differently from everyone around you — and it makes you feel like an alien sometimes. People call you 'weird' or 'detached.' But you're not detached from feelings. You're detached from drama. There's a huge difference. You care deeply — just not about the things most people waste energy on.",
    hiddenStrengths: ["Seeing future trends before they become mainstream", "Solving problems with methods nobody else would think of", "Caring about humanity even when you struggle with individuals"],
    emotionalWeakness: "You intellectualize your emotions instead of feeling them. When someone asks 'how do you feel?' you give them a theory instead of an answer. You're terrified of emotional vulnerability because it feels irrational — and irrational is the one thing you can't handle.",
    rareBadge: { name: "The Future Walker", percentage: "3.3%", description: "Your mind exists 10 years ahead of your time. The ideas you have today will be mainstream tomorrow. That's why people don't always understand you now — they will later." },
    careerDestiny: "You're built for innovation — tech, startups, AI, social impact, or anything that didn't exist 5 years ago. Traditional career paths bore you. Your breakthrough comes from building something the world doesn't know it needs yet. Between 26-33, your vision meets its moment.",
    moneyAura: { score: 74, insight: "Money for you is a tool for freedom, not luxury. You're innovative enough to create income from unconventional sources — crypto, tech, freelancing, content. Your biggest financial gain comes from betting on emerging technologies between 2027-2030." },
    relationshipEnergy: { type: "The Intellectual Soulmate", description: "You fall in love with minds, not faces. You need a partner who challenges you intellectually, respects your independence, and doesn't confuse space with distance. The right person will understand that your love is expressed through ideas, not flowers." },
    familyBehavior: "You love your family but feel like the odd one out. Your ideas, your lifestyle, your way of seeing the world — it doesn't always match the family template. You wish they'd understand you without you having to explain yourself. Sometimes the most loving thing you do is staying connected despite feeling disconnected.",
    biggestLifeShift: "after age 27",
    luckyYears: [2026, 2029, 2031],
    palmInsights: ["Unusual, unique line patterns on your palm confirm a non-conventional life path and innovative thinking", "A prominent Uranus influence shows through irregular but distinctive palm markings", "Your intuition line is subtle but present — indicating flashes of genius and unconventional wisdom"],
    cosmicWarning: "Isolation is your comfort zone — but it can become your cage. Between 2026-2028, the universe will push you toward deeper human connections. Resist the urge to retreat into your mind. Your next evolution requires vulnerability, not logic.",
    spiritualEnergy: { chakra: "Third Eye", auraColor: "Electric Blue", description: "Your third eye vibrates at a unique frequency — giving you visionary abilities and unconventional spiritual insights. Group meditation, stargazing, and technology-free hours will amplify your already extraordinary cosmic antenna." },
    viralStatement: "I wasn't built to fit in with everyone. I was designed to think beyond everyone. If that makes me different, then I'll wear 'different' like a crown.",
    destinyMeter: 81,
  },

  Pisces: {
    symbol: '♓', element: 'Water', planet: 'Neptune',
    dates: 'Feb 19 – Mar 20', color: '#A29BFE', bgGradient: 'linear-gradient(135deg, #A29BFE22, #6C5CE711)',
    emoji: '🐟',
    tagline: 'The dreamer who lives between worlds.',
    positiveTraits: ['Compassionate', 'Artistic', 'Intuitive', 'Gentle', 'Wise', 'Empathetic'],
    negativeTraits: ['Fearful', 'Overly trusting', 'Sad', 'Victimhood tendency', 'Escapist'],
    career: 'Music, Art, Healing, Psychology, Writing, Spirituality, Film',
    emotionalProfile: 'The most empathetic sign. Pisces feels the full spectrum of human emotion and needs creative outlets to process it.',
    communicationStyle: 'Poetic, gentle, and imaginative. They communicate through metaphor and often sense what is unsaid.',
    relationshipBehavior: 'Deeply romantic and selfless partners. They merge fully with loved ones and need emotional safety and creative connection.',
    compatibility: { best: ['Scorpio', 'Cancer', 'Taurus'], challenging: ['Gemini', 'Sagittarius'] },
    lucky: { color: 'Sea Green', number: '3, 9', gemstone: 'Aquamarine', day: 'Thursday', flower: 'Water Lily' },
    radar: { confidence: 52, creativity: 97, logic: 55, empathy: 98, ambition: 60, social: 72 },

    misunderstoodBecause: "You feel everything — every energy shift, every unspoken tension, every hidden sadness in a room. People call you 'too sensitive' or 'living in a dream world.' But you're not escaping reality. You're feeling ALL of reality — including the parts most people are too numb to notice.",
    hiddenStrengths: ["Creativity that turns pain into art", "Emotional depth that connects with anyone on a soul level", "Spiritual intuition that borders on genuine psychic ability"],
    emotionalWeakness: "You absorb everyone's pain and forget to protect yourself. You give love without limits and trust without conditions — which means you get hurt the deepest. Your biggest wound? Giving your whole heart to someone who only wanted a piece of it.",
    rareBadge: { name: "The Dream Weaver", percentage: "1.9%", description: "You see the world through a lens that nobody else has access to. Your dreams predict, your art heals, your empathy transcends logic. You are the rarest frequency in the zodiac — handle yourself gently." },
    careerDestiny: "Your calling is in creation — music, writing, film, healing, psychology, or spiritual work. Traditional metrics won't measure your success. Your impact is felt in hearts, not balance sheets. Between 25-33, a creative project will touch more lives than you could imagine.",
    moneyAura: { score: 65, insight: "Your relationship with money is spiritual, not practical. You'd rather be fulfilled than rich. But Neptune has a plan: wealth will come through your creative gifts, healing abilities, or spiritual work. Between 2027-2030, a passion project transforms into unexpected income." },
    relationshipEnergy: { type: "The Unconditional Lover", description: "You love without conditions, without limits, without asking for anything in return. It's beautiful — and dangerous. You need a partner who reciprocates your depth, not someone who takes advantage of your boundless heart." },
    familyBehavior: "You're the emotional sponge of your family — absorbing everyone's stress, sadness, and anxiety. You feel your parents' worries as if they're your own. The hardest thing? You can sense when something's wrong at home — even from thousands of miles away. That's not imagination. That's your gift.",
    biggestLifeShift: "after age 25",
    luckyYears: [2026, 2027, 2030],
    palmInsights: ["Exceptionally fluid and wavy lines across your palm reflect your deeply creative, intuitive, and emotionally rich nature", "A prominent Neptune influence is visible — confirming artistic genius and spiritual depth", "Your mystic cross (between head and heart lines) is present — an extremely rare marker of spiritual giftedness found in less than 5% of palms"],
    cosmicWarning: "You must learn to distinguish between your emotions and other people's emotions. Between 2026-2028, you'll absorb negativity from someone close. Energy protection isn't optional for you — it's essential. Create boundaries. Shield your light. You can't heal others if you're bleeding yourself.",
    spiritualEnergy: { chakra: "Crown Chakra", auraColor: "Lavender Violet", description: "Your crown chakra is the most naturally open in the zodiac — giving you direct access to divine inspiration, prophetic dreams, and boundless compassion. Water meditation, ocean sounds, and creative expression keep this sacred channel clear." },
    viralStatement: "I didn't come into this world to be understood by everyone. I came here to feel everything deeply, love without limits, and create beauty from pain. And if that's too much for you — that's your limitation, not mine.",
    destinyMeter: 73,
  },
};

/**
 * Returns the zodiac sign object for a given date of birth string (YYYY-MM-DD)
 */
export function getZodiacSign(dob) {
  const date = new Date(dob);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  let signName;
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) signName = 'Aries';
  else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) signName = 'Taurus';
  else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) signName = 'Gemini';
  else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) signName = 'Cancer';
  else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) signName = 'Leo';
  else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) signName = 'Virgo';
  else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) signName = 'Libra';
  else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) signName = 'Scorpio';
  else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) signName = 'Sagittarius';
  else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) signName = 'Capricorn';
  else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) signName = 'Aquarius';
  else signName = 'Pisces';

  return { name: signName, ...ZODIAC_DATA[signName] };
}

/**
 * Returns age in years from a DOB string (YYYY-MM-DD)
 */
export function getAge(dob) {
  const today = new Date();
  const birth = new Date(dob);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
}

// ─── NUMEROLOGY HELPERS ───────────────────────────────────

/**
 * Life Path Number: sum all digits of DOB until single digit (1-9, 11, 22)
 */
export function getLifePathNumber(dob) {
  const digits = dob.replace(/-/g, '').split('').map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);
  while (sum > 9 && sum !== 11 && sum !== 22) {
    sum = String(sum).split('').map(Number).reduce((a, b) => a + b, 0);
  }
  return sum;
}

/**
 * Destiny Number: maps name letters A=1..Z=26, sums to single digit
 */
export function getDestinyNumber(name) {
  const clean = name.toUpperCase().replace(/[^A-Z]/g, '');
  let sum = 0;
  for (let i = 0; i < clean.length; i++) {
    sum += ((clean.charCodeAt(i) - 64) % 9) || 9;
  }
  while (sum > 9 && sum !== 11 && sum !== 22) {
    sum = String(sum).split('').map(Number).reduce((a, b) => a + b, 0);
  }
  return sum;
}

/**
 * Aura Score: composite 50-99 based on life path + destiny number + DOB day
 */
export function getAuraScore(dob, name) {
  const lp = getLifePathNumber(dob);
  const dn = getDestinyNumber(name);
  const day = new Date(dob).getDate();
  // Generate a score that feels personal but stays in 50-99 range
  const raw = ((lp * 7) + (dn * 5) + (day * 2)) % 50;
  return 50 + raw;
}

/**
 * Personal Year: current year cycle (1-9)
 */
export function getPersonalYear(dob) {
  const birth = new Date(dob);
  const currentYear = new Date().getFullYear();
  const digits = `${birth.getMonth() + 1}${birth.getDate()}${currentYear}`.split('').map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);
  while (sum > 9) {
    sum = String(sum).split('').map(Number).reduce((a, b) => a + b, 0);
  }
  return sum;
}

export const ZODIAC_WHEEL_SIGNS = [
  { name: 'Aries', symbol: '♈', angle: 0 },
  { name: 'Taurus', symbol: '♉', angle: 30 },
  { name: 'Gemini', symbol: '♊', angle: 60 },
  { name: 'Cancer', symbol: '♋', angle: 90 },
  { name: 'Leo', symbol: '♌', angle: 120 },
  { name: 'Virgo', symbol: '♍', angle: 150 },
  { name: 'Libra', symbol: '♎', angle: 180 },
  { name: 'Scorpio', symbol: '♏', angle: 210 },
  { name: 'Sagittarius', symbol: '♐', angle: 240 },
  { name: 'Capricorn', symbol: '♑', angle: 270 },
  { name: 'Aquarius', symbol: '♒', angle: 300 },
  { name: 'Pisces', symbol: '♓', angle: 330 },
];
