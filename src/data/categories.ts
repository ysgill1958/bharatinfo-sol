export interface SubCategory {
  name: string;
  description?: string;
  slug: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  subcategories: SubCategory[];
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Government and Civic Services",
    slug: "government-civic-services",
    description: "Comprehensive government services, schemes, and civic information for citizens",
    subcategories: [
      { name: "Government Schemes & Subsidies", slug: "schemes-subsidies" },
      { name: "RTI Services", slug: "rti-services" },
      { name: "Local Governance", slug: "local-governance" },
      { name: "Election Information", slug: "election-info" },
      { name: "Legal Rights Awareness", slug: "legal-rights" },
      { name: "Pension Schemes", slug: "pension-schemes" }
    ]
  },
  {
    id: 2,
    name: "Healthcare and Medical Assistance",
    slug: "healthcare-medical",
    description: "Healthcare resources, medical assistance, and health-related services",
    subcategories: [
      { name: "Doctor & Hospital Directory", slug: "medical-directory" },
      { name: "Symptom Checker & Health Advice", slug: "health-advice" },
      { name: "Telemedicine Services", slug: "telemedicine" },
      { name: "Health Insurance", slug: "health-insurance" },
      { name: "Public Health Alerts", slug: "health-alerts" },
      { name: "Mental Health Resources", slug: "mental-health" }
    ]
  },
  {
    id: 3,
    name: "Education and Learning",
    slug: "education-learning",
    description: "Educational resources, learning opportunities, and academic guidance",
    subcategories: [
      { name: "Personalized Learning", slug: "personalized-learning" },
      { name: "Scholarships & Fellowships", slug: "scholarships" },
      { name: "Skill Development", slug: "skill-development" },
      { name: "Career Guidance", slug: "career-guidance" },
      { name: "Educational Institutions", slug: "institutions" },
      { name: "Special Needs Education", slug: "special-needs" }
    ]
  },
  {
    id: 4,
    name: "Jobs and Careers",
    slug: "jobs-careers",
    description: "Employment opportunities, career development, and professional growth",
    subcategories: [
      { name: "Job Matching", slug: "job-matching" },
      { name: "Resume Building", slug: "resume-building" },
      { name: "Freelancing Opportunities", slug: "freelancing" },
      { name: "Government Jobs", slug: "government-jobs" },
      { name: "Startup Opportunities", slug: "startup-jobs" },
      { name: "Skill Analysis", slug: "skill-analysis" }
    ]
  },
  {
    id: 5,
    name: "Business and Entrepreneurship",
    slug: "business-entrepreneurship",
    description: "Support services and resources for businesses and entrepreneurs",
    subcategories: [
      { name: "MSME Support", slug: "msme-support" },
      { name: "Business Funding", slug: "business-funding" },
      { name: "Market Research", slug: "market-research" },
      { name: "Legal & Tax Advisory", slug: "legal-tax" },
      { name: "Export-Import Guidance", slug: "export-import" },
      { name: "Tender Opportunities", slug: "tenders" }
    ]
  },
  {
    id: 6,
    name: "Agriculture and Rural Development",
    slug: "agriculture-rural",
    description: "Agricultural resources and rural development services",
    subcategories: [
      { name: "Crop Advisory", slug: "crop-advisory" },
      { name: "Weather Forecasts", slug: "weather" },
      { name: "Market Prices", slug: "market-prices" },
      { name: "Farmer Schemes", slug: "farmer-schemes" },
      { name: "Agri-input Resources", slug: "agri-inputs" },
      { name: "Land Rights", slug: "land-rights" }
    ]
  },
  {
    id: 7,
    name: "Women Empowerment and Gender Services",
    slug: "women-empowerment",
    description: "Services and resources focused on women's empowerment and gender equality",
    subcategories: [
      { name: "Women-Centric Schemes", slug: "women-schemes" },
      { name: "Legal Assistance", slug: "legal-help" },
      { name: "Maternal Health", slug: "maternal-health" },
      { name: "Skill Training", slug: "skill-training" },
      { name: "Crisis Support", slug: "crisis-support" }
    ]
  },
  {
    id: 8,
    name: "Financial Services and Inclusion",
    slug: "financial-services",
    description: "Financial management, services, and inclusion initiatives",
    subcategories: [
      { name: "Personal Finance", slug: "personal-finance" },
      { name: "Credit & Loans", slug: "credit-loans" },
      { name: "Insurance Services", slug: "insurance" },
      { name: "Welfare Programs", slug: "welfare" },
      { name: "Digital Finance", slug: "digital-finance" },
      { name: "Banking Services", slug: "banking" }
    ]
  },
  {
    id: 9,
    name: "Legal and Consumer Rights",
    slug: "legal-consumer",
    description: "Legal assistance and consumer rights protection services",
    subcategories: [
      { name: "Consumer Grievances", slug: "consumer-grievances" },
      { name: "Legal Documentation", slug: "legal-docs" },
      { name: "Cybercrime Support", slug: "cybercrime" },
      { name: "Dispute Resolution", slug: "disputes" },
      { name: "Employment Rights", slug: "employment-rights" }
    ]
  },
  {
    id: 10,
    name: "Technology, Innovation, and Startups",
    slug: "tech-innovation",
    description: "Resources for technology adoption, innovation, and startup growth",
    subcategories: [
      { name: "Tech Incubation", slug: "tech-incubation" },
      { name: "AI/ML Resources", slug: "ai-ml" },
      { name: "Startup Funding", slug: "startup-funding" },
      { name: "IP and Patents", slug: "ip-patents" },
      { name: "Tech Trends", slug: "tech-trends" }
    ]
  },
  {
    id: 11,
    name: "Environment and Sustainability",
    slug: "environment",
    description: "Environmental conservation and sustainability initiatives",
    subcategories: [
      { name: "Waste Management", slug: "waste-management" },
      { name: "Renewable Energy", slug: "renewable-energy" },
      { name: "Water Conservation", slug: "water" },
      { name: "Environmental Education", slug: "env-education" },
      { name: "NGO Projects", slug: "ngo-projects" },
      { name: "Air Quality", slug: "air-quality" }
    ]
  },
  {
    id: 12,
    name: "Housing, Real Estate, and Urban Services",
    slug: "housing-urban",
    description: "Housing solutions and urban development services",
    subcategories: [
      { name: "Affordable Housing", slug: "affordable-housing" },
      { name: "Property Services", slug: "property" },
      { name: "Rental Solutions", slug: "rental" },
      { name: "Construction Permits", slug: "construction" },
      { name: "Smart City Services", slug: "smart-city" }
    ]
  },
  {
    id: 40,
    name: "Utilities & Public Services",
    slug: "utilities-services",
    description: "Information about essential utilities and public services",
    subcategories: [
      { name: "Energy & Water Supply", slug: "energy-water" },
      { name: "Waste Management & Sanitation", slug: "waste-management" },
      { name: "Smart Grids & Energy Innovation", slug: "smart-grids" },
      { name: "Telecom & Internet Access", slug: "telecom-internet" },
      { name: "Urban Utilities & Maintenance", slug: "urban-utilities" },
      { name: "Disaster Response & Emergency Services", slug: "emergency-services" }
    ]
  },
  {
    id: 13,
    name: "Transport and Mobility",
    slug: "transport-mobility",
    description: "Transportation services and mobility solutions",
    subcategories: [
      { name: "Public Transport", slug: "public-transport" },
      { name: "RTO Services", slug: "rto" },
      { name: "EV Services", slug: "ev" },
      { name: "Vehicle Management", slug: "vehicle" },
      { name: "Logistics Support", slug: "logistics" }
    ]
  },
  {
    id: 14,
    name: "Culture, Arts, and Heritage",
    slug: "culture-arts",
    description: "Cultural promotion and heritage preservation services",
    subcategories: [
      { name: "Event Listings", slug: "events" },
      { name: "Tourism Guides", slug: "tourism" },
      { name: "Artisan Marketplace", slug: "artisans" },
      { name: "Arts Funding", slug: "arts-funding" },
      { name: "Heritage Conservation", slug: "heritage" }
    ]
  },
  {
    id: 15,
    name: "Emergency and Crisis Services",
    slug: "emergency-crisis",
    description: "Emergency response and crisis management services",
    subcategories: [
      { name: "Disaster Alerts", slug: "disaster-alerts" },
      { name: "Emergency Contacts", slug: "emergency-contacts" },
      { name: "Blood Donation", slug: "blood-donation" },
      { name: "Missing Persons", slug: "missing-persons" },
      { name: "Disaster Relief", slug: "disaster-relief" }
    ]
  },
  {
    id: 16,
    name: "Youth and Student Services",
    slug: "youth-student",
    description: "Services and resources for youth and students",
    subcategories: [
      { name: "Career Counseling", slug: "career-counseling" },
      { name: "Internships", slug: "internships" },
      { name: "Youth Programs", slug: "youth-programs" },
      { name: "Student Support", slug: "student-support" },
      { name: "Mental Health", slug: "youth-mental-health" }
    ]
  },
  {
    id: 17,
    name: "Senior Citizens and Differently-Abled",
    slug: "senior-disabled",
    description: "Services and support for senior citizens and differently-abled individuals",
    subcategories: [
      { name: "Old Age Homes", slug: "old-age-homes" },
      { name: "Employment Opportunities", slug: "disabled-employment" },
      { name: "Assistive Technology", slug: "assistive-tech" },
      { name: "Legal Support", slug: "senior-legal" },
      { name: "Healthcare Services", slug: "senior-healthcare" }
    ]
  },
  {
    id: 18,
    name: "Tourism, Hospitality, and Local Services",
    slug: "tourism-hospitality",
    description: "Tourism, hospitality, and local service solutions",
    subcategories: [
      { name: "Accommodation Reviews", slug: "accommodation" },
      { name: "Local Experiences", slug: "local-experiences" },
      { name: "Travel Planning", slug: "travel-planning" },
      { name: "Safety Advisories", slug: "travel-safety" },
      { name: "Local Services", slug: "local-services" }
    ]
  },
  {
    id: 19,
    name: "Entertainment and Media",
    slug: "entertainment-media",
    description: "Entertainment, media, and creative services",
    subcategories: [
      { name: "Event Recommendations", slug: "event-recommendations" },
      { name: "Local Artists", slug: "local-artists" },
      { name: "Content Streaming", slug: "streaming" },
      { name: "Creative Opportunities", slug: "creative-opportunities" }
    ]
  },
  {
    id: 20,
    name: "Community and Networking",
    slug: "community-networking",
    description: "Community engagement and networking platforms",
    subcategories: [
      { name: "Local Communities", slug: "local-communities" },
      { name: "Professional Networks", slug: "professional-networks" },
      { name: "Volunteering", slug: "volunteering" },
      { name: "Social Causes", slug: "social-causes" }
    ]
  }
];

export const metaCategories = {
  trending: "Trending Solutions",
  mostUsed: "Most Used Services",
  newServices: "New Services",
  emergency: "Emergency Services",
  featured: "Featured Solutions",
  recommended: "Recommended for You",
  aiPowered: "AI-Powered Services"
};

export const superCategories = [
  {
    name: "By Service Type",
    types: ["Essential Services", "Support Services", "Emergency Services", "Development Services"]
  },
  {
    name: "By User Group",
    types: ["Citizens", "Students", "Professionals", "Entrepreneurs", "Senior Citizens"]
  },
  {
    name: "By Domain",
    types: ["Government", "Healthcare", "Education", "Employment", "Business"]
  },
  {
    name: "By Access Type",
    types: ["Online Services", "Physical Services", "Hybrid Services", "AI-Assisted"]
  }
]; 