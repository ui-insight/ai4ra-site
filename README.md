# AI4RA Site Rework

This repository holds the rework of the AI4RA public website as a community-of-practice hub with integrated open source release content for Vandalizer, AI4RA UDM, and OpenERA.

## Direction

The site should prioritize:

- community of practice over product marketing
- open source stewardship over feature promotion
- editorial clarity over framework complexity
- low-friction publishing for essays, field notes, events, and release updates

## Proposed Stack

- `Astro` for the main site and static rendering
- `TypeScript` for implementation consistency
- `Markdown/MDX` content collections for pages, essays, case studies, events, and release notes
- `Starlight` for software documentation sections if the release docs live in this repo
- `GitHub Actions` for build and deploy automation
- static deployment target such as GitHub Pages, institutional hosting, or a simple containerized web host

The detailed recommendation is in [`docs/site-architecture.md`](./docs/site-architecture.md).

## Local Development

```bash
npm install
npm run dev
```

## Current Scaffold

The repo now includes a minimal Astro app with initial routes for:

- home
- community
- practice areas
- open source
- resources
- events
- about

## Content Collections

The Astro content model currently includes:

- `essays`
- `fieldNotes`
- `events`
- `resources`
- `releases`

Collection definitions live in [`src/content.config.ts`](./src/content.config.ts).
