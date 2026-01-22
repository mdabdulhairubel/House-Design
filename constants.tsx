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
    title: "Luxury Duplex at Gulshan",
    location: "Gulshan-2, Dhaka",
    type: "Premium Duplex",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    description: "A contemporary 5500 sqft duplex featuring a rooftop garden and double-height glass walls."
  },
  {
    id: 2,
    title: "Modern 5-Storey Apartment",
    location: "Nasirabad, Chattogram",
    type: "Residential Building",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80",
    description: "Multi-unit residential design optimized for maximum rental income and natural ventilation."
  },
  {
    id: 3,
    title: "Eco-Friendly Villa in Sylhet",
    location: "Zindabazar, Sylhet",
    type: "Modern Villa",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description: "Utilizing traditional sloped roofs with modern materials to handle Sylhet's high rainfall."
  },
  {
    id: 4,
    title: "Compact Urban Home",
    location: "Uttara, Dhaka",
    type: "Single Storey Modern",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
    description: "A functional 3-bedroom home designed for a narrow 2.5-katha plot in a busy urban area."
  },
  {
    id: 5,
    title: "Suburban Retreat",
    location: "Khulna City",
    type: "Duplex",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    description: "Spacious suburban home focused on indoor-outdoor living with a private courtyard."
  },
  {
    id: 6,
    title: "Classic Contemporary Home",
    location: "Rajshahi Metropolitan",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
    description: "A blend of traditional brickwork and modern minimalist lines for a timeless look."
  }
];

export const EXTERIOR_VISUALIZATIONS = [
  {
    id: 101,
    title: "Twilight Facade Visualization",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=90",
    timeOfDay: "Twilight",
    details: "High-end night lighting simulation with ray-traced reflections and glowing interior ambiance."
  },
  {
    id: 102,
    title: "Modern Glass Duplex",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=90",
    timeOfDay: "Midday",
    details: "Sunlight and shadow study showcasing heat-reflective glass and solar gain mitigation."
  },
  {
    id: 103,
    title: "Brutalist Urban Sanctuary",
    image: "https://images.unsplash.com/photo-1600607687940-c52af096999a?auto=format&fit=crop&w=1200&q=90",
    timeOfDay: "Overcast",
    details: "Detailed texture mapping showing realistic raw concrete porosity and wet-season drainage."
  },
  {
    id: 104,
    title: "Tropical Modern Estate",
    image: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=90",
    timeOfDay: "Morning",
    details: "Soft diffused morning light highlighting architectural overhangs and natural ventilation gaps."
  },
  {
    id: 105,
    title: "Urban Minimalist Brick",
    image: "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&w=1200&q=90",
    timeOfDay: "Golden Hour",
    details: "Warm spectrum rendering focusing on traditional brick textures and sharp minimalist lines."
  },
  {
    id: 106,
    title: "Luxury Lakeside Villa",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=90",
    timeOfDay: "Sunset",
    details: "Atmospheric scattering study during sunset, highlighting premium architectural silhouettes."
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