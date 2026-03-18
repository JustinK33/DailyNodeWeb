export function Footer() {
  return (
    <footer className="bg-zinc-950 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-600">
            DailyNode
          </p>
          <p className="text-xs text-zinc-500">
            Calm, automated updates for Discord dev servers.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <a href="#features" className="transition hover:text-zinc-300">
            Features
          </a>
          <a href="#commands" className="transition hover:text-zinc-300">
            Commands
          </a>
          <a href="#get-started" className="transition hover:text-zinc-300">
            Pricing
          </a>
          <span className="h-3 w-px bg-zinc-800" aria-hidden="true" />
          <button
            type="button"
            className="text-xs text-zinc-500 transition hover:text-zinc-300"
          >
            Terms
          </button>
          <button
            type="button"
            className="text-xs text-zinc-500 transition hover:text-zinc-300"
          >
            Privacy
          </button>
        </div>
      </div>
    </footer>
  );
}

