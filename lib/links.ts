import { site } from "@/lib/site";

const SAFE = /^[A-Za-z0-9_-]{1,80}$/;

export type JoinTarget = {
  code: string;
  app: string;
};

export function joinTarget(workspace?: string, code?: string): JoinTarget | null {
  if (!workspace || !code || !SAFE.test(workspace) || !SAFE.test(code)) return null;
  const query = `w=${encodeURIComponent(workspace)}&c=${encodeURIComponent(code)}`;
  return {
    code: `${workspace}.${code}`,
    app: `${site.scheme}://join?${query}`,
  };
}

export function bagTarget(token?: string): string | null {
  if (!token || !SAFE.test(token)) return null;
  return `${site.scheme}://bag/${encodeURIComponent(token)}`;
}
