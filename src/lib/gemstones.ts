export interface Gemstone {
  id: string;
  name: string;
  hindiName: string;
  planet: string;
  zodiacSigns: string[];
  chakras: string[];
  purposes: string[];
  color: string;
  colorHex: string;
  hardness: number;
  origin: string[];
  description: string;
  benefits: string[];
  howToWear: string;
  metal: string;
  finger: string;
  day: string;
  mantra: string;
  birthstoneMonths: string[];
}

export const gemstones: Gemstone[] = [
  {
    id: "ruby",
    name: "Ruby",
    hindiName: "Manik",
    planet: "Sun",
    zodiacSigns: ["Leo", "Aries", "Sagittarius"],
    chakras: ["Solar Plexus", "Heart"],
    purposes: ["Confidence", "Leadership", "Vitality", "Protection"],
    color: "Red",
    colorHex: "#C41E3A",
    hardness: 9,
    origin: ["Myanmar (Burma)", "Sri Lanka", "Thailand", "Mozambique"],
    description:
      "Ruby, the King of Gems, radiates the powerful energy of the Sun. It enhances self-confidence, courage, and passion. Worn by royalty for centuries, Ruby is believed to ward off negative energies and bring success in leadership roles.",
    benefits: [
      "Boosts self-confidence and willpower",
      "Enhances leadership qualities and authority",
      "Promotes vitality and physical energy",
      "Protects against negative influences and evil eye",
      "Stimulates blood circulation and heart health",
    ],
    howToWear:
      "Set in gold, worn on the ring finger of the right hand. Purify by soaking in raw milk or Ganga water overnight. Wear during sunrise for maximum effect.",
    metal: "Gold",
    finger: "Ring",
    day: "Sunday",
    mantra: "Om Hrim Sum Suryaya Namah",
    birthstoneMonths: ["July"],
  },
  {
    id: "pearl",
    name: "Pearl",
    hindiName: "Moti",
    planet: "Moon",
    zodiacSigns: ["Cancer", "Pisces", "Scorpio"],
    chakras: ["Sacral", "Third Eye"],
    purposes: ["Peace", "Emotional Balance", "Intuition", "Creativity"],
    color: "White / Cream",
    colorHex: "#F5F0E6",
    hardness: 3,
    origin: ["Basra (Persian Gulf)", "Japan", "Australia", "Tahiti"],
    description:
      "Pearl carries the gentle, nurturing energy of the Moon. It calms the mind, balances emotions, and enhances intuition. Pearls are organic gems formed within oysters, symbolizing purity and wisdom earned through patience.",
    benefits: [
      "Calms the mind and reduces anxiety",
      "Balances emotional fluctuations",
      "Enhances intuition and mental clarity",
      "Improves skin health and complexion",
      "Strengthens relationships and marital harmony",
    ],
    howToWear:
      "Set in silver, worn on the little finger of the right hand. Purify by soaking in Ganga water with a pinch of sea salt. Wear during a Monday morning after moonrise.",
    metal: "Silver",
    finger: "Little",
    day: "Monday",
    mantra: "Om Som Somaya Namah",
    birthstoneMonths: ["June"],
  },
  {
    id: "red-coral",
    name: "Red Coral",
    hindiName: "Moonga",
    planet: "Mars",
    zodiacSigns: ["Aries", "Scorpio", "Leo"],
    chakras: ["Root", "Solar Plexus"],
    purposes: ["Courage", "Strength", "Protection", "Drive"],
    color: "Red / Orange-Red",
    colorHex: "#E34A27",
    hardness: 3.5,
    origin: ["Italy (Mediterranean)", "Japan", "Taiwan", "Australia"],
    description:
      "Red Coral embodies the fiery, assertive energy of Mars. It instills courage, determination, and physical vitality. Formed from the skeletal remains of marine polyps, Coral has been treasured across cultures as a protective talisman.",
    benefits: [
      "Boosts courage and determination",
      "Enhances physical strength and stamina",
      "Protects against accidents and blood-related issues",
      "Helps overcome procrastination and laziness",
      "Promotes marital harmony and passion",
    ],
    howToWear:
      "Set in copper or gold, worn on the ring finger of the right hand. Purify by washing in holy water mixed with turmeric. Wear on a Tuesday during sunrise.",
    metal: "Copper / Gold",
    finger: "Ring",
    day: "Tuesday",
    mantra: "Om Ang Angarkaya Namah",
    birthstoneMonths: [],
  },
  {
    id: "emerald",
    name: "Emerald",
    hindiName: "Panna",
    planet: "Mercury",
    zodiacSigns: ["Gemini", "Virgo", "Taurus"],
    chakras: ["Heart", "Throat"],
    purposes: ["Wisdom", "Communication", "Creativity", "Prosperity"],
    color: "Green",
    colorHex: "#50C878",
    hardness: 7.5,
    origin: ["Colombia", "Zambia", "Brazil", "India (Rajasthan)"],
    description:
      "Emerald channels the quick, intelligent energy of Mercury. It sharpens the mind, enhances communication skills, and brings creative clarity. Cleopatra famously adorned herself with emeralds, believing in their power to grant foresight.",
    benefits: [
      "Sharpens intellect and memory",
      "Enhances communication and speech",
      "Promotes creative thinking and writing",
      "Improves financial decision-making",
      "Soothes the nervous system and eyesight",
    ],
    howToWear:
      "Set in gold or silver, worn on the little finger of the right hand. Purify by soaking in Ganga water with tulsi leaves. Wear on a Wednesday morning.",
    metal: "Gold / Silver",
    finger: "Little",
    day: "Wednesday",
    mantra: "Om Bum Budhaya Namah",
    birthstoneMonths: ["May"],
  },
  {
    id: "yellow-sapphire",
    name: "Yellow Sapphire",
    hindiName: "Pukhraj",
    planet: "Jupiter",
    zodiacSigns: ["Sagittarius", "Pisces", "Cancer"],
    chakras: ["Solar Plexus", "Crown"],
    purposes: ["Wisdom", "Prosperity", "Marriage", "Spiritual Growth"],
    color: "Yellow / Golden",
    colorHex: "#F4C430",
    hardness: 9,
    origin: ["Sri Lanka (Ceylon)", "Thailand", "Madagascar", "Australia"],
    description:
      "Yellow Sapphire channels the expansive, benevolent energy of Jupiter. It is the gem of wisdom, prosperity, and spiritual growth. In Vedic tradition, Pukhraj is particularly renowned for attracting marriage and bringing abundance into one's life.",
    benefits: [
      "Attracts wealth and financial prosperity",
      "Promotes spiritual wisdom and higher learning",
      "Helps in finding a suitable marriage partner",
      "Enhances teaching and mentoring abilities",
      "Supports liver health and digestion",
    ],
    howToWear:
      "Set in gold, worn on the index finger of the right hand. Purify by soaking in turmeric water overnight. Wear on a Thursday during sunrise after prayer.",
    metal: "Gold",
    finger: "Index",
    day: "Thursday",
    mantra: "Om Gram Grim Graum Sah Guruve Namah",
    birthstoneMonths: ["September"],
  },
  {
    id: "diamond",
    name: "Diamond",
    hindiName: "Heera",
    planet: "Venus",
    zodiacSigns: ["Taurus", "Libra", "Capricorn"],
    chakras: ["Crown", "Heart"],
    purposes: ["Luxury", "Beauty", "Love", "Artistic Expression"],
    color: "Colorless / White",
    colorHex: "#E8E8E8",
    hardness: 10,
    origin: ["India (Golconda)", "Botswana", "Russia", "Canada"],
    description:
      "Diamond embodies the refined, luxurious energy of Venus. It enhances beauty, artistic expression, and romantic love. The hardest natural substance, diamond represents unbreakable bonds and eternal commitment.",
    benefits: [
      "Enhances beauty and charm",
      "Attracts luxury and material comforts",
      "Strengthens romantic relationships",
      "Boosts artistic and creative talents",
      "Brings clarity of thought and purpose",
    ],
    howToWear:
      "Set in platinum or white gold, worn on the middle finger of the right hand. Purify with rose water and incense smoke. Wear on a Friday morning after sunrise.",
    metal: "Platinum / White Gold",
    finger: "Middle",
    day: "Friday",
    mantra: "Om Draam Dreem Draum Sah Shukraya Namah",
    birthstoneMonths: ["April"],
  },
  {
    id: "blue-sapphire",
    name: "Blue Sapphire",
    hindiName: "Neelam",
    planet: "Saturn",
    zodiacSigns: ["Capricorn", "Aquarius", "Libra"],
    chakras: ["Third Eye", "Throat"],
    purposes: ["Discipline", "Focus", "Protection", "Justice"],
    color: "Blue",
    colorHex: "#0F52BA",
    hardness: 9,
    origin: ["Kashmir (India)", "Sri Lanka", "Myanmar", "Madagascar"],
    description:
      "Blue Sapphire carries the profound, disciplined energy of Saturn. It is a powerful stone for focus, protection, and karmic justice. While potentially intense, properly worn Neelam can bring remarkable career success and spiritual discipline.",
    benefits: [
      "Enhances focus and concentration",
      "Brings discipline and punctuality",
      "Protects against accidents and misfortune",
      "Supports career growth and professional success",
      "Aids in meditation and spiritual discipline",
    ],
    howToWear:
      "Set in silver or white gold, worn on the middle finger of the right hand. Must be tested for 3-7 days before committing. Purify with black sesame water. Wear on a Saturday evening.",
    metal: "Silver / White Gold",
    finger: "Middle",
    day: "Saturday",
    mantra: "Om Pram Preem Praum Sah Shanishcharaya Namah",
    birthstoneMonths: ["September"],
  },
  {
    id: "hessonite",
    name: "Hessonite",
    hindiName: "Gomed",
    planet: "Rahu",
    zodiacSigns: ["Aquarius", "Gemini", "Virgo"],
    chakras: ["Solar Plexus", "Crown"],
    purposes: ["Ambition", "Sudden Gains", "Protection", "Clarity"],
    color: "Honey / Cinnamon",
    colorHex: "#C88A35",
    hardness: 7.5,
    origin: ["Sri Lanka", "India", "Africa", "Brazil"],
    description:
      "Hessonite channels the unpredictable, ambitious energy of Rahu (North Node). It helps navigate sudden changes, unexpected gains, and protects against confusion and deception. Gomed is particularly beneficial for those in politics, media, and unconventional careers.",
    benefits: [
      "Brings sudden gains and opportunities",
      "Protects against confusion and mental fog",
      "Enhances ambition and strategic thinking",
      "Helps overcome fear and anxiety",
      "Supports recovery from past traumas",
    ],
    howToWear:
      "Set in silver, worn on the middle finger of the right hand. Purify with mustard oil and Ganga water. Wear on a Saturday during twilight hours.",
    metal: "Silver",
    finger: "Middle",
    day: "Saturday",
    mantra: "Om Bhram Bhrim Bhraum Sah Rahave Namah",
    birthstoneMonths: ["January"],
  },
  {
    id: "cats-eye",
    name: "Cat's Eye",
    hindiName: "Lehsunia",
    planet: "Ketu",
    zodiacSigns: ["Pisces", "Sagittarius", "Scorpio"],
    chakras: ["Root", "Third Eye"],
    purposes: ["Spiritual Growth", "Protection", "Intuition", "Detachment"],
    color: "Greenish-Yellow / Brown",
    colorHex: "#8B7D3A",
    hardness: 8.5,
    origin: ["Sri Lanka", "India", "Brazil", "Madagascar"],
    description:
      "Cat's Eye embodies the mystical, detached energy of Ketu (South Node). It enhances spiritual insight, protects against hidden enemies, and supports meditation and yogic practices. The distinctive chatoyant band resembles a cat's eye, symbolizing watchful intuition.",
    benefits: [
      "Enhances spiritual growth and meditation",
      "Protects against hidden enemies and jealousy",
      "Strengthens intuition and psychic abilities",
      "Helps in detachment and letting go",
      "Brings good luck in speculation and risk",
    ],
    howToWear:
      "Set in silver or ashta-dhatu (eight-metal alloy), worn on the little finger of the right hand. Purify with basil water. Wear on a Tuesday or Thursday during evening hours.",
    metal: "Silver / Ashta-dhatu",
    finger: "Little",
    day: "Tuesday / Thursday",
    mantra: "Om Straum Strim Straum Sah Ketave Namah",
    birthstoneMonths: [],
  },
  {
    id: "opal",
    name: "Opal",
    hindiName: "Dudhiya Patthar",
    planet: "Venus",
    zodiacSigns: ["Libra", "Taurus", "Pisces"],
    chakras: ["Crown", "Sacral"],
    purposes: ["Creativity", "Inspiration", "Love", "Transformation"],
    color: "Multi-color iridescent",
    colorHex: "#A8D5BA",
    hardness: 6,
    origin: ["Australia", "Ethiopia", "Mexico", "Brazil"],
    description:
      "Opal displays a mesmerizing play of colors that shifts with light and angle. It channels Venusian energy for creativity, inspiration, and emotional transformation. Each opal is unique, making it a deeply personal talisman.",
    benefits: [
      "Stimulates creativity and artistic expression",
      "Brings inspiration and fresh perspectives",
      "Enhances emotional sensitivity and empathy",
      "Supports transformation and personal growth",
      "Attracts love and deepens romantic connections",
    ],
    howToWear:
      "Set in silver or gold, worn on the ring finger or as a pendant. Purify with rose water under moonlight. Wear on a Friday during the waxing moon.",
    metal: "Silver / Gold",
    finger: "Ring / Pendant",
    day: "Friday",
    mantra: "Om Draam Dreem Draum Sah Shukraya Namah",
    birthstoneMonths: ["October"],
  },
  {
    id: "amethyst",
    name: "Amethyst",
    hindiName: "Jamunia",
    planet: "Saturn",
    zodiacSigns: ["Aquarius", "Pisces", "Capricorn"],
    chakras: ["Crown", "Third Eye"],
    purposes: ["Spiritual Growth", "Clarity", "Protection", "Calm"],
    color: "Purple / Violet",
    colorHex: "#9966CC",
    hardness: 7,
    origin: ["Brazil", "Uruguay", "Zambia", "India"],
    description:
      "Amethyst carries the serene, spiritual energy of Saturn in its gentler form. It calms the mind, enhances meditation, and provides protection against negative thoughts. Ancient Greeks believed it prevented intoxication, making it a stone of sobriety and clear thinking.",
    benefits: [
      "Calms the mind and aids meditation",
      "Protects against negative energy and nightmares",
      "Enhances intuition and spiritual awareness",
      "Supports sobriety and clear decision-making",
      "Relieves stress and promotes restful sleep",
    ],
    howToWear:
      "Set in silver, worn on the middle finger or as a pendant near the heart. Purify with salt water or moonlight. Wear on a Saturday during evening hours.",
    metal: "Silver",
    finger: "Middle / Pendant",
    day: "Saturday",
    mantra: "Om Pram Preem Praum Sah Shanishcharaya Namah",
    birthstoneMonths: ["February"],
  },
  {
    id: "turquoise",
    name: "Turquoise",
    hindiName: "Firoza",
    planet: "Jupiter",
    zodiacSigns: ["Sagittarius", "Pisces", "Aquarius"],
    chakras: ["Throat", "Heart"],
    purposes: ["Communication", "Protection", "Healing", "Friendship"],
    color: "Blue-Green",
    colorHex: "#40E0D0",
    hardness: 6,
    origin: ["Iran (Persia)", "Arizona (USA)", "Tibet", "Egypt"],
    description:
      "Turquoise has been cherished for over 6,000 years across civilizations. It embodies Jupiter's expansive wisdom combined with earthy protection. This stone promotes honest communication, shields against harm, and strengthens friendship bonds.",
    benefits: [
      "Promotes honest and clear communication",
      "Provides protection during travel",
      "Strengthens friendship and social bonds",
      "Supports respiratory and immune health",
      "Brings good fortune and success",
    ],
    howToWear:
      "Set in silver or copper, worn as a ring or pendant. Purify with sage smoke or salt water. Wear on a Thursday morning after sunrise.",
    metal: "Silver / Copper",
    finger: "Ring / Pendant",
    day: "Thursday",
    mantra: "Om Gram Grim Graum Sah Guruve Namah",
    birthstoneMonths: ["December"],
  },
];

