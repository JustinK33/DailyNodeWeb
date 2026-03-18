import Link from "next/link";

type HeroProps = {
  activeServers: number;
  dailyProblems: number;
  onInviteClick?: () => void;
};

export function Hero({ activeServers, dailyProblems, onInviteClick }: HeroProps) {
  return (
    <section className="border-b border-zinc-800/60 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-14 px-6 pb-16 pt-10 md:px-10 lg:flex-row lg:items-center lg:pb-20 lg:pt-12">
        <div className="max-w-xl space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-purple-200">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            DailyNode • Discord bot
          </p>
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
              Daily LeetCode,
              <span className="block bg-gradient-to-r from-amber-300 via-orange-400 to-emerald-400 bg-clip-text text-transparent">
                straight into Discord.
              </span>
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
              DailyNode is a modular, self-hosted Discord bot that posts daily
              LeetCode challenges, nudges you with reminders, and tracks your
              interview prep habits so you stay consistent.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="https://discord.com/oauth2/authorize?client_id=1476855166958440458&permissions=8&integration_type=0&scope=bot"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-300 to-emerald-400 px-6 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-amber-400/30 transition hover:from-amber-200 hover:to-emerald-300"
              onClick={onInviteClick}
            >
              Add DailyNode to your server
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
              <dd className="text-2xl font-semibold text-zinc-50">
                {activeServers.toLocaleString()}+
              </dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-300">Daily problems posted</dt>
              <dd className="text-2xl font-semibold text-zinc-50">
                {dailyProblems.toLocaleString()}
              </dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-300">Free to start</dt>
              <dd className="text-2xl font-semibold text-emerald-400">100%</dd>
            </div>
          </dl>
        </div>
        <div className="relative flex w-full max-w-md rounded-3xl border border-zinc-800/80 bg-zinc-900/90 p-4 shadow-[0_0_80px_rgba(249,115,22,0.25)]">
          <div className="mr-4 w-1 rounded-full bg-amber-400" />
          <div className="flex flex-1 flex-col gap-3 text-xs leading-relaxed text-zinc-100">
            <div className="flex items-center justify-between text-[11px] text-zinc-400">
              <span className="font-medium text-zinc-200">DailyNode</span>
              <span>Today • 12:00</span>
            </div>
            <div className="space-y-2 rounded-2xl bg-zinc-950/60 p-4">
              <p className="text-sm font-semibold text-zinc-50">
                Daily LeetCode Challenge
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    Problem
                  </p>
                  <p className="text-sm font-medium text-zinc-50">
                    Palindrome Number
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    Problem ID
                  </p>
                  <p className="text-sm font-medium text-zinc-50">#9</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    Difficulty
                  </p>
                  <p className="text-sm text-emerald-300">easy</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Motivation
                </p>
                <p className="text-xs text-zinc-200">
                  Every challenge you face today makes you stronger tomorrow.
                  Keep going.
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Link
                </p>
                <button
                  type="button"
                  className="text-xs font-medium text-sky-300 underline underline-offset-4"
                >
                  Solve on LeetCode
                </button>
              </div>
              <p className="pt-1 text-[11px] text-zinc-500">
                Good luck. • Today at 12:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

