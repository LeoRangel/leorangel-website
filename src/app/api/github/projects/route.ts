import { NextResponse } from "next/server";
import { getPinnedProjects } from "@services/github/projects/getPinnedProjects";

export const revalidate = 3600;

export async function GET() {
  try {
    const projects = await getPinnedProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error("GitHub pinned projects API error:", error);
    return NextResponse.json([]);
  }
}
