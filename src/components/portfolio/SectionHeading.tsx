export function SectionHeading({
  kicker,
  title,
  subtitle,
  center,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{kicker}</span>
      <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
