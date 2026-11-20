import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

import { PageHeader } from "@/components/site/page-header";
import { featuredProjects } from "@/content/profile";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — Demetrius Oliveira" },
      { name: "description", content: "Projetos desenvolvidos por Demetrius Oliveira na faculdade e em estudos complementares." },
      { property: "og:title", content: "Projetos — Demetrius Oliveira" },
      { property: "og:description", content: "Projetos de Demetrius Oliveira: portfólio, exercícios de Java e práticas de lógica." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projetos,
});

function Projetos() {
  return (
    <div className="mx-auto max-w-6xl px-5">
      <PageHeader
        command="ls ~/projetos"
        title="Projetos Desenvolvidos"
        description="Projetos que desenvolvi na faculdade e nos meus estudos, com as tecnologias usadas em cada um."
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
    </div>
  );
}
