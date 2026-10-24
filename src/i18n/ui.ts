export const LANGS = ["en", "ja"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

/** Site base path ("/wtfe/" on GitHub Pages), always with a trailing slash. */
export const BASE = withTrailingSlash(import.meta.env.BASE_URL ?? "/");

function withTrailingSlash(p: string): string {
  return p.endsWith("/") ? p : `${p}/`;
}

/**
 * Absolute href for a site page. English lives at the base, Japanese under `<base>ja/`.
 * `path` is site-relative ("/", "/countries/jp/"); the result always ends with a slash.
 */
export function localePath(lang: Lang, path: string, base: string = BASE): string {
  const rel = path.replace(/^\/+/, "");
  const prefix = lang === DEFAULT_LANG ? "" : `${lang}/`;
  const joined = `${withTrailingSlash(base)}${prefix}${rel}`;
  return joined.endsWith("/") || joined.includes("#") || joined.includes("?") ? joined : `${joined}/`;
}

/** Inverse of localePath: the site-relative path ("/countries/jp/") of a full pathname. */
export function stripLocale(pathname: string, base: string = BASE): string {
  const b = withTrailingSlash(base);
  const rest = pathname.startsWith(b) ? pathname.slice(b.length) : pathname.replace(/^\/+/, "");
  const noLang = rest.replace(/^ja(\/|$)/, "");
  return `/${noLang}`;
}

export function langFromPath(pathname: string, base: string = BASE): Lang {
  const b = withTrailingSlash(base);
  const rest = pathname.startsWith(b) ? pathname.slice(b.length) : pathname.replace(/^\/+/, "");
  return /^ja(\/|$)/.test(rest) ? "ja" : "en";
}
