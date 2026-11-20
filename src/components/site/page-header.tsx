export function PageHeader({
  command,
  title,
  description,
}: {
  command: string;
  title: string;
  description: string;
}) {
  return (
    <header className="fade-up mb-12 pt-14 md:pt-20">
      <p className="prompt font-mono text-sm text-muted-foreground">{command}</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
        <span className="gradient-text">{title}</span>
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">{description}</p>
    </header>
  );
}

export function TerminalWindow({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-bar">
        <span className="terminal-dot bg-destructive/80" />
        <span className="terminal-dot bg-chart-3/80" />
        <span className="terminal-dot bg-primary/80" />
        <span className="ml-2 truncate">{title}</span>
      </div>
      <div className="p-5 md:p-6">{children}</div>
    </div>
  );
}
