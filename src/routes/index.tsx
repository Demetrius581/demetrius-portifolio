import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Code2, FolderGit2, GraduationCap } from "lucide-react";

import { TerminalWindow } from "@/components/site/page-header";
import { profile } from "@/content/profile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Demetrius Oliveira — Portfólio e Currículo" },
      { name: "description", content: "Portfólio de Demetrius De Moura Silva Oliveira, estudante de Sistemas para Internet na Unicap." },
      { property: "og:title", content: "Demetrius Oliveira — Portfólio e Currículo" },
      { property: "og:description", content: "Currículo, experiências e projetos de Demetrius Oliveira." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const sections = [
  { to: "/sobre", title: "Sobre", desc: "Quem sou e as tecnologias deste site", icon: Code2 },
  { to: "/academico", title: "Experiência Acadêmica", desc: "Unicap e estudos complementares", icon: GraduationCap },
  { to: "/profissional", title: "Experiência Profissional", desc: "Onde já trabalhei", icon: Briefcase },
  { to: "/projetos", title: "Projetos", desc: "Projetos em destaque", icon: FolderGit2 },
] as const;

function Index() {
  return (
    <div className="mx-auto max-w-6xl px-5">
      <section className="pt-14 md:pt-24">
        <div className="fade-up max-w-3xl">
          <p className="prompt font-mono text-sm text-muted-foreground">cat quem-sou-eu.md</p>
          <h1 className="mt-5 text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
            Olá, eu sou <br />
            <span className="text-glow">Demetrius</span>
            <span className="cursor" />
          </h1>
          <p className="mt-6 font-mono text-sm text-accent">{profile.role}</p>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">{profile.bio}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projetos" className="btn-terminal">
              ver projetos <ArrowRight className="size-4" />
            </Link>
            <Link to="/sobre" className="btn-outline-terminal">
              ./sobre
            </Link>
          </div>
          <p className="mt-8 font-mono text-xs text-muted-foreground">📍 {profile.location}</p>
        </div>
      </section>

      <section className="mt-20">
        <TerminalWindow title="ls ~/demetrius">
          <div className="grid gap-3 sm:grid-cols-2">
            {sections.map((s) => (
              <Link key={s.to} to={s.to} className="panel panel-interactive group flex items-start gap-4 p-5">
                <s.icon className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary">{s.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </TerminalWindow>
      </section>
    </div>
  );
}
