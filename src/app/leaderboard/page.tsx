"use client";
import "@/app/globals.css";
import "@mantine/core/styles.css";
import { HeroHighlightDemo } from "~/components/example/hero-highlight-demo";
import NavbarDemo from "~/components/example/navbar-menu-demo";

export default function LeaderboardPage() {
  return (
    <div className="bg-black">
      <div>
        <NavbarDemo />
      </div>
      <div>
        <HeroHighlightDemo />
      </div>
    </div>
  );
}
