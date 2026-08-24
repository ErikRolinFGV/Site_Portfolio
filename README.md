# Portfólio Erik Rolin — Next.js

Site portado para **Next.js 14 (App Router) + TypeScript**, pronto para o v0 / Vercel.

## Stack
- Next.js 14 · React 18 · TypeScript
- CSS custom em `app/globals.css` (sem Tailwind) — tema **Verde Amazônia** fixo
- Sem dependências externas além de React/Next
- Imagens estáticas em `public/`

## Rodar localmente
```bash
npm install
npm run dev
# abre http://localhost:3000
```

## Build de produção
```bash
npm run build
npm start
```

## Deploy na Vercel
1. Suba esta pasta para um repositório no GitHub.
2. Em vercel.com → "Add New Project" → importe o repositório.
3. A Vercel detecta Next.js automaticamente. Clique em **Deploy**. Pronto.

> No **v0.dev**: crie um projeto, importe o repo (ou cole os arquivos de `app/` e `components/`). Como não usa Tailwind, mantenha o `app/globals.css`.

## Estrutura
```
app/
  layout.tsx        → <html>, fontes Geist, importa globals.css
  page.tsx          → compõe todas as seções
  globals.css       → todo o sistema visual (tema verde fixo)
components/
  FadeIn.tsx        → wrapper de animação no scroll
  Sections.tsx      → Nav, Hero, Strip, Manifesto, Approach, Stack, Projects, About, Contact, Footer
  ExtraSections.tsx → LogosBar, Metrics, Timeline, ClosingBlock
  Drawer.tsx        → painel lateral (detalhes de projetos e skills)
lib/
  projectData.ts    → conteúdo dos projetos + "Saiba mais"
  skillData.ts      → conteúdo das habilidades do Stack
public/
  assets/           → covers e logos dos projetos
  uploads/          → foto do hero, foto "sobre", logos das instituições
  docs/             → PDFs/DOCX dos entregáveis
  cv.html           → currículo (abre em /cv.html; botão "Salvar como PDF")
```

## Como atualizar conteúdo (sem mexer em layout)
- **Texto/links dos projetos** → `lib/projectData.ts`
- **Habilidades do Stack** → `lib/skillData.ts`
- **Linha do tempo / métricas / logos** → `components/ExtraSections.tsx`
- **Novos PDFs/entregáveis** → coloque o arquivo em `public/docs/` e referencie em `lib/projectData.ts` (campo `href`, ex.: `"/docs/meu-doc.pdf"`)
- **Trocar uma imagem** → substitua o arquivo em `public/assets/` ou `public/uploads/` mantendo o mesmo nome

## O que mudou do protótipo original
- Removido o painel de **Tweaks** (era específico do ambiente de prototipagem) — tema Verde Amazônia agora é fixo.
- `<image-slot>` (drag-and-drop) → `<img>` com imagens fixas em `public/` (padrão para site publicado).
- Tudo modularizado em imports/exports ES — sem globais `window.X` nem Babel inline.

## Pendências de conteúdo (atualizar quando tiver)
- Screenshot do grafo de conexões do Deeper (substituir `public/assets/covers/fsb-code.png`)
- Imagem `public/assets/covers/pibic-clusters.png`: conferir se a legenda queimada na figura ainda diz "UMAP" (a legenda no site já foi corrigida para MDS clássico)
- Explorador interativo do PIBIC (~11 MB): decidir hospedagem antes de linkar em `lib/projectData.ts`
- Relatório parcial do PIBIC e artigo final
- Portal de transparência do JogoJusto
- Citação de orientador/parceiro (prova social externa)

## Histórico
- **ago/2026** — atualização de conteúdo: FSB/Nexus passa a se chamar **Deeper**; ISJ passa a se chamar **JogoJusto** (6 elementos, índice absoluto 0–100); números do PIBIC corrigidos para 78.497 publicações / 211 perfis / 16-ago a 30-out de 2024. `public/docs/isj.docx` foi desvinculado do site (arquivo mantido no repo por histórico).
