// skill-details.jsx — dados detalhados de cada habilidade do Stack.
// Consumido por components.jsx → função Stack.

export const SKILLS: any[] = [
  {
    num: "01",
    key: "python",
    name: "Python · OO",
    desc: "linguagem-base · orientação a objetos",
    detail: {
      summary:
        "Linguagem que estrutura quase tudo que produzo. Uso orientação a objetos para organizar pipelines de coleta, classes de domínio (executivos, veículos, posts) e serviços reutilizáveis entre projetos.",
      capabilities: [
        "Modelagem orientada a objetos — classes, herança, composição, dataclasses.",
        "Estruturação de projetos em módulos, com testes e tipagem (type hints).",
        "Integração com bibliotecas científicas e de dados.",
        "Scripts de automação e batch processing.",
      ],
      applied: [
        { project: "FSB · Nexus", where: "core da aplicação de mapeamento de executivos." },
        { project: "PIBIC", where: "scripts de pré-processamento e orquestração do BERTopic." },
        { project: "SAEB", where: "tratamento dos microdados e geração das análises." },
      ],
    },
  },
  {
    num: "02",
    key: "pandas",
    name: "Pandas & dados em código",
    desc: "manipulação de DataFrames · EDA · joins",
    detail: {
      summary:
        "Camada onde dado bruto vira dado utilizável. Faço o trabalho silencioso que separa um relatório confiável de um relatório bonito: limpeza, junção de bases, deduplicação, normalização, validação.",
      capabilities: [
        "Manipulação de DataFrames em larga escala — merge, groupby, reshape, pivot.",
        "Análise exploratória (EDA) e descritiva.",
        "Limpeza de bases públicas e privadas — strings, tipos, datas, missing.",
        "Junção entre tabelas heterogêneas (questionários + provas no SAEB, p. ex.).",
      ],
      applied: [
        { project: "SAEB", where: "limpeza dos microdados, junção entre proficiência e questionários contextuais, análise de correlações." },
        { project: "PIBIC", where: "construção da base final de 78.497 publicações a partir da coleta bruta." },
        { project: "FSB · Nexus", where: "consolidação das fontes públicas em uma única base de executivos." },
      ],
    },
  },
  {
    num: "03",
    key: "apis",
    name: "APIs & scraping",
    desc: "coleta de plataformas digitais",
    detail: {
      summary:
        "Quase todo projeto meu começa em coleta. APIs públicas quando existem; scraping bem-comportado quando não. O foco é montar pipelines reprodutíveis, com cache, tratamento de erro e respeito ao rate limit.",
      capabilities: [
        "Consumo de APIs públicas e autenticadas (REST, OAuth).",
        "Scraping estruturado com requests / BeautifulSoup quando necessário.",
        "Paginação, retries, rate limiting e cache local.",
        "Documentação das fontes e versionamento dos coletores.",
      ],
      applied: [
        { project: "PIBIC", where: "cruzamento das bases do Atlas da Notícia e coleta pelo DAPP Lab da FGV para os 211 perfis." },
        { project: "FSB · Nexus", where: "coleta automatizada de fontes públicas estruturadas." },
      ],
    },
  },
  {
    num: "04",
    key: "sql",
    name: "SQL",
    desc: "modelagem e consulta",
    detail: {
      summary:
        "Quando o dado vive em banco, SQL é onde a inteligência acontece. Modelo, consulto e otimizo consultas para servir tanto análise quanto aplicação em produção.",
      capabilities: [
        "Modelagem relacional — chaves, índices, normalização.",
        "Consultas analíticas com JOINs complexos, CTEs e window functions.",
        "Otimização de queries lentas (EXPLAIN, índices).",
        "Integração com pandas / Power BI via conectores.",
      ],
      applied: [
        { project: "FSB · Nexus", where: "consultas analíticas sobre a base de executivos e relações institucionais." },
        { project: "FGV Quest", where: "modelagem das sessões e eventos do Índice de Segurança." },
      ],
    },
  },
  {
    num: "05",
    key: "ml",
    name: "Machine Learning",
    desc: "clusterização · classificação",
    detail: {
      summary:
        "Modelos como ferramenta de leitura, não como fim. Uso ML quando ele revela um padrão que olho humano demoraria muito pra achar — e mesmo aí, o resultado sempre passa por interpretação qualitativa.",
      capabilities: [
        "Clusterização não-supervisionada (k-means, HDBSCAN, BERTopic).",
        "Classificação supervisionada — pré-processamento, treino, avaliação.",
        "Redução de dimensionalidade (UMAP, PCA) para análise exploratória.",
        "Validação de resultados via inspeção qualitativa e métricas robustas.",
      ],
      applied: [
        { project: "PIBIC", where: "clusterização semântica dos 78.497 posts via BERTopic guiado." },
        { project: "FGV Quest", where: "agregação de eventos da sessão em score de Índice de Segurança." },
      ],
    },
  },
  {
    num: "06",
    key: "nlp",
    name: "NLP & BERTopic",
    desc: "embeddings de transformers · c-TF-IDF",
    detail: {
      summary:
        "Trabalho com texto em larga escala. Embeddings de modelos pré-treinados (BERT, sentence-transformers) substituíram quase tudo que se fazia com TF-IDF puro — uso BERTopic para chegar em agrupamentos semânticos que TF-IDF sozinho não enxerga.",
      capabilities: [
        "Embeddings com BERT / sentence-transformers para representação semântica.",
        "Modelagem de tópicos com BERTopic + c-TF-IDF.",
        "Pré-processamento de português brasileiro — tokenização, normalização, stopwords.",
        "Interpretação qualitativa dos clusters à luz da Teoria do Enquadramento.",
      ],
      applied: [
        { project: "PIBIC", where: "metodologia central da clusterização da cobertura midiática amazônica." },
      ],
      aside: "A mesma técnica monitora como uma marca é enquadrada por veículos e influenciadores em uma região — aplicável a branding, percepção pública e análise de stakeholders.",
    },
  },
  {
    num: "07",
    key: "ai",
    name: "IA · LLMs",
    desc: "GenAI · prompt engineering · automação",
    detail: {
      summary:
        "IA generativa como camada de produtividade e como produto. Uso LLMs para automatizar análises repetitivas, gerar resumos consistentes e prototipar interfaces que conversam com base própria.",
      capabilities: [
        "Prompt engineering estruturado — system prompts, few-shot, role-based.",
        "Integração de LLMs em pipelines de produção via API.",
        "Geração de síntese narrativa a partir de dado estruturado.",
        "Avaliação crítica de output de LLM — checagem, validação, fallback.",
      ],
      applied: [
        { project: "FSB · Nexus", where: "automação de leituras de posicionamento e síntese de declarações públicas." },
        { project: "Diversos", where: "automação de tarefas repetitivas e prototipagem rápida de interfaces." },
      ],
    },
  },
  {
    num: "08",
    key: "powerbi",
    name: "Power BI",
    desc: "dashboards · DAX · M",
    detail: {
      summary:
        "Onde dado vira leitura para quem não é técnico. Power BI é minha ferramenta padrão para entregar inteligência em formato que área de negócio consume sem fricção — relatórios vivos, drill-down e narrativa visual.",
      capabilities: [
        "Modelagem semântica — relacionamentos, medidas, dimensões.",
        "DAX para cálculos analíticos complexos.",
        "Power Query / M para transformação de dados.",
        "Storytelling visual — ordem de leitura, hierarquia, foco.",
      ],
      applied: [
        { project: "Diversos", where: "dashboards de monitoramento para acompanhamento de KPIs e indicadores." },
      ],
    },
  },
  {
    num: "09",
    key: "excel",
    name: "Excel",
    desc: "análise rápida · modelagem · pivot",
    detail: {
      summary:
        "A ferramenta universal. Quando o problema cabe em planilha, Excel é mais rápido que qualquer pipeline. Uso para protótipos de análise, modelagem financeira simples e como ponte com áreas que vivem em planilha.",
      capabilities: [
        "Tabelas dinâmicas, fórmulas complexas (PROCV/ÍNDICE+CORRESP, SE matricial).",
        "Modelagem financeira e análise de cenários.",
        "Power Query no Excel para ETL leve.",
        "Comunicação com áreas não-técnicas que vivem em planilha.",
      ],
      applied: [
        { project: "Diversos", where: "protótipos de análise, validação rápida de hipóteses, modelos de bolso." },
      ],
    },
  },
  {
    num: "10",
    key: "git",
    name: "Git",
    desc: "versionamento e colaboração",
    detail: {
      summary:
        "Disciplina, não só ferramenta. Git é como mantenho o trabalho rastreável, reversível e colaborável — fundamental nos times que lidero (Quest) e nos projetos com cliente (FSB).",
      capabilities: [
        "Workflow com branches, pull requests e code review.",
        "Histórico limpo via rebase / squash quando faz sentido.",
        "Resolução de conflitos e recuperação de estados.",
        "Convenções e padronização para times com developers júnior.",
      ],
      applied: [
        { project: "FGV Quest", where: "como Diretor de Desenvolvimento, estruturo o workflow Git do time." },
        { project: "FSB · Nexus", where: "versionamento do código da aplicação." },
      ],
    },
  },
  {
    num: "11",
    key: "web",
    name: "Web",
    desc: "html · js · css · interfaces sob demanda",
    detail: {
      summary:
        "Quando a entrega precisa ser navegável, monto a interface eu mesmo. Foco em construir aplicações funcionais e legíveis, não em virar desenvolvedor frontend full-time.",
      capabilities: [
        "HTML / CSS / JavaScript modernos.",
        "React para interfaces com estado e interação.",
        "Integração com APIs e bases próprias.",
        "Construção de interfaces internas para times não-técnicos.",
      ],
      applied: [
        { project: "FGV Quest", where: "site institucional da liga e painel do Índice de Segurança." },
        { project: "FSB · Nexus", where: "front da aplicação de mapeamento de executivos." },
        { project: "Este portfólio", where: "construído à mão." },
      ],
    },
  },
  {
    num: "12",
    key: "more",
    name: "Muito mais",
    desc: "habilidades complementares",
    isMore: true,
    detail: {
      summary:
        "Coisas que aparecem como segunda natureza no trabalho do dia a dia — não são meu diferencial técnico, mas garantem que o trabalho técnico chegue até quem precisa.",
      sections: [
        {
          title: "Comunicação",
          items: [
            "Redação editorial e técnica em português.",
            "Apresentações para audiências mistas (técnico + negócio).",
            "Síntese de relatórios longos em peças curtas.",
            "Inglês de leitura e produção técnica.",
          ],
        },
        {
          title: "Trabalho com pessoas",
          items: [
            "Liderança técnica de time de devs júnior (FGV Quest).",
            "Mentoria e pair programming.",
            "Mediação entre demandas de cliente / parceiro público e capacidade de entrega.",
          ],
        },
        {
          title: "Ferramentas & ofício",
          items: [
            "Notion / Obsidian para documentação e gestão de conhecimento.",
            "Figma para leitura de mocks e prototipagem leve.",
            "VS Code e Cursor como ambiente de desenvolvimento.",
            "Disciplina de documentação — README, comentários, decisões registradas.",
          ],
        },
      ],
    },
  },
];
