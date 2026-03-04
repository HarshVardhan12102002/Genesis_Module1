export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
  created_at: string;
  updated_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  size: number;
  pushed_at: string;
  updated_at: string;
  created_at: string;
  fork: boolean;
  archived: boolean;
}

export interface TechStackItem {
  language: string;
  count: number;
  percentage: number;
}

export interface RepoInsight {
  id: number;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  sizeKb: number;
  updatedAt: string;
  pushedAt: string;
  complexityScore: number;
  activityScore: number;
  htmlUrl: string;
}

export interface DeveloperInsights {
  username: string;
  displayName: string;
  avatarUrl: string;
  profileUrl: string;
  bio: string;
  followers: number;
  following: number;
  totalRepositories: number;
  totalStars: number;
  mostUsedLanguage: string;
  recentActivity: string;
  personality: string;
  techStack: TechStackItem[];
  topRepositories: RepoInsight[];
  repositoryBreakdown: RepoInsight[];
}
