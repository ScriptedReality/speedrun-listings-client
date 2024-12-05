"use client";
import "@/app/globals.css";
import "@mantine/core/styles.css";
import { HeroHighlightDemo } from "~/components/example/hero-highlight-demo";
import NavbarDemo from "~/components/example/navbar-menu-demo";
import { Button } from "~/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function LeaderboardPage() {
  return (
    <div className="bg-black">
      <div>
        <NavbarDemo />
      </div>
      <div>
        <HeroHighlightDemo />
      </div>
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
  );
}
