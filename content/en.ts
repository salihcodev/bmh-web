import type { Dictionary } from "@/content/types";

const updated = "19 November 2026";

export const en: Dictionary = {
  skip: "Skip to content",
  lawyerNote:
    "This is a working draft for the Be My Hand project. Have a lawyer review it before you treat it as final legal text.",
  meta: {
    title: "Be My Hand",
    description:
      "Helping hands, organized. An Arabic-first field app for charity teams: beneficiaries, areas, and distribution sessions that keep working offline.",
  },
  nav: {
    features: "Features",
    how: "How it works",
    store: "Store",
    faq: "FAQ",
    about: "About",
    help: "Help",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  locale: { label: "Language", ar: "العربية", en: "English" },
  theme: { label: "Color theme", toLight: "Switch to light theme", toDark: "Switch to dark theme" },
  hero: {
    eyebrow: "For local charity teams",
    title: "Helping hands, organized.",
    subtitle:
      "Keep beneficiaries, neighborhoods, and distribution days in one workspace. Arabic first, English ready, and useful when the signal drops.",
    primary: "See how a session works",
    secondary: "Get the app",
  },
  features: {
    title: "Built for the day of distribution",
    intro: "The tools a small team actually uses in the street, not a back-office suite.",
    items: [
      {
        title: "Workspaces",
        body: "Each team has its own space. Members see that team's people and sessions. Other teams do not.",
      },
      {
        title: "Beneficiaries",
        body: "Names, Egyptian phone numbers, a city and area, and pins you can open in a map.",
      },
      {
        title: "Field sessions",
        body: "Pick a city and areas, cap the list, then mark each visit done or ignored without waiting on the server.",
      },
      {
        title: "Offline first",
        body: "Record the work on the phone. It syncs when the connection comes back. The status stays visible.",
      },
      {
        title: "Invites",
        body: "Share a link and a short code. The link opens the app when it is installed, and this site when it is not.",
      },
      {
        title: "Import and export",
        body: "Bring a spreadsheet in, and take lists, profiles, and session reports out as Excel, CSV, or PDF.",
      },
    ],
  },
  how: {
    title: "How a distribution day runs",
    intro: "Four steps from an empty workspace to a report you can share.",
    steps: [
      {
        title: "Open a workspace",
        body: "Create one for your team, or join with an invite link or the manual code.",
      },
      {
        title: "Add people and areas",
        body: "Cities, neighborhoods, and beneficiary records live with the team that entered them.",
      },
      {
        title: "Run the session",
        body: "Choose who is on today's list. In the field, check or ignore each person and add a note if you need one.",
      },
      {
        title: "Close and export",
        body: "End the session when the round is done. Counts stay on the session, and you can export the report.",
      },
    ],
  },
  store: {
    title: "Suppliers, items, and shared bags",
    intro:
      "Teams can also prepare what they want to distribute. Suppliers list goods. A bag is a shared list with a private link.",
    items: [
      {
        title: "A store you can search",
        body: "Browse by category, supplier, and availability. Switch between cards and a compact list.",
      },
      {
        title: "Supplier profiles",
        body: "Cover, logo, where they serve, and reviews from other people. A supplier cannot review themselves.",
      },
      {
        title: "Bags from a cart",
        body: "Group items, name the bag, and share a link. Prices stay in Egyptian pounds, set by the supplier.",
      },
    ],
  },
  bags: {
    title: "A bag link is an invitation, not a public page",
    intro: "This website never shows what is inside a bag. The list opens in the app after sign-in.",
    points: [
      "The link does not publish names, quantities, or totals here.",
      "Edits inside the app are written down so the team can see what changed.",
      "A public bag can count how many times it was used in a distribution.",
    ],
  },
  screens: {
    title: "The work, on one phone",
    intro: "Illustrations of the field flow. These are drawings of the product, not photographs of a device.",
    note: "Illustration",
    frames: {
      session: {
        label: "Session",
        title: "Today's round",
        rows: [
          { name: "First visit", state: "Done" },
          { name: "Second visit", state: "Left" },
          { name: "Third visit", state: "Next" },
        ],
      },
      people: {
        label: "People",
        title: "Beneficiaries",
        query: "Search by name",
        names: ["A family file", "A neighbor file", "An area file"],
      },
      bag: {
        label: "Bag",
        title: "Shared bag",
        lines: ["Open in the app", "Sign in to see items", "Link stays private"],
      },
    },
  },
  faq: {
    title: "Questions teams ask",
    intro: "Short answers. The help center has the longer version.",
    items: [
      {
        question: "Does it work without a connection?",
        answer:
          "Yes for the field work that is already on the phone. Checking a visit, ignoring one, and editing a beneficiary can be saved offline and sent later. Starting a brand-new session snapshot needs a connection.",
      },
      {
        question: "Who can see beneficiary records?",
        answer:
          "Members of that workspace. Platform staff are not given a way to read another team's beneficiary list. A person you invite can see what their role allows.",
      },
      {
        question: "I opened an invite in the browser. What now?",
        answer:
          "If the app is installed, the phone should offer to open it. If not, this site shows the manual code and the store buttons. It does not show the workspace's people or notes.",
      },
      {
        question: "I opened a bag link. Why is the list missing?",
        answer:
          "On purpose. A bag link on the web only tells you to open the app or sign in. Items, prices, and names stay in the app.",
      },
      {
        question: "Is this app for children?",
        answer:
          "No. Be My Hand is a tool for adult charity teams. Do not create an account for a child or store a child's account here.",
      },
      {
        question: "How do I delete my account?",
        answer:
          "Write to the contact address from the account email you use in the app. Say that you want the account deleted. In-app deletion is part of the product plan and is not in the app yet.",
      },
    ],
  },
  impact: {
    title: "What we are careful about",
    intro: "No invented totals. These are the promises the product is built around.",
    items: [
      {
        title: "The list stays with the team",
        body: "Beneficiary data is workspace data. It is not a public directory and it is not a marketing list.",
      },
      {
        title: "The street does not wait",
        body: "A visit can be marked while you are offline. Sync state is shown separately from the tap.",
      },
      {
        title: "Arabic is the default",
        body: "The interface is Arabic and right-to-left first, with English beside it, including this website.",
      },
    ],
  },
  download: {
    title: "Carry it on the round",
    intro: "Store listings will appear here when they are public. Until then, install a build your team already shared.",
    ios: "App Store",
    android: "Google Play",
    soon: "Not listed yet",
    openApp: "Open in the app",
  },
  footer: {
    product: "Product",
    company: "Project",
    legal: "Legal",
    rights: "Be My Hand. A field tool for charity teams.",
  },
  legalNav: {
    terms: "Terms",
    privacy: "Privacy",
    cookies: "Cookies",
    deletion: "Delete account",
    guidelines: "Community guidelines",
    disclaimer: "Disclaimer",
  },
  about: {
    title: "About",
    intro: "Be My Hand helps local teams organize aid: who it is for, where they are, and what happened on distribution day.",
    sections: [
      {
        heading: "Who it is for",
        paragraphs: [
          "Small charity teams that visit people, call them, and need a shared list that still works in a weak network.",
          "A supplier on the platform can list goods and keep a profile. A member can join a workspace, and the person who creates a workspace administers it.",
        ],
      },
      {
        heading: "What the project does not do",
        paragraphs: [
          "It does not publish beneficiary records on this website. It does not move donation money. Support methods such as an InstaPay transfer happen outside the app, directly with the method the team shows.",
          "It does not decide who deserves help. The team enters the records and is responsible for them.",
        ],
      },
      {
        heading: "The pieces around the app",
        paragraphs: [
          "Accounts and the database use Firebase. Photos use Cloudinary, uploaded from the app, and the app stores the image id rather than a permanent public URL. Maps use OpenStreetMap tiles.",
          "This website is the public face, the place invite and bag links land when the app is not installed, and the home of these policies.",
        ],
      },
    ],
  },
  contact: {
    title: "Contact",
    intro: "Write for support, a privacy request, or account deletion. There is no street address published for this project.",
    emailLabel: "Email",
    sections: [
      {
        heading: "What to include",
        paragraphs: [
          "Use the email on the account when you can. For deletion, say clearly that you want the account deleted.",
          "For a safety report about chat, a review, or a store listing, include the date and where you saw it. Do not send beneficiary spreadsheets to this address unless we ask for a specific record to resolve your own request.",
        ],
      },
      {
        heading: "What this inbox is not",
        paragraphs: [
          "It is not an emergency service and it does not receive donations. If you opened an invite or a bag link, use the buttons on that page to open the app.",
        ],
      },
    ],
  },
  help: {
    title: "Help center",
    intro: "Practical notes for the website and the first day with the app.",
    topics: [
      {
        title: "Create or join a workspace",
        body: "After sign-in, onboarding asks you to create a workspace or join one. An invite is a link plus a manual code made of the workspace id and the code, separated by a dot.",
      },
      {
        title: "The invite opened in the browser",
        body: "The page on this site repeats the manual code and offers the stores. It cannot show the team's list. Install the app, then open the link again or type the code.",
      },
      {
        title: "A bag link",
        body: "The web page will not show the bag. Sign in inside the app and open the same link there. People without the link should not receive the contents by email or screenshot from this site, because this site never had them.",
      },
      {
        title: "Offline",
        body: "The phone keeps working on data it already has. A badge shows whether changes are still waiting. Background sync is not guaranteed when the app is closed.",
      },
      {
        title: "Language and theme on this site",
        body: "Arabic is the default. The language control switches between Arabic and English and keeps the same page. The theme control follows the system until you choose light or dark.",
      },
      {
        title: "Delete an account",
        body: "Use the deletion page and the contact email. Deleting from inside the app is planned and is not available yet. Deleting an account does not automatically erase records a workspace still needs; see that page.",
      },
    ],
  },
  terms: {
    title: "Terms of use",
    updated,
    sections: [
      {
        heading: "The service",
        paragraphs: [
          "Be My Hand is a software tool for organizing charity fieldwork, workspaces, and related store and bag features. These terms cover the mobile app and this website.",
          "The project is offered as available. Features can change, and some parts (store listings, in-app account deletion) may not be in the build you have.",
        ],
      },
      {
        heading: "Accounts",
        paragraphs: [
          "You need an account for the app. You are responsible for the activity under your login and for keeping access to the email or phone you used.",
          "Do not share a login. Invite teammates into the workspace instead.",
        ],
      },
      {
        heading: "Workspaces and records you enter",
        paragraphs: [
          "The person who creates a workspace administers it. Admins decide roles. You may only enter beneficiary, location, and session data your team has a right to use.",
          "You keep responsibility for the accuracy of those records and for the lawful basis you rely on to store them. The app does not verify eligibility for aid.",
        ],
      },
      {
        heading: "Store, reviews, chat, and bags",
        paragraphs: [
          "Where those features are available, suppliers describe their own goods. Members may review a supplier, not themselves. Chat and bags are for the people who are allowed into that workspace or link.",
          "You must not post unlawful content, another person's private data, or anything the community guidelines forbid. We may remove content or suspend an account that breaks those rules.",
        ],
      },
      {
        heading: "Money",
        paragraphs: [
          "The app does not take card payments and does not hold donation funds. A support method shown by a team, such as an InstaPay address, is a transfer you make outside Be My Hand.",
        ],
      },
      {
        heading: "Stopping use",
        paragraphs: [
          "You may stop using the service and ask for account deletion as described on the deletion page. We may suspend access that threatens other people's data, the free-tier infrastructure, or these terms.",
          "The disclaimer page limits what you can expect from an offline field tool. Those limits are part of these terms.",
        ],
      },
    ],
  },
  privacy: {
    title: "Privacy policy",
    updated,
    sections: [
      {
        heading: "Who this applies to",
        paragraphs: [
          "This policy describes the Be My Hand app and this website. It is written for adult team members, suppliers, and visitors. The product is not directed at children, and we do not knowingly create children's accounts.",
        ],
      },
      {
        heading: "Data the app stores",
        paragraphs: [
          "Account data: email, phone if you add one, display name, language, and the role information needed to sign you in and place you in a workspace.",
          "Workspace data that your team enters: beneficiary names and phones, addresses and map pins, cities and areas, session results, notes, and files you import.",
          "Optional photos and files you choose to upload (avatar, banners, store or bag images, chat images). Uploads go to Cloudinary. The database keeps the image identifier, size, and format, not a hand-built public URL.",
          "On the device: an offline copy and a queue of changes that have not synced yet, so the app can keep working without a network.",
        ],
      },
      {
        heading: "Who can read it",
        paragraphs: [
          "Workspace members can read what their role allows, and only inside that workspace. Beneficiary lists are not public and are not shown on this website.",
          "Platform staff roles are not a back door into a team's beneficiary records. Support access is limited to operating the product, not to browsing aid lists.",
          "A bag link does not make the bag public on the web. Opening it in the app still requires a signed-in user and the token.",
        ],
      },
      {
        heading: "Phone permissions",
        paragraphs: [
          "Location, if you allow it, is used to drop a pin or show a map. The app can also store a pin you type or paste.",
          "Camera and photo library, if you allow them, are used when you choose an image to upload. You can refuse, and the rest of the field workflow still works.",
          "The phone dialer opens only when you choose to call. Starting a call is not treated as proof that someone answered.",
        ],
      },
      {
        heading: "Services we use",
        paragraphs: [
          "Firebase (Google) provides authentication and the Firestore database, including the offline cache on the device.",
          "Cloudinary stores images you upload.",
          "OpenStreetMap provides map tiles when a map is on screen. Tile requests include the technical data a map request normally sends, such as the tile coordinates and IP address, to the tile host.",
          "This website is hosted on Vercel. It does not run the app's database.",
          "If a later build enables Firebase Analytics or Crashlytics, those collect app diagnostics (such as crashes and basic usage). They are not required to read this website.",
        ],
      },
      {
        heading: "What we do not do",
        paragraphs: [
          "We do not sell personal information. We do not use this website for advertising cookies. We do not ask the app to read your contacts, and we do not process donations inside the app.",
        ],
      },
      {
        heading: "How long it stays",
        paragraphs: [
          "Account and workspace data stay while the account and the workspace exist. Session history is kept so a team can see what already happened.",
          "After a deletion request we remove the account as described on the deletion page. Copies can remain for a short time in backups, and a workspace may keep records it still needs, with your personal login removed.",
        ],
      },
      {
        heading: "Your requests",
        paragraphs: [
          "You can correct profile and workspace data inside the app, where your role allows it. For access or deletion of the account itself, email {email} from the account address.",
          "This draft does not pick a single country's statute. A lawyer should map it to the rules that apply where the team operates, including Egyptian practice where the product is used.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie policy",
    updated,
    sections: [
      {
        heading: "What this site stores",
        paragraphs: [
          "Two first-party cookies, and only after you use the matching control or open a localized page.",
          "locale remembers Arabic or English so an invite or bag link, which has no language in the URL, opens in the language you last chose. theme remembers light or dark if you stop following the system theme.",
        ],
      },
      {
        heading: "What this site does not store",
        paragraphs: [
          "No advertising cookies, no third-party analytics cookies, and no cookie that identifies a workspace or a bag.",
          "The theme can also follow your system setting with no cookie until you choose.",
        ],
      },
      {
        heading: "The mobile app",
        paragraphs: [
          "The app is not this website. It keeps a local session and an offline database on the device using Firebase and on-device storage. That is device storage, not a browser cookie. Details are in the privacy policy.",
        ],
      },
      {
        heading: "How to clear them",
        paragraphs: [
          "Use your browser's site settings for bemyhand.vercel.app to delete cookies. The site will return to Arabic and the system theme.",
        ],
      },
    ],
  },
  deletion: {
    title: "Delete your account and data",
    updated,
    sections: [
      {
        heading: "Ask by email",
        paragraphs: [
          "Email {email} from the address on the account. Use a subject you will recognize, and say that you want your Be My Hand account deleted.",
          "In-app deletion from the account screen is planned and is not available in the app yet. Until it is, this page and the email address are the way to ask.",
        ],
      },
      {
        heading: "What we delete",
        paragraphs: [
          "Your sign-in, profile, and membership where the workspace can continue without that login.",
          "Supplier profile fields tied only to you, when a supplier profile exists.",
        ],
      },
      {
        heading: "What can remain",
        paragraphs: [
          "A workspace you created may still hold beneficiaries, sessions, and files the team needs. If you are the only admin, say so in the email so the workspace can be closed or handed over instead of being left without an owner.",
          "Messages or reviews you already sent may stay in the conversation or on the supplier, with your account detached, when other people rely on that record. Tell us if a specific message should be removed under the community guidelines.",
          "Backups and security logs can keep a copy for a limited time and are not used to restore a deleted login.",
        ],
      },
      {
        heading: "After the request",
        paragraphs: [
          "We will confirm to the same email when the account can no longer sign in. If we cannot match the request to an account, we will reply and ask for a detail you can provide without sending a beneficiary list.",
        ],
      },
    ],
  },
  guidelines: {
    title: "Community guidelines",
    updated,
    sections: [
      {
        heading: "Field records",
        paragraphs: [
          "Beneficiary data stays inside the workspace. Do not export it to a public chat, a public bag, or this website. Share an invite only with someone who should join the team.",
        ],
      },
      {
        heading: "Chat, reviews, and the store",
        paragraphs: [
          "No harassment, threats, hate, sexual content involving minors, scams, or unlawful goods. No review of your own supplier profile. No pretending to be another organization.",
          "Images you upload should be ones you have the right to share. Do not upload a beneficiary's photo into a public store or a public bag.",
        ],
      },
      {
        heading: "Reports and moderation",
        paragraphs: [
          "Report a problem to {email} with the date and the screen you were on. Do not include a full beneficiary export.",
          "Owner and moderator roles may remove content or suspend an account. The support role does not get access to chat. Removal can be recorded in the admin log.",
        ],
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    updated,
    sections: [
      {
        heading: "Records are the team's",
        paragraphs: [
          "Be My Hand stores what a workspace enters. It does not check identity, need, or the result of a visit. A checked name means the operator marked it, not that aid was received or that a phone call was answered.",
        ],
      },
      {
        heading: "Offline and maps",
        paragraphs: [
          "Changes made offline appear on the server only after they sync. Closing the app does not guarantee a background upload.",
          "Maps use OpenStreetMap and can be wrong or incomplete. Confirm a location the way your team already does.",
        ],
      },
      {
        heading: "Store and money",
        paragraphs: [
          "Item prices and stock are set by suppliers. A bag total is arithmetic on those figures, not a payment receipt. Donations and transfers happen outside the app.",
        ],
      },
      {
        heading: "No professional advice",
        paragraphs: [
          "The app and these pages are not legal, medical, or financial advice. The policies are a draft until a lawyer reviews them. The software is provided as available, without a promise that a session, export, or link will be uninterrupted.",
        ],
      },
    ],
  },
  join: {
    title: "Open the invite in the app",
    body: "This page does not show the workspace, its members, or its beneficiary list. Install Be My Hand, then open the link again or enter the code.",
    codeLabel: "Manual code",
    copy: "Copy code",
    copied: "Copied",
    missing: "This invite link is incomplete. Ask the team to send a new link that includes both the workspace and the code.",
    schemeHint: "Already installed? Open the app with this invite.",
  },
  bag: {
    title: "Open this bag in the app",
    body: "Sign in after the app opens. The bag is not shown on the web: no items, no prices, no names.",
    private: "If the app is not installed yet, use the store buttons, then come back to the same link.",
  },
  notFound: {
    title: "This page is not here",
    body: "The link may be old. The home page, help center, and legal pages are still available.",
    home: "Back to the home page",
  },
};