export const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

export const chakras = [
  "Root",
  "Sacral",
  "Solar Plexus",
  "Heart",
  "Throat",
  "Third Eye",
  "Crown",
];

export const purposes = [
  "Confidence",
  "Leadership",
  "Vitality",
  "Protection",
  "Peace",
  "Emotional Balance",
  "Intuition",
  "Creativity",
  "Courage",
  "Strength",
  "Drive",
  "Wisdom",
  "Communication",
  "Prosperity",
  "Marriage",
  "Spiritual Growth",
  "Luxury",
  "Beauty",
  "Love",
  "Discipline",
  "Focus",
  "Justice",
  "Ambition",
  "Sudden Gains",
  "Clarity",
  "Detachment",
  "Inspiration",
  "Transformation",
  "Calm",
  "Healing",
  "Friendship",
];

export const planets = [
  "Sun",
  "Moon",
  "Mars",
  "Mercury",
  "Jupiter",
  "Venus",
  "Saturn",
  "Rahu",
  "Ketu",
];

export function getGemstoneById(id: string): Gemstone | undefined {
  return gemstones.find((g) => g.id === id);
}

export function getGemstonesByZodiac(sign: string): Gemstone[] {
  return gemstones.filter((g) => g.zodiacSigns.includes(sign));
}

