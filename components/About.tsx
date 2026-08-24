// Gerado a partir do handoff de design (design_handoff_portfolio_2026).
// Estilos inline preservados do protótipo para manter a fidelidade acordada.

export function About() {
  return (
    <>
      <section id="sobre" style={{ background: 'var(--color-accent-2-200)', borderTop: '1px solid var(--color-divider)' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '88px 32px' }}>
            <div className="cols2" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.2fr', gap: '64px', alignItems: 'center' }}>
              <div style={{ position: 'relative' }}>
                <img src="/assets/about-photo.webp" alt="Erik Rolin no trabalho" style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '999px', boxShadow: 'var(--shadow-md)' }} />
              </div>
              <div>
                <div style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent-2-800)' }}>Sobre</div>
                <h2 style={{ fontSize: '46px', margin: '18px 0 0', maxWidth: '20ch' }}>Comunicação como disciplina técnica</h2>
                <p style={{ fontSize: '18px', lineHeight: '1.65', margin: '22px 0 0', maxWidth: '52ch', color: 'var(--color-accent-2-900)' }}>Estudante de Comunicação na FGV Comunicação, com formação prevista para 2028 e formação complementar em Ciência de Dados na FGV EMAp. Sou Diretor de Desenvolvimento da liga acadêmica FGV Quest, onde lidero o time técnico em parceria com a Prefeitura do Rio, e bolsista de Iniciação Científica em análise de mídia. Para a Nexus (FSB Holding), construí uma plataforma de inteligência sobre executivos brasileiros. Tenho interesse em comunicação corporativa, reputação de marca, ciência de dados e IA aplicada.</p>
              </div>
            </div>
          </div>
        </section>

      <section id="parcerias" style={{ background: 'var(--color-bg)', borderTop: '1px solid var(--color-divider)' }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '64px 32px 68px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: '700', color: 'var(--ink)' }}>Instituições &amp; parcerias</span>
              <span style={{ flex: '1', height: '1px', background: 'color-mix(in srgb, var(--ink) 14%, transparent)' }}></span>
            </div>
            <div className="logos-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1px', background: 'color-mix(in srgb, var(--ink) 14%, transparent)', border: '1px solid color-mix(in srgb, var(--ink) 14%, transparent)', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginTop: '20px' }}>
              <div style={{ background: 'var(--color-bg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '24px 16px 18px', minHeight: '140px' }}>
                <div style={{ height: '58px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="/assets/logo-fgv-comunicacao.png" alt="FGV Comunicação" style={{ maxHeight: '58px', maxWidth: '100%', width: 'auto', objectFit: 'contain', borderRadius: 'var(--radius-sm)' }} /></div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)' }}>FGV Comunicação</div>
                  <div style={{ fontSize: '10px', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '3px', color: 'color-mix(in srgb, var(--ink) 55%, transparent)' }}>Graduação</div>
                </div>
              </div>
              <div style={{ background: 'var(--color-bg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '24px 16px 18px', minHeight: '140px' }}>
                <div style={{ height: '58px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="/assets/logo-fgv-emap.webp" alt="FGV EMAp" style={{ maxHeight: '58px', maxWidth: '100%', width: 'auto', objectFit: 'contain' }} /></div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)' }}>FGV EMAp</div>
                  <div style={{ fontSize: '10px', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '3px', color: 'color-mix(in srgb, var(--ink) 55%, transparent)' }}>Ciência de Dados</div>
                </div>
              </div>
              <div style={{ background: 'var(--color-bg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '24px 16px 18px', minHeight: '140px' }}>
                <div style={{ height: '58px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="/assets/logo-pibic.webp" alt="PIBIC" style={{ maxHeight: '58px', maxWidth: '100%', width: 'auto', objectFit: 'contain' }} /></div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)' }}>PIBIC</div>
                  <div style={{ fontSize: '10px', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '3px', color: 'color-mix(in srgb, var(--ink) 55%, transparent)' }}>FGV</div>
                </div>
              </div>
              <a href="https://www.nexus.fsb.com.br/" target="_blank" rel="noreferrer" style={{ background: 'var(--color-bg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '24px 16px 18px', minHeight: '140px', textDecoration: 'none' }}>
                <div style={{ height: '58px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="/assets/logo-fsb.webp" alt="FSB Holding" style={{ maxHeight: '58px', maxWidth: '100%', width: 'auto', objectFit: 'contain' }} /></div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)' }}>FSB Holding</div>
                  <div style={{ fontSize: '10px', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '3px', color: 'color-mix(in srgb, var(--ink) 55%, transparent)' }}>Nexus</div>
                </div>
              </a>
              <a href="https://www.instagram.com/fgvquest/" target="_blank" rel="noreferrer" style={{ background: 'var(--color-bg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '24px 16px 18px', minHeight: '140px', textDecoration: 'none' }}>
                <div style={{ height: '58px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="/assets/fgvquest.png" alt="FGV Quest" style={{ maxHeight: '58px', maxWidth: '100%', width: 'auto', objectFit: 'contain' }} /></div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)' }}>FGV Quest</div>
                  <div style={{ fontSize: '10px', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '3px', color: 'color-mix(in srgb, var(--ink) 55%, transparent)' }}>Liga acadêmica</div>
                </div>
              </a>
              <div style={{ background: 'var(--color-bg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '24px 16px 18px', minHeight: '140px' }}>
                <div style={{ height: '58px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="/assets/logo-prefeitura-rio.png" alt="Prefeitura do Rio de Janeiro" style={{ maxHeight: '58px', maxWidth: '100%', width: 'auto', objectFit: 'contain', borderRadius: 'var(--radius-sm)' }} /></div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--ink)' }}>Prefeitura do Rio</div>
                  <div style={{ fontSize: '10px', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '3px', color: 'color-mix(in srgb, var(--ink) 55%, transparent)' }}>Parceria pública</div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
    </>
  );
}
