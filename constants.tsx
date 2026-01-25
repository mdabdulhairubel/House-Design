
import { Service, PortfolioItem, Testimonial } from './types';

export const WHATSAPP_NUMBER = "01602300253";
export const EMAIL = "support@housedesign.bd";
export const BUSINESS_NAME = "House Design BD";

export const SERVICES: Service[] = [
  {
    id: 'res-design',
    title: 'Modern & Low Cost House Design in Bangladesh',
    slug: 'house-design-bangladesh',
    description: 'Expert architectural solutions specifically tailored for low cost house design in Bangladesh. We create sustainable, high-ventilation, and aesthetically superior residential designs for both city and village areas.',
    benefits: ['Optimized for 2-katha and 3-katha plots', 'Village house design specialist', 'RAJUK & CDA approval assistance'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'village-design',
    title: 'Village House Design in Bangladesh (গ্রামের বাড়ির ডিজাইন)',
    slug: 'village-house-design-bangladesh',
    description: 'Specialized architectural plans for beautiful and functional homes in rural settings. We combine traditional Bangladeshi lifestyle needs with modern engineering to create cost-effective, durable, and climate-resilient village homes.',
    benefits: ['Flood-resistant foundation planning', 'Natural cross-ventilation focus', 'Local material cost optimization'],
    image: 'https://images.unsplash.com/photo-1590059132718-5ebce19b0561?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'floor-plan',
    title: 'Residential 3 Bedroom House Plan Design',
    slug: 'house-plan-design-bangladesh',
    description: 'Detailed 1200 sq ft house plans and 3 bedroom house designs. Our structural plans maximize space utility and provide accurate cost estimations for budget-friendly building.',
    benefits: ['Accurate 3D floor plans', 'Cost-effective structural engineering', 'Modern interior layouts'],
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'duplex',
    title: 'Luxury & Modern Duplex House Design BD',
    slug: 'duplex-house-design-bd',
    description: 'Iconic duplex house design for landowners in Dhaka and beyond. We combine luxury aesthetics with practical living, focusing on double-height ceilings and stunning facades.',
    benefits: ['Premium duplex floor plans', 'Modern glass facade designs', 'Internal staircase specialists'],
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '3d-design',
    title: '4K 3D Exterior & Interior Design Services',
    slug: '3d-house-design-services',
    description: 'Photorealistic 3D exterior visualization and architectural renderings. See your modern house design in Bangladesh come to life before construction begins.',
    benefits: ['Realistic lighting simulations', 'Material & texture rendering', 'Virtual walk-through tours'],
    image: 'https://images.unsplash.com/photo-1600607687940-c52af096999a?auto=format&fit=crop&w=1200&q=80'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 1,
    title: "ডুপ্লেক্স বাড়ির ডিজাইন (Luxury Duplex Design)",
    location: "Gulshan, Dhaka",
    type: "Modern Duplex",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    description: "Premium duplex house design in Bangladesh featuring 4 bedrooms, double-height living room, and a rooftop garden. Best for urban residential plots."
  },
  {
    id: 2,
    title: "আধুনিক ৩ বেডরুমের বাড়ির নকশা (3 Bedroom Modern House)",
    location: "Nasirabad, Chattogram",
    type: "Apartment Building",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80",
    description: "Modern house design Bangladesh for 5-storey residential buildings. Optimized for natural light and high ventilation in dense urban areas."
  },
  {
    id: 3,
    title: "Village House Design in Bangladesh (গ্রামের বাড়ির ডিজাইন)",
    location: "Sreemangal, Sylhet",
    type: "Modern Villa",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description: "Functional and beautiful village house design in Bangladesh. Focused on affordability (Low Cost) and durable architectural materials."
  },
  {
    id: 4,
    title: "1200 sq ft House Plan (১২০০ স্কয়ার ফিট বাড়ির ডিজাইন)",
    location: "Uttara, Dhaka",
    type: "Single Storey",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
    description: "Small house design for a 2.5 katha plot. A low-cost 3-bedroom house plan design that maximizes space utility for middle-class families."
  },
  {
    id: 5,
    title: "অল্প খরচে সুন্দর বাড়ির ডিজাইন (Low Cost House Design)",
    location: "Khulna City",
    type: "Affordable Duplex",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    description: "Budget-friendly duplex house design BD. We provide detailed cost estimations (১০ লাখ টাকায় বাড়ি) and architectural drawings for sustainable living."
  },
  {
    id: 6,
    title: "একতলা বাড়ির ডিজাইন (Single Story Modern Design)",
    location: "Rajshahi",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
    description: "Simple yet modern single-story house design in Bangladesh. Best for suburban and rural areas looking for minimalist aesthetics."
  }
];

export const EXTERIOR_VISUALIZATIONS = [
  {
    id: 101,
    title: "Modern Glass Facade - 3D Exterior Visualization",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=90",
    timeOfDay: "Twilight",
    details: "High-end 3D architectural rendering for a luxury duplex house design in Bangladesh. Featuring soft twilight lighting and emissive interior glows."
  },
  {
    id: 102,
    title: "Small House Design 3D Model (ছোট বাড়ির ডিজাইন)",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=90",
    timeOfDay: "Midday",
    details: "3D visualization of a low-cost 3-bedroom house design for narrow urban plots. Harsh shadows emphasize depth and structural protrusions."
  },
  {
    id: 103,
    title: "Premium Duplex Exterior Rendering",
    image: "https://images.unsplash.com/photo-1600607687940-c52af096999a?auto=format&fit=crop&w=1200&q=90",
    timeOfDay: "Overcast",
    details: "Architectural renderings for modern house designs in Bangladesh showing material textures like stone, wood, and aluminum cladding in soft light."
  },
  {
    id: 104,
    title: "Village House Design 3D (গ্রামের আধুনিক বাড়ি)",
    image: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=90",
    timeOfDay: "Morning",
    details: "Visualization of an eco-friendly villa suitable for rural settings in Bangladesh. Natural sunlight enhances the warm wood grain and concrete finish."
  },
  {
    id: 105,
    title: "Tropical Modern Home Design",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=90",
    timeOfDay: "High Noon",
    details: "A tropical modern house design using sustainable wood louvers and exposed concrete for natural cooling. Sharp 4K rendering captures every texture detail."
  },
  {
    id: 106,
    title: "Luxury 6-Storey Residential Facade",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=90",
    timeOfDay: "Evening Lighting",
    details: "Night-time architectural visualization showing LED strip lighting and glass balcony details for a modern urban apartment in Dhaka."
  },
  {
    id: 107,
    title: "Minimalist White Duplex Exterior",
    image: "https://images.unsplash.com/photo-1512914890251-2f96a9b0bbe2?auto=format&fit=crop&w=1200&q=90",
    timeOfDay: "Golden Hour",
    details: "Clean minimalist lines with stark white finish and large floor-to-ceiling windows, optimized for panoramic views and sunset reflections."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Engr. Mahbubur Rahman",
    location: "Dhaka",
    comment: "House Design BD provided the most detailed structural drawing for my 6-storey building. Their understanding of RAJUK rules saved me months of headache.",
    rating: 5
  },
  {
    id: 2,
    name: "Dr. Sumaiya Khatun",
    location: "Chattogram",
    comment: "The 3D interior design for our new duplex was mind-blowing. It truly felt like stepping into our future home before construction even began.",
    rating: 5
  }
];
