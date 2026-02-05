import { Metadata } from "next";

export function mergeMetadata(base: Metadata, override?: Metadata): Metadata {
  if (!override) return base;

  return {
    ...base,
    ...override,
    openGraph: {
      ...base.openGraph,
      ...override.openGraph,
    },
    twitter: {
      ...base.twitter,
      ...override.twitter,
    },
    alternates: {
      ...base.alternates,
      ...override.alternates,
    },
  };
}
