export type ImageAsset = {
  src: string;
  alt: string;
  caption: string;
  credit: string;
};

export type NavigationItem = { href: string; label: string };

export type TeamMember = { name: string; role: string; image: ImageAsset };

export type TechnologyPractice = {
  slug: string;
  number: string;
  title: string;
  lines: string[];
  summary: string;
  image: ImageAsset;
  stat: { value: string; label: string };
  applications: string[];
  steps: [string, string, string];
};

export type PressCategory =
  | "News"
  | "Recognition"
  | "Projects"
  | "Research"
  | "Industry";

export type PressArticle = {
  slug: string;
  category: PressCategory;
  date: string;
  title: string;
  excerpt: string;
  quote: string;
  body: string[];
  image: ImageAsset;
  featured?: boolean;
};

export type Recognition = { year: string; title: string };

export type TimelineItem = { year: string; title: string; text: string };
