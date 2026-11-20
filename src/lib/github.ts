import { queryOptions } from "@tanstack/react-query";

export type GithubUser = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
};

export type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  pushed_at: string;
};

const API = "https://api.github.com";

async function getJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API}${path}`, { headers: { Accept: "application/vnd.github+json" } });
  if (res.status === 404) throw new Error("Perfil do GitHub não encontrado.");
  if (res.status === 403) throw new Error("Limite de requisições do GitHub atingido. Tente novamente em alguns minutos.");
  if (!res.ok) throw new Error(`Erro ao consultar o GitHub (${res.status}).`);
  return (await res.json()) as T;
}

export const githubUserQuery = (user: string) =>
  queryOptions({
    queryKey: ["github", "user", user],
    queryFn: () => getJson<GithubUser>(`/users/${encodeURIComponent(user)}`),
    enabled: user.length > 0,
    staleTime: 1000 * 60 * 10,
    retry: false,
  });

export const githubReposQuery = (user: string) =>
  queryOptions({
    queryKey: ["github", "repos", user],
    queryFn: () =>
      getJson<GithubRepo[]>(`/users/${encodeURIComponent(user)}/repos?sort=pushed&per_page=100`),
    enabled: user.length > 0,
    staleTime: 1000 * 60 * 10,
    retry: false,
  });

/** Repositórios próprios (sem forks), mais recentes primeiro. */
export function ownRepos(repos: GithubRepo[], limit = 100): GithubRepo[] {
  return repos
    .filter((r) => !r.fork)
    .sort((a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at))
    .slice(0, limit);
}

/** Linguagens mais usadas nos repositórios, da mais frequente para a menos. */
export function topLanguages(repos: GithubRepo[], limit = 5): { language: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const r of repos) {
    if (r.fork || !r.language) continue;
    counts.set(r.language, (counts.get(r.language) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([language, count]) => ({ language, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}
