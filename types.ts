
export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  benefits: string[];
  image: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  location: string;
  type: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  comment: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
}
