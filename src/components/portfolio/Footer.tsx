export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground md:flex-row">
        <p className="font-mono">
          <span className="text-primary">$</span> © {new Date().getFullYear()} — Crafted with Python &amp; ☕
        </p>
        <p>Designed &amp; built with attention to detail.</p>
      </div>
    </footer>
  );
}
