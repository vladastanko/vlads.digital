import { forwardRef } from "react";
import { Link, NavLink, type LinkProps, type NavLinkProps } from "react-router-dom";
import { useLang } from "@/i18n/LangProvider";

/**
 * Drop-in replacement for react-router-dom's <Link> that automatically
 * prefixes string `to` paths with the current language (/sr/...).
 * External links (http://, https://, mailto:, tel:, #) are passed through.
 */
const isExternal = (to: unknown): boolean => {
  if (typeof to !== "string") return false;
  return /^(https?:|mailto:|tel:|#)/i.test(to);
};

export const LocalizedLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, ...rest }, ref) => {
    const { localizePath } = useLang();
    const finalTo = typeof to === "string" && !isExternal(to) ? localizePath(to) : to;
    return <Link ref={ref} to={finalTo} {...rest} />;
  },
);
LocalizedLink.displayName = "LocalizedLink";

export const LocalizedNavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ to, ...rest }, ref) => {
    const { localizePath } = useLang();
    const finalTo = typeof to === "string" && !isExternal(to) ? localizePath(to) : to;
    return <NavLink ref={ref} to={finalTo} {...rest} />;
  },
);
LocalizedNavLink.displayName = "LocalizedNavLink";
