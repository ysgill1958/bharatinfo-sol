export interface Professional {
  name: string;
  description?: string;
  slug: string;
  specializations?: string[];
  qualifications?: string[];
}

export interface ProfessionalCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  professionals: Professional[];
}

export const professionalCategories: ProfessionalCategory[] = [
  // ... previous categories 1-5 ...
  {
    id: 6,
    name: "Legal and Compliance Professionals",
    slug: "legal-compliance",
    description: "Legal experts and compliance specialists",
    professionals: [
      { name: "Attorneys", slug: "attorneys", specializations: ["Civil", "Criminal", "Corporate", "Family Law"] },
      { name: "Intellectual Property Lawyers", slug: "ip-lawyers" },
      { name: "Immigration Lawyers", slug: "immigration-law" },
      { name: "Tax Lawyers", slug: "tax-law" },
      { name: "Environmental Lawyers", slug: "environmental-law" },
      { name: "Compliance Officers", slug: "compliance" },
      { name: "Corporate Governance Experts", slug: "corporate-governance" },
      { name: "Data Privacy Officers", slug: "privacy-officers" },
      { name: "Human Rights Advocates", slug: "human-rights" },
      { name: "Legal Consultants", slug: "legal-consulting" }
    ]
  },
  {
    id: 7,
    name: "Education and Training Professionals",
    slug: "education-training",
    description: "Educational experts and training specialists",
    professionals: [
      { name: "School Teachers", slug: "teachers", specializations: ["Primary", "Secondary", "High School"] },
      { name: "University Professors", slug: "professors" },
      { name: "Special Education Teachers", slug: "special-education" },
      { name: "Career Counselors", slug: "career-counseling" },
      { name: "Corporate Trainers", slug: "corporate-training" },
      { name: "Language Instructors", slug: "language-training" },
      { name: "Early Childhood Educators", slug: "early-childhood" },
      { name: "Educational Psychologists", slug: "edu-psychology" },
      { name: "Sports Coaches", slug: "sports-coaching" },
      { name: "Life Skills Trainers", slug: "life-skills" }
    ]
  },
  {
    id: 8,
    name: "Creative and Media Professionals",
    slug: "creative-media",
    description: "Creative artists and media experts",
    professionals: [
      { name: "Graphic Designers", slug: "graphic-design" },
      { name: "Content Writers", slug: "content-writing" },
      { name: "Film Directors", slug: "film-direction" },
      { name: "Photographers", slug: "photography" },
      { name: "Musicians", slug: "music" },
      { name: "Digital Artists", slug: "digital-art" },
      { name: "Voice Artists", slug: "voice-acting" },
      { name: "Animation Experts", slug: "animation" },
      { name: "Fashion Designers", slug: "fashion-design" },
      { name: "Interior Designers", slug: "interior-design" }
    ]
  },
  {
    id: 9,
    name: "Environmental and Sustainability Experts",
    slug: "environmental-sustainability",
    description: "Environmental conservation and sustainability specialists",
    professionals: [
      { name: "Environmental Scientists", slug: "environmental-science" },
      { name: "Climate Change Analysts", slug: "climate-change" },
      { name: "Sustainability Consultants", slug: "sustainability" },
      { name: "Renewable Energy Engineers", slug: "renewable-energy" },
      { name: "Waste Management Experts", slug: "waste-management" },
      { name: "Conservation Scientists", slug: "conservation" },
      { name: "Urban Planners", slug: "urban-planning" },
      { name: "Green Building Consultants", slug: "green-building" },
      { name: "Environmental Policy Analysts", slug: "environmental-policy" },
      { name: "Eco-Tourism Consultants", slug: "eco-tourism" }
    ]
  },
  {
    id: 10,
    name: "Astrology and Metaphysical Sciences",
    slug: "astrology-metaphysical",
    description: "Experts in astrology and metaphysical practices",
    professionals: [
      { name: "Vedic Astrologers", slug: "vedic-astrology" },
      { name: "Numerologists", slug: "numerology" },
      { name: "Palmists", slug: "palmistry" },
      { name: "Vastu Consultants", slug: "vastu" },
      { name: "Feng Shui Experts", slug: "feng-shui" },
      { name: "Tarot Readers", slug: "tarot" },
      { name: "Horoscope Experts", slug: "horoscope" },
      { name: "Gemstone Consultants", slug: "gemstone" },
      { name: "Spiritual Healers", slug: "spiritual-healing" },
      { name: "Metaphysical Practitioners", slug: "metaphysical" }
    ]
  },
  {
    id: 11,
    name: "Religious and Spiritual Leaders",
    slug: "religious-spiritual",
    description: "Religious leaders and spiritual guides from various faiths",
    professionals: [
      { name: "Hindu Priests", slug: "hindu-priests", specializations: ["Vedic Rituals", "Temple Services"] },
      { name: "Islamic Scholars", slug: "islamic-scholars", specializations: ["Quran Studies", "Islamic Law"] },
      { name: "Christian Clergy", slug: "christian-clergy" },
      { name: "Buddhist Monks", slug: "buddhist-monks" },
      { name: "Jain Munis", slug: "jain-munis" },
      { name: "Sikh Granthis", slug: "sikh-granthis" },
      { name: "Wedding Ritual Experts", slug: "wedding-rituals" },
      { name: "Ceremony Organizers", slug: "ceremony-organizers" },
      { name: "Cultural Advisors", slug: "cultural-advisors" },
      { name: "Religious Festival Planners", slug: "festival-planners" }
    ]
  },
  {
    id: 12,
    name: "Agriculture and Food Production",
    slug: "agriculture-food",
    description: "Agricultural experts and food production specialists",
    professionals: [
      { name: "Agricultural Scientists", slug: "agri-scientists" },
      { name: "Organic Farmers", slug: "organic-farming" },
      { name: "Food Technologists", slug: "food-tech" },
      { name: "Soil Scientists", slug: "soil-science" },
      { name: "Plant Pathologists", slug: "plant-pathology" },
      { name: "Agronomists", slug: "agronomy" },
      { name: "Food Safety Inspectors", slug: "food-safety" },
      { name: "Agribusiness Consultants", slug: "agribusiness" },
      { name: "Hydroponics Experts", slug: "hydroponics" },
      { name: "Urban Farming Specialists", slug: "urban-farming" }
    ]
  },
  {
    id: 13,
    name: "Transportation and Logistics",
    slug: "transportation-logistics",
    description: "Transportation and logistics management experts",
    professionals: [
      { name: "Commercial Pilots", slug: "pilots" },
      { name: "Air Traffic Controllers", slug: "air-traffic" },
      { name: "Ship Captains", slug: "ship-captains" },
      { name: "Marine Engineers", slug: "marine-engineering" },
      { name: "Railway Engineers", slug: "railway" },
      { name: "Logistics Managers", slug: "logistics" },
      { name: "Supply Chain Experts", slug: "supply-chain" },
      { name: "Fleet Managers", slug: "fleet-management" },
      { name: "Customs Brokers", slug: "customs" },
      { name: "Transportation Planners", slug: "transport-planning" }
    ]
  },
  {
    id: 14,
    name: "Science and Research",
    slug: "science-research",
    description: "Scientific researchers and academic professionals",
    professionals: [
      { name: "Research Scientists", slug: "researchers", specializations: ["Physics", "Chemistry", "Biology"] },
      { name: "Clinical Researchers", slug: "clinical-research" },
      { name: "Space Scientists", slug: "space-science" },
      { name: "Quantum Physicists", slug: "quantum-physics" },
      { name: "Biotechnologists", slug: "biotech" },
      { name: "Neuroscientists", slug: "neuroscience" },
      { name: "Materials Scientists", slug: "materials-science" },
      { name: "Data Researchers", slug: "data-research" },
      { name: "Research Analysts", slug: "research-analysis" },
      { name: "Laboratory Directors", slug: "lab-directors" }
    ]
  },
  {
    id: 15,
    name: "Emerging Technologies",
    slug: "emerging-tech",
    description: "Experts in cutting-edge and future technologies",
    professionals: [
      { name: "Quantum Computing Engineers", slug: "quantum-computing" },
      { name: "Robotics Engineers", slug: "robotics" },
      { name: "AR/VR Developers", slug: "ar-vr" },
      { name: "IoT Specialists", slug: "iot" },
      { name: "Drone Engineers", slug: "drone-tech" },
      { name: "Bioinformatics Experts", slug: "bioinformatics" },
      { name: "Nanotech Researchers", slug: "nanotech" },
      { name: "Space Technology Engineers", slug: "space-tech" },
      { name: "AI Ethics Consultants", slug: "ai-ethics" },
      { name: "Synthetic Biology Engineers", slug: "synth-bio" }
    ]
  }
  // ... continue with more categories ...
];

export const professionalMetaCategories = {
  trending: "Trending Professionals",
  topRated: "Top Rated Professionals",
  newlyJoined: "Newly Joined",
  verified: "Verified Professionals",
  featured: "Featured Experts",
  recommended: "Recommended for You"
};

export const professionalFilters = [
  {
    name: "By Experience Level",
    types: ["Entry Level", "Mid Level", "Senior", "Expert", "Veteran"]
  },
  {
    name: "By Location",
    types: ["Local", "National", "International", "Remote"]
  },
  {
    name: "By Verification Status",
    types: ["Verified", "Top Rated", "Premium", "Standard"]
  },
  {
    name: "By Availability",
    types: ["Available Now", "Available Today", "By Appointment", "Weekends Only"]
  },
  {
    name: "By Language",
    types: ["English", "Hindi", "Regional Languages", "Multiple Languages"]
  },
  {
    name: "By Service Mode",
    types: ["In-Person", "Online", "Hybrid", "Home Visit"]
  }
]; 