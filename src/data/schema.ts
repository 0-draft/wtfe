import { z } from "zod";

export const THEME_IDS = ["design", "failure", "feedback", "hierarchy", "communication", "work", "oss"] as const;
export type ThemeId = (typeof THEME_IDS)[number];

export const CONFIDENCE = ["strong", "medium", "weak"] as const;
export type Confidence = (typeof CONFIDENCE)[number];

export const COUNTRY_IDS = [
  "jp",
  "kr",
  "cn",
  "in",
  "us",
  "gb",
  "de",
  "fr",
  "nordics",
  "nl",
  "il",
  "br",
  "pl",
  "ua",
] as const;
export type CountryId = (typeof COUNTRY_IDS)[number];

/**
 * Erin Meyer's eight scales, each read left pole (negative steps) to right pole (positive steps):
 * communicating low-context ↔ high-context, evaluating direct ↔ indirect negative feedback,
 * persuading principles-first ↔ applications-first, leading egalitarian ↔ hierarchical,
 * deciding consensual ↔ top-down, trusting task-based ↔ relationship-based,
 * disagreeing confrontational ↔ avoids confrontation, scheduling linear-time ↔ flexible-time.
 */
export const CULTURE_MAP_SCALES = [
  "communicating",
  "evaluating",
  "persuading",
  "leading",
  "deciding",
  "trusting",
  "disagreeing",
  "scheduling",
] as const;
export type CultureMapScale = (typeof CULTURE_MAP_SCALES)[number];

export const HOFSTEDE_DIMENSIONS = ["pdi", "idv", "mas", "uai", "lto", "ivr"] as const;
export type HofstedeDimension = (typeof HOFSTEDE_DIMENSIONS)[number];

export const sourceSchema = z.strictObject({
  title: z.string().min(1),
  url: z.url({ protocol: /^https$/ }),
  /** Publication year when known; used to flag stale evidence. */
  year: z.number().int().min(1950).max(2100).optional(),
});
export type Source = z.infer<typeof sourceSchema>;

export const claimSchema = z.strictObject({
  /** `<country>-<theme>-<n>`; identical in every language so translations can be paired. */
  id: z.string().regex(/^[a-z]+-[a-z]+-\d+$/),
  text: z.string().min(8),
  confidence: z.enum(CONFIDENCE),
  sources: z.array(sourceSchema).min(1),
});
export type Claim = z.infer<typeof claimSchema>;

export const countryContentSchema = z.strictObject({
  id: z.enum(COUNTRY_IDS),
  name: z.string().min(1),
  /** One sentence shown on cards and in the compare view. */
  oneLiner: z.string().min(1),
  /** Short paragraph that frames the country page. */
  intro: z.string().min(1),
  themes: z.strictObject(
    Object.fromEntries(THEME_IDS.map((t) => [t, z.array(claimSchema).min(1)])) as Record<
      ThemeId,
      z.ZodArray<typeof claimSchema>
    >,
  ),
  /** Within-country variance and counter-evidence: the guard against reading the page as a stereotype. */
  variance: z.array(z.string().min(1)).min(1),
});
export type CountryContent = z.infer<typeof countryContentSchema>;

/** Hofstede 0-100 scores for one country (a region such as the Nordics has several). */
export const hofstedeSchema = z.strictObject({
  country: z.string().min(1),
  scores: z.strictObject(
    Object.fromEntries(HOFSTEDE_DIMENSIONS.map((d) => [d, z.number().int().min(0).max(120).nullable()])) as Record<
      HofstedeDimension,
      z.ZodNullable<z.ZodNumber>
    >,
  ),
  source: sourceSchema,
});

/**
 * Culture Map position read off Erin Meyer's published charts, on a deliberately coarse 7-step scale
 * (-3 = far left pole, +3 = far right pole). `null` means no source places the country on that scale.
 */
export const cultureMapPositionSchema = z.strictObject({
  step: z.number().int().min(-3).max(3).nullable(),
  /** `primary` = Meyer's own chart; `secondary` = reviews/summaries only. */
  basis: z.enum(["primary", "secondary"]).nullable(),
  /** Free-text qualifier, e.g. which Nordic country the step refers to. */
  note: z.string().optional(),
});

export const countryMetaSchema = z.strictObject({
  id: z.enum(COUNTRY_IDS),
  /** ISO 3166-1 alpha-2 codes covered by this entry (several for a region). */
  iso: z.array(z.string().regex(/^[A-Z]{2}$/)).min(1),
  hofstede: z.array(hofstedeSchema),
  cultureMap: z.strictObject(
    Object.fromEntries(CULTURE_MAP_SCALES.map((s) => [s, cultureMapPositionSchema])) as Record<
      CultureMapScale,
      typeof cultureMapPositionSchema
    >,
  ),
});
export type CountryMeta = z.infer<typeof countryMetaSchema>;
