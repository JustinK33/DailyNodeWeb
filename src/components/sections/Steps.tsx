const STEPS = [
  {
    step: "1",
    title: "Add DailyNode to your Discord server",
    body: "Invite the bot, choose which channel should receive daily LeetCode challenges, and make sure it can post there.",
  },
  {
    step: "2",
    title: "Configure schedule and difficulty",
    body: "Use /settime and /setdifficulty so your server gets problems at the right time and level (Easy, Medium, or Hard).",
  },
  {
    step: "3",
    title: "Let people opt into reminders",
    body: "Encourage members to run /remindme so DailyNode pings them to solve today’s problem and keeps habits on track.",
  },
];

export function Steps() {
  return (
    <section
      id="get-started"
      className="border-b border-zinc-800/60 bg-gradient-to-b from-zinc-950/90 via-zinc-950 to-zinc-950 py-16"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">
            Getting started
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
            Up and posting in{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
              under five minutes
            </span>
            .
          </h2>
          <p className="max-w-xl text-sm text-zinc-400">
            DailyNode is built for teams that want signal with almost no setup.
            Follow these steps and you will have your first summary live before
            the next coffee break.
          </p>
        </div>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.step}
              className="relative flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-5 text-left"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-b from-emerald-400 to-sky-400 text-xs font-semibold text-zinc-950 shadow-lg shadow-emerald-500/40">
                {step.step}
              </span>
              <h3 className="text-sm font-semibold text-zinc-50">
                {step.title}
              </h3>
              <p className="text-xs text-zinc-400">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

