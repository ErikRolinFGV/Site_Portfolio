"use client";
import React, { useEffect } from "react";
import { MORE_PROJECTS } from "@/lib/projectData";

export function DrawerShell({ open, onClose, children, side = "right" }) {
  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={`drawer-root ${open ? "drawer-root--open" : ""} drawer-root--${side}`}
      aria-hidden={!open}
    >
      <div className="drawer-overlay" onClick={onClose} />
      <aside
        className="drawer-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Detalhes do projeto"
      >
        <button
          type="button"
          className="drawer-close"
          onClick={onClose}
          aria-label="Fechar"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <div className="drawer-scroll">
          {children}
        </div>
      </aside>
    </div>
  );
}

// ──────── Drawer content: a single project deep-dive ────────
export function ProjectDeepDive({ project, details }) {
  if (!details) {
    return (
      <div className="dd-empty">
        <p className="muted">Detalhes deste projeto em breve.</p>
      </div>
    );
  }
  return (
    <article className="dd">
      <header className="dd-head">
        <div className="dd-meta mono">
          <span>/ projeto {project.id}</span>
          <span className={`dd-pill ${project.status === "live" ? "dd-pill--live" : ""}`}>
            {project.statusLabel}
          </span>
        </div>
        <h2 className="dd-title">{project.title}</h2>
        <div className="dd-client">
          <strong>{project.client}</strong>
          <span className="dd-role mono">{project.role}</span>
        </div>
      </header>

      <Section label="O desafio">
        {details.challenge.map((p, i) => <p key={i}>{p}</p>)}
      </Section>

      <Section label={project.status === "live" || project.status === "research" || project.status === "lead" ? "Como estou resolvendo" : "Como resolvi"}>
        <ol className="dd-steps">
          {details.approach.map((p, i) => (
            <li key={i}><span className="dd-step-num mono">{String(i + 1).padStart(2, "0")}</span><span>{p}</span></li>
          ))}
        </ol>
      </Section>

      {details.stack && (
        <Section label="Stack">
          <div className="dd-chips">
            {details.stack.map((s) => <span key={s} className="dd-chip mono">{s}</span>)}
          </div>
        </Section>
      )}

      {details.corporateAside && (
        <aside className="dd-aside">
          <div className="dd-aside-tag mono">{details.corporateAside.tag || "/ aplicação corporativa"}</div>
          <h3 className="dd-aside-title">{details.corporateAside.title}</h3>
          {details.corporateAside.body.map((p, i) => <p key={i}>{p}</p>)}
          {details.corporateAside.bullets && (
            <ul className="dd-aside-list">
              {details.corporateAside.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          )}
        </aside>
      )}

      {details.results && (
        <Section label="Resultados & aprendizados">
          <ul className="dd-list">
            {details.results.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </Section>
      )}

      {details.gallery && details.gallery.length > 0 && (
        <Section label="Bastidores">
          <div className="dd-gallery">
            {details.gallery.map((img, i) => (
              <figure key={i} className="dd-gallery-item">
                <img src={img.src} alt={img.caption || ""} />
                {img.caption && <figcaption className="mono">{img.caption}</figcaption>}
              </figure>
            ))}
          </div>
        </Section>
      )}

      {details.deliverables && (
        <Section label="Entregáveis">
          <div className="dd-deliverables">
            {details.deliverables.map((d, i) => {
              const inner = (
                <>
                  <div className="dd-deliv-label">{d.label}</div>
                  <div className="dd-deliv-note mono">{d.note}</div>
                </>
              );
              if (d.href) {
                return (
                  <a
                    key={i}
                    className="dd-deliv dd-deliv--link"
                    href={d.href}
                    target={d.href.startsWith("http") ? "_blank" : undefined}
                    rel={d.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {inner}
                    <span className="dd-deliv-arr mono">↗</span>
                  </a>
                );
              }
              return (
                <div key={i} className="dd-deliv">
                  {inner}
                </div>
              );
            })}
          </div>
        </Section>
      )}
    </article>
  );
}

// Drawer content: "Saiba mais" — list of secondary works
export function MoreList({ onOpen }) {
  const items = MORE_PROJECTS || [];
  return (
    <article className="dd">
      <header className="dd-head">
        <div className="dd-meta mono">
          <span>/ trabalhos secundários</span>
        </div>
        <h2 className="dd-title">Saiba mais</h2>
        <div className="dd-client">
          <span className="dd-role">
            Pesquisas, papers e projetos complementares.
          </span>
        </div>
      </header>

      <ul className="more-list">
        {items.map((it) => (
          <li key={it.id}>
            <button type="button" className="more-card" onClick={() => onOpen(it)}>
              <div className="more-card-meta mono">
                <span>{it.year}</span>
                <span>{it.role}</span>
              </div>
              <h3 className="more-card-title">{it.title}</h3>
              <p className="more-card-summary">{it.summary}</p>
              {it.coauthors && (
                <div className="more-card-coauthors mono">{it.coauthors}</div>
              )}
              <div className="more-card-tags">
                {it.tags.map((t) => <span key={t} className="dd-chip mono">{t}</span>)}
              </div>
              <span className="more-card-arr mono">abrir →</span>
            </button>
          </li>
        ))}
        {items.length === 0 && (
          <li className="more-empty">
            <p className="muted">Mais trabalhos chegando em breve.</p>
          </li>
        )}
        <li className="more-soon">
          <div className="more-soon-label mono">/ em breve</div>
          <div className="more-soon-text">
            Espaço reservado para novos projetos. Volte aqui em algumas semanas.
          </div>
        </li>
      </ul>
    </article>
  );
}

// Secondary project (from "Saiba mais") detail view — reuses ProjectDeepDive layout
export function SecondaryDeepDive({ item }) {
  const project = {
    id: item.id.toUpperCase(),
    title: item.title,
    client: item.role,
    role: "",
    status: "secondary",
    statusLabel: item.year,
    coauthors: item.coauthors,
  };
  return (
    <>
      <ProjectDeepDive project={project} details={item.details} />
      {item.coauthors && (
        <div className="dd-coauthors">
          <span className="dd-coauthors-label mono">coautoria</span>
          <span className="dd-coauthors-text">{item.coauthors}</span>
        </div>
      )}
    </>
  );
}

// helper
export function Section({ label, children }) {
  return (
    <section className="dd-section">
      <div className="dd-section-label mono">{label}</div>
      <div className="dd-section-body">{children}</div>
    </section>
  );
}

// Skill deep-dive (used in Stack)
export function SkillDeepDive({ skill }) {
  if (!skill) return null;
  const d = skill.detail || {};
  return (
    <article className="dd dd--skill">
      <header className="dd-head">
        <div className="dd-meta mono">
          <span>/ habilidade {skill.num}</span>
        </div>
        <h2 className="dd-title">{skill.name}</h2>
        <div className="dd-client">
          <span className="dd-role-readable">{skill.desc}</span>
        </div>
      </header>

      {d.summary && (
        <Section label="Como uso">
          <p>{d.summary}</p>
        </Section>
      )}

      {d.capabilities && (
        <Section label="O que eu faço">
          <ul className="dd-list">
            {d.capabilities.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </Section>
      )}

      {d.applied && (
        <Section label="Onde aplico">
          <div className="dd-applied">
            {d.applied.map((a, i) => (
              <div key={i} className="dd-applied-row">
                <div className="dd-applied-project mono">{a.project}</div>
                <div className="dd-applied-where">{a.where}</div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {d.aside && (
        <aside className="dd-aside">
          <div className="dd-aside-tag mono">/ nota</div>
          <p>{d.aside}</p>
        </aside>
      )}

      {d.sections && d.sections.map((sec, i) => (
        <Section key={i} label={sec.title}>
          <ul className="dd-list">
            {sec.items.map((it, j) => <li key={j}>{it}</li>)}
          </ul>
        </Section>
      ))}
    </article>
  );
}


