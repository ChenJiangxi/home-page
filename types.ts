export interface Link {
  label: string;
  url: string;
  icon?: string; // Optional icon name
}

export interface NewsItem {
  date: string;
  title: string;
  description?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  highlight?: boolean;
  links?: Link[];
  thumbnail?: string;
  abstract?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description?: string;
}

export interface Profile {
  name: string;
  chineseName?: string;
  title: string;
  affiliation: string;
  email: string;
  bio: string;
  avatarUrl: string;
  researchInterests: string[];
  socials: Link[];
}