import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useParams } from "react-router-dom";
import { LocalizedLink as Link } from "@/components/LocalizedLink";
import { Layout } from "@/components/Layout";
import { CTABanner } from "@/components/sections/CTABanner";
import { useLang } from "@/i18n/LangProvider";
import { getPost, posts } from "@/data/blog";
import { setSEO, SITE } from "@/lib/seo";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLang();
  const post = slug ? getPost(slug) : undefined;

  useEffect(() => {
    if (post) {
      setSEO({
        title: `${post.title} | Vlad's Digital`,
        description: post.excerpt,
        path: `/blog/${post.slug}`,
        lang,
        type: "article",
        keywords: `${post.category}, analytics, ecommerce, CRO, SEO`,
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: { "@type": "Person", name: "Vladimir S." },
          publisher: {
            "@type": "Organization",
            name: "Vlad's Digital",
            logo: { "@type": "ImageObject", url: `${SITE}/og-image.png` },
          },
          mainEntityOfPage: `${SITE}/blog/${post.slug}`,
          articleSection: post.category,
        },
      });
    }
  }, [post, lang]);

  if (!post) return <NotFound />;

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <Layout>
      <article className="relative">
        <div className="container-x py-12 md:py-20">
          <Link to="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            {t.blog.backToBlog}
          </Link>

          <div className="mx-auto max-w-3xl">
            <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
              <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-semibold text-primary">{post.category}</span>
              <span>{post.readingTime}</span>
              <span>·</span>
              <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            </div>
            <h1 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">{post.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{post.excerpt}</p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-border">
            <img src={post.cover} alt={post.title} className="h-full w-full object-cover" loading="lazy" />
          </div>

          <div
            className="prose-vd mx-auto mt-12 max-w-3xl text-foreground/90"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>
      </article>

      {/* Related */}
      <section className="pb-16">
        <div className="container-x">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-6 font-display text-2xl font-bold">More articles</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group flex gap-4 rounded-2xl border border-border bg-gradient-card p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40"
                >
                  <img src={p.cover} alt="" className="h-24 w-24 shrink-0 rounded-lg object-cover" loading="lazy" />
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-primary">{p.category}</div>
                    <div className="mt-1 font-display font-semibold leading-tight text-foreground group-hover:text-primary">{p.title}</div>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default BlogPost;
