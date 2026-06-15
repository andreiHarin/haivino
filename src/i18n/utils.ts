import ro from "./ro.json";
import en from "./en.json";

export type Locale = "ro" | "en";

export const locales = ["ro", "en"] as const satisfies readonly Locale[];
export const defaultLocale: Locale = "ro";

const dictionaries = { ro, en } as const;
export type Dict = typeof ro;

export function t(locale: Locale): Dict {
  return dictionaries[locale];
}

/**
 * Per-language URL slugs. RO is at root, EN is under /en/.
 * Edit here to rename a route — pages will follow.
 */
export const routes = {
  ro: {
    home: "/",
    about: "/despre/",
    menu: "/meniu/",
    contact: "/contact/",
  },
  en: {
    home: "/en/",
    about: "/en/about/",
    menu: "/en/menu/",
    contact: "/en/contact/",
  },
} as const;

export type RouteKey = keyof typeof routes.ro;

/**
 * Build a URL respecting Astro's `base` path (set via BASE_PATH env var).
 * Use this everywhere instead of hard-coded strings, so phase-1 (GH Pages subpath)
 * and phase-2 (custom domain at root) both work without code changes.
 */
export function localeUrl(base: string, locale: Locale, key: RouteKey): string {
  const baseClean = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${baseClean}${routes[locale][key]}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "ro" ? "en" : "ro";
}
