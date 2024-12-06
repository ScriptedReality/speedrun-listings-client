"use client";
import "@/app/globals.css";
import { HeroHighlightDemo } from "~/components/example/hero-highlight-demo";
import NavbarDemo from "~/components/example/navbar-menu-demo";
import Authenticator from "~/components/authenticator";
import { useState } from "react";
import { WavyBackground } from "~/components/ui/wavy-background";

export default function AuthPage() {
  const [authenticatorMode, setAuthenticatorMode] = useState<
    "signin" | "register"
  >("signin");

  return (
    <div className="bg-black min-h-screen">
      <div>
        <NavbarDemo />
      </div>
      <div>
        <WavyBackground className="max-w-4xl mx-auto pb-40">
          <div className="max-w-md mx-auto mt-8 p-6 bg-black/50 border border-white/20 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">
              {authenticatorMode === "register"
                ? "Register an account on "
                : "Welcome back to "}
              Swiftplay
            </h2>
            <p className="text-gray-400 mb-6">
              Submit your best runs and compete with others
            </p>
            <Authenticator
              mode={authenticatorMode}
              onModeChange={(mode) => setAuthenticatorMode(mode)}
              onClose={() => window.history.back()}
            />
          </div>
        </WavyBackground>
      </div>
    </div>
  );
}
