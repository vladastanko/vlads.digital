import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useLang } from "@/i18n/LangProvider";
import { posts } from "@/data/blog";

const Blog = () => {
  const { t } = useLang();
  useEffect(() => {
    document.title = `${t.blog.title} — Vlad's Digital`;
  }, [t]);

  const [first, ...rest] = posts;

  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-glow" />
        <div className="container-x py-20 md:py-24">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {t.blog.eyebrow}
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              {t.blog.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
              {t.blog.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          {/* Featured */}
          <Link
            to={`/blog/${first.slug}`}
            className="group mb-12 grid gap-8 overflow-hidden rounded-3xl border border-border bg-gradient-card backdrop-blur transition-all hover:border-primary/40 hover:shadow-elegant md:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:h-full">
              <img src={first.cover} alt={first.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-semibold text-primary">{first.category}</span>
                <span>{first.readingTime}</span>
              </div>
              <h2 className="font-display text-2xl font-bold leading-tight md:text-4xl">{first.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{first.excerpt}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                {t.blog.readMore} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {rest.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-gradient-card backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.cover} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-semibold text-primary">{p.category}</span>
                    <span>{p.readingTime}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold leading-snug text-foreground">{p.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    {t.blog.readMore} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
