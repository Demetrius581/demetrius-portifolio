import { createFileRoute } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";

import { PageHeader } from "@/components/site/page-header";
import { jobs } from "@/content/profile";

export const Route = createFileRoute("/profissional")({
  head: () => ({
    meta: [
      { title: "Experiência Profissional — Demetrius Oliveira" },
      { name: "description", content: "Experiência profissional de Demetrius Oliveira: estágios de TI na Mediez e Smile Tecnologia e logística na Cobra Rolamentos." },
      { property: "og:title", content: "Experiência Profissional — Demetrius Oliveira" },
      { property: "og:description", content: "Estágios de TI e experiência em logística." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Profissional,
});

function Profissional() {
  return (
    <div className="mx-auto max-w-4xl px-5">
      <PageHeader
        command="history | grep trabalho"
        title="Experiência Profissional"
        description="Onde já trabalhei e o que aprendi em cada lugar."
      />
      <ol className="timeline space-y-6">
        {jobs.map((j, i) => (
          <li key={j.company} className="fade-up relative" style={{ animationDelay: `${i * 100}ms` }}>
            <span className="timeline-dot" />
            <article className="panel panel-interactive p-6">
              <span className="tag">{j.area}</span>
              <h2 className="mt-3 flex items-center gap-2 text-xl font-bold">
                <Briefcase className="size-5 text-primary" /> {j.role}
              </h2>
              <p className="mt-1 font-mono text-sm text-accent">@ {j.company}</p>
              <p className="mt-3 text-muted-foreground">{j.description}</p>
              <ul className="mt-4 space-y-2 font-mono text-sm">
                {j.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span className="text-foreground/90">{h}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
