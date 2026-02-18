export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  category: "guide" | "normativa" | "consigli-pratici";
  excerpt: string;
  readingTime: number;
  image: string;
  imageAlt: string;
  sections: { heading: string; content: string; list?: string[] }[];
  faqs: { q: string; a: string }[];
  internalLinks: { text: string; href: string }[];
}

export const categoryLabels: Record<BlogPost["category"], string> = {
  guide: "Guide",
  normativa: "Normativa",
  "consigli-pratici": "Consigli Pratici",
};
