export type { BlogPost } from "./types";
export { categoryLabels } from "./types";
import { existingPosts } from "./posts-existing";
import { guidePosts } from "./posts-guide";
import { consigliPosts } from "./posts-consigli";
import { normativaPosts } from "./posts-normativa";
import { idropulitricePosts } from "./posts-idropulitrice";
import { settorialiPosts } from "./posts-settoriali";
import { normativa2Posts } from "./posts-normativa-2";
import { stagionaliPosts } from "./posts-stagionali";
import type { BlogPost } from "./types";

const allPosts: BlogPost[] = [
  ...existingPosts,
  ...guidePosts,
  ...consigliPosts,
  ...normativaPosts,
  ...idropulitricePosts,
  ...settorialiPosts,
  ...normativa2Posts,
  ...stagionaliPosts,
];

export function getAllPosts(): BlogPost[] {
  const now = new Date();
  now.setHours(23, 59, 59, 999);
  return allPosts
    .filter((p) => new Date(p.date) <= now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllPostsUnfiltered(): BlogPost[] {
  return allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(
  category: BlogPost["category"]
): BlogPost[] {
  return getAllPosts().filter((p) => p.category === category);
}
