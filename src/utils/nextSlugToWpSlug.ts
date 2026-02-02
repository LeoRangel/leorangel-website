export const nextSlugToWpSlug = (nextSlug?: string | string[]): string => {
  if (!nextSlug) return "/"; // home page
  if (Array.isArray(nextSlug)) return nextSlug.join("/");
  return nextSlug;
};
