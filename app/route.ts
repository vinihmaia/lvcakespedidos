import { html } from "./html";

// Serves the self-contained LV Cakes landing page at "/".
// Media files live in public/assets/ and are referenced relatively.
export const dynamic = "force-static";

export function GET() {
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
