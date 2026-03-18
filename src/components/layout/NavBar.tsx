import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "#features", label: "Features" },
  { href: "#commands", label: "Commands" },
  { href: "#get-started", label: "Get Started" },
];

type NavBarProps = {
  onInviteClick?: () => void;
};

export function NavBar({ onInviteClick }: NavBarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3 md:px-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
            <Image
              src="/dailynode-logo.png"
              alt="DailyNode logo"
              width={36}
              height={36}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-zinc-50">
              DailyNode
            </span>
            <span className="text-[10px] text-zinc-500">
              Daily LeetCode in Discord
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-5 text-xs font-medium text-zinc-400 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition hover:text-zinc-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://discord.com/oauth2/authorize?client_id=1476855166958440458&permissions=8&integration_type=0&scope=bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-300 to-emerald-400 px-4 py-1.5 text-xs font-semibold text-zinc-950 shadow-md shadow-amber-400/40 transition hover:from-amber-200 hover:to-emerald-300"
            onClick={onInviteClick}
          >
            Add to Server
          </a>
        </div>
      </nav>
    </header>
  );
}

