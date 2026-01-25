import { Service, PortfolioItem, Testimonial, BlogPost } from './types';

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
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 1,
    title: "ডুপ্লেক্স বাড়ির ডিজাইন (Luxury Duplex Design)",
    location: "Gulshan, Dhaka",
    type: "Modern Duplex",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    description: "Premium duplex house design in Bangladesh featuring 4 bedrooms, double-height living room, and a rooftop garden."
  },
  {
    id: 2,
    title: "আধুনিক ৩ বেডরুমের বাড়ির নকশা",
    location: "Nasirabad, Chattogram",
    type: "Apartment Building",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80",
    description: "Modern house design Bangladesh for residential buildings."
  }
];

export const EXTERIOR_VISUALIZATIONS = [
  {
    id: 101,
    title: "Modern Glass Facade - 3D Exterior Visualization",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=90",
    timeOfDay: "Twilight",
    details: "High-end 3D architectural rendering for a luxury duplex house design in Bangladesh."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Engr. Mahbubur Rahman",
    location: "Dhaka",
    comment: "House Design BD provided the most detailed structural drawing for my building.",
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Low Cost House Designs in Bangladesh for 2025',
    slug: 'low-cost-house-design-bangladesh-2025',
    excerpt: 'Looking to build your dream home on a budget? Explore the most efficient and beautiful low cost house designs specifically for Bangladesh.',
    date: 'March 15, 2024',
    author: 'Chief Architect',
    category: 'Budget Homes',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    tags: ['Low Cost', 'Modern Design', 'Budget Friendly'],
    content: `Building a house in Bangladesh is a lifelong dream for many... [Content truncated for brevity]`
  },
  {
    id: '8',
    title: 'Duplex House Design Cost in Bangladesh: 2025 Price Breakdown',
    slug: 'duplex-house-design-cost-bangladesh-2025',
    excerpt: 'Want to know the total budget for a 2000 sq ft duplex? We break down architectural fees, structural costs, and finishing materials.',
    date: 'March 25, 2024',
    author: 'Senior Architect',
    category: 'Duplex Costs',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    tags: ['Duplex Cost', 'Price Guide', 'Bangladesh Housing'],
    content: `Building a **Duplex House Design in Bangladesh** is a significant investment. In 2025, the cost per square feet ranges from 2,500 to 4,500 BDT depending on finishing.

### Architectural Fee Structure
For a standard duplex, architectural drawings usually cost between 35,000 to 80,000 BDT. This includes 3D exterior views and structural safety analysis.

### Structural Material Costs
Rod (Steel), Cement, and Bricks are the primary drivers. Grade 75 TMT bars are recommended for high-load duplex structures in earthquake-prone areas like Sylhet or Dhaka.

### Finishing Costs
Premium tiles, sanitary ware, and lighting can increase the budget by 30%. However, we offer **Low Cost Duplex Designs** that focus on elegance without excessive spending.`
  },
  {
    id: '9',
    title: 'Modern 5-Storey Building Design for Small Plots in Dhaka',
    slug: '5-storey-building-design-dhaka-small-plot',
    excerpt: 'How to build a G+4 apartment building on a 3-katha plot in Mirpur or Uttara while following RAJUK guidelines.',
    date: 'March 23, 2024',
    author: 'Approval Specialist',
    category: 'Urban Projects',
    image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80',
    tags: ['5 Storey Design', 'RAJUK Approval', 'Dhaka House Plan'],
    content: `Residential land in Dhaka is scarce. A **Modern 5-Storey Building Design** (G+4) is the most viable option for 3-katha or 4-katha plots.

### RAJUK (DAP) Rules 2025
Following the new Detailed Area Plan (DAP), setbacks and FAR (Floor Area Ratio) have changed. Our team specializes in maximizing your living space while staying 100% legal.

### Apartment Layout Efficiency
For a 5-storey building, we usually design 2 apartments per floor. Each unit features 3 bedrooms, 2 bathrooms, and a modern balcony.

### Foundation Depth
For G+4 buildings in Dhaka, we often recommend pre-cast piling or raft foundations depending on the soil report. Safety is our #1 priority at **House Design BD**.`
  },
  {
    id: '10',
    title: 'Beautiful Rooftop Garden Design for Bangladeshi Homes',
    slug: 'rooftop-garden-design-bangladesh-homes',
    excerpt: 'Transform your rooftop into an oasis. See modern landscaping ideas for duplexes and apartment buildings in Bangladesh.',
    date: 'March 21, 2024',
    author: 'Landscape Architect',
    category: 'Landscaping',
    image: 'https://images.unsplash.com/photo-1590059132718-5ebce19b0561?auto=format&fit=crop&w=1200&q=80',
    tags: ['Rooftop Garden', 'Exterior Design', 'Green Living'],
    content: `A rooftop is not just a ceiling; it is a space for relaxation. **House Design in Bangladesh** is increasingly focusing on green rooftops to combat urban heat.

### Waterproofing the Roof
The most critical step is thermal and water insulation. We use advanced bituminous membranes to ensure zero leakage into your top-floor bedrooms.

### Integrated Seating & Lighting
Modern duplexes in BD now feature built-in concrete benches and weather-proof LED lighting. This creates a perfect venue for family BBQs or evening tea.

### Plant Selection
Choose local plants like Lemon, Guava, or ornamental palms that thrive in the Bangladeshi tropical climate.`
  },
  {
    id: '11',
    title: 'Top 5 Building Materials for Low Cost House Design BD',
    slug: 'best-building-materials-low-cost-house-bd',
    excerpt: 'Save up to 20% on construction by choosing the right bricks, sand, and steel. Our engineer-approved guide to local materials.',
    date: 'March 19, 2024',
    author: 'Material Engineer',
    category: 'Materials',
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=1200&q=80',
    tags: ['Building Materials', 'Low Cost BD', 'Construction Tips'],
    content: `Material selection dictates 60% of your total budget. For a **Low Cost House Design BD**, smart sourcing is essential.

### 1. Auto Bricks vs. Traditional Bricks
While auto bricks are slightly pricier, they save mortar and plastering costs because of their perfect shape.

### 2. TMT Bar Grades
Grade 60 steel is often sufficient for single-storey village homes, whereas duplexes require Grade 75.

### 3. Local Sand Quality
Using 'Sylhet Sand' for structural casting and local fine sand for plastering ensures durability and cost efficiency.`
  }
];
