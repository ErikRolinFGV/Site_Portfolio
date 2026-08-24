// Gerado a partir do handoff de design (design_handoff_portfolio_2026).
// Estilos inline preservados do protótipo para manter a fidelidade acordada.

export function Nav() {
  return (
    <nav style={{ position: 'sticky', top: '0', zIndex: '50', background: 'color-mix(in srgb, var(--ink) 94%, transparent)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-heading)', fontSize: '17px', letterSpacing: '-0.02em', color: 'var(--color-neutral-100)' }}>
            <span style={{ width: '11px', height: '11px', borderRadius: '999px', background: 'var(--color-accent-400)' }}></span>
            Erik Rolin
          </a>
          <div className="navlinks" style={{ display: 'flex', alignItems: 'center', gap: '26px', fontSize: '14px' }}>
            <a href="#sobre" style={{ color: 'var(--color-neutral-200)' }}>Sobre</a>
            <a href="#trabalhos" style={{ color: 'var(--color-neutral-200)' }}>Trabalhos</a>
            <a href="#competencias" style={{ color: 'var(--color-neutral-200)' }}>Competências</a>
            <a href="#trajetoria" style={{ color: 'var(--color-neutral-200)' }}>Trajetória</a>
            <a href="#contato" style={{ color: 'var(--color-neutral-200)' }}>Contato</a>
            <a className="btn btn-primary" href="/cv.html" target="_blank" rel="noreferrer" style={{ borderRadius: '999px', padding: '9px 18px' }}>Baixar CV ↓</a>
          </div>
          <a className="btn btn-primary navcv-mobile" href="/cv.html" target="_blank" rel="noreferrer" style={{ borderRadius: '999px', padding: '9px 18px', display: 'none' }}>CV ↓</a>
        </div>
      </nav>
  );
}
