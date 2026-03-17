import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800/60 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-950/60">
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 flex justify-center">
        <div className="h-72 w-[40rem] rounded-full bg-purple-500/20 blur-3xl" />
      </div>
      <div className="mx-auto flex min-h-[520px] max-w-6xl flex-col justify-between gap-16 px-6 pb-20 pt-24 md:px-10 lg:flex-row lg:items-center lg:pt-28">
        <div className="max-w-xl space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-purple-200">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            DailyNode • Discord bot
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
              Make your dev server
              <span className="block bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
                smarter every day.
              </span>
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
              DailyNode keeps your Discord community in the loop with clean
              summaries, daily standups, and health checks for all your Node.js
              services. Less chaos, more signal.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#get-started"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 px-6 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/30 transition hover:from-emerald-300 hover:to-sky-300"
            >
              Add DailyNode to Discord
              <span className="ml-1.5 text-base transition group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <Link
              href="#commands"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-6 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900/60"
            >
              View commands
            </Link>
          </div>
          <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4 text-sm text-zinc-400">
            <div>
              <dt className="font-medium text-zinc-300">Active servers</dt>
              <dd className="text-2xl font-semibold text-zinc-50">1,247</dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-300">Daily summaries</dt>
              <dd className="text-2xl font-semibold text-zinc-50">32k+</dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-300">Free to start</dt>
              <dd className="text-2xl font-semibold text-emerald-400">100%</dd>
            </div>
          </dl>
        </div>
        <div className="relative flex w-full max-w-md flex-col gap-4 rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-5 shadow-[0_0_80px_rgba(16,185,129,0.15)]">
          <div className="flex items-center justify-between text-xs text-zinc-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
              </span>
              <span className="font-medium text-zinc-300">#daily-standup</span>
            </span>
            <span>Today • 09:30</span>
          </div>
          <div className="space-y-3 rounded-2xl bg-zinc-950/60 p-4 text-xs leading-relaxed text-zinc-100">
            <p className="font-medium text-emerald-400">@DailyNode summary</p>
            <p>
              • API: <span className="text-emerald-300">All checks passing</span>{" "}
              (p95 142ms)
            </p>
            <p>
              • Worker: queued jobs down from{" "}
              <span className="text-amber-300">312 → 54</span>
            </p>
            <p>
              • PRs: <span className="text-sky-300">5 open</span>, 2 ready for
              review
            </p>
            <p className="text-zinc-400">
              Next standup scheduled for <span className="text-zinc-200">10:00</span>{" "}
              in <span className="text-zinc-200">#dev</span>
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-3 text-xs text-emerald-100">
            <p className="font-medium">Ship with confidence.</p>
            <p className="mt-1 text-xs text-emerald-200/90">
              DailyNode watches your Node apps and posts the important bits to
              the channels you choose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

