"use client";
import React from "react";
import { FadeIn } from "./FadeIn";

// ──────── INSTITUTIONAL LOGOS ────────
// Faixa de "credibilidade" logo abaixo do hero.
// Cada logo é um image-slot — substituível pelo usuário.
export function LogosBar() {
  const items = [
    { id: "logo-fgv-ecmi", label: "FGV Comunicação", note: "Graduação", src: "/uploads/logo-fgv-ecmi.webp" },
    { id: "logo-fgv-emap", label: "FGV EMAp", note: "Ciência de Dados", src: "/uploads/logo-fgv-emap.webp" },
    { id: "logo-pibic",    label: "PIBIC",    note: "FGV", src: "/uploads/logo-pibic.webp" },
    { id: "logo-fsb",      label: "FSB Holding", note: "Nexus", href: "https://www.nexus.fsb.com.br/", src: "/uploads/logo-fsb.webp" },
    { id: "logo-quest",    label: "FGV Quest", note: "Liga acadêmica", href: "https://www.instagram.com/fgvquest/", src: "/assets/logos/fgvquest.png" },
    { id: "logo-cprj",     label: "Prefeitura do Rio", note: "Parceria pública", src: "/uploads/logo-cprj.webp" },
  ] as any[];

  return (
    <section className="logos-bar" aria-label="Instituições e parcerias">
      <div className="wrap">
        <FadeIn>
          <div className="logos-head">
            <span className="eyebrow">Instituições & parcerias</span>
            <span className="logos-line" aria-hidden="true" />
          </div>
        </FadeIn>
        <FadeIn delay={80}>
          <div className="logos-grid">
            {items.map((it) => {
              const cellInner = (
                <>
                  <div className="logo-slot">
                    <img src={it.src} alt={it.label} className="logo-img" />
                  </div>
                  <div className="logo-cap">
                    <div className="logo-name">{it.label}</div>
                    <div className="logo-note">{it.note}</div>
                  </div>
                </>
              );
              if (it.href) {
                return (
                  <a
                    key={it.id}
                    className="logo-cell logo-cell--link"
                    href={it.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {cellInner}
                  </a>
                );
              }
              return (
                <div key={it.id} className="logo-cell">
                  {cellInner}
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ──────── METRICS ────────
export function Metrics() {
  const stats = [
    { num: "78.497", label: "publicações analisadas", note: "PIBIC · Amazônia Legal" },
    { num: "211",    label: "perfis mapeados",       note: "Instagram · 2024" },
    { num: "9",      label: "capitais cobertas",     note: "9 estados da Amazônia Legal" },
    { num: "13",     label: "macro-temas mapeados",  note: "de 120 clusters semânticos" },
  ];
  return (
    <section className="section section--tight section--metrics" id="numeros">
      <div className="wrap">
        <FadeIn>
          <div className="eyebrow">Em números</div>
        </FadeIn>
        <FadeIn delay={60}>
          <h2 className="h2" style={{ marginTop: 24, maxWidth: "20ch" }}>
            A escala do trabalho até aqui.
          </h2>
        </FadeIn>
        <div className="metrics-grid">
          {stats.map((s, i) => (
            <FadeIn key={i} delay={i * 80} className="metric-cell">
              <div className="metric-num">{s.num}</div>
              <div className="metric-label">{s.label}</div>
              <div className="metric-note mono">{s.note}</div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────── TIMELINE ────────
export function Timeline() {
  const events = [
    {
      year: "2022", tag: "formação",
      title: "Conclui o Ensino Médio",
      body: "Colégio Pedro II · Campus Tijuca, Rio de Janeiro.",
    },
    {
      year: "2023", tag: "preparação",
      title: "Ano dedicado ao ingresso na FGV EMAp",
      body: "Estudo intensivo para o vestibular da Escola de Matemática Aplicada.",
    },
    {
      year: "2024.1", tag: "ingresso",
      title: "Entrada na FGV EMAp · Ciência de Dados",
      body: "Início da formação técnica em estatística, matemática e ciência de dados.",
    },
    {
      year: "2024.2", tag: "publicação",
      title: "Paper · Análise Exploratória do SAEB",
      body: "Pesquisa aplicada sobre microdados do SAEB — correlações entre variáveis sociais, econômicas e educacionais. Coautoria com Bruno Cavalli e Nicholas Farrel.",
      tagStyle: "accent",
    },
    {
      year: "2025.1", tag: "virada",
      title: "Transferência para a FGV Comunicação",
      body: "Decido juntar comunicação à base técnica. EMAp vira formação complementar. Início do PIBIC \"O Voto, A Bala e a Floresta\" — coleta e análise de cobertura midiática na Amazônia Legal.",
    },
    {
      year: "2025.2", tag: "lançamento",
      title: "Frente técnica da FGV Quest · Projeto para a Nexus (FSB Holding)",
      body: "Como Diretor de Desenvolvimento, conduzo o time técnico da liga, entregamos o site institucional e abrimos parceria com a Prefeitura do Rio para um índice de segurança em jogo digital. Em paralelo, começo a desenvolver o app de mapeamento de CEOs para a Nexus.",
      tagStyle: "accent",
    },
    {
      year: "2026.1", tag: "marco",
      title: "ECA Digital entra em vigor · metodologia do índice em construção",
      body: "Com a Lei 15.211/2025 em vigor desde 17 de março, a FGV Quest assume a tradução da norma para o público e o JogoJusto ganha forma. Em paralelo, a coleta do PIBIC é executada pelo DAPP Lab e o produto da Nexus sai do protótipo.",
    },
    {
      year: "2026.2", tag: "agora",
      title: "PIBIC analisado · Deeper validado · JogoJusto em piloto",
      body: "78.497 publicações clusterizadas em 120 clusters e 13 macro-temas, com o artigo em redação. O Deeper, ferramenta de inteligência sobre executivos, é aprovado em demonstração na FSB. O JogoJusto entra em piloto de confiabilidade entre avaliadores. Aberto a estágio.",
      tagStyle: "live",
    },
    {
      year: "2028", tag: "previsto",
      title: "Graduação · FGV Comunicação",
      body: "Conclusão do curso de Comunicação com formação complementar em Ciência de Dados.",
      tagStyle: "ghost",
    },
  ];

  return (
    <section className="section section--timeline" id="trajetoria">
      <div className="wrap">
        <div className="timeline-head">
          <FadeIn>
            <div>
              <div className="eyebrow">Trajetória</div>
              <h2 className="h2" style={{ marginTop: 28 }}>
                Como cheguei aqui.
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="lede" style={{ fontSize: 18 }}>
              Comecei na matemática aplicada, virei para a comunicação, e descobri
              que o melhor lugar para mim é o ponto exato entre os dois.
            </p>
          </FadeIn>
        </div>

        <div className="timeline-rail">
          <div className="timeline-rail-line" aria-hidden="true" />
          <ol className="timeline-list">
            {events.map((e, i) => (
              <FadeIn as="li" key={i} delay={i * 50} className="timeline-item">
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-year mono">{e.year}</div>
                <div className={`timeline-tag mono tag--${e.tagStyle || "default"}`}>{e.tag}</div>
                <div className="timeline-title">{e.title}</div>
                <div className="timeline-body">{e.body}</div>
              </FadeIn>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// ──────── CLOSING BLOCK ────────
export function ClosingBlock() {
  return (
    <section className="closing-block" id="fechamento">
      <div className="closing-bg">
        <img src="/assets/covers/rio-closing.webp" alt="" className="closing-img" />
      </div>
      <div className="closing-veil" aria-hidden="true" />
      <div className="wrap">
        <FadeIn>
          <div className="eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>
            Próximo passo
          </div>
        </FadeIn>
        <FadeIn delay={80}>
          <h2 className="closing-line">
            Me dá <em>15 minutos</em> e eu te mostro<br />
            exatamente onde você está perdendo insight hoje.
          </h2>
        </FadeIn>
        <FadeIn delay={160} className="hero-cta">
          <a className="btn btn--primary" href="mailto:eriknrolin@gmail.com">
            Agendar conversa
            <span className="arrow">→</span>
          </a>
          <a className="btn btn--ghost btn--on-dark" href="https://www.linkedin.com/in/erikrolin/" target="_blank" rel="noreferrer">
            Ver LinkedIn
          </a>
        </FadeIn>
      </div>
    </section>
  );
}


