"use client";
import React from "react";
import HeroParallaxDemo from "~/components/example/hero-parallax-demo";
import TextHoverEffectDemo from "~/components/example/text-hover-effect-demo";
import NavbarDemo from "~/components/example/navbar-menu-demo";
import GoogleGeminiEffectDemo from "~/components/example/google-gemini-effect-demo";

export default function Page() {
  return (
    <div className="bg-black">
      <NavbarDemo />
      <div>
        <TextHoverEffectDemo />
      </div>
      <div>
        <GoogleGeminiEffectDemo />
      </div>
      <div>
        <HeroParallaxDemo />
      </div>
    </div>
  );
}
