import { defineCollection, z } from "astro:content";

const essays = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

const fieldNotes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    institution: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    location: z.string(),
    format: z.enum(["virtual", "hybrid", "in-person"]),
    status: z.enum(["upcoming", "completed"]),
    registrationUrl: z.string().url().optional(),
    draft: z.boolean().default(false)
  })
});

const resources = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    resourceType: z.enum(["guide", "glossary", "governance", "case-study", "talk"]),
    audience: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

const releases = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["concept", "planned", "in-development", "pilot", "released"]),
    statusNote: z.string(),
    order: z.number(),
    repoUrl: z.string().url().optional(),
    docsUrl: z.string().url().optional(),
    audiences: z.array(z.string()).default([]),
    engagementPaths: z.array(z.string()).default([]),
    nearTermSignals: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = {
  essays,
  fieldNotes,
  events,
  resources,
  releases
};
