# Site Architecture Recommendation

## Recommendation

Use a static-first content architecture built on Astro.

This is the best fit because AI4RA needs an editorial site, a community hub, and a release home for open source projects. It does not need a heavy application runtime for the main web experience.

## Why Astro

- It is fast and simple to host.
- It handles content-heavy sites better than a client-heavy SPA.
- It supports Markdown and MDX cleanly.
- It allows selective React or other islands only where interaction is genuinely useful.
- It keeps long-term maintenance lower than a full app framework.

## Suggested Stack

### Core

- `Astro`
- `TypeScript`
- `pnpm`
- `Tailwind CSS` only if the team wants utility-first styling; otherwise plain CSS with design tokens is cleaner for a small editorial site

### Content

- Astro content collections for:
  - pages
  - essays
  - field notes
  - events
  - resources
  - case studies
  - releases
  - partner profiles
- MDX for richer long-form content where embedded components matter
- frontmatter schemas for consistency

### Documentation

Two viable patterns:

1. Keep docs in this repo using `Starlight`
   - best if AI4RA wants one integrated public experience
   - simpler for shared navigation and editorial control

2. Keep docs in each project repo and link to them from the main site
   - best if each software project has an independent maintainer workflow
   - cleaner if Vandalizer, AI4RA UDM, and OpenERA will evolve at different rates

My default recommendation is a hybrid:

- keep high-level overview, roadmap, governance, and release status on the main AI4RA site
- keep deep technical docs close to each software repo

That avoids turning the community site into a docs monolith while still making the ecosystem coherent.

## Suggested Repo Shape

```text
/
  src/
    components/
    layouts/
    pages/
    content/
      pages/
      essays/
      field-notes/
      events/
      resources/
      releases/
      case-studies/
  public/
  docs/
    site-architecture.md
```

If the site later needs multiple deployable surfaces, move to:

```text
/
  apps/
    web/
  packages/
    ui/
    content-schemas/
```

Do not start with a monorepo unless the team already knows it needs one.

## Release Integration Model

The main site should act as the ecosystem front door, not the sole source of truth for every artifact.

For each release page:

- overview
- why it matters to the community of practice
- current status
- roadmap
- governance
- links to source code, issues, discussions, and docs

Recommended source-of-truth split:

- project site owns editorial ecosystem framing
- GitHub repo owns code, issues, releases, and contributor workflows
- project docs repo or docs folder owns technical documentation

## Community Features

The site should emphasize participation without requiring a custom backend.

Use static or low-complexity integrations for:

- event listings
- newsletter archive
- featured discussions
- community working groups
- participation links

Avoid building custom user accounts or forum features into the site. Use existing platforms for conversations and keep the site as the durable public layer.

## Deployment

Preferred order:

1. GitHub Actions building Astro static output
2. Deploy static files to the hosting environment for `ai4ra.uidaho.edu`
3. Add preview deploys for pull requests if the hosting setup allows it

If institutional hosting is cumbersome, deploy first to a simpler target and cut over later.

## Content Governance

The site will succeed or fail more on publishing workflow than on framework choice.

Recommended authoring model:

- developers manage layouts, components, and build config
- editors contribute Markdown or MDX content through pull requests
- one lightweight editorial review process for homepage, essays, and release pages

If non-technical authors need browser-based editing later, add a Git-backed CMS after the structure is stable. Do not start there.

## What Not To Build

- no WordPress rebuild unless institutional constraints require it
- no database-backed app for the public site
- no premature search infrastructure unless content volume justifies it
- no bespoke community platform
- no large React app for mostly static pages

## Initial Build Plan

1. Build the homepage, community page, and open source landing page.
2. Add release pages for Vandalizer, AI4RA UDM, and OpenERA.
3. Add a resources section and event model.
4. Add governance and participation pages.
5. Wire deployment and preview workflow.

## Bottom Line

Use Astro as the main site framework, keep the public site static-first, and separate ecosystem framing from deep software documentation. That gives AI4RA a durable community home without creating an expensive maintenance burden.
