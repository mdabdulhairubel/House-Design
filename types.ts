
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
