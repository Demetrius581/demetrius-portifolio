import { createFileRoute } from "@tanstack/react-router";

import { PageHeader, TerminalWindow } from "@/components/site/page-header";
import { profile, siteStack } from "@/content/profile";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Demetrius Oliveira" },
      { name: "description", content: "Quem é Demetrius Oliveira e todas as tecnologias e módulos usados para criar este portfólio." },
      { property: "og:title", content: "Sobre — Demetrius Oliveira" },
      { property: "og:description", content: "Tecnologias e módulos usados no desenvolvimento deste portfólio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  const categories = [...new Set(siteStack.map((t) => t.category))];

  return (
    <div className="mx-auto max-w-6xl px-5">
      <PageHeader command="cat sobre.md" title="Sobre mim" description={profile.bio} />

      <TerminalWindow title="perfil.json" className="fade-up">
        <pre className="overflow-x-auto font-mono text-sm leading-relaxed">
          <code>
            <span className="text-muted-foreground">{"{"}</span>
            {"\n"}  <span className="text-accent">"nome"</span>: <span className="text-primary">"{profile.name}"</span>,
            {"\n"}  <span className="text-accent">"curso"</span>: <span className="text-primary">"Sistemas para Internet — Unicap"</span>,
            {"\n"}  <span className="text-accent">"cidade"</span>: <span className="text-primary">"{profile.location}"</span>,
            {"\n"}  <span className="text-accent">"interesses"</span>: [<span className="text-primary">"front-end"</span>, <span className="text-primary">"web"</span>, <span className="text-primary">"infraestrutura de TI"</span>]
            {"\n"}<span className="text-muted-foreground">{"}"}</span>
          </code>
        </pre>
      </TerminalWindow>

      <section className="mt-16">
        <p className="prompt font-mono text-sm text-muted-foreground">cat package.json | grep dependencies</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">Tecnologias deste site</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Todas as tecnologias e módulos usados para desenvolver este app.
        </p>

        <div className="mt-8 space-y-10">
          {categories.map((cat) => (
            <div key={cat}>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">// {cat}</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {siteStack
                  .filter((t) => t.category === cat)
                  .map((t) => (
                    <div key={t.name} className="panel panel-interactive p-5">
                      <p className="font-mono font-semibold text-primary">{t.name}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{t.purpose}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
