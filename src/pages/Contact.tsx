import { useEffect, useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { LocalizedLink as Link } from "@/components/LocalizedLink";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LangProvider";
import { setSEO } from "@/lib/seo";

const Contact = () => {
  const { lang, t } = useLang();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setSEO({
      title:
        lang === "sr"
          ? "Kontakt — zakaži besplatan analytics poziv | Vlad's Digital"
          : "Contact — Book a Free Analytics Call | Vlad's Digital",
      description:
        lang === "sr"
          ? "Kontaktiraj Vlad's Digital. Zakaži besplatan 30-min poziv za analitiku, CRO, SEO ili Google Ads."
          : "Get in touch with Vlad's Digital. Book a free 30-minute call to discuss your analytics, CRO, SEO or Google Ads project.",
      path: "/contact",
      lang,
      keywords:
        "contact data analyst, book analytics call, free consultation, ecommerce analytics expert",
    });
  }, [lang, t]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    setError(null);
    try {
      const data = new FormData(form);
      const res = await fetch("https://formspree.io/f/xwpopwyz", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError("Something went wrong. Please email us directly.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-glow" />
        <div className="container-x py-20 md:py-24">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {t.contact.eyebrow}
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              {t.contact.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="surface-card glow-border rounded-3xl p-8 md:p-10">
              {success ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h2 className="font-display text-2xl font-bold">{t.contact.successTitle}</h2>
                  <p className="mt-2 max-w-md text-muted-foreground">{t.contact.successBody}</p>
                  <Link to="/" className="mt-6">
                    <Button variant="outline">{t.nav.home} →</Button>
                  </Link>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field name="first-name" label={t.contact.firstName} required />
                    <Field name="last-name" label={t.contact.lastName} required />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field name="email" type="email" label={t.contact.email} required />
                    <Field name="subject" label={t.contact.subject} required />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {t.contact.message}
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      className="w-full resize-none rounded-xl border border-border bg-surface/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  {error && <p className="text-sm text-destructive">{error}</p>}
                  <Button type="submit" variant="hero" size="lg" disabled={submitting} className="w-full sm:w-auto">
                    {submitting ? "Sending..." : t.contact.send}
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>

            <div className="space-y-4">
              <InfoCard icon={<MapPin className="h-5 w-5" />} label={t.contact.address}>
                {t.contact.addressValue}
              </InfoCard>
              <InfoCard icon={<Mail className="h-5 w-5" />} label={t.contact.emailLabel}>
                <a href="mailto:vladastankovic95@hotmail.com" className="hover:text-primary">vladastankovic95@hotmail.com</a>
              </InfoCard>
              <InfoCard icon={<Phone className="h-5 w-5" />} label={t.contact.callLabel}>
                <a href="tel:+381631880715" className="hover:text-primary">+381 63 188 0715</a>
              </InfoCard>
              <a
                href="https://calendly.com/vladsdigital444/30min"
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-primary/40 bg-gradient-primary p-6 text-primary-foreground shadow-glow-primary transition-transform hover:scale-[1.02]"
              >
                <div className="text-xs font-semibold uppercase tracking-wider opacity-80">{t.nav.schedule}</div>
                <div className="mt-1 font-display text-lg font-bold">Book 30 min on Calendly →</div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const Field = ({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) => (
  <div>
    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
      {label}
    </label>
    <input
      name={name}
      type={type}
      required={required}
      className="w-full rounded-xl border border-border bg-surface/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
    />
  </div>
);

const InfoCard = ({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) => (
  <div className="rounded-2xl border border-border bg-gradient-card p-5 backdrop-blur">
    <div className="flex items-start gap-4">
      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">{icon}</div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-1 font-display text-base font-semibold text-foreground">{children}</div>
      </div>
    </div>
  </div>
);

export default Contact;
