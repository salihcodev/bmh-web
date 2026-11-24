import { site } from "@/lib/site";

export function GET() {
  const body = {
    applinks: {
      apps: [],
      details: [
        {
          appIDs: [`${site.appleTeamId}.${site.bundleId}`],
          components: [
            { "/": "/join", "?": { w: "?*", c: "?*" } },
            { "/": "/bag/*" },
          ],
        },
      ],
    },
  };

  return Response.json(body, {
    headers: { "cache-control": "public, max-age=3600" },
  });
}
