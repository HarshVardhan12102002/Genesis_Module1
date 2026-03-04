import { NextRequest, NextResponse } from "next/server";
import { getGitHubRepos, getGitHubUser } from "@/lib/github/client";
import { buildDeveloperInsights } from "@/utils/analysis/insights";

export const revalidate = 1800;

export async function GET(request: NextRequest) {
  const username = request.nextUrl.searchParams.get("username")?.trim();

  if (!username) {
    return NextResponse.json({ error: "Missing username query parameter" }, { status: 400 });
  }

  try {
    const [user, repos] = await Promise.all([getGitHubUser(username), getGitHubRepos(username)]);
    const insights = buildDeveloperInsights(user, repos);

    return NextResponse.json(insights, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to analyze this profile";

    if (message.includes("not found")) {
      return NextResponse.json({ error: message }, { status: 404 });
    }

    if (message.includes("rate limit")) {
      return NextResponse.json({ error: message }, { status: 429 });
    }

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
