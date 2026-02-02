import { defineCollection, z } from 'astro:content'

const worksCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      phone: z.string(),
      description: z.string(),
      cover: image(),
      before: image().optional(),
      date: z.coerce.date(),
      featured: z.boolean().default(false),
    }),
})

export const collections = {
  works: worksCollection,
}
