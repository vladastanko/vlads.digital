import { CheckCircle2 } from "lucide-react";
import { LocalizedLink as Link } from "@/components/LocalizedLink";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LangProvider";

const ThankYou = () => {
  const { t } = useLang();
  return (
    <Layout>
      <section className="container-x py-32 text-center">
        <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/15 text-primary">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h1 className="mt-8 font-display text-4xl font-bold md:text-5xl">{t.contact.successTitle}</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t.contact.successBody}</p>
        <div className="mt-8">
          <Link to="/"><Button variant="hero" size="lg">{t.nav.home}</Button></Link>
        </div>
      </section>
    </Layout>
  );
};

export default ThankYou;
