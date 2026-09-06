import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { posts } from '../data/posts';

export async function GET(context: APIContext) {
  return rss({
    title: 'My Personal Blog',
    description: 'Personal blog and technical notes',
    site: context.site ?? 'https://example.com',
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.date),
      description: post.description,
      link: `/posts/${post.slug}/`,
    })),
  });
}
