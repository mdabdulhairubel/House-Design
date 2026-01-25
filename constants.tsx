
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
    content: `Building a house in Bangladesh is a lifelong dream for many. However, rising material costs can be a challenge. In this guide, we explore how you can achieve a **modern house design in Bangladesh** without breaking the bank.

### 1. Optimize Your Floor Plan
The key to a **low cost house design** is reducing wasted space. A standard 1200 sq ft house plan can comfortably accommodate 3 bedrooms if designed correctly. Avoid long corridors and focus on open-plan living areas.

### 2. Material Selection
Using locally available materials like high-quality bricks from reputable kilns in Gazipur or Savar can save transportation costs. For roofing, consider reinforced concrete with proper heat-reflective coating to manage the Bangladeshi humidity.

### 3. Energy Efficiency
In Bangladesh, electricity costs are rising. Design your home with large windows on the South side to capture the natural breeze, reducing the need for AC.

**Ready to start your project?** Contact House Design BD today for a free consultation on your budget home.`
  },
  {
    id: '2',
    title: 'Modern Duplex House Design BD: A Complete Guide',
    slug: 'modern-duplex-house-design-bd-guide',
    excerpt: 'Everything you need to know about planning and building a luxury duplex in Dhaka or Chattogram. From RAJUK rules to 3D visualization.',
    date: 'March 10, 2024',
    author: 'Senior Architect',
    category: 'Luxury Living',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    tags: ['Duplex', 'Luxury', 'Dhaka'],
    content: `A duplex house is the ultimate symbol of comfort and luxury in the context of **House Design in Bangladesh**. But building one requires careful planning and adherence to municipal laws.

### RAJUK & CDA Compliance
Before you start your **duplex house design BD**, ensure your plot set-backs are compliant with local authorities. We handle all the paperwork for you to ensure a smooth approval process.

### The Double Height Living Room
The hallmark of a modern duplex is the double-height ceiling. This not only makes the house look massive but also allows for better air circulation—perfect for the tropical climate of Bangladesh.

### Rooftop Gardens
With land prices soaring in Dhaka, the rooftop is your private sanctuary. We integrate landscaping into our architectural plans to give you a green space even in the heart of the city.`
  },
  {
    id: '3',
    title: 'Beautiful Village House Design in Bangladesh: 3 Bedroom Plans',
    slug: 'village-house-design-bangladesh-3-bedroom',
    excerpt: 'Why settle for basic when you can have a modern village home? See our most popular 3 bedroom house plans for rural areas.',
    date: 'March 5, 2024',
    author: 'Architect Team',
    category: 'Village Homes',
    image: 'https://images.unsplash.com/photo-1590059132718-5ebce19b0561?auto=format&fit=crop&w=1200&q=80',
    tags: ['Village', '3 Bedroom', 'Rural'],
    content: `Village homes in Bangladesh are evolving. People now want the same amenities as city dwellers while maintaining the peaceful rural vibe.

### Modernizing the "Gram-er Bari"
Our **Village House Design in Bangladesh** focuses on durability. We use weather-proof paints and elevated foundations to protect against seasonal flooding in areas like Sylhet or Barishal.

### Cost-Effective 3 Bedroom Layouts
For a family, a 3 bedroom house is the gold standard. We provide detailed structural drawings that ensure your village home is earthquake-resistant and built to last generations.`
  },
  {
    id: '4',
    title: 'House Design Cost in Bangladesh 2025: Per Square Feet Rates',
    slug: 'house-design-cost-bangladesh-2025',
    excerpt: 'Wondering about architect fees and drawing costs in Bangladesh? Here is a breakdown of residential house design costs per square feet.',
    date: 'March 20, 2024',
    author: 'Structural Lead',
    category: 'Cost Guide',
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=1200&q=80',
    tags: ['Cost', 'Rates', 'Architect Fees'],
    content: `Calculating the **House Design Cost in Bangladesh** is the first step for any landowner. In 2025, architect fees are generally categorized into three types based on the level of detail.

### Basic 2D Floor Plans
If you only need a functional layout for your contractor, rates start from 5 to 10 BDT per square feet. This is ideal for simple single-storey homes.

### Full Architectural & Structural Set
A complete set including structural drawings, electrical, plumbing, and 3D visualization typically costs 20 to 45 BDT per square feet. This is mandatory for RAJUK or municipality approval.

### Premium Interior & Landscape Design
For luxury duplexes, including detailed interior woodwork and landscaping plans, the cost can range from 60 to 120 BDT per square feet.

**Contact House Design BD** for a customized quote based on your specific plot dimensions.`
  },
  {
    id: '5',
    title: 'Small House Design BD: Living Big in 2-Katha Plots',
    slug: 'small-house-design-bd-2-katha',
    excerpt: 'Maximizing space is an art in Dhaka. Learn how to design a spacious 3 bedroom home on a tiny 2-katha plot.',
    date: 'March 18, 2024',
    author: 'Space Planning Expert',
    category: 'Small Spaces',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    tags: ['Small House', '2 Katha', 'Dhaka'],
    content: `With land prices in Dhaka reaching record highs, **Small House Design BD** is more popular than ever. A 2-katha plot (approx 1440 sq ft) offers enough space for a luxury home if you use vertical space efficiently.

### Vertical Living
Instead of a sprawling ground floor, consider a G+2 or G+3 structure. This allows you to have a dedicated parking area and still maintain spacious bedrooms on the upper floors.

### Foldable Furniture & Built-ins
In small house designs, every inch counts. Integrated wardrobes and clever storage under staircases are essential for a clutter-free environment.

### Light & Air
Using light colors for the facade and large windows creates an illusion of a much larger space. This is a signature style of **House Design BD** for urban clients.`
  },
  {
    id: '6',
    title: 'Best Architects in Dhaka: How to Choose for Your Home',
    slug: 'best-architects-dhaka-residential',
    excerpt: 'Finding the right architectural firm can be daunting. Here are 5 things to check before hiring an architect in Bangladesh.',
    date: 'March 12, 2024',
    author: 'Operations Head',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    tags: ['Architects', 'Dhaka', 'Professional Service'],
    content: `The **Best Architects in Dhaka** are those who balance your vision with structural safety and legal compliance. 

### 1. Portfolio Relevance
Does the firm have experience in the type of house you want? Check their previous **duplex house designs** or multi-storey apartment projects.

### 2. Legal Knowledge
Knowledge of RAJUK (DAP) or CDA rules is non-negotiable. An architect who doesn't understand setbacks and FAR calculations will cost you more in fines later.

### 3. Transparent Communication
House design is a collaborative process. Choose a firm like **House Design BD** that provides regular updates and 3D walkthroughs throughout the design phase.

**Ready to hire?** We offer consultation services at our Uttara office.`
  },
  {
    id: '7',
    title: 'Structural Safety in Bangladeshi Homes: Earthquake Resilience',
    slug: 'structural-safety-earthquake-resilience-bd',
    excerpt: 'Bangladesh is in a seismic zone. Ensure your house design includes modern structural engineering for maximum safety.',
    date: 'March 8, 2024',
    author: 'Civil Engineer',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=1200&q=80',
    tags: ['Safety', 'Engineering', 'Safety First'],
    content: `Safety is the foundation of any **House Design in Bangladesh**. Given our geographical location, earthquake resilience must be prioritized.

### Ductile Detailing
Modern structural drawings must include ductile detailing for beams and columns. This allows the building to sway slightly during a tremor without collapsing.

### Soil Testing Importance
Before any design starts, a thorough soil test (Borehole) is required. Whether you are building on the firm soil of Gazipur or the soft silt of Barishal, your foundation type (Pile vs. Pad) depends on this data.

### Quality Control
Using Grade 60 or Grade 75 TMT bars ensures the tensile strength of your home. At **House Design BD**, we specify the exact brand and grade of materials in our BOQ (Bill of Quantities).`
  }
];
