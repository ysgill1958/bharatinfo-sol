export interface ServiceSubcategory {
  name: string;
  slug: string;
  description?: string;
}

export interface ServiceCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  subcategories: ServiceSubcategory[];
  icon?: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 1,
    name: "Educational Institutions",
    slug: "educational-institutions",
    description: "Top-rated educational institutions and learning centers",
    subcategories: [
      { name: "Best Schools", slug: "schools", description: "Primary, Secondary, and High Schools" },
      { name: "Best International Schools", slug: "international-schools" },
      { name: "Best Boarding Schools", slug: "boarding-schools" },
      { name: "Best Preschools", slug: "preschools", description: "Montessori, Play-Based, and Day-care" },
      { name: "Best Colleges", slug: "colleges", description: "Arts, Science, Commerce, Engineering, Medical" },
      { name: "Best Universities", slug: "universities", description: "Public, Private, and Research Universities" },
      { name: "Best Coaching Centers", slug: "coaching", description: "IIT-JEE, NEET, UPSC/IAS" },
      { name: "Best Language Schools", slug: "language-schools" },
      { name: "Best Specialized Schools", slug: "specialized-schools", description: "Music, Art, Dance, Sports" },
      { name: "Best Tutoring Services", slug: "tutoring" }
    ]
  },
  {
    id: 2,
    name: "Medical Services",
    slug: "medical-services",
    description: "Leading healthcare providers and medical facilities",
    subcategories: [
      { name: "Best General Hospitals", slug: "general-hospitals" },
      { name: "Best Specialty Hospitals", slug: "specialty-hospitals" },
      { name: "Best Alternative Medicine", slug: "alternative-medicine" },
      { name: "Best Diagnostic Labs", slug: "diagnostic-labs" },
      { name: "Best Mental Health Services", slug: "mental-health" },
      { name: "Best Dental Clinics", slug: "dental-clinics" },
      { name: "Best Eye Care Centers", slug: "eye-care" },
      { name: "Best Maternity Hospitals", slug: "maternity" },
      { name: "Best Pediatric Care", slug: "pediatric" },
      { name: "Best Emergency Services", slug: "emergency-services" },
      { name: "Best Physiotherapy Centers", slug: "physiotherapy" },
      { name: "Best Cardiology Centers", slug: "cardiology" },
      { name: "Best Neurology Centers", slug: "neurology" },
      { name: "Best Orthopedic Centers", slug: "orthopedic" }
    ]
  },
  {
    id: 3,
    name: "Fitness and Wellness",
    slug: "fitness-wellness",
    description: "Premier fitness centers and wellness facilities",
    subcategories: [
      { name: "Best Gyms", slug: "gyms" },
      { name: "Best Fitness Studios", slug: "fitness-studios" },
      { name: "Best Yoga Centers", slug: "yoga" },
      { name: "Best Spas", slug: "spas" },
      { name: "Best Sports Facilities", slug: "sports-facilities" },
      { name: "Best Meditation Centers", slug: "meditation" },
      { name: "Best Wellness Retreats", slug: "wellness-retreats" },
      { name: "Best Nutrition Services", slug: "nutrition" },
      { name: "Best Physical Therapy", slug: "physical-therapy" }
    ]
  },
  {
    id: 4,
    name: "Hospitality",
    slug: "hospitality",
    description: "Top-rated accommodation and dining establishments",
    subcategories: [
      { name: "Best Hotels", slug: "hotels" },
      { name: "Best Resorts", slug: "resorts" },
      { name: "Best Restaurants", slug: "restaurants" },
      { name: "Best Cafes", slug: "cafes" },
      { name: "Best Hostels", slug: "hostels" },
      { name: "Best Banquet Halls", slug: "banquet-halls" },
      { name: "Best Event Venues", slug: "event-venues" },
      { name: "Best Fine Dining", slug: "fine-dining" },
      { name: "Best Food Courts", slug: "food-courts" }
    ]
  },
  {
    id: 5,
    name: "Travel and Tourism",
    slug: "travel-tourism",
    description: "Leading travel services and tourism operators",
    subcategories: [
      { name: "Best Travel Agencies", slug: "travel-agencies" },
      { name: "Best Tour Operators", slug: "tour-operators" },
      { name: "Best Transport Services", slug: "transport-services" },
      { name: "Best Adventure Tourism", slug: "adventure-tourism" },
      { name: "Best Spiritual Tourism", slug: "spiritual-tourism" },
      { name: "Best Eco Tourism", slug: "eco-tourism" },
      { name: "Best Heritage Tours", slug: "heritage-tours" },
      { name: "Best Wildlife Tours", slug: "wildlife-tours" }
    ]
  },
  {
    id: 6,
    name: "Professional Services",
    slug: "professional-services",
    description: "Expert professional services and consultancy",
    subcategories: [
      { name: "Best Legal Services", slug: "legal" },
      { name: "Best Financial Services", slug: "financial" },
      { name: "Best Accounting Services", slug: "accounting" },
      { name: "Best HR Services", slug: "hr-services" },
      { name: "Best Marketing Agencies", slug: "marketing" },
      { name: "Best IT Services", slug: "it-services" },
      { name: "Best Business Consultants", slug: "business-consulting" },
      { name: "Best Tax Services", slug: "tax-services" }
    ]
  },
  {
    id: 7,
    name: "Real Estate",
    slug: "real-estate",
    description: "Top real estate services and property solutions",
    subcategories: [
      { name: "Best Property Dealers", slug: "property-dealers" },
      { name: "Best Real Estate Agents", slug: "real-estate-agents" },
      { name: "Best Property Management", slug: "property-management" },
      { name: "Best Interior Designers", slug: "interior-designers" },
      { name: "Best Architecture Firms", slug: "architecture" },
      { name: "Best Construction Services", slug: "construction" },
      { name: "Best Vastu Consultants", slug: "vastu" }
    ]
  },
  {
    id: 8,
    name: "Home Services",
    slug: "home-services",
    description: "Reliable home maintenance and improvement services",
    subcategories: [
      { name: "Best Cleaning Services", slug: "cleaning" },
      { name: "Best Plumbing Services", slug: "plumbing" },
      { name: "Best Electrical Services", slug: "electrical" },
      { name: "Best Pest Control", slug: "pest-control" },
      { name: "Best Painting Services", slug: "painting" },
      { name: "Best Carpentry Services", slug: "carpentry" },
      { name: "Best Home Security", slug: "security" },
      { name: "Best Gardening Services", slug: "gardening" },
      { name: "Best Bridal Makeup", slug: "bridal-makeup" },
      { name: "Best Hair Treatment", slug: "hair-treatment" },
      { name: "Best Cosmetic Procedures", slug: "cosmetic-procedures" },
      { name: "Best Wellness Spa", slug: "wellness-spa" },
      { name: "Best Home Automation", slug: "home-automation" },
      { name: "Best Smart Home Services", slug: "smart-home" },
      { name: "Best Solar Installation", slug: "solar-installation" },
      { name: "Best Home Theater Setup", slug: "home-theater" }
    ]
  },
  {
    id: 9,
    name: "Beauty and Personal Care",
    slug: "beauty-personal-care",
    description: "Premium beauty and grooming services",
    subcategories: [
      { name: "Best Beauty Salons", slug: "beauty-salons" },
      { name: "Best Hair Salons", slug: "hair-salons" },
      { name: "Best Spa Centers", slug: "spa-centers" },
      { name: "Best Nail Studios", slug: "nail-studios" },
      { name: "Best Makeup Artists", slug: "makeup-artists" },
      { name: "Best Skin Care Clinics", slug: "skin-care" },
      { name: "Best Ayurvedic Centers", slug: "ayurvedic" }
    ]
  },
  {
    id: 10,
    name: "Automotive Services",
    slug: "automotive",
    description: "Trusted automotive care and maintenance services",
    subcategories: [
      { name: "Best Car Service Centers", slug: "car-service" },
      { name: "Best Auto Parts Shops", slug: "auto-parts" },
      { name: "Best Car Wash Services", slug: "car-wash" },
      { name: "Best Car Dealers", slug: "car-dealers" },
      { name: "Best Bike Service Centers", slug: "bike-service" },
      { name: "Best Towing Services", slug: "towing" },
      { name: "Best Corporate Events", slug: "corporate-events" },
      { name: "Best Birthday Planning", slug: "birthday-planning" },
      { name: "Best Festival Events", slug: "festival-events" },
      { name: "Best Concert Management", slug: "concert-management" }
    ]
  },
  {
    id: 11,
    name: "Event Services",
    slug: "event-services",
    description: "Professional event planning and management services",
    subcategories: [
      { name: "Best Wedding Planners", slug: "wedding-planners" },
      { name: "Best Event Decorators", slug: "event-decorators" },
      { name: "Best Catering Services", slug: "catering" },
      { name: "Best Photography Services", slug: "photography" },
      { name: "Best DJ Services", slug: "dj-services" },
      { name: "Best Event Equipment Rental", slug: "equipment-rental" }
    ]
  },
  {
    id: 12,
    name: "Shopping and Retail",
    slug: "shopping-retail",
    description: "Best retail establishments and shopping centers",
    subcategories: [
      { name: "Best Shopping Malls", slug: "shopping-malls" },
      { name: "Best Electronics Stores", slug: "electronics" },
      { name: "Best Fashion Boutiques", slug: "fashion" },
      { name: "Best Jewelry Stores", slug: "jewelry" },
      { name: "Best Bookstores", slug: "bookstores" },
      { name: "Best Furniture Stores", slug: "furniture" }
    ]
  },
  {
    id: 13,
    name: "Entertainment",
    slug: "entertainment",
    description: "Top entertainment venues and recreational facilities",
    subcategories: [
      { name: "Best Movie Theaters", slug: "movie-theaters" },
      { name: "Best Gaming Centers", slug: "gaming" },
      { name: "Best Amusement Parks", slug: "amusement-parks" },
      { name: "Best Water Parks", slug: "water-parks" },
      { name: "Best Live Performance Venues", slug: "performance-venues" },
      { name: "Best Family Entertainment", slug: "family-entertainment" }
    ]
  },
  {
    id: 14,
    name: "Pet Services",
    slug: "pet-services",
    description: "Quality pet care and animal services",
    subcategories: [
      { name: "Best Veterinary Clinics", slug: "vet-clinics" },
      { name: "Best Pet Grooming", slug: "pet-grooming" },
      { name: "Best Pet Boarding", slug: "pet-boarding" },
      { name: "Best Pet Training", slug: "pet-training" },
      { name: "Best Pet Shops", slug: "pet-shops" }
    ]
  },
  {
    id: 15,
    name: "Religious Services",
    slug: "religious-services",
    description: "Religious institutions and spiritual services",
    subcategories: [
      { name: "Best Temples", slug: "temples" },
      { name: "Best Mosques", slug: "mosques" },
      { name: "Best Churches", slug: "churches" },
      { name: "Best Gurudwaras", slug: "gurudwaras" },
      { name: "Best Religious Classes", slug: "religious-classes" },
      { name: "Best Spiritual Centers", slug: "spiritual-centers" }
    ]
  },
  {
    id: 16,
    name: "Financial Services",
    slug: "financial-services",
    description: "Comprehensive financial and banking services",
    subcategories: [
      { name: "Best Banks", slug: "banks" },
      { name: "Best Investment Firms", slug: "investment-firms" },
      { name: "Best Insurance Companies", slug: "insurance" },
      { name: "Best Mutual Fund Advisors", slug: "mutual-funds" },
      { name: "Best Stock Brokers", slug: "stock-brokers" },
      { name: "Best Financial Planners", slug: "financial-planners" },
      { name: "Best Credit Unions", slug: "credit-unions" },
      { name: "Best Loan Services", slug: "loan-services" }
    ]
  },
  {
    id: 17,
    name: "Transportation Services",
    slug: "transportation",
    description: "Reliable transportation and logistics solutions",
    subcategories: [
      { name: "Best Taxi Services", slug: "taxi" },
      { name: "Best Car Rental", slug: "car-rental" },
      { name: "Best Moving Services", slug: "moving" },
      { name: "Best Courier Services", slug: "courier" },
      { name: "Best Logistics Companies", slug: "logistics" },
      { name: "Best Bus Services", slug: "bus" },
      { name: "Best Air Travel", slug: "air-travel" },
      { name: "Best Railway Services", slug: "railway" },
      { name: "Best AI Services", slug: "ai-services" },
      { name: "Best Blockchain Solutions", slug: "blockchain" },
      { name: "Best IoT Services", slug: "iot" },
      { name: "Best AR/VR Development", slug: "ar-vr" },
      { name: "Best Freight Services", slug: "freight" },
      { name: "Best Container Transport", slug: "container-transport" },
      { name: "Best Cold Chain Logistics", slug: "cold-chain" },
      { name: "Best Express Delivery", slug: "express-delivery" }
    ]
  },
  {
    id: 18,
    name: "Technology Services",
    slug: "technology",
    description: "Advanced technology and digital solutions",
    subcategories: [
      { name: "Best Software Companies", slug: "software" },
      { name: "Best Web Development", slug: "web-development" },
      { name: "Best App Development", slug: "app-development" },
      { name: "Best IT Support", slug: "it-support" },
      { name: "Best Cloud Services", slug: "cloud-services" },
      { name: "Best Digital Marketing", slug: "digital-marketing" },
      { name: "Best Cybersecurity", slug: "cybersecurity" },
      { name: "Best Data Analytics", slug: "data-analytics" }
    ]
  },
  {
    id: 19,
    name: "Agriculture Services",
    slug: "agriculture",
    description: "Agricultural and farming support services",
    subcategories: [
      { name: "Best Farm Equipment", slug: "farm-equipment" },
      { name: "Best Seed Suppliers", slug: "seeds" },
      { name: "Best Fertilizer Dealers", slug: "fertilizers" },
      { name: "Best Agricultural Consultants", slug: "agri-consultants" },
      { name: "Best Irrigation Services", slug: "irrigation" },
      { name: "Best Organic Farming", slug: "organic-farming" },
      { name: "Best Livestock Services", slug: "livestock" },
      { name: "Best Agricultural Labs", slug: "agri-labs" }
    ]
  },
  {
    id: 20,
    name: "Legal Services",
    slug: "legal",
    description: "Professional legal services and consultation",
    subcategories: [
      { name: "Best Law Firms", slug: "law-firms" },
      { name: "Best Corporate Lawyers", slug: "corporate-lawyers" },
      { name: "Best Criminal Lawyers", slug: "criminal-lawyers" },
      { name: "Best Family Lawyers", slug: "family-lawyers" },
      { name: "Best Property Lawyers", slug: "property-lawyers" },
      { name: "Best Immigration Lawyers", slug: "immigration-lawyers" },
      { name: "Best Tax Lawyers", slug: "tax-lawyers" },
      { name: "Best Legal Documentation", slug: "legal-docs" }
    ]
  },
  {
    id: 21,
    name: "Media and Communication",
    slug: "media-communication",
    description: "Media, advertising and communication services",
    subcategories: [
      { name: "Best Advertising Agencies", slug: "advertising" },
      { name: "Best PR Firms", slug: "pr-firms" },
      { name: "Best Content Creation", slug: "content-creation" },
      { name: "Best Video Production", slug: "video-production" },
      { name: "Best Graphic Design", slug: "graphic-design" },
      { name: "Best Print Media", slug: "print-media" },
      { name: "Best Broadcasting", slug: "broadcasting" },
      { name: "Best Social Media Management", slug: "social-media" }
    ]
  },
  {
    id: 22,
    name: "Environmental Services",
    slug: "environmental",
    description: "Environmental and sustainability services",
    subcategories: [
      { name: "Best Waste Management", slug: "waste-management" },
      { name: "Best Recycling Centers", slug: "recycling" },
      { name: "Best Solar Services", slug: "solar" },
      { name: "Best Water Treatment", slug: "water-treatment" },
      { name: "Best Environmental Consultants", slug: "environmental-consultants" },
      { name: "Best Green Building", slug: "green-building" },
      { name: "Best Energy Auditors", slug: "energy-auditors" },
      { name: "Best Eco-friendly Products", slug: "eco-products" }
    ]
  },
  {
    id: 23,
    name: "Art and Culture",
    slug: "art-culture",
    description: "Cultural and artistic services and venues",
    subcategories: [
      { name: "Best Art Galleries", slug: "art-galleries" },
      { name: "Best Museums", slug: "museums" },
      { name: "Best Cultural Centers", slug: "cultural-centers" },
      { name: "Best Dance Schools", slug: "dance-schools" },
      { name: "Best Music Schools", slug: "music-schools" },
      { name: "Best Theater Groups", slug: "theater" },
      { name: "Best Art Supply Stores", slug: "art-supplies" },
      { name: "Best Cultural Events", slug: "cultural-events" }
    ]
  },
  {
    id: 24,
    name: "Sports and Recreation",
    slug: "sports-recreation",
    description: "Sports facilities and recreational services",
    subcategories: [
      { name: "Best Sports Clubs", slug: "sports-clubs" },
      { name: "Best Swimming Pools", slug: "swimming" },
      { name: "Best Tennis Courts", slug: "tennis" },
      { name: "Best Golf Courses", slug: "golf" },
      { name: "Best Sports Coaching", slug: "sports-coaching" },
      { name: "Best Adventure Sports", slug: "adventure-sports" },
      { name: "Best Sports Equipment", slug: "sports-equipment" },
      { name: "Best Recreation Centers", slug: "recreation" }
    ]
  },
  {
    id: 25,
    name: "Security Services",
    slug: "security",
    description: "Professional security and protection services",
    subcategories: [
      { name: "Best Security Agencies", slug: "security-agencies" },
      { name: "Best CCTV Installation", slug: "cctv" },
      { name: "Best Fire Safety", slug: "fire-safety" },
      { name: "Best Personal Security", slug: "personal-security" },
      { name: "Best Corporate Security", slug: "corporate-security" },
      { name: "Best Event Security", slug: "event-security" },
      { name: "Best Cybersecurity Services", slug: "cyber-security" },
      { name: "Best Security Equipment", slug: "security-equipment" }
    ]
  },
  {
    id: 26,
    name: "Digital Services",
    slug: "digital-services",
    description: "Comprehensive digital and online services",
    subcategories: [
      { name: "Best E-commerce Solutions", slug: "ecommerce" },
      { name: "Best Mobile App Services", slug: "mobile-apps" },
      { name: "Best SEO Services", slug: "seo" },
      { name: "Best Content Writing", slug: "content-writing" },
      { name: "Best UI/UX Design", slug: "ui-ux-design" },
      { name: "Best Social Media Marketing", slug: "social-media-marketing" },
      { name: "Best Email Marketing", slug: "email-marketing" },
      { name: "Best Virtual Assistance", slug: "virtual-assistance" },
      { name: "Best Data Science Services", slug: "data-science" },
      { name: "Best Machine Learning", slug: "machine-learning" },
      { name: "Best RPA Solutions", slug: "rpa" },
      { name: "Best API Development", slug: "api-development" }
    ]
  },
  {
    id: 27,
    name: "Manufacturing Services",
    slug: "manufacturing",
    description: "Industrial and manufacturing solutions",
    subcategories: [
      { name: "Best Textile Manufacturing", slug: "textile" },
      { name: "Best Electronics Manufacturing", slug: "electronics-manufacturing" },
      { name: "Best Food Processing", slug: "food-processing" },
      { name: "Best Automotive Manufacturing", slug: "auto-manufacturing" },
      { name: "Best Chemical Manufacturing", slug: "chemical" },
      { name: "Best Plastic Manufacturing", slug: "plastic" },
      { name: "Best Metal Fabrication", slug: "metal-fabrication" },
      { name: "Best 3D Printing Services", slug: "3d-printing" }
    ]
  },
  {
    id: 28,
    name: "Research and Development",
    slug: "research-development",
    description: "Research, innovation and development services",
    subcategories: [
      { name: "Best Research Labs", slug: "research-labs" },
      { name: "Best Product Development", slug: "product-development" },
      { name: "Best Clinical Research", slug: "clinical-research" },
      { name: "Best Market Research", slug: "market-research" },
      { name: "Best Scientific Research", slug: "scientific-research" },
      { name: "Best Innovation Centers", slug: "innovation" },
      { name: "Best Testing Labs", slug: "testing-labs" },
      { name: "Best Patent Services", slug: "patent-services" }
    ]
  },
  {
    id: 29,
    name: "Government Services",
    slug: "government-services",
    description: "Government and administrative services",
    subcategories: [
      { name: "Best Passport Services", slug: "passport" },
      { name: "Best Visa Services", slug: "visa" },
      { name: "Best Document Attestation", slug: "attestation" },
      { name: "Best License Services", slug: "license" },
      { name: "Best Registration Services", slug: "registration" },
      { name: "Best Certificate Services", slug: "certificates" },
      { name: "Best E-governance Centers", slug: "e-governance" },
      { name: "Best Public Services", slug: "public-services" }
    ]
  },
  {
    id: 30,
    name: "Skill Development",
    slug: "skill-development",
    description: "Professional skill development and training",
    subcategories: [
      { name: "Best Vocational Training", slug: "vocational" },
      { name: "Best Technical Training", slug: "technical" },
      { name: "Best Soft Skills Training", slug: "soft-skills" },
      { name: "Best Language Training", slug: "language-training" },
      { name: "Best Management Training", slug: "management-training" },
      { name: "Best Leadership Development", slug: "leadership" },
      { name: "Best Corporate Training", slug: "corporate-training" },
      { name: "Best Career Counseling", slug: "career-counseling" }
    ]
  },
  {
    id: 31,
    name: "Wellness and Alternative Medicine",
    slug: "wellness-alternative-medicine",
    description: "Holistic wellness and alternative healing services",
    subcategories: [
      { name: "Best Naturopathy Centers", slug: "naturopathy" },
      { name: "Best Homeopathy Clinics", slug: "homeopathy" },
      { name: "Best Acupuncture Centers", slug: "acupuncture" },
      { name: "Best Aromatherapy", slug: "aromatherapy" },
      { name: "Best Herbal Medicine", slug: "herbal-medicine" },
      { name: "Best Chiropractic Care", slug: "chiropractic" },
      { name: "Best Reflexology Centers", slug: "reflexology" },
      { name: "Best Traditional Medicine", slug: "traditional-medicine" }
    ]
  },
  {
    id: 32,
    name: "Creative Services",
    slug: "creative-services",
    description: "Professional creative and design services",
    subcategories: [
      { name: "Best Animation Studios", slug: "animation" },
      { name: "Best Interior Styling", slug: "interior-styling" },
      { name: "Best Fashion Design", slug: "fashion-design" },
      { name: "Best Industrial Design", slug: "industrial-design" },
      { name: "Best Game Design", slug: "game-design" },
      { name: "Best Sound Design", slug: "sound-design" },
      { name: "Best Visual Effects", slug: "vfx" },
      { name: "Best Creative Consultancy", slug: "creative-consultancy" }
    ]
  },
  {
    id: 33,
    name: "Business Support Services",
    slug: "business-support",
    description: "Essential business support and operational services",
    subcategories: [
      { name: "Best Virtual Office Services", slug: "virtual-office" },
      { name: "Best Business Registration", slug: "business-registration" },
      { name: "Best Trademark Services", slug: "trademark" },
      { name: "Best Translation Services", slug: "translation" },
      { name: "Best Data Entry Services", slug: "data-entry" },
      { name: "Best Transcription Services", slug: "transcription" },
      { name: "Best Office Equipment", slug: "office-equipment" },
      { name: "Best Business Insurance", slug: "business-insurance" }
    ]
  },
  {
    id: 34,
    name: "Child Care Services",
    slug: "child-care",
    description: "Professional child care and development services",
    subcategories: [
      { name: "Best Day Care Centers", slug: "day-care" },
      { name: "Best After School Care", slug: "after-school" },
      { name: "Best Child Development", slug: "child-development" },
      { name: "Best Special Needs Care", slug: "special-needs" },
      { name: "Best Pediatric Therapy", slug: "pediatric-therapy" },
      { name: "Best Child Counseling", slug: "child-counseling" },
      { name: "Best Play Schools", slug: "play-schools" },
      { name: "Best Child Activities", slug: "child-activities" }
    ]
  },
  {
    id: 35,
    name: "Senior Care Services",
    slug: "senior-care",
    description: "Comprehensive senior care and assistance services",
    subcategories: [
      { name: "Best Elder Care Homes", slug: "elder-care" },
      { name: "Best Home Nursing", slug: "home-nursing" },
      { name: "Best Geriatric Care", slug: "geriatric-care" },
      { name: "Best Senior Living", slug: "senior-living" },
      { name: "Best Memory Care", slug: "memory-care" },
      { name: "Best Senior Activities", slug: "senior-activities" },
      { name: "Best Senior Transport", slug: "senior-transport" },
      { name: "Best Senior Wellness", slug: "senior-wellness" }
    ]
  }
];

