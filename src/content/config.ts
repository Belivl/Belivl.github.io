import { defineCollection, z } from "astro:content";

const portfolio = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			cover: z.string().optional(),
			coverAlt: z.string(),
			draft: z.boolean(),
			highlight: z.boolean(),
			role: z.string().optional(),
			client: z.string().optional(),
			time: z.string().optional(),
			credits: z.string().optional(),
			about: z.string().optional(),
			type: z.string().optional()
		}),
});

export const collections = { portfolio };
