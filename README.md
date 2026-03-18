## DailyNode Web

Landing site for **DailyNode** — a modular, self-hosted Discord bot that helps developers build consistent interview-prep habits by posting daily LeetCode challenges, supporting reminders, and providing lightweight practice commands.

- **Invite link**: [Add DailyNode to Discord](https://discord.com/oauth2/authorize?client_id=1476855166958440458&permissions=8&integration_type=0&scope=bot)

### What DailyNode does

- **Daily LeetCode challenge**: posts a problem (from a curated dataset of ~250) to a configured channel
- **Difficulty support**: Easy / Medium / Hard
- **Reminders**: users can opt in/out via `/remindme` and `/reminderoff`
- **Server configuration**: `/setleetcodechannel`, `/settime`, `/setdifficulty`
- **Practice commands**: `/todayleetcode`, `/practice`, `/myquestion`, `/myquestionset`, `/mydifficulty`, `/mysettings`
- **Help**: `/help` for in-bot guidance

### Run the website locally

Install dependencies and start dev:

```bash
cd dailynodeweb
npm install
npm run dev
```

Open `http://localhost:3000`.

### HTTPS (local dev)

Next.js can generate a self-signed cert for local HTTPS:

```bash
cd dailynodeweb
npx next dev --experimental-https -p 3000
```

Open `https://localhost:3000` (your browser may show a self‑signed warning).

### Docker (consistent runs)

Build and run (production build):

```bash
cd dailynodeweb
docker compose up --build
```

Then open `http://localhost:3000`.

### Optional: numbers shown on the landing page

You can control the landing-page counters via environment variables.
Create `dailynodeweb/.env.local`:

```ini
NEXT_PUBLIC_DAILYNODE_SERVERS=25
NEXT_PUBLIC_DAILYNODE_DAILY_PROBLEMS=250
```

Restart `npm run dev` after changes.

### Project notes

- **Framework**: Next.js (App Router) + TypeScript + Tailwind
- **UI structure**: components live under `src/components/*` (sections + layout)
- **Docs page**: visit `http://localhost:3000/docs`

### Learn more

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
