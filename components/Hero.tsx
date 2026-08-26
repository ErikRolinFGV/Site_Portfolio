// Gerado a partir do handoff de design (design_handoff_portfolio_2026).
// Estilos inline preservados do protótipo para manter a fidelidade acordada.

export function Hero() {
  return (
    <header id="top" style={{ maxWidth: '1120px', margin: '0 auto', padding: '88px 32px 96px' }}>
        <div className="cols2" style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.9fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-bg)', background: 'var(--ink)', borderRadius: '999px', padding: '7px 16px' }}>Aberto a estágio · Rio de Janeiro</div>
            <h1 className="h-display" style={{ fontSize: '76px', lineHeight: '1.02', margin: '26px 0 0', maxWidth: '16ch' }}>Comunicar é transformar dado em decisão.</h1>
            <p style={{ fontSize: '20px', lineHeight: '1.6', maxWidth: '46ch', margin: '26px 0 0', color: 'var(--ink)' }}>Erik Rolin. Graduando em Comunicação Digital na FGV Comunicação, com formação complementar em Ciência de Dados na FGV EMAp. Construo as ferramentas que coletam e analisam os dados — e escrevo a leitura que sai deles.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '34px' }}>
              <a className="btn btn-primary" href="/cv.html" target="_blank" rel="noreferrer" style={{ borderRadius: '999px', padding: '14px 26px', fontSize: '16px' }}>Baixar currículo ↓</a>
              <a className="btn btn-secondary" href="mailto:eriknrolin@gmail.com" style={{ borderRadius: '999px', padding: '14px 26px', fontSize: '16px' }}>eriknrolin@gmail.com</a>
              <a className="btn btn-secondary" href="https://www.linkedin.com/in/erikrolin/" target="_blank" rel="noreferrer" style={{ borderRadius: '999px', padding: '14px 26px', fontSize: '16px' }}>LinkedIn ↗</a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '30px' }}>
              <span className="tag tag-accent-2" style={{ borderRadius: '999px', padding: '6px 14px', fontSize: '12px' }}>Comunicação corporativa</span>
              <span className="tag tag-accent-2" style={{ borderRadius: '999px', padding: '6px 14px', fontSize: '12px' }}>Análise de enquadramento</span>
              <span className="tag tag-accent-2" style={{ borderRadius: '999px', padding: '6px 14px', fontSize: '12px' }}>Monitoramento de mídia</span>
              <span className="tag tag-accent-2" style={{ borderRadius: '999px', padding: '6px 14px', fontSize: '12px' }}>Storytelling de dados</span>
              <span className="tag tag-accent-2" style={{ borderRadius: '999px', padding: '6px 14px', fontSize: '12px' }}>Python · FastAPI · PostgreSQL</span>
              <span className="tag tag-accent-2" style={{ borderRadius: '999px', padding: '6px 14px', fontSize: '12px' }}>NLP · BERTopic · Grafos</span>
              <span className="tag tag-accent-2" style={{ borderRadius: '999px', padding: '6px 14px', fontSize: '12px' }}>IA aplicada</span>
              <span className="tag tag-accent-2" style={{ borderRadius: '999px', padding: '6px 14px', fontSize: '12px' }}>Excel avançado · Power BI</span>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-22px -14px 34px 16px', borderRadius: '999px', background: 'var(--color-accent-2-200)' }}></div>
            <img src="/assets/erik-portrait.webp" alt="Erik Rolin" style={{ position: 'relative', width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
            <div style={{ position: 'relative', marginTop: '14px', fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>Erik Rolin / FGV Comunicação · EMAp</div>
          </div>
        </div>
      </header>
  );
}
