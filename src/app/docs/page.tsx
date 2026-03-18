export default function DocsPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-10 px-6 py-16 md:px-10">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">
          DailyNode Docs
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">
          Getting started with DailyNode
        </h1>
        <p className="text-sm text-zinc-400">
          A quick reference for installing DailyNode, configuring your server,
          and using the most common commands.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-zinc-50">1. Invite the bot</h2>
        <ol className="list-decimal space-y-2 pl-5 text-sm text-zinc-300">
          <li>
            Click{" "}
            <a
              href="https://discord.com/oauth2/authorize?client_id=1476855166958440458&permissions=8&integration_type=0&scope=bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 underline underline-offset-4"
            >
              Add DailyNode to Discord
            </a>{" "}
            and select your server.
          </li>
          <li>Grant permission for the bot to read and send messages.</li>
          <li>
            Choose or create a text channel where daily LeetCode problems should
            be posted.
          </li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-zinc-50">
          2. Configure your server
        </h2>
        <p className="text-sm text-zinc-400">
          Server admins can run these commands in any channel the bot can see.
        </p>
        <ul className="space-y-2 text-sm text-zinc-300">
          <li>
            <span className="font-mono text-emerald-300">/setleetcodechannel</span>{" "}
            – choose the channel where DailyNode posts the daily problem.
          </li>
          <li>
            <span className="font-mono text-emerald-300">/settime</span> – set
            the daily posting time for your timezone.
          </li>
          <li>
            <span className="font-mono text-emerald-300">/setdifficulty</span> –{" "}
            pick which mix of Easy, Medium, and Hard problems you want.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-zinc-50">
          3. Practice and reminders
        </h2>
        <p className="text-sm text-zinc-400">
          These commands are for anyone on the server who wants to practice.
        </p>
        <ul className="space-y-2 text-sm text-zinc-300">
          <li>
            <span className="font-mono text-emerald-300">/todayleetcode</span> –
            fetch today&apos;s problem immediately.
          </li>
          <li>
            <span className="font-mono text-emerald-300">/practice</span> –
            start a practice session.
          </li>
          <li>
            <span className="font-mono text-emerald-300">/myquestion</span> –
            see the problem you&apos;re currently working on.
          </li>
          <li>
            <span className="font-mono text-emerald-300">/myquestionset</span> –
            choose your question set: Blind 75, LeetCode 150, or LeetCode 250.
          </li>
          <li>
            <span className="font-mono text-emerald-300">/remindme</span> /
            <span className="font-mono text-emerald-300"> /reminderoff</span> –
            turn personal reminders on or off.
          </li>
          <li>
            <span className="font-mono text-emerald-300">
              /mydifficulty
            </span>{" "}
            or{" "}
            <span className="font-mono text-emerald-300">/mysettings</span> –
            view your current preferences.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-zinc-50">
          4. Self‑hosting notes
        </h2>
        <p className="text-sm text-zinc-400">
          DailyNode runs on Node.js with Discord.js, Supabase, and a simple
          scheduler. If you&apos;re self‑hosting, keep your bot token and
          database credentials in environment variables and make sure your
          container or process manager restarts the bot automatically.
        </p>
      </section>
    </main>
  );
}

