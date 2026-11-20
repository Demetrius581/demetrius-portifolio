import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, GitFork, Star } from "lucide-react";

import { PageHeader } from "@/components/site/page-header";
import { featuredProjects, profile } from "@/content/profile";
import { githubReposQuery, ownRepos } from "@/lib/github";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — Demetrius Oliveira" },
      { name: "description", content: "Projetos desenvolvidos por Demetrius Oliveira, com repositórios carregados ao vivo da API do GitHub." },
      { property: "og:title", content: "Projetos — Demetrius Oliveira" },
      { property: "og:description", content: "Projetos e repositórios do GitHub de Demetrius Oliveira." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projetos,
});

const dateFmt = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", year: "numeric" });

function Projetos() {
  const repos = useQuery(githubReposQuery(profile.githubUser));
  const list = repos.data ? ownRepos(repos.data) : [];

  return (
    <div className="mx-auto max-w-6xl px-5">
      <PageHeader
        command="ls ~/projetos"
        title="Projetos Desenvolvidos"
        description="Projetos em destaque e todos os meus repositórios públicos, carregados em tempo real da API do GitHub."
      />

      <section>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">// em destaque</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {featuredProjects.map((p) => (
            <article key={p.name} className="panel panel-interactive flex flex-col p-6">
              <h2 className="text-lg font-bold">{p.name}</h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1 font-mono text-sm text-primary hover:underline">
                  ver código <ExternalLink className="size-3.5" />
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="prompt font-mono text-sm text-muted-foreground">
              curl api.github.com/users/{profile.githubUser}/repos
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Todos os repositórios</h2>
          </div>
          {repos.isSuccess && (
            <span className="tag">{list.length} repositórios · ao vivo</span>
          )}
        </div>

        {repos.isPending ? (
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3" aria-label="Carregando repositórios">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="panel space-y-3 p-6">
                <div className="skeleton-line h-5 w-1/2" />
                <div className="skeleton-line h-4 w-full" />
                <div className="skeleton-line h-4 w-2/3" />
              </div>
            ))}
          </div>
        ) : repos.isError ? (
          <div className="panel mt-6 p-6 font-mono text-sm">
            <p className="text-destructive">✗ {repos.error.message}</p>
            <button type="button" onClick={() => repos.refetch()} className="btn-outline-terminal mt-4">
              tentar novamente
            </button>
          </div>
        ) : (
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {list.map((r) => (
              <a
                key={r.id}
                href={r.html_url}
                target="_blank"
                rel="noreferrer"
                className="panel panel-interactive group flex flex-col p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="break-all font-mono font-semibold text-foreground group-hover:text-primary">
                    {r.name}
                  </h3>
                  <ExternalLink className="size-4 shrink-0 text-muted-foreground" />
                </div>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {r.description ?? "Sem descrição no GitHub."}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
                  {r.language && <span className="tag">{r.language}</span>}
                  <span className="inline-flex items-center gap-1"><Star className="size-3.5" />{r.stargazers_count}</span>
                  <span className="inline-flex items-center gap-1"><GitFork className="size-3.5" />{r.forks_count}</span>
                  <span>atualizado {dateFmt.format(new Date(r.pushed_at))}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
