import { kv } from '@vercel/kv';

// This just reads whatever the "refresh" worker last saved, and hands it
// to the website. It does NOT go fetch new data itself - that's the
// refresh-feeds job's role. This keeps things fast.
export async function GET() {
  const items = await kv.get('news-items') || [];
  const lastUpdated = await kv.get('last-updated') || null;

  return Response.json({
    items,
    lastUpdated,
  });
}
