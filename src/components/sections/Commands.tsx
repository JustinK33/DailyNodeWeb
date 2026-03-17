const CORE_COMMANDS = [
  {
    name: "/daily setup",
    description: "Connect a project and choose where DailyNode posts updates.",
  },
  {
    name: "/daily today",
    description: "Get a one-off summary of incidents, deploys, and PRs.",
  },
  {
    name: "/daily standup",
    description: "Run an async standup in any channel in under 60 seconds.",
  },
  {
    name: "/daily health",
    description: "Check uptime, latency, and error rate for your Node services.",
  },
];

const GROWTH_COMMANDS = [
  {
    name: "/daily streaks",
    description: "Celebrate shipping streaks and keep your team moving.",
  },
  {
    name: "/daily alerts",
    description: "Configure lightweight alerts directly from Discord.",
  },
  {
    name: "/daily config",
    description: "Tweak schedules, channels, and integrations on the fly.",
  },
  {
    name: "/daily help",
    description: "See all commands and examples in one place.",
  },
];

type CommandCardProps = {
  title: string;
  commands: typeof CORE_COMMANDS;
};

function CommandCard({ title, commands }: CommandCardProps) {
  return (
    <div className="flex flex-1 flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
        {title}
      </p>
      <ul className="space-y-2 text-sm text-zinc-200">
        {commands.map((command) => (
          <li
            key={command.name}
            className="rounded-xl border border-transparent bg-zinc-900/60 px-3 py-2 transition hover:border-zinc-700"
          >
            <p className="font-medium text-sky-300">{command.name}</p>
            <p className="text-xs text-zinc-400">{command.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Commands() {
  return (
    <section
      id="commands"
      className="border-b border-zinc-800/60 bg-zinc-950/80 py-16"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:px-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">
            Commands
          </p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
              Simple slash commands for
              <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
                {" "}
                real-time context
              </span>
              .
            </h2>
            <p className="max-w-sm text-sm text-zinc-400">
              Everything DailyNode does starts from a few focused commands.
              Teach your server once and let the bot handle the routine work.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <CommandCard title="Core commands" commands={CORE_COMMANDS} />
          <CommandCard title="Growth & engagement" commands={GROWTH_COMMANDS} />
        </div>
      </div>
    </section>
  );
}

