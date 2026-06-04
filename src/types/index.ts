export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Feature {
  icon: "certified" | "customised" | "premium";
  title: string;
  description: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface Review {
  name: string;
  avatarInitials: string;
  avatarColor: string;
  timeAgo: string;
  rating: number;
  text: string;
}

export interface FooterLink {
  label: string;
  href: string;
}
