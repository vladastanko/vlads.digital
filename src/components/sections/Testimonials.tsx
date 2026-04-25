import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useLang } from "@/i18n/LangProvider";
import shane from "@/assets/testimonials/shane.jpeg";
import ian from "@/assets/testimonials/ian.jpeg";
import ihar from "@/assets/testimonials/ihar.jpeg";
import christine from "@/assets/testimonials/christine.jpeg";
import jonathan from "@/assets/testimonials/Jonathan.jpg";
import tomas from "@/assets/testimonials/Tomas.jpg";
import michael from "@/assets/testimonials/michael.jpeg";

const testimonials = [
  {
    photo: shane,
    name: "Shane Robinson",
    company: "Converted Co",
    quote:
      "Vladimir did excellent work for us — a top-class professional who really knows his stuff. He took over a job that others had failed at and solved the issues without breaking a sweat. Communication and timescales were fantastic. We will definitely hire again.",
  },
  {
    photo: ian,
    name: "Ilan Hurtwitz",
    company: "Clever Conversions",
    quote:
      "I highly recommend hiring Vladimir. He recently completed a Looker visualisation for me — great experience from start to finish. He took the time to understand my requirements, answered all my questions, and addressed feedback promptly with excellent communication.",
  },
  {
    photo: ihar,
    name: "Ihar Vakulski",
    company: "Vakulski Group",
    quote:
      "Vladimir did an excellent job on the Looker Studio dashboard. He was knowledgeable, efficient, and delivered high-quality work. Communication was smooth and he was always ready to make adjustments. Highly recommend working with him!",
  },
  {
    photo: christine,
    name: "Christine Kerlin",
    company: "GEMS Education",
    quote:
      "Wow, what a find. Vladimir did a spectacular job of transforming a complex data set into a clear presentation — in literally record time. Can't wait to work with you again!",
  },
  {
    photo: jonathan,
    name: "Jonathan Schrock",
    company: "DotCom Design",
    quote: "Vlad was great to work with. I appreciated his suggestions and ability to understand my business needs.",
  },
  {
    photo: tomas,
    name: "Tomas Poner",
    company: "Exemedia s.r.o.",
    quote:
      "Vladimir was a huge help with a complex MySQL query. He quickly understood our data structure, proposed efficient solutions, and explained everything clearly. Clean, optimized, well-documented SQL — highly recommend.",
  },
  {
    photo: michael,
    name: "Michael Chachashvili",
    company: "Shopping Ads Solutions",
    quote: "Vlad is a high quality data analyst that does more than you asked for and he is excellent.",
  },
];

export const Testimonials = () => {
  const { t } = useLang();
  const [idx, setIdx] = useState(0);
  const len = testimonials.length;

  useEffect(() => {
    const id = setInterval(() => setIdx((v) => (v + 1) % len), 7000);
    return () => clearInterval(id);
  }, [len]);

  const cur = testimonials[idx];

  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-glow opacity-60" />
      <div className="container-x">
        <div className="mb-12 text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t.home.testimonialsEyebrow}
          </div>
          <h2 className="font-display text-3xl font-bold md:text-5xl">{t.home.testimonialsTitle}</h2>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="surface-card glow-border relative rounded-3xl p-8 md:p-12 shadow-elegant">
            <Quote className="absolute -top-5 left-8 h-10 w-10 rounded-xl bg-gradient-primary p-2 text-primary-foreground shadow-glow-primary" />
            <div className="mb-5 flex items-center gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p key={idx} className="animate-fade-in text-base leading-relaxed text-foreground/90 md:text-lg">
              "{cur.quote}"
            </p>
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={cur.photo} alt={cur.name} className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/40" />
                <div>
                  <div className="font-display font-semibold text-foreground">{cur.name}</div>
                  <div className="text-sm text-muted-foreground">{cur.company}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIdx((v) => (v - 1 + len) % len)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/60 text-foreground/80 transition-colors hover:border-primary/60 hover:text-primary"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIdx((v) => (v + 1) % len)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/60 text-foreground/80 transition-colors hover:border-primary/60 hover:text-primary"
                  aria-label="Next"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === idx ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
