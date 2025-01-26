export const locales = ["us", "es"] as const;
export type Locale = (typeof locales)[number];