// project-details.jsx — dados detalhados por projeto + lista "Saiba mais".
// Carregado antes de components.jsx (que consome window.PROJECT_DETAILS).

export const PROJECT_DETAILS: any = {
  // ─────────────────────────────── FSB ───────────────────────────────
  "01": {
    challenge: [
      "A Nexus, área de inteligência da FSB Holding, precisava de uma camada de leitura contínua sobre executivos C-level de mercados-chave: quem decide o quê, com quem, e que posicionamentos esses executivos assumem publicamente.",
      "O trabalho manual era inviável — centenas de nomes, mudanças constantes, e informação espalhada em fontes públicas que ninguém consolidava.",
    ],
    approach: [
      "Coleta automatizada a partir de fontes públicas estruturadas (notícias institucionais, registros corporativos, plataformas profissionais), com pipeline em Python.",
      "Modelagem do grafo de relações entre executivos, empresas e setores — cada vínculo institucional vira uma aresta tipada.",
      "Camada de posicionamento: enriquecimento dos nós com declarações públicas, manchetes recentes e indicadores temáticos.",
      "Front em web app sob medida, com filtros por setor, busca por executivo e visualização do entorno de cada nó.",
    ],
    stack: ["Python", "APIs públicas", "Análise de grafos", "Web app", "Pipeline de dados"],
    results: [
      "Aplicação em desenvolvimento ativo — primeira versão entregue à equipe de inteligência.",
      "Atualização contínua substituindo o levantamento manual recorrente.",
      "Base preparada para expansão a novos setores conforme novos briefs da Nexus.",
    ],
    deliverables: [
      { label: "Documentação técnica", note: "PDF · disponível", href: "/docs/fsb-tech-doc.pdf" },
      { label: "Repositório · GitHub", note: "ErikRolinFGV/CEO_Mais (privado)", href: "https://github.com/ErikRolinFGV/CEO_Mais" },
      { label: "Demo do app", note: "Sob NDA · disponível em conversa" },
    ],
  },

  // ─────────────────────────────── PIBIC ───────────────────────────────
  "02": {
    challenge: [
      "Como veículos de mídia local da Amazônia Legal enquadram temas públicos no Instagram durante um processo eleitoral? Meio ambiente, segurança pública e infraestrutura ganham — ou perdem — saliência no debate regional?",
      "A base bruta tem 61.449 publicações de 160 veículos nas 9 capitais da região, entre 16/ago e 28/out de 2024. Sem método computacional, a análise é inviável; sem leitura comunicacional, vira só estatística.",
    ],
    approach: [
      "Coleta via Fanpage Karma a partir do levantamento do Atlas da Notícia, filtragem manual de veículos válidos e construção da base.",
      "Pré-processamento dos textos das descrições das publicações — limpeza, normalização e remoção de ruído.",
      "Clusterização com BERTopic: embeddings de transformers (BERT) + c-TF-IDF, gerando agrupamentos semânticos de tópicos.",
      "Interpretação qualitativa dos tópicos à luz da Teoria do Enquadramento (Entman, Goffman, Gitlin).",
    ],
    stack: ["BERTopic", "NLP", "Embeddings", "c-TF-IDF", "Análise de enquadramento", "Python"],
    results: [
      "Mapa temático da cobertura eleitoral em 9 capitais amazônicas — identificação dos frames dominantes e dos pontos cegos da agenda midiática regional.",
      "Base e metodologia reutilizáveis para análises subsequentes do mesmo corpus.",
    ],
    // ⬇️ Transferência sutil para o caso corporativo (Vale, branding, stakeholders)
    corporateAside: {
      title: "Onde mais essa metodologia se aplica",
      body: [
        "A clusterização de posts em redes sociais funciona muito além de jornalismo. A mesma técnica permite:",
      ],
      bullets: [
        "Monitorar como uma marca é enquadrada por veículos e influenciadores em uma região.",
        "Mapear quais temas dominam o discurso sobre uma empresa, concorrente ou setor.",
        "Identificar frames emergentes em torno de qualquer ator público — parceiro, regulador, stakeholder.",
        "Detectar deslocamentos de percepção antes que apareçam em pesquisa quantitativa tradicional.",
      ],
    },
    deliverables: [
      { label: "Projeto de pesquisa (PIBIC)", note: "PDF · disponível", href: "/docs/projeto-ic.pdf" },
      { label: "Relatório parcial", note: "Em produção · PDF" },
      { label: "Artigo final", note: "Previsto · 2026" },
    ],
  },

  // ─────────────────────────────── FGV QUEST ───────────────────────────────
  "03": {
    challenge: [
      "O ECA Digital (Lei 15.211/2025) entrou em vigor em março de 2026 como o marco regulatório mais abrangente do Brasil para a proteção de crianças e adolescentes no ambiente digital — com alcance explícito sobre jogos eletrônicos.",
      "Mesmo com o avanço legal, persiste uma lacuna de inteligibilidade: deveres das plataformas e riscos a que jogadores se expõem ficam descritos em linguagem jurídica e técnica. Famílias e instituições não dispõem de instrumento simples para responder à pergunta prática \u201ceste jogo é seguro?\u201d.",
      "É essa lacuna que o ISJ pretende preencher — atuando como camada de tradução entre a norma e o público, função comunicacional alinhada à minha formação.",
    ],
    approach: [
      "Definição operacional dos 7 elementos de risco: mecanismos viciantes, táticas psicológicas (FOMO, escassez), coleta de dados e privacidade, chat entre jogadores, jogabilidade infinita, responsabilidade com a saúde do usuário e posicionamento da empresa.",
      "Hierarquia de ponderação em 5 níveis de gravidade — mecanismos viciantes e táticas psicológicas como peso máximo; posicionamento da empresa como peso baixo.",
      "Fontes de dados combinando teste prático (a própria equipe joga e observa), documentação oficial (políticas de privacidade, termos, classificações PEGI/ESRB/ClassInd) e referências externas (literatura, ANPD).",
      "Agregação por média ponderada e cálculo comparativo a partir de uma referência — mesma lógica de índices consolidados como o Ibovespa.",
      "Liderança técnica do time de desenvolvimento da FGV Quest: padronização, code review e capacitação dos devs.",
    ],
    stack: ["Liderança técnica", "Policy + dados", "Arquitetura", "ECA Digital", "Mentoria"],
    results: [
      "Documento metodológico do ISJ produzido e em discussão com a orientação acadêmica.",
      "Parceria ativa com a Prefeitura do Rio para o desenvolvimento do índice.",
      "Time de devs estruturado e operando com processo padronizado.",
      "Próximos marcos: piloto com amostra inicial de jogos e protótipo do portal de transparência.",
    ],
    deliverables: [
      {
        label: "Documento metodológico do ISJ",
        note: "Documento de pesquisa · DOCX",
        href: "/docs/isj.docx",
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
        { label: "Notebook · GitHub", note: "BrunoCavalli/Trabalho_A1_LP", href: "https://github.com/BrunoCavalli/Trabalho_A1_LP" },
      ],
    },
  },
  // Espaço para crescer — adicionar novos trabalhos secundários aqui no futuro.
];
