import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { blogPosts } from '../data/blogPosts';

export function GET(context: APIContext) {
  return rss({
    title: 'Hair By Melissa blog',
    description:
      "Hair care, colour and keratin advice from Melissa's salon in Kaukapakapa, North Auckland.",
    site: context.site!,
    items: blogPosts.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: new Date(post.datePublished),
      link: `/blog/${post.slug}/`,
    })),
    customData: '<language>en-nz</language>',
  });
}
