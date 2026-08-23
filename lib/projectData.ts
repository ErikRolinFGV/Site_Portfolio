// projectData.ts — dados detalhados por projeto + lista "Saiba mais".
// Consumido por components/Drawer.tsx.

export const PROJECT_DETAILS: any = {
  // ─────────────────────────────── DEEPER · FSB/NEXUS ───────────────────────────────
  "01": {
    challenge: [
      "A Nexus, área de pesquisa e inteligência de dados da FSB Holding, precisa responder quatro perguntas antes de qualquer aproximação institucional com um executivo: quem é, o que pensa, como a mídia o trata e quem ele conhece.",
      "A informação está pública e espalhada, e ninguém a consolida. Levantar isso à mão consome de uma a duas horas de analista por nome — e o resultado não fica registrado em lugar nenhum.",
    ],
    approach: [
      "Identidade confirmada antes de coletar. O analista busca por nome, por cargo (“CEO do Nubank”) ou colando o link do LinkedIn, e aponta de qual pessoa se trata. Pessoa nova sem confirmação é recusada: dossiê errado é pior que dossiê nenhum.",
      "Coleta multi-fonte. Busca programática em 10 portais da imprensa brasileira, leitura do corpo das matérias com detecção de assinatura do autor, e perfil público do LinkedIn — sem login e sem conta.",
      "IA em duas camadas separadas. Primeiro uma extração estruturada, em que o modelo preenche campos verificáveis validados por schema; só depois a síntese escreve o briefing de três parágrafos. Fatos antes de texto livre é a principal salvaguarda contra invenção.",
      "Grafo com evidência anexada. Cada aresta carrega as matérias que a comprovam. As relações formais saem de um inferidor determinístico que cruza cargos com períodos sobrepostos — mais barato e mais auditável do que uma chamada de modelo.",
      "Curadoria humana persistida. O analista anota conexões, remove as erradas, funde registros da mesma pessoa com nomes diferentes e registra vínculos que a imprensa não mostrou. O grafo acumula o conhecimento da equipe e sobrevive a recoletas.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis + RQ",
      "Claude Sonnet",
      "SerpAPI",
      "Cytoscape.js",
      "pytest",
    ],
    results: [
      "MVP funcional, validado com dossiês reais de executivos brasileiros e aprovado em demonstração na FSB. Apresentação a um sócio da Nexus marcada.",
      "Um dossiê completo em cerca de um minuto, a um custo aproximado de R$ 1 — contra uma a duas horas de trabalho manual de analista.",
      "125 testes automatizados, 11 rotas de API e 7 migrations. A suíte é o que permite outra pessoa alterar o sistema sem quebrá-lo.",
      "Seis salvaguardas de qualidade, todas nascidas de erros reais encontrados em teste: homônimo na busca e na imprensa, matéria assinada pelo próprio alvo, ranking tratado como relação genuína e data extraída do trecho errado.",
      "Em aberto: a ferramenta é sob demanda, com cache de sete dias. Monitoramento contínuo, cobertura internacional e quadros societários estão no roadmap, não no produto.",
    ],
    deliverables: [
      {
        label: "Documentação de arquitetura",
        note: "Resumo público · PDF",
        href: "/docs/fsb-tech-doc.pdf",
      },
      {
        label: "Repositório · GitHub",
        note: "ErikRolinFGV/CEO_Mais (privado)",
        href: "https://github.com/ErikRolinFGV/CEO_Mais",
      },
      { label: "Demonstração do produto", note: "Sob NDA · disponível em conversa" },
    ],
  },

  // ─────────────────────────────── PIBIC ───────────────────────────────
  "02": {
    challenge: [
      "Como veículos de mídia local da Amazônia Legal enquadram temas públicos no Instagram durante um processo eleitoral? Meio ambiente, segurança pública e infraestrutura ganham — ou perdem — saliência no debate regional?",
      "São 78.497 publicações de 211 perfis nas nove capitais da região, coletadas entre 16 de agosto e 30 de outubro de 2024, cobrindo o período de campanha e os dois turnos. Sem método computacional, a análise é inviável; sem leitura comunicacional, vira só estatística.",
    ],
    approach: [
      "Amostragem — cruzamento das bases do Atlas da Notícia de 2024 e 2025, verificação manual de duplicatas e da correspondência entre veículo e link, com recorte para as nove capitais.",
      "Coleta executada pelo DAPP Lab da FGV: 78.497 publicações de 211 perfis institucionais no Instagram.",
      "Pré-processamento — correção de mojibake, normalização Unicode e três camadas de stopwords customizadas: jargão de portal (“link na bio”, “arraste”), handles dos próprios veículos e termos genéricos de alta frequência. Sete rodadas de depuração até o ruído lexical se tornar desprezível.",
      "Clusterização com BERTopic guiado por sementes temáticas: embeddings multilíngues, redução com UMAP, agrupamento com HDBSCAN e representação por c-TF-IDF. Resultado: 120 clusters.",
      "Tratamento do residual — o HDBSCAN deixou 35,3% dos posts fora de qualquer agrupamento. Em vez de descartar ou reatribuir tudo, adotei um critério de referência interna: um documento só é reatribuído a um tópico se sua similaridade ao centroide for maior ou igual ao percentil 10 dos documentos genuínos daquele mesmo tópico. Resultado: 70.076 posts classificados, 89,3% do corpus.",
      "Teste de robustez — a hierarquia dos temas foi recalculada em três cenários: só o núcleo do HDBSCAN, o critério adotado e a reatribuição irrestrita. A correlação de postos entre eles fica entre 0,89 e 0,99. A conclusão não depende da decisão de reatribuição.",
      "Tipologia e interpretação — 31 temas emergentes reduzidos a 13 macro-temas, cada um lido à luz da Teoria do Enquadramento (Goffman, Entman, Gitlin, Tuchman).",
    ],
    stack: [
      "BERTopic",
      "NLP",
      "Embeddings multilíngues",
      "HDBSCAN",
      "c-TF-IDF",
      "Análise de enquadramento",
      "Python",
    ],
    corporateAside: {
      title: "Onde mais essa metodologia se aplica",
      body: [
        "A clusterização de posts em redes sociais funciona muito além do jornalismo. E o achado mais transferível não é temático: o método separou gênero, não só assunto — distinguiu a ocorrência policial da pauta de direitos dentro do mesmo tema. Para uma marca, essa é a diferença entre saber o quanto se fala e saber como se fala.",
      ],
      bullets: [
        "Monitorar como uma marca é enquadrada por veículos e influenciadores em uma região específica.",
        "Distinguir registros de discurso sobre a empresa — nota de assessoria, denúncia, cobertura de rotina — e não apenas o volume de menções.",
        "Mapear quais temas dominam a conversa sobre a empresa, um concorrente ou o setor inteiro.",
        "Identificar frames emergentes em torno de qualquer ator público: parceiro, regulador, stakeholder.",
        "Detectar deslocamentos de percepção antes que apareçam em pesquisa quantitativa tradicional.",
      ],
    },
    results: [
      "Análise textual concluída: mapa temático da cobertura eleitoral em nove capitais amazônicas, com 13 macro-temas hierarquizados. Redação do artigo em andamento.",
      "O Voto — processo eleitoral (21,1% da base) e política institucional formam o par mais próximo de toda a análise. A campanha não é coberta como evento excepcional, e sim como continuidade da política institucional cotidiana.",
      "A Bala — a cobertura criminal se organiza em três registros distintos: o fait divers, a resposta institucional e a pauta de direitos, esta última deliberadamente fora do registro de ocorrência. Toda a cobertura de segurança pública colapsa em um único cluster de 5.851 posts — evidência de linguagem padronizada, provavelmente ancorada na reprodução de releases de assessorias policiais.",
      "A Floresta — meio ambiente (10,8% da base) aparece colado à gestão material: obras, energia, saneamento, indicadores. Na mídia local, a floresta é enquadrada como problema de infraestrutura, não como causa ecológica global.",
      "Uma assimetria estrutural: o que chega por release se estrutura, e o resto se dispersa. 10,7% do corpus (8.421 posts) não agrupou em tópico nenhum — são pautas singulares demais para formar padrão, o que é em si um achado sobre a mídia local.",
      "Um macro-tema inteiro (8,8% da base classificada) não é jornalismo: grade de programação, chamadas curtas, assinatura da marca e convite para o grupo de WhatsApp. Separá-lo do noticiário foi decisão interpretativa sobre conteúdo bem agrupado, não falha do modelo.",
      "Em aberto: as representações c-TF-IDF dos clusters ainda serão recalculadas num refit; a separação entre Saúde e Educação foi feita a posteriori e a versão rigorosa exige re-semear o modelo; e a análise de imagens prevista no projeto original ainda não foi executada.",
    ],
    deliverables: [
      {
        label: "Projeto de pesquisa (PIBIC)",
        note: "PDF · disponível",
        href: "/docs/projeto-ic.pdf",
      },
      { label: "Explorador interativo", note: "Mapa dos 78.497 posts · em publicação" },
      { label: "Relatório parcial", note: "Em produção · PDF" },
      { label: "Artigo final", note: "Redação em andamento" },
    ],
  },

  // ─────────────────────────────── JOGOJUSTO · FGV QUEST ───────────────────────────────
  "03": {
    challenge: [
      "O ECA Digital (Lei nº 15.211/2025) entrou em vigor em 17 de março de 2026 como o marco regulatório mais abrangente do Brasil para a proteção de crianças e adolescentes no ambiente digital — com alcance explícito sobre jogos eletrônicos.",
      "O avanço legal existe; o que não existe é inteligibilidade. Deveres das plataformas e riscos do jogador seguem descritos em linguagem jurídica e técnica, e famílias e instituições não têm instrumento para responder à pergunta prática “este jogo é seguro para o meu filho?”.",
      "O JogoJusto é a camada de tradução entre a norma e o público — função comunicacional, alinhada à minha formação. O índice não mede se o jogo é bom, divertido ou violento, nem para que idade ele serve: isso já é feito por ClassInd, ESRB e PEGI. O recorte é único: mecânica predatória e segurança do jogador.",
    ],
    approach: [
      "Seis elementos de risco com definição operacional. Recompensa aleatória, pressão psicológica e comercial, muros de tempo monetizados, dados e privacidade, interação social e jogabilidade infinita. O elemento “posicionamento da empresa”, que existia na primeira versão, saiu do cálculo: é declaração, não mecânica observável — virou conteúdo editorial do portal.",
      "Pesos numéricos que somam 100. Cada elemento pode tirar no máximo um número fixo de pontos, o que torna o peso diretamente interpretável: “recompensa aleatória pode custar até 25 dos 100 pontos de um jogo” é uma frase que um pai, um jornalista ou a prefeitura entendem sem tradução.",
      "Duas medidas por elemento, não uma. Exposição (o quanto a mecânica está presente, de 0 a 3) e Mitigação (o quanto existe controle real contra ela, de 0 a 2). A mitigação para em 40% de propósito: nenhum controle parental zera um risco, e um teto de 100% transformaria o índice num selo de complacência.",
      "Protocolo de coleta que sustenta a nota. Três sessões de 40 minutos em três dias diferentes, conta nova, gasto zero, captura de tela obrigatória para toda exposição alta e um teste padronizado do filtro de chat. Controle prometido em página institucional e não encontrado dentro do jogo conta como zero — verificar na tela é o diferencial do índice.",
      "Validação antes de publicação. Cada jogo é codificado por dois avaliadores em cego, em duas rodadas independentes, e a concordância é medida por alfa de Krippendorff com piso de 0,67 sobre os códigos brutos. O piloto não existe para dar nota a jogos: existe para provar que o instrumento mede a mesma coisa independentemente de quem o usa.",
      "Liderança técnica do time de desenvolvimento da FGV Quest: padronização, code review e capacitação dos devs.",
    ],
    stack: [
      "Liderança técnica",
      "Metodologia de pesquisa",
      "Policy + dados",
      "Confiabilidade entre avaliadores",
      "Arquitetura",
      "ECA Digital",
    ],
    corporateAside: {
      tag: "/ como a nota funciona",
      title: "Todo jogo começa com 100 pontos e vai perdendo",
      body: [
        "Penalidade = Peso × Exposição × (1 − Mitigação). O índice é 100 menos a soma das seis penalidades. As faixas do selo: 0 a 49 alto risco, 50 a 79 atenção, 80 a 100 seguro.",
        "Os pesos somam 100 de propósito, para que cada elemento seja diretamente interpretável:",
      ],
      bullets: [
        "E1 · Recompensa aleatória — peso 25 — eu compro sem saber o que vem?",
        "E2 · Pressão psicológica e comercial — peso 18 — o jogo me apressa a decidir?",
        "E3 · Muros de tempo monetizados — peso 17 — eu espero, ou pago para não esperar?",
        "E4 · Dados e privacidade — peso 15 — o que ele leva de mim, e com quem divide?",
        "E5 · Interação social — peso 13 — um estranho fala comigo, e alguém está moderando?",
        "E6 · Jogabilidade infinita — peso 12 — existe um momento natural de parar?",
      ],
    },
    results: [
      "Metodologia v1.0 fechada: seis elementos com âncoras escritas para cada nível, pesos numéricos e regras de codificação.",
      "Instrumentos de campo construídos: manual do avaliador e ficha de codificação com cálculo automático e validação de entrada.",
      "Piloto em execução, com critério de sucesso explícito — reprodutibilidade entre avaliadores, e não quantidade de jogos avaliados. Nenhuma nota foi publicada até aqui.",
      "Parceria ativa com a Prefeitura do Rio de Janeiro; time de devs estruturado e operando com processo padronizado.",
      "Próximos marcos: fechamento da primeira rodada do piloto, rodada de recodificação cega, cálculo de concordância e protótipo do portal de transparência.",
    ],
    deliverables: [
      {
        label: "Metodologia v1.0 · resumo público",
        note: "Documento de metodologia · PDF, 2 páginas",
        href: "/docs/jogojusto-metodologia-v1.pdf",
      },
      {
        label: "@jogojusto.indice",
        note: "O projeto no Instagram",
        href: "https://www.instagram.com/jogojusto.indice/",
      },
      {
        label: "Liga FGV Quest",
        note: "@fgvquest no Instagram",
        href: "https://www.instagram.com/fgvquest/",
      },
      { label: "Portal de transparência", note: "Em prototipagem" },
    ],
  },
};

