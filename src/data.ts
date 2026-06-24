import type { NavItem, Feature, PricingPlan, Testimonial, Stat, KanbanColumn } from './types';

export const navItems: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const stats: Stat[] = [
  { value: '40%', label: 'faster delivery' },
  { value: '12k+', label: 'teams onboard' },
  { value: '4.9★', label: 'average rating' },
  { value: '99.9%', label: 'uptime SLA' },
];

export const kanbanColumns: KanbanColumn[] = [
  {
    id: 'backlog',
    title: 'Backlog',
    color: '#6B7280',
    cards: [
      { id: 'c1', title: 'API rate limiting docs', tag: 'Docs', tagColor: '#E0E7FF', assignee: 'KP', priority: 'low' },
      { id: 'c2', title: 'Onboarding email flow', tag: 'Growth', tagColor: '#D1FAE5', assignee: 'SR', priority: 'medium' },
    ],
  },
  {
    id: 'inprogress',
    title: 'In Progress',
    color: '#6366F1',
    cards: [
      { id: 'c3', title: 'Dashboard redesign', tag: 'Design', tagColor: '#FEE2E2', assignee: 'AM', priority: 'high' },
      { id: 'c4', title: 'Slack integration v2', tag: 'Eng', tagColor: '#E0E7FF', assignee: 'JL', priority: 'high' },
    ],
  },
  {
    id: 'review',
    title: 'In Review',
    color: '#F59E0B',
    cards: [
      { id: 'c5', title: 'Mobile push notifications', tag: 'Eng', tagColor: '#E0E7FF', assignee: 'TR', priority: 'medium' },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    color: '#10B981',
    cards: [
      { id: 'c6', title: 'SSO / SAML setup', tag: 'Security', tagColor: '#FEF3C7', assignee: 'NB', priority: 'high' },
      { id: 'c7', title: 'Q3 roadmap planning', tag: 'Strategy', tagColor: '#D1FAE5', assignee: 'PP', priority: 'low' },
    ],
  },
];

export const features: Feature[] = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>`,
    title: 'Kanban & List Views',
    description: 'Visualize every project exactly how your team thinks. Switch between kanban, list, timeline, and calendar in one click.',
    tag: 'Views',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
    title: 'AI-Powered Planning',
    description: 'Let AI break down complex goals into sprint-ready tasks, estimate timelines, and flag blockers before they slow you down.',
    tag: 'AI',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    title: 'Time Tracking Built In',
    description: 'Track hours per task, per project, or per team member. Export timesheets for billing without leaving the app.',
    tag: 'Tracking',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    title: 'Team Workload View',
    description: 'See who is overloaded and who has capacity — before you assign. Balance work automatically across your team.',
    tag: 'Teams',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    title: 'Live Project Analytics',
    description: 'Velocity charts, burndown graphs, and cycle time analytics update in real-time so you always know where the project stands.',
    tag: 'Analytics',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
    title: '200+ Integrations',
    description: 'Connect GitHub, Slack, Figma, Notion, Jira, and hundreds more. FlowDesk lives where your team already works.',
    tag: 'Integrations',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for freelancers and small teams just getting started.',
    cta: 'Start free',
    highlighted: false,
    features: [
      'Up to 5 team members',
      '3 active projects',
      'Kanban & list views',
      'Basic analytics',
      '5GB file storage',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    price: '$16',
    period: 'per seat / month',
    description: 'For growing teams that need more power and collaboration.',
    cta: 'Start 14-day trial',
    highlighted: true,
    features: [
      'Unlimited team members',
      'Unlimited projects',
      'All views incl. timeline',
      'AI planning assistant',
      'Time tracking & billing',
      'Advanced analytics',
      '100GB file storage',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'annual contract',
    description: 'For large organizations with advanced security and compliance needs.',
    cta: 'Contact sales',
    highlighted: false,
    features: [
      'Everything in Pro',
      'SSO / SAML',
      'Custom roles & permissions',
      'Audit logs',
      'SLA guarantee',
      'Dedicated CSM',
      'On-premise option',
      'Custom integrations',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "We cut our sprint planning time in half after switching to FlowDesk. The workload view alone paid for itself in the first week.",
    name: 'Priya Anand',
    role: 'VP of Engineering',
    company: 'Streamline Labs',
    initials: 'PA',
    color: '#6366F1',
  },
  {
    quote: "Every PM tool I've tried felt like it was designed for the tool's complexity, not my team's. FlowDesk actually gets out of the way.",
    name: 'David Osei',
    role: 'Head of Product',
    company: 'Orbit Commerce',
    initials: 'DO',
    color: '#10B981',
  },
  {
    quote: "The AI breakdown feature is genuinely useful, not a gimmick. It turns a vague epic into a proper sprint backlog in seconds.",
    name: 'Rachel Torres',
    role: 'Engineering Manager',
    company: 'Paige Systems',
    initials: 'RT',
    color: '#F59E0B',
  },
];
