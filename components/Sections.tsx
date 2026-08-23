"use client";
import React from "react";
import { FadeIn } from "./FadeIn";
import { DrawerShell, ProjectDeepDive, MoreList, SecondaryDeepDive, SkillDeepDive } from "./Drawer";
import { PROJECT_DETAILS, MORE_PROJECTS } from "@/lib/projectData";
import { SKILLS } from "@/lib/skillData";

// ──────── NAV ────────
export function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="nav-mark">
          <span className="dot" />
          <span>Erik Rolin</span>
        </a>
        <div className="nav-links">
          <a href="#abordagem">Abordagem</a>
          <a href="#trabalhos">Trabalhos</a>
          <a href="#trajetoria">Trajetória</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
          <a href="/cv.html" target="_blank" rel="noreferrer" className="nav-cv">
            CV <span className="nav-cv-arr">↓</span>
          </a>
        </div>
      </div>
    </nav>);

}

// ──────── HERO ────────
export function Hero({ centered = false }) {
  return (
    <header id="top" className="section section--hero">
      <div className="hero-bg-decor" aria-hidden="true"></div>
      <div className="wrap">
        <div className={`hero ${centered ? "hero--centered" : ""}`}>
          <div className="hero-meta">
            <FadeIn>
              <div className="eyebrow">Portfólio · 2026</div>
            </FadeIn>

            <FadeIn delay={60}>
              <h1 className="display">
                Comunicação que <em>opera</em><br />
                em cima de dados.
              </h1>
            </FadeIn>

            <FadeIn delay={140}>
              <p className="lede">
                Eu crio ferramentas sob medida que coletam, organizam e analisam
                dados de plataformas digitais — e transformam informação dispersa
                em decisão clara para comunicação e negócio.
              </p>
            </FadeIn>

            <FadeIn delay={220} className="hero-cta">
              <a className="btn btn--primary" href="mailto:eriknrolin@gmail.com">
                Me dá 15 minutos
                <span className="arrow">→</span>
              </a>
              <a className="btn btn--ghost" href="https://www.linkedin.com/in/erikrolin/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="btn btn--ghost" href="/cv.html" target="_blank" rel="noreferrer">
                Currículo <span className="arrow">↓</span>
              </a>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="hero-id">
                <div><b>Função</b>Dados + Comunicação</div>
                <div><b>Base</b>Rio de Janeiro</div>
                <div><b>Status</b>Aberto a estágio</div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={200}>
            <div className="hero-photo-wrap">
              <img src="/uploads/erik-portrait.webp" alt="Erik Rolin" className="slot-img" />
              <div className="hero-photo-meta">
                ERIK ROLIN / FGV ECMI · EMAp
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </header>);

}

// ──────── TICKER STRIP ────────
export function Strip({ items }) {
  const block =
  <span>
      {items.map((it, i) =>
    <React.Fragment key={i}>
          {it}
          {i < items.length - 1 && <span className="sep">·</span>}
        </React.Fragment>
    )}
      <span className="sep">·</span>
    </span>;

  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-track">{block}{block}{block}{block}</div>
    </div>);

}

// ──────── MANIFESTO ────────
export function Manifesto() {
  return (
    <section className="section section--dark" id="manifesto">
      <div className="wrap">
        <FadeIn>
          <div className="eyebrow">A tese</div>
        </FadeIn>
        <div className="manifesto" style={{ marginTop: 48 }}>
          <FadeIn>
            <div className="big-stat">
              &lt;30<span style={{ fontSize: "0.55em" }}>%</span>
            </div>
            <div className="mono muted" style={{ fontSize: 12, marginTop: 8, letterSpacing: "0.04em" }}>
              dos dados que empresas já possuem<br />
              chegam a virar decisão
            </div>
          </FadeIn>
          <div className="manifesto-body">
            <FadeIn delay={80}>
              <p>
                A maioria das empresas usa menos de 30% dos dados que já possui.
              </p>
            </FadeIn>
            <FadeIn delay={140}>
              <p>
                Enquanto isso, decisões estratégicas continuam sendo tomadas com
                base em intuição — e oportunidades passam batido. Eu trabalho
                exatamente nesse gap: na ponte entre comunicação estratégica e
                ciência de dados aplicada.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>);

}

