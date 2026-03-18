const FEATURES = [
  {
    title: "Daily LeetCode challenge drops",
    body: "Posts a fresh problem every day from a curated set of 250 LeetCode questions, with title, difficulty, and direct link.",
  },
  {
    title: "Personal reminder system",
    body: "Let people opt in with /remindme so they get a gentle ping to solve today’s problem – and turn it off anytime.",
  },
  {
    title: "Per-server configuration",
    body: "Admins choose the challenge channel, posting time, and difficulty mix so DailyNode fits each community.",
  },
  {
    title: "Practice sessions on demand",
    body: "Use /todayleetcode, /practice, /myquestion, and /myquestionset to pull a problem instantly, switch between Blind 75 / LeetCode 150 / LeetCode 250, and keep track of what you are working on.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="border-b border-zinc-800/60 bg-zinc-950 py-16"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">
              Why DailyNode
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
              Build a{" "}
              <span className="bg-gradient-to-r from-amber-300 to-emerald-400 bg-clip-text text-transparent">
                daily coding habit
              </span>{" "}
              inside Discord.
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-400">
            DailyNode makes interview prep feel lightweight: tiny messages, one
            clear problem, and just enough structure to keep you accountable.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5"
            >
              <h3 className="text-sm font-semibold text-zinc-50">
                {feature.title}
              </h3>
              <p className="text-xs text-zinc-400">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

