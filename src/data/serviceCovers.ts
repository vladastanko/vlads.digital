import coverEcommerce from "@/assets/services/cover-ecommerce.jpg";
import coverWebAnalytics from "@/assets/services/cover-web-analytics.jpg";
import coverCRO from "@/assets/services/cover-cro.jpg";
import coverSEO from "@/assets/services/cover-seo.jpg";
import coverAds from "@/assets/services/cover-ads.jpg";
import coverReports from "@/assets/services/cover-reports.jpg";

/** Maps a service route (with leading slash) to its cover image. */
export const SERVICE_COVERS: Record<string, string> = {
  "/e-commerce": coverEcommerce,
  "/web-analytics": coverWebAnalytics,
  "/cro": coverCRO,
  "/seo": coverSEO,
  "/ads": coverAds,
  "/reports": coverReports,
};

export const getServiceCover = (href: string): string | undefined => {
  // tolerate "/sr/seo" etc.
  const stripped = href.startsWith("/sr/") ? href.slice(3) : href;
  return SERVICE_COVERS[stripped];
};
