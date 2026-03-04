import { DeveloperInsights, GitHubRepo, GitHubUser, RepoInsight, TechStackItem } from "@/types/github";

const PERSONALITY_RULES = [
  {
    key: "Architecture-focused builder",
    check: (repos: RepoInsight[]) => repos.some((repo) => repo.complexityScore > 70),
  },
  {
    key: "Open source contributor",
    check: (_repos: RepoInsight[], user: GitHubUser) => user.followers > 100,
  },
  {
    key: "Experiment-driven hacker",
    check: (repos: RepoInsight[]) => {
      const languageSet = new Set(repos.map((repo) => repo.language).filter(Boolean));
      return languageSet.size >= 4;
    },
  },
  {
    key: "Consistency-first shipper",
    check: (repos: RepoInsight[]) => repos.filter((repo) => repo.activityScore > 60).length >= 3,
  },
];

function normalizeLanguage(language: string | null) {
  return language?.trim() || "Other";
}

function complexityScore(repo: GitHubRepo) {
  const sizeFactor = Math.min(50, repo.size / 40);
  const socialFactor = Math.min(35, repo.stargazers_count * 2 + repo.forks_count * 1.5);
  const updateFactor = Math.min(15, Math.max(0, 30 - daysSince(repo.pushed_at)) / 2);

  return Math.round(sizeFactor + socialFactor + updateFactor);
}

function activityScore(repo: GitHubRepo) {
  const recent = Math.max(0, 120 - daysSince(repo.pushed_at));
  const traction = repo.stargazers_count * 3 + repo.forks_count * 2;

  return Math.min(100, Math.round(recent * 0.6 + traction * 0.4));
}

function daysSince(date: string) {
  const now = new Date();
  const then = new Date(date);
  const diffMs = Math.max(0, now.getTime() - then.getTime());

  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

function formatRelative(date: string) {
  const days = daysSince(date);

  if (days <= 1) {
    return "Updated today";
  }

  if (days < 7) {
    return `Updated ${days} days ago`;
  }

  if (days < 30) {
    return `Updated ${Math.floor(days / 7)} weeks ago`;
  }

  return `Updated ${Math.floor(days / 30)} months ago`;
}

function getTopRepositories(repos: RepoInsight[]) {
  return [...repos]
    .sort((a, b) => {
      const aScore = a.stars * 4 + a.forks * 2 + a.activityScore;
      const bScore = b.stars * 4 + b.forks * 2 + b.activityScore;
      return bScore - aScore;
    })
    .slice(0, 6);
}

function computeTechStack(repos: GitHubRepo[]): TechStackItem[] {
  const languageCount = new Map<string, number>();

  for (const repo of repos) {
    const language = normalizeLanguage(repo.language);
    languageCount.set(language, (languageCount.get(language) ?? 0) + 1);
  }

  const total = repos.length || 1;

  return Array.from(languageCount.entries())
    .map(([language, count]) => ({
      language,
      count,
      percentage: Number(((count / total) * 100).toFixed(1)),
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);
}

function computePersonality(repos: RepoInsight[], user: GitHubUser) {
  for (const rule of PERSONALITY_RULES) {
    if (rule.check(repos, user)) {
      return rule.key;
    }
  }

  return "Focused indie builder";
}

function toRepoInsight(repo: GitHubRepo): RepoInsight {
  return {
    id: repo.id,
    name: repo.name,
    description: repo.description ?? "No repository description provided.",
    language: normalizeLanguage(repo.language),
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    sizeKb: repo.size,
    updatedAt: repo.updated_at,
    pushedAt: repo.pushed_at,
    complexityScore: complexityScore(repo),
    activityScore: activityScore(repo),
    htmlUrl: repo.html_url,
  };
}

export function buildDeveloperInsights(user: GitHubUser, repos: GitHubRepo[]): DeveloperInsights {
  const mappedRepos = repos.map(toRepoInsight);
  const topRepositories = getTopRepositories(mappedRepos);
  const repositoryBreakdown = [...mappedRepos]
    .sort((a, b) => b.complexityScore - a.complexityScore)
    .slice(0, 4);
  const techStack = computeTechStack(repos);

  return {
    username: user.login,
    displayName: user.name ?? user.login,
    avatarUrl: user.avatar_url,
    profileUrl: user.html_url,
    bio: user.bio ?? "No public bio available.",
    followers: user.followers,
    following: user.following,
    totalRepositories: repos.length,
    totalStars: repos.reduce((total, repo) => total + repo.stargazers_count, 0),
    mostUsedLanguage: techStack[0]?.language ?? "N/A",
    recentActivity: topRepositories[0] ? formatRelative(topRepositories[0].pushedAt) : "No recent public activity",
    personality: computePersonality(mappedRepos, user),
    techStack,
    topRepositories,
    repositoryBreakdown,
  };
}
