const CORE_COMMANDS = [
  {
    name: "/todayleetcode",
    description: "Get today’s LeetCode problem immediately, including difficulty and link.",
  },
  {
    name: "/practice",
    description: "Start a focused practice session and pull a fresh problem to solve.",
  },
  {
    name: "/myquestion",
    description: "See the problem you are currently working on so you never lose context.",
  },
  {
    name: "/help",
    description: "Open the in-bot guide with all commands and setup instructions.",
  },
];

const GROWTH_COMMANDS = [
  {
    name: "/remindme",
    description: "Enable personal reminders so you never skip a daily problem.",
  },
  {
    name: "/reminderoff",
    description: "Turn off reminders when you need a break from the grind.",
  },
  {
    name: "/mydifficulty / /mysettings",
    description: "Check your current difficulty and configuration at any time.",
  },
  {
    name: "/setleetcodechannel / /settime / /setdifficulty",
    description: "Admin tools to choose the channel, schedule, and difficulty mix for your server.",
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
              Everything you need to run
              <span className="bg-gradient-to-r from-amber-300 to-emerald-400 bg-clip-text text-transparent">
                {" "}
                daily coding drills
              </span>
              .
            </h2>
            <p className="max-w-sm text-sm text-zinc-400">
              DailyNode keeps the surface area small: a handful of commands to
              configure your server, pull problems, and stay accountable.
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

