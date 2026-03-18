type StatsStripProps = {
  activeServers: number;
  dailyProblems: number;
};

export function StatsStrip({ activeServers, dailyProblems }: StatsStripProps) {
  return (
    <section className="border-b border-zinc-800/60 bg-zinc-950 py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 text-sm md:px-10">
        <div className="space-y-0.5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
            By the numbers
          </p>
          <p className="text-xs text-zinc-400">
            DailyNode keeps noisy channels focused on shipping – not scrolling.
          </p>
        </div>
        <dl className="flex flex-wrap gap-8 text-sm">
          <div>
            <dt className="text-xs text-zinc-500">Teams using DailyNode</dt>
            <dd className="text-lg font-semibold text-zinc-50">
              {activeServers.toLocaleString()}+
            </dd>
          </div>
          <div>
            <dt className="text-xs text-zinc-500">Daily challenges posted</dt>
            <dd className="text-lg font-semibold text-zinc-50">
              {dailyProblems.toLocaleString()}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-zinc-500">Time saved per dev / week</dt>
            <dd className="text-lg font-semibold text-emerald-400">3.2 hrs</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

