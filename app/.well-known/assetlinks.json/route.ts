import { site } from "@/lib/site";

export function GET() {
  const body = [
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: site.bundleId,
        sha256_cert_fingerprints: [site.androidSha256],
      },
    },
  ];

  return Response.json(body, {
    headers: { "cache-control": "public, max-age=3600" },
  });
}