// ──────── Trabalhos secundários ("Saiba mais") ────────
export const MORE_PROJECTS: any[] = [
  {
    id: "saeb",
    year: "2024.2",
    title: "Análise Exploratória de Fatores Sociais e Econômicos no SAEB",
    role: "Pesquisa aplicada · FGV EMAp",
    summary:
      "Estudo dos microdados do SAEB (Sistema de Avaliação da Educação Básica) com foco na correlação entre variáveis sociais, econômicas e desempenho educacional.",
    tags: ["EDA", "Estatística", "Política Pública", "Python"],
    coauthors: "com Bruno Cavalli e Nicholas Farrel Ferraz",
    details: {
      challenge: [
        "Os microdados do SAEB são uma das bases mais ricas sobre educação básica brasileira — e simultaneamente uma das menos exploradas fora do INEP.",
        "A pergunta: que fatores sociais e econômicos correlacionam-se de forma mais robusta com desempenho escolar, controlando por contexto regional?",
      ],
      approach: [
        "Tratamento dos microdados, junção entre questionários contextuais e provas de proficiência.",
        "Análise exploratória das correlações entre variáveis sociais, econômicas e educacionais.",
        "Construção de visualizações e leitura crítica dos resultados em diálogo com a literatura.",
      ],
      stack: ["Python", "pandas", "EDA", "Estatística descritiva"],
      results: [
        "Paper produzido como projeto final da disciplina, com coautoria de Bruno Cavalli e Nicholas Farrel.",
        "Material reusado em discussões posteriores sobre política educacional na FGV.",
      ],
      deliverables: [
        { label: "Paper (EN)", note: "PDF · disponível", href: "/docs/paper_en.pdf" },
        {
          label: "Notebook · GitHub",
          note: "BrunoCavalli/Trabalho_A1_LP",
          href: "https://github.com/BrunoCavalli/Trabalho_A1_LP",
        },
      ],
    },
  },
  // Espaço para crescer — adicionar novos trabalhos secundários aqui no futuro.
];
