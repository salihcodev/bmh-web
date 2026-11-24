# Be My Hand website

Public site for Be My Hand: the Arabic-first landing page, legal pages, and the fallback pages for invite and bag links.

The app links to `https://bmyhand.vercel.app`. Invite links stay at `/join?w=…&c=…`. Bag links stay at `/bag/<token>`. Other pages are `/ar/…` (default) and `/en/…`.

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The root redirects to `/ar`.

## Scripts

- `pnpm dev` — development server
- `pnpm build` — production build
- `pnpm lint` — ESLint
- `pnpm typecheck` — `tsc --noEmit`

## Environment

Copy `.env.example` to `.env.local`. All values are optional.

| Variable | Used for |
| --- | --- |
| `NEXT_PUBLIC_IOS_STORE_URL` | App Store button. Hidden state says the listing is not live when this is empty. |
| `NEXT_PUBLIC_ANDROID_STORE_URL` | Google Play button. Same empty behavior. |
| `ANDROID_SHA256_CERT_FINGERPRINT` | `/.well-known/assetlinks.json`. Until the release signing key is set, the file contains `REPLACE_WITH_SIGNING_CERT_SHA256` and Android link verification will not pass. |
| `APPLE_TEAM_ID` | `/.well-known/apple-app-site-association`. Until this is the real team id, Universal Links will not verify. |

The package name in the Android file is `com.salihcodev.bemyhand`. The dev bundle id is not listed.

The public contact address on the legal pages is `hello@bmyhand.vercel.app` in `lib/site.ts`. Change it there before treating the policies as published. The policy text is a draft and should be reviewed by a lawyer.

## What the link pages show

`/join` shows the manual code (`workspace.invite`) and store buttons. It does not load workspace data.

`/bag/<token>` tells the visitor to open the app or sign in. It does not show items, prices, or names.