// ──────── APPROACH ────────
export function Approach() {
  return (
    <section className="section" id="abordagem">
      <div className="wrap">
        <div className="approach">
          <FadeIn>
            <div>
              <div className="eyebrow">Como eu trabalho</div>
              <h2 className="h2" style={{ marginTop: 28 }}>
                Eu moro no meio<br />do caminho.
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="approach-body">
              <p>
                A maioria das pessoas de comunicação tem medo de dado. A maioria
                dos cientistas de dados não entende do problema de comunicação.
                Eu vivo exatamente nesse vão — e é ali que o insight costuma estar
                escondido.
              </p>
              <p>
                Não entrego "um modelo". Entrego uma <strong>leitura</strong>:
                coleto via <span className="mono">APIs</span> e scraping, limpo o
                que vem sujo, aplico <span className="mono">NLP</span> e
                clusterização para achar o padrão — e só então traduzo isso em
                algo que um diretor lê em trinta segundos e decide.
              </p>
              <p>
                Trato dado como linguagem, não como planilha. Porque um número que
                ninguém entende não vale nada, e uma intuição sem evidência custa
                caro.
              </p>
              <p className="muted" style={{ fontSize: 17 }}>
                É comunicação feita com rigor de engenharia — e engenharia feita
                com obsessão por clareza.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>);

}

// ──────── STACK ────────
export function Stack() {
  const cells = SKILLS || [];
  const [openSkill, setOpenSkill] = React.useState(null);
  return (
    <section className="section section--tight section--tint" id="stack">
      <div className="wrap">
        <FadeIn>
          <div className="eyebrow">Stack</div>
        </FadeIn>
        <FadeIn delay={80}>
          <h2 className="h2" style={{ marginTop: 28, maxWidth: "20ch" }}>
            Tecnologias que uso para tirar dado do silêncio.
          </h2>
        </FadeIn>
        <FadeIn delay={140}>
          <p className="lede" style={{ fontSize: 16, marginTop: 16, maxWidth: "62ch", color: "var(--muted)" }}>
            Clique em qualquer habilidade para ver onde aplico.
          </p>
        </FadeIn>
        <div className="stack-grid stack-grid--clickable">
          {cells.map((c, i) =>
          <FadeIn key={c.num} delay={i * 30}
          as="button"
          className={`stack-cell stack-cell--btn ${c.isMore ? "stack-cell--more" : ""}`}
          onClick={() => setOpenSkill(c)}
          aria-label={`Abrir detalhes: ${c.name}`}>
              <span className="num">/ {c.num}</span>
              <div className="name">{c.name}</div>
              <div className="desc">{c.desc}</div>
              <div className="stack-cell-arr mono" aria-hidden="true">→</div>
            </FadeIn>
          )}
        </div>
      </div>
      <DrawerShell open={openSkill !== null} onClose={() => setOpenSkill(null)}>
        <SkillDeepDive skill={openSkill} />
      </DrawerShell>
    </section>);

}

