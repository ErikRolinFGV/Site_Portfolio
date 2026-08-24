// Gerado a partir do handoff de design (design_handoff_portfolio_2026).
// Estilos inline preservados do protótipo para manter a fidelidade acordada.

export function Works() {
  return (
    <section id="trabalhos" style={{ background: 'var(--color-neutral-100)', borderTop: '1px solid var(--color-divider)', borderBottom: '1px solid var(--color-divider)' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '88px 32px 96px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: '46px', margin: '0', maxWidth: '18ch' }}>Três frentes, um mesmo método</h2>
            <p style={{ fontSize: '17px', maxWidth: '34ch', margin: '0', color: 'color-mix(in srgb, var(--ink) 78%, transparent)' }}>Mercado, pesquisa e liderança técnica. Cada uma prova um vértice do mesmo trabalho.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', marginTop: '52px' }}>


            <article style={{ background: 'var(--color-bg)', borderRadius: 'var(--radius-lg)', padding: '38px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent-700)' }}>01 · FSB Holding / Nexus</span>
                <span className="tag tag-accent" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '11px' }}>MVP validado</span>
              </div>
              <div style={{ margin: '22px 0 4px' }}>
                <img src="/assets/deeper-app.png" alt="Interface do Deeper" style={{ width: '100%', display: 'block', objectFit: 'cover', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }} />
                <div style={{ marginTop: '10px', fontSize: '12px', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>A busca do Deeper · nome, cargo ou link do LinkedIn</div>
              </div>
              <div className="cols2" style={{ display: 'grid', gridTemplateColumns: '1.35fr 0.8fr', gap: '48px', alignItems: 'start', marginTop: '30px' }}>
                <div>
                  <h3 style={{ fontSize: '34px', margin: '0' }}>Deeper</h3>
                  <p style={{ fontSize: '17px', lineHeight: '1.65', margin: '16px 0 0', color: 'var(--ink)' }}>Plataforma de inteligência sobre executivos brasileiros. O analista busca por nome, por cargo ou colando um link do LinkedIn e recebe em 20 a 60 segundos um dossiê: trajetória, briefing executivo escrito por IA, menções na imprensa com análise de sentimento e um grafo de conexões navegável onde cada relação carrega as matérias que a comprovam. À mão, o mesmo levantamento custa de uma a duas horas de analista.</p>
                  <div className="cols3" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px', marginTop: '30px' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', color: 'var(--color-accent-700)' }}>125</div>
                      <div style={{ fontSize: '12px', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>testes automatizados</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', color: 'var(--color-accent-700)' }}>11</div>
                      <div style={{ fontSize: '12px', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>rotas de API</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', color: 'var(--color-accent-700)' }}>10</div>
                      <div style={{ fontSize: '12px', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>portais de imprensa</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', color: 'var(--color-accent-700)' }}>8</div>
                      <div style={{ fontSize: '12px', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>entidades no modelo</div>
                    </div>
                  </div>
                  <details style={{ marginTop: '28px', borderTop: '1px solid var(--color-divider)', paddingTop: '20px' }}>
                    <summary style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-heading)', fontSize: '15px', color: 'var(--color-accent-700)' }}>Arquitetura e salvaguardas <span style={{ fontSize: '13px' }}>▾</span></summary>
                    <ul style={{ margin: '18px 0 0', paddingLeft: '22px', fontSize: '15px', lineHeight: '1.7', color: 'var(--ink)' }}>
                      <li>Identidade confirmada pelo LinkedIn antes de qualquer coleta — dossiê errado é pior que dossiê nenhum.</li>
                      <li>IA em duas camadas: extração estruturada validada por schema antes de qualquer texto livre.</li>
                      <li>Inferidor determinístico cruzando cargos com períodos sobrepostos, em vez de chamada de modelo — mais barato e auditável.</li>
                      <li>Curadoria humana persistida: o analista anota, corrige e funde registros, e o grafo acumula o conhecimento da equipe.</li>
                      <li>Seis salvaguardas nascidas de erros reais em teste: homônimo na busca e na imprensa, matéria assinada pelo próprio alvo, ranking tratado como relação genuína, data extraída do trecho errado e poluição do acervo.</li>
                      <li>Consulta sob demanda, com cache de 7 dias. Monitoramento contínuo está no roadmap.</li>
                    </ul>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
                      <span className="tag tag-outline" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '11px' }}>Python</span>
                      <span className="tag tag-outline" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '11px' }}>FastAPI</span>
                      <span className="tag tag-outline" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '11px' }}>PostgreSQL</span>
                      <span className="tag tag-outline" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '11px' }}>SQLAlchemy</span>
                      <span className="tag tag-outline" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '11px' }}>Alembic</span>
                      <span className="tag tag-outline" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '11px' }}>Redis + RQ</span>
                      <span className="tag tag-outline" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '11px' }}>Claude Sonnet</span>
                      <span className="tag tag-outline" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '11px' }}>SerpAPI</span>
                      <span className="tag tag-outline" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '11px' }}>Apify</span>
                      <span className="tag tag-outline" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '11px' }}>Cytoscape.js</span>
                      <span className="tag tag-outline" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '11px' }}>pytest</span>
                    </div>
                    <div style={{ marginTop: '20px', fontSize: '14px', lineHeight: '1.55', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>A documentação de arquitetura está sob custódia do compliance da FSB Holding. Disponível para consulta mediante solicitação.</div>
                  </details>
                </div>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                      <img src="/assets/nexus-marca.png" alt="Nexus · pesquisa e inteligência de dados" style={{ width: '100%', display: 'block', objectFit: 'contain', background: '#fff', borderRadius: 'var(--radius-md)', border: '1px solid color-mix(in srgb, var(--ink) 12%, transparent)' }} />
                      <div style={{ marginTop: '10px', fontSize: '12px', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>Construído para a Nexus, da FSB Holding · desenvolvedor</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>


            <article style={{ background: 'var(--color-bg)', borderRadius: 'var(--radius-lg)', padding: '38px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent-700)' }}>02 · Iniciação Científica · FGV Comunicação</span>
                <span className="tag tag-accent-2" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '11px' }}>Análise concluída · artigo em redação</span>
              </div>
              <div style={{ margin: '22px 0 4px' }}>
                <img src="/assets/pibic-mapa.png" alt="Explorador dos clusters temáticos" style={{ width: '100%', display: 'block', objectFit: 'cover', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }} />
                <div style={{ marginTop: '10px', fontSize: '12px', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>Explorador interativo · mapa dos 120 clusters, 13 macro-temas</div>
              </div>
              <div className="cols2" style={{ display: 'grid', gridTemplateColumns: '1.35fr 0.8fr', gap: '48px', alignItems: 'start', marginTop: '30px' }}>
                <div>
                  <h3 style={{ fontSize: '34px', margin: '0' }}>O Voto, A Bala e a Floresta</h3>
                  <p style={{ fontSize: '17px', lineHeight: '1.65', margin: '16px 0 0', color: 'var(--ink)' }}>Análise de enquadramento da cobertura eleitoral em veículos de mídia local da Amazônia Legal, sob orientação do prof. Eurico Matos. 78.497 publicações de 211 perfis no Instagram, nas 9 capitais da região, entre 16 de agosto e 30 de outubro de 2024. Coleta executada pelo DAPP Lab da FGV.</p>
                  <div className="cols3" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px', marginTop: '30px' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', color: 'var(--color-accent-700)' }}>78.497</div>
                      <div style={{ fontSize: '12px', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>publicações</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', color: 'var(--color-accent-700)' }}>211</div>
                      <div style={{ fontSize: '12px', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>perfis · 9 capitais</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', color: 'var(--color-accent-700)' }}>120</div>
                      <div style={{ fontSize: '12px', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>clusters</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', color: 'var(--color-accent-700)' }}>13</div>
                      <div style={{ fontSize: '12px', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>macro-temas</div>
                    </div>
                  </div>
                  <details style={{ marginTop: '28px', borderTop: '1px solid var(--color-divider)', paddingTop: '20px' }}>
                    <summary style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-heading)', fontSize: '15px', color: 'var(--color-accent-700)' }}>Método e achados <span style={{ fontSize: '13px' }}>▾</span></summary>
                    <p style={{ fontSize: '15px', lineHeight: '1.7', margin: '18px 0 0', color: 'var(--ink)' }}>Três camadas de stopwords customizadas, BERTopic guiado por sementes (embeddings multilíngues, UMAP, HDBSCAN, c-TF-IDF), 120 clusters, reatribuição do residual por percentil 10, 70.076 posts classificados (89,3%), teste de robustez em três cenários com correlação de postos entre 0,89 e 0,99, e 31 temas reduzidos a 13 macro-temas.</p>
                    <ul style={{ margin: '16px 0 0', paddingLeft: '22px', fontSize: '15px', lineHeight: '1.7', color: 'var(--ink)' }}>
                      <li><strong>O Voto</strong> — processo eleitoral (21,1%) e política institucional formam o par mais próximo: a campanha é coberta como continuidade da política cotidiana, não como evento excepcional.</li>
                      <li><strong>A Bala</strong> — a cobertura criminal se organiza em três registros, e toda a segurança pública colapsa num único cluster de 5.851 posts, evidência de linguagem padronizada por releases de assessoria.</li>
                      <li><strong>A Floresta</strong> — meio ambiente (10,8%) aparece colado à gestão material: obras, energia, saneamento. Na mídia local, a floresta é enquadrada como problema de infraestrutura, não como causa ecológica.</li>
                      <li>Uma assimetria estrutural: o que chega por release se estrutura, o resto se dispersa. 10,7% do corpus não agrupou em tópico nenhum.</li>
                    </ul>
                    <a href="/docs/projeto-ic.pdf" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '20px', fontSize: '15px' }}>Projeto de pesquisa · PDF ↗</a>
                  </details>
                </div>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                      <img src="/assets/pibic-marca.png" alt="PIBIC — Programa Institucional de Bolsas de Iniciação Científica" style={{ width: '100%', display: 'block', objectFit: 'contain', background: '#fff', borderRadius: 'var(--radius-md)', border: '1px solid color-mix(in srgb, var(--ink) 12%, transparent)', marginTop: '0' }} />
                      <div style={{ marginTop: '10px', fontSize: '12px', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>Bolsista de Iniciação Científica · FGV Comunicação</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article style={{ background: 'var(--color-bg)', borderRadius: 'var(--radius-lg)', padding: '38px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent-700)' }}>03 · FGV Quest · Prefeitura do Rio de Janeiro</span>
                <span className="tag tag-accent-2" style={{ borderRadius: '999px', padding: '5px 12px', fontSize: '11px' }}>Piloto em execução</span>
              </div>
              <div style={{ margin: '22px 0 4px' }}>
                <img src="/assets/jogojusto-manual.jpeg" alt="Manual de marca do JogoJusto" style={{ width: '100%', display: 'block', objectFit: 'cover', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }} />
                <div style={{ marginTop: '10px', fontSize: '12px', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>Manual de marca · selos de índice, paleta e tipografia</div>
              </div>
              <div className="cols2" style={{ display: 'grid', gridTemplateColumns: '1.35fr 0.8fr', gap: '48px', alignItems: 'start', marginTop: '30px' }}>
                <div>
                  <h3 style={{ fontSize: '34px', margin: '0' }}>JogoJusto</h3>
                  <p style={{ fontSize: '17px', lineHeight: '1.65', margin: '16px 0 0', color: 'var(--ink)' }}>Índice de Segurança do Jogador, da liga acadêmica FGV Quest, onde sou Diretor de Desenvolvimento. O ECA Digital (Lei nº 15.211/2025) entrou em vigor em 17 de março de 2026; o avanço legal existe, o que não existe é inteligibilidade. O JogoJusto é a camada de tradução entre a norma e o público. O índice não mede se o jogo é bom, divertido ou violento, nem para que idade serve — o recorte é mecânica predatória e segurança do jogador.</p>
                  <div className="cols3" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px', marginTop: '30px' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', color: 'var(--color-accent-700)' }}>100</div>
                      <div style={{ fontSize: '12px', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>pontos de partida</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', color: 'var(--color-accent-700)' }}>6</div>
                      <div style={{ fontSize: '12px', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>elementos de risco</div>
                    </div>
                    <div>

                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', color: 'var(--color-accent-700)' }}>10</div><div style={{ fontSize: '12px', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>avaliadores no piloto</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', color: 'var(--color-accent-700)' }}>0,67</div>
                      <div style={{ fontSize: '12px', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>piso do alfa</div>
                    </div>
                  </div>
                  <details style={{ marginTop: '28px', borderTop: '1px solid var(--color-divider)', paddingTop: '20px' }}>
                    <summary style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-heading)', fontSize: '15px', color: 'var(--color-accent-700)' }}>Cálculo, coleta e validação <span style={{ fontSize: '13px' }}>▾</span></summary>
                    <p style={{ fontSize: '15px', lineHeight: '1.7', margin: '18px 0 0', color: 'var(--ink)' }}>Todo jogo começa com 100 pontos e vai perdendo: Penalidade = Peso × Exposição × (1 − Mitigação); Índice = 100 − Risco. Os pesos somam 100 — recompensa aleatória 25, pressão psicológica e comercial 18, muros de tempo monetizados 17, dados e privacidade 15, interação social 13, jogabilidade infinita 12. Faixas do selo: 0–49 alto risco · 50–79 atenção · 80–100 seguro.</p>
                    <ul style={{ margin: '16px 0 0', paddingLeft: '22px', fontSize: '15px', lineHeight: '1.7', color: 'var(--ink)' }}>
                      <li>Exposição de 0 a 3; mitigação de 0 a 2 (0%, 20%, 40%) — o teto de 40% é proposital: nenhum controle parental zera um risco.</li>
                      <li>Três sessões de 40 minutos em três dias diferentes, conta nova, gasto zero, captura de tela obrigatória para toda exposição alta e teste padronizado do filtro de chat. Controle prometido em página institucional e não encontrado dentro do jogo conta como zero.</li>
                      <li>Cada jogo é codificado por dois avaliadores em cego, em duas rodadas independentes, com alfa de Krippendorff sobre os códigos brutos. O piloto existe para provar que o instrumento mede a mesma coisa independentemente de quem o usa; nenhuma nota foi publicada.</li>
                    </ul>
                    <a href="/docs/jogojusto-metodologia-v1.pdf" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '20px', fontSize: '15px' }}>Metodologia v1.0 · PDF ↗</a>
                  </details>
                </div>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                      <img src="/assets/team-fgvquest.jpg" alt="Time da FGV Quest" style={{ width: '100%', display: 'block', aspectRatio: '4/3', objectFit: 'cover', borderRadius: 'var(--radius-md)', border: '1px solid color-mix(in srgb, var(--ink) 12%, transparent)' }} />
                      <div style={{ marginTop: '10px', fontSize: '12px', color: 'color-mix(in srgb, var(--ink) 62%, transparent)' }}>Diretor de Desenvolvimento · FGV Quest</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>
  );
}
