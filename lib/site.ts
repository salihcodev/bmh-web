export const site = {
  name: "Be My Hand",
  url: "https://bemyhand.vercel.app",
  contactEmail: "hello@bemyhand.vercel.app",
  bundleId: "com.salihcodev.bemyhand",
  scheme: "bemyhand",
  iosStoreUrl: process.env.NEXT_PUBLIC_IOS_STORE_URL ?? "",
  androidStoreUrl: process.env.NEXT_PUBLIC_ANDROID_STORE_URL ?? "",
  /**
   * Signing-cert SHA-256 for assetlinks.json. Until the release key exists,
   * the well-known file keeps this placeholder and Android verification will not pass.
   */
  androidSha256:
    process.env.ANDROID_SHA256_CERT_FINGERPRINT ?? "REPLACE_WITH_SIGNING_CERT_SHA256",
  /**
   * Apple Team ID prefixed onto the bundle id in apple-app-site-association.
   * Universal Links stay unverified until this is the real team id.
   */
  appleTeamId: process.env.APPLE_TEAM_ID ?? "REPLACE_WITH_APPLE_TEAM_ID",
} as const;

export const locales = ["ar", "en"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return value === "ar" || value === "en";
}
