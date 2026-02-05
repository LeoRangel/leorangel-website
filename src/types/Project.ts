export type Project = {
  id: string;
  name: string;
  url: string;
  homepageUrl?: string | null;
  openGraphImageUrl?: string;
  shortDescriptionHTML?: string | null;
  isTemplate?: boolean;
  stars?: number;
  topics?: string[];
};
