// Gerado a partir do handoff de design (design_handoff_portfolio_2026).
// Estilos inline preservados do protótipo para manter a fidelidade acordada.

export function Skills() {
  return (
    <section id="competencias" style={{ maxWidth: '1120px', margin: '0 auto', padding: '92px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap' }}>
          <h2 style={{ fontSize: '46px', margin: '0', maxWidth: '20ch' }}>O que eu sei fazer, e onde isso aparece</h2>
          <p style={{ fontSize: '17px', maxWidth: '34ch', margin: '0', color: 'color-mix(in srgb, var(--ink) 72%, transparent)' }}>Cada linha abaixo tem um projeto desta página por trás.</p>
        </div>
        <div className="cols3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'color-mix(in srgb, var(--ink) 14%, transparent)', border: '1px solid color-mix(in srgb, var(--ink) 14%, transparent)', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginTop: '46px' }}>
          <div style={{ background: 'var(--color-bg)', padding: '30px 28px 28px' }}>
            <div style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '700', color: 'var(--color-accent-700)' }}>Engenharia de dados</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginTop: '16px' }}>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Python</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>FastAPI</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>PostgreSQL</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>SQLAlchemy</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Redis + RQ</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>pytest</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Git</span>
            </div>
            <p style={{ fontSize: '15px', lineHeight: '1.55', margin: '18px 0 0', color: 'color-mix(in srgb, var(--ink) 78%, transparent)' }}>Pipeline de coleta, modelo de dados e fila de processamento do <a href="#trabalhos">Deeper</a>, com 125 testes automatizados e 11 rotas de API.</p>
          </div>
          <div style={{ background: 'var(--color-bg)', padding: '30px 28px 28px' }}>
            <div style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '700', color: 'var(--color-accent-700)' }}>NLP e IA aplicada</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginTop: '16px' }}>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>BERTopic</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Embeddings</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>UMAP · HDBSCAN</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Claude Sonnet</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Grafos</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Extração por schema</span>
            </div>
            <p style={{ fontSize: '15px', lineHeight: '1.55', margin: '18px 0 0', color: 'color-mix(in srgb, var(--ink) 78%, transparent)' }}>78.497 publicações clusterizadas na <a href="#trabalhos">Iniciação Científica</a>; briefing executivo e análise de sentimento no Deeper, em duas camadas de IA.</p>
          </div>
          <div style={{ background: 'var(--color-bg)', padding: '30px 28px 28px' }}>
            <div style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '700', color: 'var(--color-accent-700)' }}>Comunicação</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginTop: '16px' }}>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Análise de enquadramento</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Monitoramento de mídia</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Escuta social</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Storytelling de dados</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Redação técnica</span>
            </div>
            <p style={{ fontSize: '15px', lineHeight: '1.55', margin: '18px 0 0', color: 'color-mix(in srgb, var(--ink) 78%, transparent)' }}>A leitura dos 13 macro-temas da cobertura amazônica, e a tradução do ECA Digital para o público no <a href="#trabalhos">JogoJusto</a>.</p>
          </div>
          <div style={{ background: 'var(--color-bg)', padding: '30px 28px 28px' }}>
            <div style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '700', color: 'var(--color-accent-700)' }}>Método e pesquisa</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginTop: '16px' }}>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Desenho de validação</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Alfa de Krippendorff</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Teste de robustez</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Estatística</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Documentação de arquitetura</span>
            </div>
            <p style={{ fontSize: '15px', lineHeight: '1.55', margin: '18px 0 0', color: 'color-mix(in srgb, var(--ink) 78%, transparent)' }}>Dupla codificação em cego no JogoJusto e teste de robustez em três cenários na IC, com correlação de postos entre 0,89 e 0,99.</p>
          </div>
          <div style={{ background: 'var(--color-bg)', padding: '30px 28px 28px' }}>
            <div style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '700', color: 'var(--color-accent-700)' }}>Liderança técnica</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginTop: '16px' }}>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Coordenação de equipe</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Code review</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Mentoria</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Gestão de projetos</span>
            </div>
            <p style={{ fontSize: '15px', lineHeight: '1.55', margin: '18px 0 0', color: 'color-mix(in srgb, var(--ink) 78%, transparent)' }}>Diretor de Desenvolvimento da <a href="#parcerias">FGV Quest</a>, conduzindo o time técnico na parceria com a Prefeitura do Rio.</p>
          </div>
          <div style={{ background: 'var(--color-bg)', padding: '30px 28px 28px' }}>
            <div style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '700', color: 'var(--color-accent-700)' }}>Análise e entrega sob demanda</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginTop: '16px' }}>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Excel avançado</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Power BI</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Visualização de dados</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>SQL</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>HTML / JS</span>
              <span className="tag tag-neutral" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '12px' }}>Escopo e prazo próprios</span>
            </div>
            <p style={{ fontSize: '15px', lineHeight: '1.55', margin: '18px 0 0', color: 'color-mix(in srgb, var(--ink) 78%, transparent)' }}>Trabalho por demanda, do escopo à entrega: o <a href="#trabalhos">Deeper</a> foi conduzido como projeto autônomo para a Nexus — arquitetura, documentação e demonstração por conta própria. Planilha e dashboard quando é isso que resolve; aplicação sob medida quando não é.</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '28px', flexWrap: 'wrap', marginTop: '22px', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', padding: '22px 28px' }}>
          <div style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '700', color: 'var(--color-accent-700)' }}>Idiomas</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', minWidth: '380px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: '16px', alignItems: 'baseline', paddingBottom: '11px', borderBottom: '1px solid color-mix(in srgb, var(--ink) 12%, transparent)' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '17px', letterSpacing: '-0.02em' }}>Português</span>
              <span style={{ fontSize: '15px', color: 'color-mix(in srgb, var(--ink) 70%, transparent)' }}>Nativo</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: '16px', alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '700', fontSize: '17px', letterSpacing: '-0.02em' }}>Inglês</span>
              <span style={{ fontSize: '15px', color: 'color-mix(in srgb, var(--ink) 70%, transparent)' }}>Fluente · diploma do Canadian College, Vancouver</span>
            </div>
          </div>
        </div>
      </section>
  );
}
