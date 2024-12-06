"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "~/lib/utils";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Authenticator from "../authenticator";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Games">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Web Development</HoveredLink>
            <HoveredLink href="/">Backend API</HoveredLink>
            <HoveredLink href="/">Game Logic</HoveredLink>
            <HoveredLink href="/">Game Design</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Players">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <HoveredLink href="/leaderboard">All players</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Speedruns">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/leaderboard">Leaderboard</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/friends">Friends</HoveredLink>
            <HoveredLink href="/account">Account</HoveredLink>
          </div>
        </MenuItem>
        <AlertDialog open={isAuthenticating}>
          <AlertDialogTrigger onClick={() => setIsAuthenticating(true)}>Sign in</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Register an account on Swiftplay</AlertDialogTitle>
              <AlertDialogDescription>
                Submit your best runs and compete with others
              </AlertDialogDescription>
            </AlertDialogHeader>
            <Authenticator onClose={() => setIsAuthenticating(false)} />
          </AlertDialogContent>
        </AlertDialog>
      </Menu>
    </div>
  );
}
