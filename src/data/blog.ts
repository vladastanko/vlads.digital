import blogCro from "@/assets/blog/blog-cro.png";
import blogDashboard from "@/assets/blog/blog-dashboard.png";
import blogProductAnalytics from "@/assets/blog/blog-product-analytics.png";

export type BlogPost = {
  slug: string;
  cover: string;
  category: string;
  readingTime: string;
  date: string;
  title: string;
  excerpt: string;
  body: string; // simple markdown-lite html
};

const cro: BlogPost = {
  slug: "cro-strategies-2026",
  cover: blogCro,
  category: "CRO",
  readingTime: "7 min",
  date: "2025-04-12",
  title: "Best CRO Strategies for E-commerce Stores in 2025",
  excerpt:
    "Top CRO tactics to boost conversions, reduce bounce, and grow revenue without raising ad spend.",
  body: `
<h2>Introduction</h2>
<p>As competition intensifies across the e-commerce landscape in 2025, top-performing brands are shifting from acquiring more traffic to optimizing the traffic they already have. CRO is no longer a luxury — it's critical for sustainable growth.</p>

<h2>Why CRO matters more than ever</h2>
<p>CRO is the art and science of converting visitors into paying customers. While traffic generation matters, improving the efficiency of existing traffic delivers compounding results without additional ad spend.</p>
<ul>
  <li><strong>Higher ROI</strong> — Maximize the value of your traffic without increasing budget.</li>
  <li><strong>Scalable growth</strong> — Small lifts in conversion rate compound into exponential revenue.</li>
  <li><strong>Improved UX</strong> — Better experience leads to higher satisfaction and loyalty.</li>
</ul>

<h2>Top CRO strategies to implement</h2>
<ul>
  <li><strong>User behavior tracking</strong> — Hotjar and Mixpanel for heatmaps, session replays and click maps.</li>
  <li><strong>A/B and multivariate testing</strong> — CTAs, product descriptions, images and checkout flows.</li>
  <li><strong>Mobile optimization</strong> — Responsive design, fast loads and frictionless checkout.</li>
  <li><strong>Personalization</strong> — Dynamic content and product recommendations based on behavior.</li>
  <li><strong>Trust signals</strong> — Reviews, guarantees, badges and clear return policies.</li>
</ul>

<h2>Case study: fashion e-commerce</h2>
<p>We partnered with a fashion brand on Shopify to uncover high-exit pages and reduce drop-offs. By redesigning product pages, simplifying checkout and A/B testing layout variations, we increased their conversion rate by <strong>36% in 6 weeks</strong> — with zero changes to ad spend.</p>

<h2>FAQs</h2>
<p><strong>Q:</strong> How do I know if my store needs CRO?</p>
<p><strong>A:</strong> If your store has consistent traffic but a conversion rate under 2%, CRO should be a priority.</p>

<p><strong>Q:</strong> Does CRO work for small stores?</p>
<p><strong>A:</strong> Yes. Small changes like button colors, layout tweaks and messaging can produce significant gains over time.</p>
`,
};

const dashboard: BlogPost = {
  slug: "effective-website-dashboard",
  cover: blogDashboard,
  category: "Dashboards",
  readingTime: "8 min",
  date: "2025-03-04",
  title: "Building an Effective Website Dashboard with Looker Studio",
  excerpt:
    "Combine Google Analytics with Looker Studio to design dashboards that inform and inspire action.",
  body: `
<h2>Introduction</h2>
<p>Website dashboards are critical tools for transforming raw data into clear, actionable insights. Combining GA4's tracking with Looker Studio's visualization power produces dashboards that inspire strategic action.</p>

<h2>Why dashboard design matters</h2>
<p>A dashboard is a storytelling medium. Done well it helps teams understand behavior, identify trends and align decisions with measurable data.</p>
<ul>
  <li><strong>Clarity</strong> — Clear labels and visuals make data easy to interpret at a glance.</li>
  <li><strong>Relevance</strong> — Focus only on metrics that support key objectives.</li>
  <li><strong>Interactivity</strong> — Filters and time selectors enable dynamic exploration.</li>
  <li><strong>Visual appeal</strong> — Clean layouts, consistent colors and intuitive charts.</li>
</ul>

<h2>Step 1 — set up Google Analytics</h2>
<p>Configure GA4 for event-based tracking and predictive metrics. Use GTM to streamline tags and define key events like form submissions and product views.</p>

<h2>Step 2 — connect Looker Studio</h2>
<p>Link your GA property and choose relevant metrics: traffic, engagement, conversions and audience insights.</p>

<h2>Step 3 — design the dashboard</h2>
<p>Use a structured layout with dedicated sections for Overview, Traffic, Behavior and Goals. Time series charts for trends, bar charts for comparisons, scorecards for KPIs.</p>

<h2>Best practices</h2>
<ul>
  <li><strong>Know your audience</strong> — Tailor views for marketers, executives or product teams.</li>
  <li><strong>Keep it focused</strong> — Avoid overloading with charts.</li>
  <li><strong>Update regularly</strong> — Refresh visuals quarterly to stay aligned.</li>
  <li><strong>Ensure accessibility</strong> — Design responsive layouts for mobile.</li>
</ul>

<h2>Conclusion</h2>
<p>A well-structured dashboard powered by Google Analytics and Looker Studio transforms scattered data into strategic insight. Start building yours today and turn data into a competitive edge.</p>
`,
};