export const serviceMetaCategories = {
  trending: "Trending Services",
  topRated: "Top Rated Services",
  newlyListed: "Newly Listed",
  verified: "Verified Services",
  featured: "Featured Services",
  recommended: "Recommended for You",
  popular: "Most Popular",
  awardWinning: "Award Winning",
  sustainable: "Eco-Friendly Services",
  emergency: "24/7 Emergency Services",
  premium: "Premium Services",
  budget: "Budget-Friendly Options",
  innovative: "Innovative Services",
  certified: "Certified Professionals",
  customized: "Customized Solutions",
  traditional: "Traditional Services",
  modern: "Modern Solutions",
  specialized: "Specialized Services",
  wellness: "Wellness & Alternative",
  creative: "Creative & Design",
  business: "Business Support",
  childCare: "Child Care",
  seniorCare: "Senior Care",
  techEnabled: "Tech-Enabled Services",
  essential: "Essential Services"
};

export const serviceFilters = [
  {
    name: "By Rating",
    types: ["5 Star", "4+ Star", "3+ Star", "Highly Recommended", "Top Rated"]
  },
  {
    name: "By Price Range",
    types: ["Budget", "Mid-Range", "Premium", "Luxury", "Cost-Effective"]
  },
  {
    name: "By Location",
    types: ["Nearby", "In City", "Outside City", "Multiple Locations", "Pan India", "International"]
  },
  {
    name: "By Verification Status",
    types: ["Verified", "Top Rated", "Award Winning", "Certified", "Government Approved"]
  },
  {
    name: "By Availability",
    types: ["Open Now", "24/7", "By Appointment", "Weekend Only", "Emergency Available"]
  },
  {
    name: "By Experience",
    types: ["Newly Established", "5+ Years", "10+ Years", "20+ Years", "Industry Leaders"]
  },
  {
    name: "By Service Type",
    types: ["Online", "In-Person", "Hybrid", "Mobile Service", "Home Service"]
  },
  {
    name: "By Specialization",
    types: ["General", "Specialized", "Expert", "Advanced", "Basic"]
  },
  {
    name: "By Service Mode",
    types: ["Traditional", "Modern", "Hybrid", "Innovative", "Custom"]
  },
  {
    name: "By Coverage Area",
    types: ["Local", "Regional", "National", "International", "Global"]
  },
  {
    name: "By Target Age Group",
    types: ["Children", "Teens", "Adults", "Seniors", "All Ages"]
  },
  {
    name: "By Service Delivery",
    types: ["Instant", "Same Day", "Next Day", "Scheduled", "Custom Timeline"]
  },
  {
    name: "By Payment Options",
    types: ["Pre-paid", "Post-paid", "Subscription", "Pay-per-use", "Insurance Coverage"]
  }
]; 