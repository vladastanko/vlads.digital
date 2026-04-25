import {
  ShoppingBag,
  BarChart3,
  Target,
  Search,
  Megaphone,
  LineChart,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  "/e-commerce": ShoppingBag,
  "/web-analytics": BarChart3,
  "/cro": Target,
  "/seo": Search,
  "/ads": Megaphone,
  "/reports": LineChart,
};

type Size = "md" | "lg";

export const ServiceIcon = ({
  href,
  size = "md",
  className,
}: {
  href: string;
  size?: Size;
  className?: string;
}) => {
  const Icon = ICON_MAP[href] ?? BarChart3;
  const box =
    size === "lg"
      ? "h-16 w-16 rounded-2xl"
      : "h-12 w-12 rounded-xl";
  const inner =
    size === "lg" ? "h-7 w-7" : "h-5 w-5";

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/15 via-secondary/10 to-transparent shadow-[inset_0_1px_0_0_hsl(var(--primary)/0.25)] transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-glow-primary",
        box,
        className,
      )}
    >
      {/* radial glow */}
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.35),transparent_60%)] opacity-80" />
      {/* subtle grid */}
      <span className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] [background-size:8px_8px]" />
      <Icon
        className={cn(inner, "relative z-10 text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]")}
        strokeWidth={1.75}
      />
    </div>
  );
};
