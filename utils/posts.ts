import { extract } from "$std/encoding/front_matter.ts";
import { settings } from "@/utils/constants.ts";

export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  content: string;
  snippet: string;
}

export async function loadPost(slug: string): Promise<Post | null> {
  let text: string;
  try {
    text = await Deno.readTextFile(
      `${settings.postsPath}/${decodeURIComponent(slug)}.md`
    );
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      return null;
    }
    throw err;
  }
  const { attrs, body } = extract(text);
  const params = attrs as Record<string, string>;
  return {
    slug,
    title: params.title,
    publishedAt: new Date(params.published_at),
    content: body,
    snippet: params.snippet,
  };
}

export async function getPosts(): Promise<Post[]> {
  const promises = [];
  for await (const entry of Deno.readDir(settings.postsPath)) {
    const slug = entry.name.replace(".md", "");
    promises.push(loadPost(slug));
  }
  const posts = (await Promise.all(promises)) as Post[];
  posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return posts;
}
