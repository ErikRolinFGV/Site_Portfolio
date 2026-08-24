import {
  Nav,
  Hero,
  Strip,
  Manifesto,
  Approach,
  Stack,
  Projects,
  About,
  Contact,
  Footer,
} from "@/components/Sections";
import { LogosBar, Metrics, Timeline, ClosingBlock } from "@/components/ExtraSections";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="shell">
        <Hero />
        <LogosBar />
        <Strip
          items={[
            "Dados → Decisão",
            "Python · APIs · Machine Learning",
            "BERTopic · NLP · Grafos de relação",
            "Comunicação + Ciência de Dados",
          ]}
        />
        <Manifesto />
        <Approach />
        <Stack />
        <Projects />
        <Metrics />
        <Strip
          items={[
            "78.497 publicações analisadas",
            "211 perfis · 9 capitais",
            "120 clusters · 13 macro-temas",
            "FGV Comunicação · FGV EMAp · FGV Quest",
          ]}
        />
        <Timeline />
        <About />
        <ClosingBlock />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
