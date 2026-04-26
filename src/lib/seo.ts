// Lightweight SEO helper — sets title, description, canonical and OG tags
// without adding a dependency like react-helmet.

const SITE_URL = "https://vlads.digital";
const DEFAULT_OG = `${SITE_URL}/og-image.png`;

type SEOOptions = {
  title: string;
  description: string;
  path?: string; // e.g. "/services" — used for canonical + og:url
  image?: string;
  type?: "website" | "article";
  keywords?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const setMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const JSONLD_ID = "seo-jsonld";

export const setSEO = ({
  title,
  description,
  path = "/",
  image = DEFAULT_OG,
  type = "website",
  keywords,
  jsonLd,
}: SEOOptions) => {
  const url = `${SITE_URL}${path}`;
  document.title = title;

  setMeta('meta[name="description"]', "name", "description", description);
  if (keywords) setMeta('meta[name="keywords"]', "name", "keywords", keywords);

  setLink("canonical", url);

  // Open Graph
  setMeta('meta[property="og:title"]', "property", "og:title", title);
  setMeta('meta[property="og:description"]', "property", "og:description", description);
  setMeta('meta[property="og:type"]', "property", "og:type", type);
  setMeta('meta[property="og:url"]', "property", "og:url", url);
  setMeta('meta[property="og:image"]', "property", "og:image", image);

  // Twitter
  setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
  setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
  setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
  setMeta('meta[name="twitter:image"]', "name", "twitter:image", image);

  // JSON-LD structured data
  const existing = document.getElementById(JSONLD_ID);
  if (existing) existing.remove();
  if (jsonLd) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = JSONLD_ID;
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }
};

export const SITE = SITE_URL;
