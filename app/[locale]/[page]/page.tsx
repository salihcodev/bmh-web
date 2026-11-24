import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ page: "missing" }];
}

export default function UnknownPage() {
  notFound();
}
