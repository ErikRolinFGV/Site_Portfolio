# Portfólio Erik Rolin

Site pessoal em **Next.js 14 (App Router) + TypeScript**, publicado em
[eriknrolin-portfolio.vercel.app](https://eriknrolin-portfolio.vercel.app).

## Stack

- Next.js 14 · React 18 · TypeScript
- CSS próprio em `app/globals.css`, **sem Tailwind** nem qualquer framework de estilo
- Sistema visual **Organic**: creme, terracota e sálvia, com **Figtree** como família única
- Sem dependências além de React/Next
- **As seções são server components.** Não há estado de aplicação — os detalhes dos projetos usam
  `<details>` nativo. O JavaScript da página é de ~137 B. Não introduza `"use client"` sem uma
  necessidade real: é o que mantém o site rápido no celular, que é onde ele é lido.

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
```

## Estrutura

```
app/
  layout.tsx        → <html>, fonte Figtree, metadata
  page.tsx          → compõe os sete componentes na ordem
  globals.css       → tokens do sistema Organic, base, .btn, .tag, elevações, responsivo
components/
  Nav.tsx           → barra fixa com blur e o botão de CV
  Hero.tsx          → frase de posicionamento, retrato e etiquetas
  About.tsx         → seção "Sobre" + grade de instituições e parcerias
  Works.tsx         → os três trabalhos, em cards idênticos com expansíveis
  Skills.tsx        → seis rubricas de competência + faixa de idiomas
  Timeline.tsx      → trajetória de 2022 a 2028
  Contact.tsx       → contatos, chamada final e rodapé
public/
  assets/           → todas as imagens, em diretório plano
  docs/             → PDFs linkados nos cards
  cv.html           → currículo de uma página, imprimível em PDF
```

Os estilos ficam **inline nos componentes**, como vieram do protótipo de design, para preservar a
fidelidade acordada no handoff. O `globals.css` guarda só o que é compartilhado.

**Um único ponto de quebra: 900px.** Abaixo dele as grades viram uma coluna, os links da nav somem
e o botão de CV assume o lugar deles.

## Como atualizar conteúdo

Não há arquivo de dados: o conteúdo vive no JSX do componente correspondente.

| O que mudar | Onde |
| --- | --- |
| Frase do hero, etiquetas, bio | `components/Hero.tsx`, `components/About.tsx` |
| Texto, números e expansíveis dos projetos | `components/Works.tsx` |
| Competências e idiomas | `components/Skills.tsx` |
| Marcos da trajetória | `components/Timeline.tsx` |
| Contatos e rodapé | `components/Contact.tsx` |
| Cores, tipografia, espaçamento | `app/globals.css` |
| Currículo | `public/cv.html` |
| Novo PDF | coloque em `public/docs/` e referencie com `/docs/arquivo.pdf` |
| Nova imagem | coloque em `public/assets/` e referencie com `/assets/arquivo.png` |

O currículo é uma **folha única com `overflow: hidden`**: o que passar da altura da página é
descartado, não flui para uma segunda folha. Se acrescentar conteúdo, confira que o rodapé com o
link do portfólio sobreviveu.

## Deploy

A Vercel publica sozinha. Projeto `site_sortfolio` (nome herdado), conectado a
**`ErikRolinFGV/Site_Portfolio`**, com a **branch de produção em `master`**.

- Push em `master` → publica em produção, sempre na mesma URL
- Push em qualquer outra branch → gera um preview com URL própria

A configuração da branch de produção fica em **Settings → Environments → Production**, não na aba
Git. Se um pull request aparecer com "Checks 0", é sinal de que a Vercel não está ligada ao
repositório.

> Existe um segundo repositório, `ErikRolinFGV/site_sortfolio`, criado pelo v0 em maio de 2026. Ele
> está **obsoleto** e não alimenta mais nada. Por três meses foi ele que a Vercel escutava, e nada
> que fosse editado aqui chegava ao ar.

## Regras de git

O `.gitattributes` não é opcional. Ele existe porque o repositório é editado tanto do Windows quanto
de ambiente Linux, e sem regra o git fazia duas coisas ruins:

1. Diffs de centenas de linhas em arquivos que não mudaram, com as quebras de linha alternando entre
   CRLF e LF a cada edição.
2. **Corrupção de binários.** O PDF `jogojusto-metodologia-v1.pdf` recebeu 111 bytes CR injetados
   porque o git não o detectou como binário — ele não tem bytes nulos nos primeiros 8000 — e aplicou
   a conversão de texto. O arquivo continuava abrindo e o texto continuava extraível, mas passou a
   acusar erro de sintaxe.

Depois de commitar qualquer binário, vale conferir: `tr -dc '\r' < arquivo.pdf | wc -c` deve dar 0.

## Precisão do conteúdo

Estas regras existem por compliance e por acordo com o cliente. Cada uma já causou uma correção
real. Se um texto do site contradisser uma delas, o texto está errado.

- **Diretor de Desenvolvimento** da FGV Quest. Nunca "cofundador".
- **Nenhum custo por dossiê do Deeper**, em moeda alguma. O argumento de eficiência é o tempo:
  20 a 60 segundos contra uma a duas horas de analista.
- O Deeper é **sob demanda, com cache de 7 dias**. Monitoramento contínuo está no roadmap — nunca
  afirme que existe.
- O Deeper é **MVP validado**, não está em produção nem "em uso".
- **Nunca "web scraping"** para o Deeper: a documentação explica que o scraping direto foi
  descartado por razões jurídicas, técnicas e reputacionais.
- **Nenhuma nota de jogo do JogoJusto.** Nenhuma foi validada.
- **Nunca a sigla "ISJ".** A marca é JogoJusto.
- **Nunca "FGV ECMI".** A escola é **FGV Comunicação**.
- **A escola e o curso têm nomes distintos.** A escola é **FGV Comunicação**; a graduação é
  **Comunicação Digital**. Nunca escreva "graduação em Comunicação" nem "Comunicação na FGV
  Comunicação". Ao falar do curso, é Comunicação Digital; ao falar da instituição, é FGV
  Comunicação.
- A documentação de arquitetura do Deeper **não é link público**: está sob custódia do compliance da
  FSB Holding.

Podem ser citados pelo nome: FSB Holding, Nexus, Prefeitura do Rio de Janeiro, FGV Quest, PIBIC,
FGV Comunicação, FGV EMAp.

## Histórico

- **ago/2026 — redesign para o Futuros Líderes.** De quinze blocos para seis, currículo em
  protagonismo, imagens renovadas. Tema Verde Amazônia substituído pelo sistema Organic, e as
  seções migradas para server components.
- **ago/2026 — atualização de conteúdo.** FSB/Nexus passa a se chamar Deeper; ISJ passa a
  JogoJusto, com seis elementos e índice absoluto; números do PIBIC corrigidos para 78.497
  publicações e 211 perfis.
- **ago/2026 — deploy consertado.** A Vercel apontava para outro repositório desde maio; qualquer
  alteração feita aqui morria no caminho.
