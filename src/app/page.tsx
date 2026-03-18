 "use client";

import { useEffect, useState } from "react";

import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { Features } from "@/components/sections/Features";
import { Commands } from "@/components/sections/Commands";
import { Steps } from "@/components/sections/Steps";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  const baseServers =
    Number(process.env.NEXT_PUBLIC_DAILYNODE_SERVERS ?? "25") || 25;
  const baseDailyProblems =
    Number(process.env.NEXT_PUBLIC_DAILYNODE_DAILY_PROBLEMS ?? "250") || 250;

  const [activeServers, setActiveServers] = useState(() => {
    if (typeof window === "undefined") {
      return baseServers;
    }

    const stored = window.localStorage.getItem("dailynode-active-servers");
    if (!stored) {
      return baseServers;
    }

    const parsed = Number(stored);
    return !Number.isNaN(parsed) && parsed > 0 ? parsed : baseServers;
  });

  useEffect(() => {
    window.localStorage.setItem(
      "dailynode-active-servers",
      String(activeServers),
    );
  }, [activeServers]);

  const handleInviteClick = () => {
    setActiveServers((current) => current + 1);
  };

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-50">
      <NavBar onInviteClick={handleInviteClick} />
      <main className="pt-16">
        <Hero
          activeServers={activeServers}
          dailyProblems={baseDailyProblems}
          onInviteClick={handleInviteClick}
        />
        <StatsStrip activeServers={activeServers} dailyProblems={baseDailyProblems} />
        <Features />
        <Commands />
        <Steps />
        <CTA onInviteClick={handleInviteClick} />
      </main>
      <Footer />
    </div>
  );
}