export function getGemstonesByChakra(chakra: string): Gemstone[] {
  return gemstones.filter((g) => g.chakras.includes(chakra));
}

export function getGemstonesByPlanet(planet: string): Gemstone[] {
  return gemstones.filter((g) => g.planet === planet);
}

export function getGemstonesByPurpose(purpose: string): Gemstone[] {
  return gemstones.filter((g) => g.purposes.includes(purpose));
}

export function filterGemstones(
  query: string,
  filters: {
    zodiac?: string;
    chakra?: string;
    planet?: string;
    purpose?: string;
  }
): Gemstone[] {
  return gemstones.filter((g) => {
    if (
      query &&
      !g.name.toLowerCase().includes(query.toLowerCase()) &&
      !g.hindiName.toLowerCase().includes(query.toLowerCase()) &&
      !g.planet.toLowerCase().includes(query.toLowerCase()) &&
      !g.purposes.some((p) => p.toLowerCase().includes(query.toLowerCase()))
    ) {
      return false;
    }
    if (filters.zodiac && !g.zodiacSigns.includes(filters.zodiac)) return false;
    if (filters.chakra && !g.chakras.includes(filters.chakra)) return false;
    if (filters.planet && g.planet !== filters.planet) return false;
    if (filters.purpose && !g.purposes.includes(filters.purpose)) return false;
    return true;
  });
}
