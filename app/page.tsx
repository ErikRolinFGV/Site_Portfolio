import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Works } from "@/components/Works";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";

export default function Page() {
  return (
    <div
      style={{
        background: "var(--color-bg)",
        color: "var(--ink)",
        fontFamily: "var(--font-body)",
        minHeight: "100vh",
      }}
    >
      <Nav />
      <Hero />
      <About />
      <Works />
      <Skills />
      <Timeline />
      <Contact />
    </div>
  );
}
