# Store privacy checklist

Draft mapping for the Be My Hand website and app disclosures. A lawyer should review the policies in `content/ar.ts` and `content/en.ts` before the store forms are submitted. Nothing here is a filed label.

The public deletion URL is `https://bemyhand.vercel.app/ar/legal/deletion` (English: `/en/legal/deletion`). The contact address is `hello@bemyhand.vercel.app`.

## Google Play Data safety

| Form topic | What to declare | Where it is described |
| --- | --- | --- |
| Account info (email, name, phone if added) | Collected, required for the account, not sold | Privacy: "Data the app stores" |
| User-generated content (beneficiaries, notes, chat, reviews, bag text) | Collected, visible to the workspace or the people on that link, not public on the website | Privacy: "Who can read it"; Community guidelines |
| Location | Optional, approximate or precise pin the user saves, used for maps and visits | Privacy: "Phone permissions" |
| Photos | Optional, only when the user picks or takes an image | Privacy: "Phone permissions" |
| Files (import spreadsheet) | Collected when a member imports | Privacy: "Data the app stores" |
| Device or other IDs / diagnostics | Only if a later build turns on Analytics or Crashlytics. This website does not use them | Privacy: "Services we use" |
| Data shared with service providers | Firebase (Google) for auth and database, Cloudinary for images, OpenStreetMap tile host for map requests, Vercel for this website | Privacy: "Services we use" |
| Data sold | No | Privacy: "What we do not do" |
| Data encrypted in transit | Yes, HTTPS to Firebase, Cloudinary, and this site | Architecture of those hosts |
| Users can request deletion | Yes, by email today. In-app deletion is not built yet | Deletion page |
| Children | Not directed at children. Do not knowingly offer accounts to children | Privacy; FAQ |

## Apple privacy nutrition labels

| Label area | Practice |
| --- | --- |
| Contact info | Email, and phone number if the person adds one |
| User content | Beneficiary records, photos the user uploads, support messages they send us |
| Identifiers | Account id held by Firebase Auth. No advertising id |
| Location | Only after permission, to save a pin or show a map |
| Diagnostics | None on the website. Declare crash or analytics data only after those SDKs are in a build |
| Purchases | None. The app does not take payments |
| Tracking | No tracking across other companies' apps. No advertising cookies on the website |
| Data linked to the user | Account, workspace membership, and content they submit |
| Data not linked | Theme and language cookies on this website (`theme`, `locale`) |

## Permissions to justify in the store listing

- Location: save a place on a beneficiary and open a map.
- Camera and photo library: upload an image the user chooses.
- Phone calls: the dialer opens only when the user taps call. A tap is not treated as an answered call.

## Still manual

- Replace the contact address if `hello@bemyhand.vercel.app` is not the mailbox you will read.
- Add the signing-certificate SHA-256 and the Apple Team ID before the store builds rely on verified links.
- Add the store URLs when the listings exist.
- Have a lawyer review the Arabic and English policy text.
