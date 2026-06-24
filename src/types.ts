export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  cta: string;
  highlighted: boolean;
  features: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  color: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface KanbanCard {
  id: string;
  title: string;
  tag: string;
  tagColor: string;
  assignee: string;
  priority: 'high' | 'medium' | 'low';
}

export interface KanbanColumn {
  id: string;
  title: string;
  color: string;
  cards: KanbanCard[];
}
