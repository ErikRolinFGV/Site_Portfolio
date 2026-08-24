// Gerado a partir do handoff de design (design_handoff_portfolio_2026).
// Estilos inline preservados do protótipo para manter a fidelidade acordada.

export function Contact() {
  return (
    <section id="contato" style={{ background: 'var(--ink)', color: 'var(--color-neutral-200)' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '88px 32px 44px' }}>
          <h2 style={{ fontSize: '52px', margin: '0', maxWidth: '22ch', color: 'var(--color-neutral-100)' }}>Me dá quinze minutos e eu te mostro um problema virando decisão.</h2>
          <div className="cols2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginTop: '44px', alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <a href="mailto:eriknrolin@gmail.com" style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', padding: '18px 0', borderBottom: '1px solid color-mix(in srgb, var(--ink) 78%, transparent)', color: 'var(--color-neutral-100)', fontSize: '17px' }}><span style={{ color: 'var(--color-accent-400)', fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Email</span><span>eriknrolin@gmail.com →</span></a>
              <a href="https://www.linkedin.com/in/erikrolin/" target="_blank" rel="noreferrer" style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', padding: '18px 0', borderBottom: '1px solid color-mix(in srgb, var(--ink) 78%, transparent)', color: 'var(--color-neutral-100)', fontSize: '17px' }}><span style={{ color: 'var(--color-accent-400)', fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>LinkedIn</span><span>/in/erikrolin ↗</span></a>
              <a href="https://github.com/ErikRolinFGV" target="_blank" rel="noreferrer" style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', padding: '18px 0', borderBottom: '1px solid color-mix(in srgb, var(--ink) 78%, transparent)', color: 'var(--color-neutral-100)', fontSize: '17px' }}><span style={{ color: 'var(--color-accent-400)', fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>GitHub</span><span>@ErikRolinFGV ↗</span></a>
              <a href="tel:+5521992025739" style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', padding: '18px 0', borderBottom: '1px solid color-mix(in srgb, var(--ink) 78%, transparent)', color: 'var(--color-neutral-100)', fontSize: '17px' }}><span style={{ color: 'var(--color-accent-400)', fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Telefone</span><span>+55 (21) 99202-5739 →</span></a>
            </div>
            <div>
              <p style={{ fontSize: '18px', lineHeight: '1.65', margin: '0', color: 'var(--color-neutral-300)' }}>Aberto a estágio, no Rio de Janeiro. Se a sua equipe precisa de alguém que construa a ferramenta e escreva a leitura, o currículo está a um clique.</p>
              <div style={{ display: 'flex', marginTop: '26px' }}>
                <a className="btn btn-primary" href="/cv.html" target="_blank" rel="noreferrer" style={{ borderRadius: '999px', padding: '14px 26px', fontSize: '16px' }}>Baixar currículo ↓</a>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap', marginTop: '64px', paddingTop: '24px', borderTop: '1px solid var(--ink)', fontSize: '13px', color: 'var(--color-neutral-500)' }}>
            <span>© 2026 · Erik Rolin</span>
            <span>FGV Comunicação · FGV EMAp · Rio de Janeiro</span>
          </div>
        </div>
      </section>
  );
}
