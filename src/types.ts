export interface Milestone {
  date: string;
  event: string;
  loc: string;
  active?: boolean;
}

export interface Landmark {
  emoji: string;
  name: string;
  desc: string;
}

export interface Track {
  icon: string;
  name: string;
  desc: string;
  tag: string;
  color: string;
}

export interface Prize {
  medal: string;
  rank: string;
  value: string;
  desc: string;
  variant: 'gold' | 'silver' | 'bronze';
}

export interface Sponsor {
  logo: string;
  tier: string;
  name: string;
  title?: boolean;
}

export interface FAQItem {
  q: string;
  a: string;
}