const product: BlogPost = {
  slug: "product-analytics-2026",
  cover: blogProductAnalytics,
  category: "Analytics",
  readingTime: "10 min",
  date: "2025-02-18",
  title: "Mastering Product Analytics with Mixpanel and Firebase",
  excerpt:
    "Build a robust product analytics stack with Mixpanel and Firebase to fuel growth.",
  body: `
<h2>Introduction</h2>
<p>In a product-led world, successful digital businesses don't guess — they track every meaningful interaction and turn data into action. With Mixpanel and Firebase you can gain real-time insight into user behavior, retention and engagement.</p>

<h2>What product analytics covers</h2>
<p>Product analytics is the process of collecting, interpreting and acting on how users interact with your product. It focuses on the <strong>what, how and why</strong> of in-app behavior.</p>
<ul>
  <li>Understand journeys and feature usage</li>
  <li>Identify friction and drop-off stages</li>
  <li>Track product-market fit via retention</li>
  <li>Prioritize roadmap based on real behavior</li>
  <li>Drive personalization and lifecycle campaigns</li>
</ul>

<h2>Core tools — Mixpanel and Firebase</h2>
<ul>
  <li><strong>Firebase (GA4)</strong> — Backend analytics, crash reporting, real-time events</li>
  <li><strong>Mixpanel</strong> — Behavioral analytics, segmentation, retention, funnels</li>
  <li><strong>BigQuery</strong> — Advanced queries joining raw data from Firebase and CRM</li>
</ul>

<h2>What you actually get</h2>
<ul>
  <li><strong>Event tracking plan</strong> — A blueprint mapped to business objectives</li>
  <li><strong>Custom Mixpanel dashboard</strong> — Funnels, cohorts, retention and engagement</li>
  <li><strong>Firebase integration</strong> — Real-time logging, crash monitoring and device metrics</li>
  <li><strong>Data schema</strong> — Clean structure for long-term consistency</li>
  <li><strong>Automated reports</strong> — Monthly executive summaries</li>
</ul>

<h2>Case study — mobile retention</h2>
<p>A SaaS client struggled with 3-day retention. We implemented Firebase SDK and used Mixpanel to build event-based funnels. By identifying a missing activation step and redesigning onboarding, 3-day retention jumped from 28% to 41% in 3 weeks.</p>
`,
};

const seo: BlogPost = {
  slug: "seo-analysis-gsc-2026",
  cover: blogProductAnalytics,
  category: "SEO",
  readingTime: "6 min",
  date: "2025-01-22",
  title: "How to Analyze SEO Performance Using Google Search Console",
  excerpt:
    "Track rankings, clicks and impressions in GSC to identify opportunities to grow organic traffic.",
  body: `
<h2>Introduction</h2>
<p>Google Search Console (GSC) is one of the most powerful free tools for monitoring SEO performance. It offers deep insight into how your site performs in organic search and what to do next.</p>

<h2>Key metrics to track</h2>
<ul>
  <li><strong>Impressions</strong> — How often pages appear in search results</li>
  <li><strong>Clicks</strong> — Visits from search</li>
  <li><strong>CTR</strong> — Ratio of clicks to impressions</li>
  <li><strong>Average position</strong> — Where pages rank on average</li>
  <li><strong>Queries</strong> — Keywords driving search visibility</li>
</ul>

<h2>Identify growth opportunities</h2>
<p>Look for pages with high impressions but low CTR — they often need better titles and meta descriptions. Review keywords ranking 5–20: small improvements yield big gains.</p>

<h2>Segment your data</h2>
<p>Filter GSC by country, device or page type. This is especially useful for local SEO or mobile-first strategies.</p>

<h2>Automate reporting with Looker Studio</h2>
<p>GSC connects to Looker Studio via native connector or BigQuery. Ideal for agencies and marketers who need weekly or monthly reporting.</p>

<h2>FAQs</h2>
<p><strong>Q:</strong> Is Google Search Console free?</p>
<p><strong>A:</strong> Yes — 100% free, provided by Google.</p>
<p><strong>Q:</strong> What is a good average CTR?</p>
<p><strong>A:</strong> Varies by industry, typically 2–5%. Improving titles and matching intent boosts CTR.</p>
`,
};

export const posts: BlogPost[] = [product, cro, dashboard, seo];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
