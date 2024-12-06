"use client";
import "@/app/globals.css";
import "@mantine/core/styles.css";
import { HeroHighlightDemo } from "~/components/example/hero-highlight-demo";
import NavbarDemo from "~/components/example/navbar-menu-demo";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { LeaderboardScoreCard } from "~/components/ui/leaderboard-score-card";

export default function LeaderboardPage() {
  return (
    <div className="bg-black">
      <div>
        <NavbarDemo />
      </div>
      <div className="flex justify-end m-4">
        <Dialog>
          <div className="flex justify-center">
            <DialogTrigger asChild>
              <Button variant="outline">Submit a Run</Button>
            </DialogTrigger>
          </div>
          <DialogContent className="sm:max-w-[425px] bg-black">
            <DialogHeader>
              <DialogTitle>Submit a Run</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <HeroHighlightDemo />
      </div>
      <div className="justify-center">
        <div className="py-8">
          <LeaderboardScoreCard
            name="SpeedRunner123"
            time="1:23.456"
            date="2024-03-20"
            youtubeLink="https://youtu.be/dQw4w9WgXcQ?si=t--0sOpuDgyKaIdM"
          />
          <LeaderboardScoreCard
            name="SwiftMaster"
            time="1:24.789"
            date="2024-03-19"
            youtubeLink="https://youtu.be/dQw4w9WgXcQ?si=t--0sOpuDgyKaIdM"
          />
          <LeaderboardScoreCard
            name="ProGamer"
            time="1:25.012"
            date="2024-03-18"
            youtubeLink="https://youtu.be/dQw4w9WgXcQ?si=t--0sOpuDgyKaIdM"
          />
        </div>
      </div>
    </div>
  );
}
