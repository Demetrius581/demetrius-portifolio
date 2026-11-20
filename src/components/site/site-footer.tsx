import { Linkedin, Mail } from "lucide-react";

import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 font-mono text-xs text-muted-foreground sm:flex-row">
        <p>
          <span className="text-primary">©</span> {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-primary">
            <Linkedin className="size-4" />
          </a>
          <a href={`mailto:${profile.links.email}`} aria-label="E-mail" className="transition-colors hover:text-primary">
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
