import { Link } from "react-router-dom";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
    <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow-primary transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary-foreground" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 17l4-4 3 3 7-8 4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
    <span className="font-display text-lg font-bold tracking-tight text-foreground">
      Vlad's <span className="text-gradient">Digital</span>
    </span>
  </Link>
);
