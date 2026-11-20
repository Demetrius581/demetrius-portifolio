import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const navItems = [
  { to: "/", label: "home" },
  { to: "/sobre", label: "sobre" },
  { to: "/academico", label: "acadêmico" },
  { to: "/profissional", label: "profissional" },
  { to: "/projetos", label: "projetos" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="font-mono text-sm font-semibold" onClick={() => setOpen(false)}>
          <span className="text-primary">~/</span>demetrius<span className="cursor" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link"
              activeOptions={{ exact: item.to === "/" }}
            >
              ./{item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-md border border-border p-2 text-muted-foreground md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border px-5 pb-4 pt-2 md:hidden" aria-label="Menu móvel">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="nav-link block py-3"
                  activeOptions={{ exact: item.to === "/" }}
                  onClick={() => setOpen(false)}
                >
                  ./{item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
