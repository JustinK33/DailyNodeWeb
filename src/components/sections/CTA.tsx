import Link from "next/link";

type CTAProps = {
  onInviteClick?: () => void;
};

export function CTA({ onInviteClick }: CTAProps) {
  return (
    <section className="border-y border-zinc-800/60 bg-zinc-950 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:px-10 md:text-left">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">
            Ready to ship calmer?
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">
            Turn Discord into the control room for your Node apps.
          </h2>
          <p className="max-w-xl text-sm text-zinc-400">
            Invite DailyNode, connect your projects, and let the bot do the
            status wrangling. Your team keeps context without reading
            thousand-line logs.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://discord.com/oauth2/authorize?client_id=1476855166958440458&permissions=8&integration_type=0&scope=bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-300 to-emerald-400 px-6 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-amber-400/40 transition hover:from-amber-200 hover:to-emerald-300"
            onClick={onInviteClick}
          >
            Add DailyNode Free
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900/60"
          >
            View docs
          </Link>
        </div>
      </div>
    </section>
  );
}

