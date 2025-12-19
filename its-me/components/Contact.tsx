"use client";
import ClickButton from "./misc/ClickButton";

export default function Contact() {
  return (
    <section id="contact" className="py-12 w-full max-w-6xl mx-auto px-6">
      <h2 className="text-5xl md:text-6xl font-bold font-mono mb-6 text-center">
        Contact<span className="text-orange-500">.</span>
      </h2>
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <p className="text-lg text-neutral-700">
          Let's work together! Feel free to reach out for collaborations,
          opportunities, or just to say hello.
        </p>
        <div className="flex justify-center gap-4">
          <ClickButton text={"email"} link={"mailto:anirudh@example.com"} />
          <ClickButton text={"linkedin"} link={"https://linkedin.com"} />
          <ClickButton text={"twitter"} link={"https://twitter.com"} />
        </div>
        <p className="text-sm text-neutral-600 mt-8">
          © 2025 Anirudh. All rights reserved.
        </p>
      </div>
    </section>
  );
}
