// Gerado a partir do handoff de design (design_handoff_portfolio_2026).
// Estilos inline preservados do protótipo para manter a fidelidade acordada.

export function Timeline() {
  return (
    <section id="trajetoria" style={{ maxWidth: '1120px', margin: '0 auto', padding: '96px 32px', borderTop: '1px solid var(--color-divider)' }}>
        <div className="cols2" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.3fr', gap: '64px', alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: '96px' }}>
            <div style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent-700)' }}>Trajetória</div>
            <h2 style={{ fontSize: '46px', margin: '18px 0 0' }}>Como cheguei aqui</h2>
            <p style={{ fontSize: '17px', lineHeight: '1.65', margin: '18px 0 0', color: 'color-mix(in srgb, var(--ink) 78%, transparent)' }}>Comecei na matemática aplicada, virei para a comunicação e descobri que o melhor lugar para mim é o ponto exato entre as duas.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '28px' }}>
              <a className="btn btn-primary" href="/cv.html" target="_blank" rel="noreferrer" style={{ borderRadius: '999px', padding: '14px 26px', fontSize: '16px' }}>Baixar currículo ↓</a>
            </div>
          </div>
          <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', padding: '44px', boxShadow: 'var(--shadow-md)' }}>
            <ol style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex', flexDirection: 'column', gap: '30px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: '6px', top: '10px', bottom: '10px', width: '1px', background: 'color-mix(in srgb, var(--ink) 18%, transparent)' }}></span>
              <li style={{ position: 'relative', paddingLeft: '34px' }}>
                <span style={{ position: 'absolute', left: '0', top: '7px', width: '13px', height: '13px', borderRadius: '999px', background: 'var(--ink)', boxShadow: '0 0 0 4px var(--color-surface)' }}></span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.04em', color: 'var(--ink)' }}>2022</span>
                  <span style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: '999px', padding: '4px 10px', background: 'color-mix(in srgb, var(--ink) 8%, transparent)', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>formação</span>
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '18px', letterSpacing: '-0.02em', marginTop: '6px' }}>Conclui o Ensino Médio</div>
                <p style={{ fontSize: '15px', lineHeight: '1.6', margin: '6px 0 0', color: 'color-mix(in srgb, var(--ink) 78%, transparent)' }}>Colégio Pedro II · Campus Tijuca, Rio de Janeiro.</p>
              </li>
              <li style={{ position: 'relative', paddingLeft: '34px' }}>
                <span style={{ position: 'absolute', left: '0', top: '7px', width: '13px', height: '13px', borderRadius: '999px', background: 'var(--ink)', boxShadow: '0 0 0 4px var(--color-surface)' }}></span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.04em', color: 'var(--ink)' }}>2024.1</span>
                  <span style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: '999px', padding: '4px 10px', background: 'color-mix(in srgb, var(--ink) 8%, transparent)', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>ingresso</span>
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '18px', letterSpacing: '-0.02em', marginTop: '6px' }}>Entrada na FGV EMAp · Ciência de Dados</div>
                <p style={{ fontSize: '15px', lineHeight: '1.6', margin: '6px 0 0', color: 'color-mix(in srgb, var(--ink) 78%, transparent)' }}>Início da formação técnica em estatística, matemática e ciência de dados.</p>
              </li>
              <li style={{ position: 'relative', paddingLeft: '34px' }}>
                <span style={{ position: 'absolute', left: '0', top: '7px', width: '13px', height: '13px', borderRadius: '999px', background: 'var(--ink)', boxShadow: '0 0 0 4px var(--color-surface)' }}></span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.04em', color: 'var(--ink)' }}>2024.2</span>
                  <span style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: '999px', padding: '4px 10px', background: 'color-mix(in srgb, var(--ink) 8%, transparent)', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>publicação</span>
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '18px', letterSpacing: '-0.02em', marginTop: '6px' }}>Paper · Análise Exploratória do SAEB</div>
                <p style={{ fontSize: '15px', lineHeight: '1.6', margin: '6px 0 0', color: 'color-mix(in srgb, var(--ink) 78%, transparent)' }}>Correlações entre variáveis sociais, econômicas e educacionais nos microdados do SAEB. Coautoria com Bruno Cavalli e Nicholas Farrel Ferraz.</p>
              </li>
              <li style={{ position: 'relative', paddingLeft: '34px' }}>
                <span style={{ position: 'absolute', left: '0', top: '7px', width: '13px', height: '13px', borderRadius: '999px', background: 'var(--ink)', boxShadow: '0 0 0 4px var(--color-surface)' }}></span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.04em', color: 'var(--ink)' }}>2025.1</span>
                  <span style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: '999px', padding: '4px 10px', background: 'color-mix(in srgb, var(--ink) 8%, transparent)', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>virada</span>
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '18px', letterSpacing: '-0.02em', marginTop: '6px' }}>Transferência para a FGV Comunicação · Comunicação Digital</div>
                <p style={{ fontSize: '15px', lineHeight: '1.6', margin: '6px 0 0', color: 'color-mix(in srgb, var(--ink) 78%, transparent)' }}>Comunicação Digital somada à base técnica; a EMAp vira formação complementar. Começa o PIBIC "O Voto, A Bala e a Floresta".</p>
              </li>
              <li style={{ position: 'relative', paddingLeft: '34px' }}>
                <span style={{ position: 'absolute', left: '0', top: '7px', width: '13px', height: '13px', borderRadius: '999px', background: 'var(--ink)', boxShadow: '0 0 0 4px var(--color-surface)' }}></span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.04em', color: 'var(--ink)' }}>2025.2</span>
                  <span style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: '999px', padding: '4px 10px', background: 'color-mix(in srgb, var(--ink) 8%, transparent)', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>liderança</span>
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '18px', letterSpacing: '-0.02em', marginTop: '6px' }}>Diretor de Desenvolvimento da FGV Quest · início do Deeper</div>
                <p style={{ fontSize: '15px', lineHeight: '1.6', margin: '6px 0 0', color: 'color-mix(in srgb, var(--ink) 78%, transparent)' }}>Conduzo o time técnico da liga e abrimos a parceria com a Prefeitura do Rio. Em paralelo, começa o desenvolvimento da plataforma para a Nexus.</p>
              </li>
              <li style={{ position: 'relative', paddingLeft: '34px' }}>
                <span style={{ position: 'absolute', left: '0', top: '7px', width: '13px', height: '13px', borderRadius: '999px', background: 'var(--ink)', boxShadow: '0 0 0 4px var(--color-surface)' }}></span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.04em', color: 'var(--ink)' }}>2026.1</span>
                  <span style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: '999px', padding: '4px 10px', background: 'color-mix(in srgb, var(--ink) 8%, transparent)', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>marco</span>
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '18px', letterSpacing: '-0.02em', marginTop: '6px' }}>ECA Digital em vigor · metodologia do JogoJusto em construção</div>
                <p style={{ fontSize: '15px', lineHeight: '1.6', margin: '6px 0 0', color: 'color-mix(in srgb, var(--ink) 78%, transparent)' }}>Com a Lei 15.211/2025 em vigor desde 17 de março, a FGV Quest assume a tradução da norma para o público. A coleta do PIBIC é executada pelo DAPP Lab.</p>
              </li>
              <li style={{ position: 'relative', paddingLeft: '34px' }}>
                <span style={{ position: 'absolute', left: '0', top: '7px', width: '13px', height: '13px', borderRadius: '999px', background: 'var(--color-accent)', boxShadow: '0 0 0 4px var(--color-surface)' }}></span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.04em', color: 'var(--ink)' }}>2026.2</span>
                  <span style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: '999px', padding: '4px 10px', background: 'var(--ink)', color: 'var(--color-bg)' }}>agora</span>
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '18px', letterSpacing: '-0.02em', marginTop: '6px' }}>PIBIC analisado · Deeper validado · JogoJusto em piloto</div>
                <p style={{ fontSize: '15px', lineHeight: '1.6', margin: '6px 0 0', color: 'color-mix(in srgb, var(--ink) 78%, transparent)' }}>78.497 publicações clusterizadas em 120 clusters e 13 macro-temas, artigo em redação. O Deeper aprovado em demonstração na FSB. Piloto de confiabilidade em execução. Aberto a estágio.</p>
              </li>
              <li style={{ position: 'relative', paddingLeft: '34px' }}>
                <span style={{ position: 'absolute', left: '0', top: '7px', width: '13px', height: '13px', borderRadius: '999px', background: 'var(--ink)', boxShadow: '0 0 0 4px var(--color-surface)' }}></span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.04em', color: 'var(--ink)' }}>2028</span>
                  <span style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: '999px', padding: '4px 10px', background: 'color-mix(in srgb, var(--ink) 8%, transparent)', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>previsto</span>
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '18px', letterSpacing: '-0.02em', marginTop: '6px' }}>Graduação em Comunicação Digital · FGV Comunicação</div>
                <p style={{ fontSize: '15px', lineHeight: '1.6', margin: '6px 0 0', color: 'color-mix(in srgb, var(--ink) 78%, transparent)' }}>Conclusão do curso de Comunicação Digital com formação complementar em Ciência de Dados.</p>
              </li>
            </ol>
          </div>
        </div>
      </section>
  );
}
