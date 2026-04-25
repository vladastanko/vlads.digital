import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { useLang } from "@/i18n/LangProvider";
import { Logo } from "./Logo";

export const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="relative mt-24 border-t border-border/60 bg-surface/40">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2 space-y-4">
            <Logo />
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Premium data analytics, engineering and CRO for e-commerce and digital marketing teams.
              Turning complex data into measurable growth.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="mailto:vladsdigital444@gmail.com" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/60 text-foreground/80 transition-colors hover:border-primary/60 hover:text-primary">
                <Mail className="h-4 w-4" />
              </a>
              <a href="tel:+381631880715" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/60 text-foreground/80 transition-colors hover:border-primary/60 hover:text-primary">
                <Phone className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/60 text-foreground/80 transition-colors hover:border-primary/60 hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">{t.nav.services}</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/e-commerce" className="hover:text-primary">E-commerce</Link></li>
              <li><Link to="/web-analytics" className="hover:text-primary">Web Analytics</Link></li>
              <li><Link to="/cro" className="hover:text-primary">CRO</Link></li>
              <li><Link to="/seo" className="hover:text-primary">SEO</Link></li>
              <li><Link to="/ads" className="hover:text-primary">Google Ads</Link></li>
              <li><Link to="/reports" className="hover:text-primary">Dashboards</Link></li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">{t.nav.contact}</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                <span>{t.contact.addressValue}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                <a href="mailto:vladsdigital444@gmail.com" className="hover:text-primary">vladsdigital444@gmail.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                <a href="tel:+381631880715" className="hover:text-primary">+381 63 188 0715</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vlad's Digital · Stankovic. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};
