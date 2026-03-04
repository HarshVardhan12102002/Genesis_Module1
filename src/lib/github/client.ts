import { GitHubRepo, GitHubUser } from "@/types/github";

const GITHUB_API = "https://api.github.com";

function getHeaders() {
  const token = process.env.GITHUB_TOKEN;

  return {
    Accept: "application/vnd.github+json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

async function fetchGitHub<T>(path: string): Promise<T> {
  const response = await fetch(`${GITHUB_API}${path}`, {
    headers: getHeaders(),
    next: { revalidate: 60 * 30 },
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("GitHub profile not found");
    }

    if (response.status === 403) {
      throw new Error("GitHub API rate limit exceeded");
    }

    throw new Error(`GitHub API error (${response.status})`);
  }

  return response.json() as Promise<T>;
}

export async function getGitHubUser(username: string) {
  return fetchGitHub<GitHubUser>(`/users/${username}`);
}

export async function getGitHubRepos(username: string) {
  const repos = await fetchGitHub<GitHubRepo[]>(`/users/${username}/repos?per_page=100&sort=updated`);

  return repos.filter((repo) => !repo.fork && !repo.archived);
}
