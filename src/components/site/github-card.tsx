import { useQuery } from "@tanstack/react-query";
import { BookMarked, Users } from "lucide-react";

import { profile } from "@/content/profile";
import { githubReposQuery, githubUserQuery, topLanguages } from "@/lib/github";
import { TerminalWindow } from "./page-header";

export function GithubCard() {
  const user = useQuery(githubUserQuery(profile.githubUser));
  const repos = useQuery(githubReposQuery(profile.githubUser));
  const langs = repos.data ? topLanguages(repos.data) : [];

  return (
    <TerminalWindow title={`GET api.github.com/users/${profile.githubUser}`}>
      {user.isPending ? (
        <div className="space-y-3" aria-label="Carregando perfil do GitHub">
          <div className="skeleton-line size-16 rounded-full" />
          <div className="skeleton-line h-4 w-2/3" />
          <div className="skeleton-line h-4 w-1/2" />
        </div>
      ) : user.isError ? (
        <p className="font-mono text-sm text-destructive">✗ {user.error.message}</p>
      ) : (
        <div className="font-mono text-sm">
          <div className="flex items-center gap-4">
            <img
              src={user.data.avatar_url}
              alt={`Foto de perfil de ${user.data.login}`}
              className="size-16 rounded-full border-2 border-primary/60"
              loading="lazy"
            />
            <div className="min-w-0">
              <p className="truncate text-base font-semibold text-foreground">
                {user.data.name ?? user.data.login}
              </p>
              <a href={user.data.html_url} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                @{user.data.login}
              </a>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-md border border-border p-3">
              <BookMarked className="mb-1 size-4 text-primary" />
              <p className="text-xl font-bold text-foreground">{user.data.public_repos}</p>
              <p className="text-xs text-muted-foreground">repositórios</p>
            </div>
            <div className="rounded-md border border-border p-3">
              <Users className="mb-1 size-4 text-primary" />
              <p className="text-xl font-bold text-foreground">{user.data.followers}</p>
              <p className="text-xs text-muted-foreground">seguidores</p>
            </div>
          </div>
          {langs.length > 0 && (
            <div className="mt-5">
              <p className="text-xs text-muted-foreground">// linguagens mais usadas</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {langs.map((l) => (
                  <span key={l.language} className="tag">
                    {l.language} · {l.count}
                  </span>
                ))}
              </div>
            </div>
          )}
          <p className="mt-5 text-xs text-primary">✓ 200 OK · dados ao vivo da API do GitHub</p>
        </div>
      )}
    </TerminalWindow>
  );
}
