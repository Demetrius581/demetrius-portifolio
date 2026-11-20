import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";

import { PageHeader } from "@/components/site/page-header";
import { education } from "@/content/profile";

export const Route = createFileRoute("/academico")({
  head: () => ({
    meta: [
      { title: "Experiência Acadêmica — Demetrius Oliveira" },
      { name: "description", content: "Formação acadêmica de Demetrius Oliveira: Sistemas para Internet na Unicap e estudos complementares." },
      { property: "og:title", content: "Experiência Acadêmica — Demetrius Oliveira" },
      { property: "og:description", content: "Sistemas para Internet na Unicap e estudos complementares." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Academico,
});

function Academico() {
  return (
    <div className="mx-auto max-w-4xl px-5">
      <PageHeader
        command="git log --formacao"
        title="Experiência Acadêmica"
        description="Minha formação e os estudos que complementam a faculdade."
      />
      <ol className="timeline space-y-6">
        {education.map((e, i) => (
          <li key={e.title} className="fade-up relative" style={{ animationDelay: `${i * 100}ms` }}>
            <span className="timeline-dot" />
            <article className="panel panel-interactive p-6">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
                <span>{e.period}</span>
                {e.status && <span className="tag">{e.status}</span>}
              </div>
              <h2 className="mt-3 flex items-center gap-2 text-xl font-bold">
                <GraduationCap className="size-5 text-primary" /> {e.title}
              </h2>
              <p className="mt-1 font-mono text-sm text-accent">{e.institution}</p>
              <p className="mt-3 text-muted-foreground">{e.description}</p>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