// ──────── PROJECTS ────────
export function Projects() {
  const [openItem, setOpenItem] = React.useState(null);
  const [secondaryItem, setSecondaryItem] = React.useState(null);
  const onOpen = (p) => setOpenItem(p);
  const onClose = () => {setOpenItem(null);setSecondaryItem(null);};
  const projects = [
  {
    id: "01",
    title: "Deeper · inteligência sobre executivos brasileiros",
    client: "FSB Holding · Nexus",
    role: "Desenvolvedor · concepção e implementação",
    cover: {
      id: "cover-fsb",
      mode: "wordmark",
      src: "/assets/covers/nexus-logo.png",
      alt: "Nexus · FSB Holding",
      caption: "Nexus · FSB Holding"
    },
    status: "live",
    statusLabel: "MVP funcional · validado",
    body:
    <>
          <p>
            O <strong>Deeper</strong> é uma ferramenta de inteligência sobre
            executivos brasileiros que construí para a <strong>Nexus</strong>, o
            braço de pesquisa e inteligência de dados da FSB Holding.
          </p>
          <p>
            O analista pesquisa por nome, por cargo ou colando um link do
            LinkedIn, e recebe em cerca de um minuto um dossiê completo:
            trajetória profissional, briefing executivo escrito por IA, menções
            na imprensa com análise de sentimento e um <strong>grafo de conexões
            navegável</strong> em que cada relação carrega as evidências que a
            comprovam.
          </p>
          <p className="muted-aside">
            <strong>1 minuto por dossiê · cerca de R$ 1 de custo · 125 testes
            automatizados.</strong> O mesmo levantamento feito à mão consome de
            uma a duas horas de analista.
          </p>
        </>,

    tags: ["Python", "FastAPI", "Claude Sonnet", "Grafos", "PostgreSQL"],
    visual: <div className="visual-img-wrap"><img src={"/assets/covers/fsb-code.png"} alt="app/models/job.py" /></div>,
    visualLabel: "TRECHO · APP/MODELS/JOB.PY",
    visualHd: "deeper / ceo_mais"
  },
  {
    id: "02",
    title: "O Voto, A Bala e a Floresta",
    client: "PIBIC · FGV ECMI",
    role: "Bolsista de Iniciação Científica · orient. Eurico Matos",
    cover: {
      id: "cover-pibic",
      mode: "image",
      src: "/assets/covers/pibic-clusters.png",
      caption: "MDS clássico sobre distância cosseno · 120 clusters por macro-tema",
      contain: true
    },
    status: "research",
    statusLabel: "análise concluída · em redação",
    body:
    <>
          <p>
            Análise de enquadramento da cobertura eleitoral em <strong>211 perfis
            de mídia local</strong> da Amazônia Legal — <strong>78.497 publicações</strong>{" "}
            no Instagram nas nove capitais da região, entre 16/ago e 30/out de 2024.
          </p>
          <p>
            Clusterizei a base com <strong>BERTopic guiado</strong> — embeddings
            multilíngues, HDBSCAN e c-TF-IDF — chegando a 120 clusters e{" "}
            <strong>13 macro-temas</strong>. A leitura: na mídia local a floresta
            é enquadrada como problema de infraestrutura, e toda a segurança
            pública colapsa num único cluster de linguagem padronizada por release.
          </p>
          <p className="muted-aside">
            <strong>A mesma metodologia se aplica fora do jornalismo:</strong>{" "}
            o método separou gênero, não só assunto — a diferença entre saber o
            quanto se fala de uma marca e saber <em>como</em> se fala.
          </p>
        </>,

    tags: ["BERTopic", "NLP", "Embeddings", "HDBSCAN", "Análise de enquadramento"],
    visual: <div className="visual-img-wrap"><img src={"/assets/covers/wordcloud-code.png"} alt="Notebook BERTopic" /></div>,
    visualLabel: "NOTEBOOK · WORDCLOUD POR MACRO-TEMA",
    visualHd: "pibic / bertopic_notebook"
  },
  {
    id: "03",
    title: "JogoJusto · Índice de Segurança do Jogador",
    client: "FGV Quest · cofundador · parceria com a Prefeitura do Rio",
    role: "Diretor de Desenvolvimento",
    cover: {
      id: "cover-quest",
      mode: "image",
      src: "/assets/covers/team-fgvquest.jpg",
      caption: "Time da FGV Quest · 2026"
    },
    status: "lead",
    statusLabel: "piloto em execução",
    body:
    <>
          <p>
            Cofundei a Liga Acadêmica <strong>FGV Quest</strong> e lidero a
            frente técnica como Diretor de Desenvolvimento. Nossa entrega
            central é o <strong>JogoJusto</strong>: um índice de 0 a 100 que
            traduz, num número auditável, o quanto um jogo digital protege quem
            joga — à luz do <strong>ECA Digital (Lei 15.211/2025)</strong>, em
            vigor desde março de 2026.
          </p>
          <p>
            São seis elementos de mecânica predatória, com pesos que somam 100 e
            duas medidas por elemento: o quanto o risco está presente e o quanto
            existe controle real contra ele. Em parceria com a{" "}
            <strong>Prefeitura do Rio de Janeiro</strong>, construímos um portal
            de transparência com a metodologia aberta à consulta pública.
          </p>
          <p className="muted-aside">
            O índice <strong>não</strong> mede se o jogo é bom, divertido ou
            violento, nem para que idade ele serve — isso já é feito por
            ClassInd, ESRB e PEGI. O recorte é único: mecânica predatória e
            segurança do jogador.
          </p>
        </>,

    tags: ["Liderança técnica", "Metodologia de pesquisa", "Policy + dados", "ECA Digital", "Arquitetura"],
    visual: <div className="visual-wordmark-wrap"><img src={"/assets/logos/fgvquest.png"} alt="FGV Quest" /></div>,
    visualLabel: "LIGA ACADÊMICA · FGV QUEST",
    visualHd: "jogojusto / brand"
  }];


  const drawerOpen = openItem !== null;
  const drawerProject = openItem && openItem.id !== "more" ? openItem : null;
  const drawerIsMore = openItem && openItem.id === "more" && !secondaryItem;
  const drawerSecondary = secondaryItem;
  const details = drawerProject ? (PROJECT_DETAILS || {})[drawerProject.id] : null;

  return (
    <>
    <section className="section" id="trabalhos">
      <div className="wrap">
        <div className="projects-head">
          <FadeIn>
            <div>
              <div className="eyebrow">Trabalhos</div>
              <h2 className="h2" style={{ marginTop: 28 }}>
                <span style={{ color: "rgb(31, 101, 54)" }}>Três frentes,</span><br />um mesmo método.
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="lede" style={{ fontSize: 18 }}>
              <span style={{ color: "rgb(22, 101, 53)" }}>Mercado, pesquisa e liderança técnica.</span>{" "}
              Cada uma prova um vértice diferente do mesmo trabalho:
              transformar dado bruto em decisão.
            </p>
          </FadeIn>
        </div>

        {projects.map((p, idx) =>
          <FadeIn key={p.id} delay={idx * 60} className="project project--clickable">
            <button
              type="button"
              className="project-trigger"
              aria-label={`Abrir detalhes: ${p.title}`}
              onClick={() => onOpen(p)} />
            
            <div className="project-meta">
              <div className="project-id">
                <span className="mono">/ projeto {p.id}</span>
                <span className={`pill ${p.status === "live" ? "pill--live" : ""}`}>
                  {p.statusLabel}
                </span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <div className="project-role">
                <div style={{ color: "var(--fg)", fontWeight: 500 }}>{p.client}</div>
                <div style={{ marginTop: 4 }}>{p.role}</div>
              </div>
              <div className="project-body">{p.body}</div>
              <div className="project-tags">
                {p.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
              </div>
              <div className="project-cta mono">
                <span>Saiba mais sobre este trabalho</span>
                <span className="project-cta-arr">→</span>
              </div>
            </div>
            <div className="project-stack">
              {p.cover && (p.cover.mode === "wordmark" ?
              <div className="project-cover project-cover--wordmark">
                  <img src={p.cover.src} alt={p.cover.alt || ""} />
                  <div className="project-cover-meta">{p.cover.caption || p.client}</div>
                </div> :
              p.cover.mode === "image" ?
              <div className="project-cover project-cover--image">
                  <img src={p.cover.src} alt={p.cover.alt || ""} />
                  <div className="project-cover-meta">{p.cover.caption || p.client}</div>
                </div> :

              <div className="project-cover">
                  <div className="project-cover-meta">{p.client}</div>
                </div>)
              }
              <div className="project-visual">
                <div className="visual-hd">
                  <span>{p.visualHd}</span>
                  <span>{p.visualLabel}</span>
                </div>
                {p.visual}
              </div>
            </div>
          </FadeIn>
          )}

        {/* + Saiba mais (trabalhos secundários) */}
        <FadeIn delay={projects.length * 60} className="project project--more">
          <button
              type="button"
              className="project-trigger"
              aria-label="Ver mais trabalhos"
              onClick={() => onOpen({ id: "more" })} />
            
          <div className="more-card-inline">
            <div className="more-card-inline-meta mono">
              <span>/ trabalhos secundários</span>
              <span className="more-count mono">{(MORE_PROJECTS || []).length}+ projetos</span>
            </div>
            <h3 className="more-card-inline-title">Saiba mais</h3>
            <p className="more-card-inline-sub">
              Pesquisas, papers e projetos complementares — como o paper sobre o
              SAEB. Espaço para crescer conforme novos trabalhos chegam.
            </p>
            <div className="project-cta mono">
              <span>Abrir lista completa</span>
              <span className="project-cta-arr">→</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
    <DrawerShell open={drawerOpen} onClose={onClose}>
      {drawerProject && <ProjectDeepDive project={drawerProject} details={details} />}
      {drawerIsMore && <MoreList onOpen={(item) => setSecondaryItem(item)} />}
      {drawerSecondary &&
        <>
          <button
            type="button"
            className="dd-back mono"
            onClick={() => setSecondaryItem(null)}>
            
            ← voltar à lista
          </button>
          <SecondaryDeepDive item={drawerSecondary} />
        </>
        }
    </DrawerShell>
    </>);

}

// ──────── ABOUT ────────
export function About() {
  return (
    <section className="section section--soft" id="sobre">
      <div className="about-bg-decor" aria-hidden="true"></div>
      <div className="wrap">
        <div className="about">
          <FadeIn>
            <div>
              <div className="eyebrow">Sobre</div>
              <h2 className="h2" style={{ marginTop: 28 }}>
                Comunicação<br />como disciplina técnica.
              </h2>
              <div className="about-photo">
                <img src="/uploads/about-photo.webp" alt="Erik Rolin no trabalho" className="slot-img" />
                <div className="about-photo-meta">ERIK · NO TRABALHO</div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="about-body">
              <p>
                Sou Erik. Estudo Comunicação na FGV — ECMI, 3º período — com
                formação complementar em Ciência de Dados pela FGV EMAp.
              </p>
              <p>
                Trabalhando com dados de plataformas digitais, percebi um
                padrão: a maioria das empresas usa menos de 30% dos dados que
                já possui. Meu trabalho é fechar esse gap, juntando ferramenta
                técnica com leitura comunicacional.
              </p>
              <div className="about-list">
                <div><b>Formação</b><span>FGV ECMI · Comunicação · 3º período · em curso</span></div>
                <div><b>Complementar</b><span>FGV EMAp · Ciência de Dados</span></div>
                <div><b>Pesquisa</b><span>PIBIC 2024/2025 · "O Voto, A Bala e a Floresta" · orient. Eurico Matos</span></div>
                <div><b>ARTIGOS PRONTOS</b><span>Análise Exploratória do SAEB · FGV, 2024</span></div>
                <div><b>Liderança</b><span>Cofundador e Diretor de Desenvolvimento · Liga Acadêmica FGV Quest</span></div>
                <div><b>Mercado</b><span>Deeper · inteligência sobre executivos · FSB Holding / Nexus</span></div>
                <div><b>Localização</b><span>Rio de Janeiro · BR</span></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>);}

// ──────── CONTACT ────────
export function Contact() {
  return (
    <section className="section section--tight" id="contato">
      <div className="wrap">
        <div className="contact contact--single">
          <FadeIn>
            <div className="contact-head">
              <div className="eyebrow">Canais</div>
              <h2 className="h2" style={{ marginTop: 20, maxWidth: "18ch" }}>
                Onde me encontrar.
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="contact-links">
              <a className="contact-link" href="mailto:eriknrolin@gmail.com">
                <span className="label">Email</span>
                <span>eriknrolin@gmail.com</span>
                <span className="arr">→</span>
              </a>
              <a className="contact-link" href="https://www.linkedin.com/in/erikrolin/" target="_blank" rel="noreferrer">
                <span className="label">LinkedIn</span>
                <span>/in/erikrolin</span>
                <span className="arr">↗</span>
              </a>
              <a className="contact-link" href="https://github.com/ErikRolinFGV" target="_blank" rel="noreferrer">
                <span className="label">GitHub</span>
                <span>@ErikRolinFGV</span>
                <span className="arr">↗</span>
              </a>
              <a className="contact-link" href="/cv.html" target="_blank" rel="noreferrer">
                <span className="label">Currículo</span>
                <span>Abrir CV · PDF</span>
                <span className="arr">↗</span>
              </a>
              <a className="contact-link" href="tel:+5521992025739">
                <span className="label">Telefone</span>
                <span>+55 (21) 99202-5739</span>
                <span className="arr">→</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>);

}

// ──────── FOOTER ────────
export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <span>© 2026 · Erik Rolin</span>
        <span>FGV ECMI · EMAp · Rio de Janeiro</span>
      </div>
    </footer>);

}

