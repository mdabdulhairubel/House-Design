
import { Service, PortfolioItem, Testimonial } from './types';

export const WHATSAPP_NUMBER = "01602300253";
export const EMAIL = "support@housedesign.bd";
export const BUSINESS_NAME = "House Design BD";

export const SERVICES: Service[] = [
  {
    id: 'res-design',
    title: 'Modern House Design in Bangladesh',
    slug: 'house-design-bangladesh',
    description: 'Expert architectural solutions specifically tailored for the unique climate and soil conditions of Bangladesh. We create sustainable, high-ventilation, and aesthetically superior residential designs.',
    benefits: ['Optimized for local plot sizes (Katha/Bigha)', 'Cross-ventilation focused layouts', 'RAJUK & CDA approval assistance'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'floor-plan',
    title: 'Residential House Plan Design',
    slug: 'house-plan-design-bangladesh',
    description: 'Highly detailed 2D structural and floor plans that maximize space utility even on narrow plots. Our plans include electrical, plumbing, and structural engineering details.',
    benefits: ['Accurate structural engineering', 'Detailed cost estimations', 'Functional furniture layouts'],
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'duplex',
    title: 'Duplex House Design BD',
    slug: 'duplex-house-design-bd',
    description: 'Luxury duplex solutions for Bangladeshi landowners. We blend modern minimalism with practical living, creating iconic double-height spaces and stunning facades.',
    benefits: ['Iconic double-height living rooms', 'Premium facade aesthetics', 'Custom internal staircases'],
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '3d-design',
    title: '3D Exterior & Interior Design',
    slug: '3d-house-design-services',
    description: 'Photo-realistic 3D visualizations that let you experience your home before the first brick is laid. High-end rendering for both exterior architecture and interior decor.',
    benefits: ['4K realistic renderings', 'Lighting & shadow simulations', 'Virtual walk-through tours'],
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
    details: "High-end night lighting simulation with accurate material reflectance."
  },
  {
    id: 102,
    title: "Modern Glass Duplex Rendering",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=90",
    details: "Sunlight and shadow study for a west-facing plot in Dhaka."
  },
  {
    id: 103,
    title: "Sustainable Concrete Estate",
    image: "https://images.unsplash.com/photo-1600607687940-c52af096999a?auto=format&fit=crop&w=1200&q=90",
    details: "Detailed texture mapping showing realistic concrete and wood integration."
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
