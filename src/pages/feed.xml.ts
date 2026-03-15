import { getCollection } from "astro:content";

const site = import.meta.env.SITE ?? "https://ai4ra.uidaho.edu";

type FeedItem = {
  title: string;
  description: string;
  url: string;
  pubDate: Date;
  category: string;
};

function absoluteUrl(path: string) {
  return new URL(path, site).toString();
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const [essays, fieldNotes, resources, events] = await Promise.all([
    getCollection("essays", ({ data }) => !data.draft),
    getCollection("fieldNotes", ({ data }) => !data.draft),
    getCollection("resources", ({ data }) => !data.draft),
    getCollection("events", ({ data }) => !data.draft)
  ]);

  const items: FeedItem[] = [
    ...essays.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      url: absoluteUrl(`/essays/${entry.slug}/`),
      pubDate: entry.data.publishDate,
      category: "Essay"
    })),
    ...fieldNotes.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      url: absoluteUrl(`/field-notes/${entry.slug}/`),
      pubDate: entry.data.publishDate,
      category: "Field Note"
    })),
    ...resources.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      url: absoluteUrl(`/resources/library/${entry.slug}/`),
      pubDate: entry.data.publishDate,
      category: "Resource"
    })),
    ...events.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      url: absoluteUrl(`/events/${entry.slug}/`),
      pubDate: entry.data.start,
      category: "Event"
    }))
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>AI4RA Feed</title>
    <description>Recent AI4RA essays, field notes, resources, and events.</description>
    <link>${escapeXml(absoluteUrl("/"))}</link>
    <language>en-us</language>
${items
  .map(
    (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <description>${escapeXml(item.description)}</description>
      <link>${escapeXml(item.url)}</link>
      <guid>${escapeXml(item.url)}</guid>
      <pubDate>${item.pubDate.toUTCString()}</pubDate>
      <category>${escapeXml(item.category)}</category>
    </item>`
  )
  .join("\n")}
  </channel>
</rss>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8"
    }
  });
}
