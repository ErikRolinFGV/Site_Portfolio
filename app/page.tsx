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
            "BERTopic · NLP · Power BI",
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
            "61.449 publicações analisadas",
            "160 veículos · 9 capitais",
            "Amazônia Legal · PIBIC 2024/25",
            "FGV ECMI · FGV EMAp · FGV Quest",
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
