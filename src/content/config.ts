import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleZh: z.string(),
    description: z.string(),
    descriptionZh: z.string(),
    language: z.string().optional(),
    tags: z.array(z.string()).default([]),
    github: z.string().url(),
    stars: z.number().default(0),
    date: z.date(),
    featured: z.boolean().default(false),
    color: z.string().default('indigo'),
  }),
});

export const collections = { projects };
