import { getCollection } from "astro:content";

const site = import.meta.env.SITE ?? "https://ai4ra.uidaho.edu";

function absoluteUrl(path: string) {
  return new URL(path, site).toString();
}

export async function GET() {
  const [essays, fieldNotes, events, resources, releases] = await Promise.all([
    getCollection("essays", ({ data }) => !data.draft),
    getCollection("fieldNotes", ({ data }) => !data.draft),
    getCollection("events", ({ data }) => !data.draft),
    getCollection("resources", ({ data }) => !data.draft),
    getCollection("releases", ({ data }) => !data.draft)
  ]);

  const urls = [
    "/",
    "/about/",
    "/community/",
    "/practice-areas/",
    "/open-source/",
    "/resources/",
    "/events/",
    "/essays/",
    "/field-notes/",
    ...essays.map((entry) => `/essays/${entry.slug}/`),
    ...fieldNotes.map((entry) => `/field-notes/${entry.slug}/`),
    ...events.map((entry) => `/events/${entry.slug}/`),
    ...resources.map((entry) => `/resources/library/${entry.slug}/`),
    ...releases.map((entry) => `/open-source/${entry.slug}/`)
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${absoluteUrl(url)}</loc></url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
