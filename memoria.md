# Memória do projeto — Kanak Colchões

Histórico vivo das decisões. Registrar decisão, data e motivo em uma linha; não transcrever conversas.

## Decisões aprovadas

- **2026-09-24 — Landing da campanha 55% OFF em `/lp/5771`.** Substitui o slug `55-off`. `/lp/55-off` redireciona em definitivo para o endereço novo.
- **2026-09-24 — Hospedagem: app Node (`next start`) na Hostinger, plano Business.** Encerra a pendência do tipo de plano. Decidido com dado medido em produção, não estimativa: `next/image` reduziu `banner-king.png` de 4.159 KB para 63 KB em AVIF no app já publicado. Exportação estática foi descartada: sem ISR (rebuild inteiro a cada post do blog), sem `redirects()`, imagens cruas de 3–4 MB.
- **2026-09-24 — Site publicado, provisoriamente, no domínio temporário da Hostinger** `https://beige-octopus-880165.hostingersite.com`. **`kanakcolchoes.com.br` é outro site, em produção, e não é tocado por este projeto** até a virada (sem data definida). `AGENTS.md`/`CLAUDE.md` diziam "substitui o WordPress atual em kanakcolchoes.com.br" — ajustado para não instruir errado sessões futuras.
- **2026-09-24 — Blog reaberto como etapa própria, escopo base.** Substitui a decisão de 2026-09-23 que tirou o blog desta entrega. Escopo: `/blog` (lista) e `/blog/[slug]` (artigo), sem categorias, tags, busca, autor ou relacionados. Construído direto do design system, sem prancheta no Claude Design — o blog não tinha wireframe.
- **2026-09-24 — WordPress headless do blog em instalação nova, `cms.kanakcolchoes.com.br`.** Já existe (nome "CMS Kanak" no hPanel), `noindex` a confirmar (hoje o `robots.txt` dele ainda permite indexação — ver Problemas). O WordPress de `kanakcolchoes.com.br` (produção) não é usado como CMS; hoje tem 0 posts e não tinha nada a migrar.
- **2026-09-24 — Navegação ganha "Blog" no cabeçalho e no rodapé.** Substitui a decisão de 2026-09-23 de cabeçalho só com âncoras. As âncoras (`#colchoes`, `#como-escolher`, `#contato`) viram absolutas (`/#colchoes`) para funcionar a partir do `/blog`.
- **2026-09-24 — Mapa de CTAs ganha `blog_lista` e `blog_artigo`.** Mensagem começa com "Olá! Vim pelo blog…"/"Olá! Vim de um artigo do blog…", número principal. `specs/site.md` §7.3 atualizado; `pnpm conferir:ctas` confere 43 CTAs.
- **2026-09-24 — Ampliação de stack: `sanitize-html`.** Limpa o HTML de `content.rendered`/`excerpt.rendered`/`title.rendered` do WordPress antes de qualquer componente renderizar — allowlist de tags, sem `script`/`style`/`on*`. Roda no servidor, sem `jsdom`.
- **2026-09-24 — Revalidação do blog por ISR de 5 minutos** (`revalidate = 300` em `lib/wordpress.ts` e nas rotas). Sem webhook no WordPress: post publicado aparece sozinho, sem mexer no CMS.
- **2026-09-24 — Indexação por busca controlada por `SITE_INDEXAVEL`.** Desligada por padrão (`lib/site.ts`, `INDEXAVEL`): toda página sai `noindex, nofollow` via meta tag (não via `robots.txt` — achado de 2026-09-24: a Hostinger sobrepõe esse arquivo no domínio temporário e só bloqueia o Googlebot) e o sitemap fica vazio. Liga com `SITE_INDEXAVEL=1` na virada para o domínio final.
- **2026-09-24 — Banner da Home: título em `display-xl` com entrelinha 1.15.** Substitui, no mesmo dia, o `display-lg`: o título ficou pequeno. A entrelinha 1.04 da prancheta não volta. A faixa de camas segue na largura do container; no hover a escolhida cresce para `flex-grow: 1.65` e as outras não passam do mínimo que cabe o nome.
- **2026-09-24 — Card Solteiro do banner usa a foto real do showroom** (`solteiro com pillow top - verde showroom com recamier.jpeg`, copiada para `public/images/home/banner-solteiro.jpg`). Não fecha a pendência 12: ainda falta a frontal na mesma luz e ângulo das outras três.
- **2026-09-23 — Movimento: cada seção tem um gesto próprio.** Substitui, no mesmo dia, a regra que limitava a animação a três lugares e proibia entrada de seção. Motivo: a página ficou estática demais. O gesto muda conforme a seção (lençol, camadas, escala, série, virada de página, cortina), no mesmo assentamento. O momento autoral segue a faixa de camas. Biblioteca inalterada (`motion` via `LazyMotion` + `domAnimation`). Registrado em `specs/design.md` §9.
- **2026-09-23 — Tipografia: Instrument Sans substitui Instrument Serif.** Autorizado por você após a revisão da skill `design-taste-frontend`. Títulos em 600 com tracking negativo (-0,035em a -0,02em), logotipo em 700; o realce continua sendo itálico **da mesma família**, que é o gesto das pranchetas. Consequência aceita: as pranchetas do Claude Design seguem com a serif e ficam desalinhadas do site nesse ponto.
- **2026-09-23 — Ícones: Phosphor (`@phosphor-icons/react`), peso `regular`.** Substitui os SVGs desenhados à mão, que misturavam `strokeWidth` 1.5 e 1.8. Import por `/dist/ssr`: renderiza SVG puro, então os botões continuam Server Components. Cama vista de cima e diagrama de camadas ficam desenhados em código — são ilustração de produto, não ícone.
- **2026-09-23 — Animação: biblioteca `motion`, sempre via `LazyMotion` + `domAnimation`.** Autorizada como ampliação de stack. Subconjunto de DOM (~18 kB) em vez do pacote inteiro (~30 kB), porque a landing recebe tráfego pago de celular. Entradas em série, aviso de cookies e menu do celular passaram do CSS para `components/motion/Revela.tsx` e `Aparicao.tsx`; a faixa de camas segue em CSS puro.
- ~~**2026-09-23 — Escopo desta entrega: só a Home e a Landing Google Ads.**~~ **Substituída em 2026-09-24: o blog volta ao escopo** (ver decisão do topo). Motivo original: o usuário fechou as duas páginas no Claude Design e exportou o HTML para `referencias-site/`; só elas seriam construídas naquele momento.
- **2026-09-23 — Uso de imagens geradas por IA aprovado.** Encerra a pendência 12. As 14 imagens de `my-app/public/img` entram no site, renomeadas para `my-app/public/images/`; quatro seguem marcadas como `-PLACEHOLDER` (corte do colchão, magnético em dois lugares, showroom) até chegar foto real.
- **2026-09-23 — Ajustes de copy da Home H1–H10 aprovados em bloco** (`specs/site.md` §6.4). Os rótulos de H6 ("Descubra o colchão ideal para você!") e H10 ("Fale com nossos especialistas!") já estão no Mapa de CTAs; `data-origem` e mensagens não mudaram. Segue pendente só a confirmação de H3 (regulação térmica em todos os modelos).
- **2026-09-23 — Logotipo em texto no cabeçalho e no rodapé** ("Kanak" em Instrument Serif + "COLCHÕES" em Inter), como nas pranchetas. Substitui a regra de `specs/design.md` §8 de usar `logo.webp` nos dois lugares: o arquivo tem fundo branco opaco e não funciona sobre o vinho do rodapé.
- **2026-09-23 — Banner da Home com vídeo de fundo.** `public/magnific_create-a-scrollstopping-9_3zXqgxhREY.mp4`, mudo, em loop, escurecido e sob véu `surface-100`. Substitui, só nesse banner, a proibição de vídeo em autoplay acima da dobra. Some com redução de movimento. A faixa de camas permanece como estava antes do ajuste de overflow.
- **2026-09-23 — Cabeçalho branco, sticky, com `logo.webp`.** O wordmark sai do cabeçalho (Home e landing). O rodapé vinho continua em texto: `logo.webp` tem fundo branco opaco e não há versão escura. Entradas de seção esperam o bloco estar mais dentro da tela e duram mais (~1–1,4 s); a faixa de camas no desktop deixa de herdar o overflow do trilho.
- **2026-09-23 — Referência visual:** eightsleep.com é a referência única, só como direção de estrutura e atmosfera (respiro, fotografia grande, hierarquia limpa). Nada de copiar textos, marca, imagens ou layouts idênticos.
- **2026-09-23 — Paleta:** vinho `#680B0E` (marca) + apricot cream `#FFD29D` (realces e selos), fundo creme `surface-100`, texto `ink`; `surface-900` com `ouro`/`on-dark` só em banners e tarjas promocionais pontuais. Tokens em `design-system/`.
- ~~**2026-09-23 — Tipografia:** Instrument Serif 400 (títulos e destaques, itálico para realce) + Inter (leitura e interface).~~ **Substituída em 2026-09-23 pela Instrument Sans** (ver acima). Inter segue no texto de leitura e interface.
- **2026-09-23 — Não é e-commerce:** sem carrinho, checkout, pagamento, login ou área do cliente. Objetivo: conversa no WhatsApp com especialista.
- **2026-09-23 — Copy do cliente é imutável.** Só entram as alterações aprovadas no quadro "Ajustes de copy" do wireframe da landing e os ajustes da Home aprovados em `specs/site.md` §6.4.
- **2026-09-23 — Home ganha ajustes de copy**, com os mesmos critérios da landing. H1–H10 em `specs/site.md` §6.4, aprovados em bloco no mesmo dia.
- **2026-09-23 — Ajustes de copy da landing:** aprovados conforme quadro do wireframe, transcritos em `specs/site.md` §6.3.
- **2026-09-23 — Mapa de CTAs:** aprovado conforme wireframe, transcrito em `specs/site.md` §7.3 (Home "Vim pelo site…", landing "Vim pelo anúncio…").
- **2026-09-23 — Wireframes do Claude Design** são a fonte de verdade da estrutura e da ordem das seções. Canvases "Kanak · Home" e "Kanak · Landing Google Ads" (links em `specs/site.md` §0).
- **2026-09-23 — Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, pnpm, em `my-app/`. Ampliada no mesmo dia com `@phosphor-icons/react` e `motion`.
- **2026-09-23 — Landing Google Ads:** layout separado, sem menu de navegação, rodapé igual ao da Home, barra de WhatsApp fixa no celular, banner trocável por campanha.
- **2026-09-23 — WhatsApp:** os três números são WhatsApp; principal (41) 99842-5771 recebe todos os botões principais, sem rodízio. Os três aparecem em Dúvidas e no rodapé.
- **2026-09-23 — Ofertas confirmadas:** 55% OFF é real; 12x sem juros no cartão; há desconto no PIX.
- **2026-09-23 — Fabricação:** a Kanak fabrica os colchões — "direto da fábrica" pode ser usado.
- **2026-09-23 — Escopo:** páginas de produto ficam para depois. Nesta entrega: Home e landing (o blog saiu no mesmo dia).
- ~~**2026-09-23 — Cabeçalho da Home:** links são âncoras (`#colchoes`, `#como-escolher`, `#contato`), conforme wireframe.~~ **Substituída em 2026-09-24** (ver decisão do topo): âncoras absolutas + "Blog".
- ~~**2026-09-23 — Hospedagem:** Hostinger. WordPress no mesmo lugar, usado só como CMS headless do blog.~~ **Substituída em 2026-09-24**: o CMS fica numa instalação nova em `cms.kanakcolchoes.com.br`, não na mesma instalação de `kanakcolchoes.com.br` (que é outro site, em produção). Stack ampliada com autorização do usuário.
- ~~**2026-09-23 — Blog:** estrutura dentro do escopo desta entrega, com conteúdo vindo do WordPress.~~ **Substituída em 2026-09-23:** o blog sai desta entrega e volta em etapa própria.
- **2026-09-23 — Aviso de cookies (LGPD):** entra no site; GA4 e Meta Pixel só carregam após consentimento.
- **2026-09-23 — Escala tipográfica de celular** aprovada (36/30/24 nos títulos; ver `specs/design.md`).
- **2026-09-23 — Copy antiga** do commit `0dc9467` não será restaurada; o usuário vai enviar copy nova.
- **2026-09-23 — Seção "Faça seu pedido e acompanhe sua entrega"** da copy original não entra na Home (ausente do wireframe; numeração pula da 5 para a 7).

## Decisões rejeitadas

- **2026-09-23 — Selo "Mais vendido" no Queen:** removido (ajuste de copy aprovado). Cliente acha que o mais vendido é o King, sem certeza; nenhum selo até confirmar.
- **2026-09-23 — Fraunces nos títulos:** substituída por Instrument Serif.
- **2026-09-23 — Depoimento de exemplo "Juliana M.":** não vai ao ar; só depoimentos reais com autorização.

## Alterações realizadas

- **2026-09-24:** slug da campanha 55% OFF passou de `55-off` para `5771` (`content/campanhas/55-off.ts`); `/lp/55-off` redireciona para `/lp/5771` (`next.config.ts`).
- **2026-09-23:** criado o cérebro documental — `CLAUDE.md`, `AGENTS.md`, `.cursor/rules/project.mdc`, `specs/site.md`, `specs/design.md`, `memoria.md`. Acrescentado ponteiro para as regras da raiz em `my-app/AGENTS.md`, abaixo do bloco `nextjs-agent-rules` (bloco intacto).
- **2026-09-23:** wireframes lidos no Claude Design; transcritos Mapa de CTAs, Ajustes de copy, ordem das seções e fundos por seção para as specs.
- **2026-09-23:** fonte de títulos trocada para Instrument Serif em `design-system/tokens.css`, `tokens.json`, `DESIGN_SYSTEM.md` e `specs/design.md` (pesos display 600 → 400).
- **2026-09-23:** specs atualizadas com hospedagem Hostinger + WordPress headless, blog no escopo, aviso de cookies, escala de celular aprovada.
- **2026-09-23:** pranchetas exportadas do Claude Design para `referencias-site/Kanak · Home.html` e `referencias-site/Kanak · Landing Google Ads.html` — cópia local da fonte de verdade, com o mesmo conteúdo dos canvases.
- **2026-09-23:** `specs/site.md` (§0, §5, §6.4, §7.3, §11, §12) e `specs/design.md` (§8) atualizadas com as quatro decisões acima.
- **2026-09-23:** aplicadas as três revisões autorizadas: Instrument Sans no lugar da Instrument Serif (`design-system/tokens.css`, `tokens.json`, `DESIGN_SYSTEM.md`, `app/layout.tsx`, `app/globals.css`, pesos 600/700 e tracking por tamanho); ícones Phosphor nos 5 pontos que eram SVG à mão (WhatsApp, setas, hambúrguer/fechar, foto reservada, 4 argumentos da landing); `motion` com `LazyMotion` + `domAnimation` nas entradas em série, no aviso de cookies e no menu do celular. Build estático, lint limpo, 41 CTAs conferidos.

- **2026-09-23:** passe de movimento revisto (`/impeccable animate`): cada seção da Home e da landing ganha um gesto próprio, em `specs/design.md` §9. Lençol dos banners em CSS (não espera JavaScript acima da dobra). Camadas, escala de firmeza, desenho da cama, cortina do showroom, 1/3 e título do fechamento entram ao chegar na tela. `prefers-reduced-motion` tira deslocamento, recorte e escala e mantém uma opacidade curta.

- **2026-09-23:** passe de movimento (`/impeccable animate`): a entrada idêntica em toda seção foi removida (oito fades iguais não comunicavam nada). O movimento fica em três lugares com função — a faixa de camas do banner (momento autoral da prancheta, agora com a foto de largura fixa, então quem muda é o recorte e não a imagem), a entrada em série dos trilhos de cards e o retorno de toque dos CTAs. `prefers-reduced-motion` deixou de zerar tudo com `0.01ms !important`: agora corta só deslocamento e rolagem, mantendo cor, foco e o aviso de troca de página. Vocabulário em tokens (`--ease-chegada`, `--duracao-toque/estado/foco`) em `app/globals.css`.

- **2026-09-23:** passe de robustez (`/impeccable harden`) sobre a Home e a landing: nomes das camadas da seção 2 deixam de ser `aria-hidden`; aviso de cookies vira região anunciada (era `role="dialog"` sem comportamento de diálogo) e ganha link "Preferências de cookies" no rodapé, para a escolha poder ser revista como a LGPD exige; link "pular para o conteúdo" também na landing; carrossel de depoimentos preparado para qualquer quantidade (some com zero, sem controles com três ou menos); textos longos passam a quebrar em cards, botões e rodapé, para a copy nova e os depoimentos reais não estourarem o layout.

- **2026-09-23:** Home (`/`) e landing (`/lp/[slug]`) implementadas em `my-app/`, na ordem de seções das pranchetas. Tokens do design system expostos ao Tailwind v4 por `@theme inline` (`pnpm sync:tokens` copia `design-system/tokens.css`); fontes por `next/font`; as 14 imagens renomeadas para `my-app/public/images/`; Mapa de CTAs em `content/ctas.ts`, conferido por `pnpm conferir:ctas` (41 CTAs). GA4 e Meta Pixel com Consent Mode v2 negado por padrão, atrás do aviso de cookies. As duas páginas saem estáticas no build.

- **2026-09-24:** Blog implementado — `/blog` (lista, paginada) e `/blog/[slug]` (artigo), lendo `cms.kanakcolchoes.com.br` pela REST API (`lib/wordpress.ts`, ISR de 5 min, `sanitize-html` antes de renderizar). `CardPost`, `Paginacao`, `.prose-kanak` em `globals.css`. Navegação ganhou "Blog" (cabeçalho + rodapé), âncoras viraram absolutas. CTAs `blog_lista`/`blog_artigo` — 43 CTAs conferidos. `next.config.ts` ganhou `remotePatterns` para as imagens do WordPress. `sitemap.ts` virou assíncrono (Home + `/blog` + posts) e, com `robots.ts`/`app/layout.tsx`, passou a respeitar `SITE_INDEXAVEL` — nada indexável enquanto o site estiver no domínio temporário. Build de produção e `pnpm start` testados: `/`, `/blog`, `/blog/hello-world` (post de exemplo do WordPress) e `/lp/55-off` respondendo 200.

## Problemas encontrados

- **2026-09-24 — `robots.txt` sobrescrito pela Hostinger no domínio temporário:** o arquivo servido em produção (`Googlebot: Disallow /`, `*: Allow /`) não é o de `app/robots.ts` (que tem `Disallow: /lp/`). Corrigido com meta tag `robots` em `app/layout.tsx`, que a Hostinger não sobrepõe.
- **2026-09-24 — `cms.kanakcolchoes.com.br` já existe, mas sem Yoast e sem "não indexar" marcado.** `yoast_head_json` vem vazio (o `generateMetadata` do artigo já cai no fallback de título/resumo); o `robots.txt` de lá não bloqueia indexação. Registrado em Próximos passos.

- **2026-09-23 — Escala tipográfica:** as pranchetas desenham títulos maiores que a escala de `specs/design.md` §4 (banner 48 → 72 px, título de seção 36 → 54 px, contra 36/56 e 30/40 dos tokens). A implementação seguiu as pranchetas, com tamanho fluido entre 390 e 1440 px. Precisa de aprovação para virar token.

- **2026-09-23 — Logo:** `my-app/public/logo.webp` tem só 300 × 152 px, fundo branco opaco e sem versão para fundo escuro (rodapé vinho). O vermelho do logo é mais vivo que o `vinho`.
- **2026-09-23 — Copy da Home sem ajustes (resolvido com a proposta H1–H10):** mantém itens da lista "Evitar" — CTA "Compre seu colchão agora!" (seção 3; conflita com "nunca Comprar"), "Fale com nossos especialistas!!" (exclamação dupla, seção 7), "alinhar perfeitamente a sua coluna", "projetado por especialistas em saúde postural", "milhares de famílias", "satisfação garantida". O quadro "Ajustes de copy" cobre só a landing.
- **2026-09-23 — Mapa de CTAs incompleto na prancheta:** a prancheta não lista `hero_queen`/`hero_king`/`hero_casal`/`hero_solteiro` nem os CTAs da landing; foram transcritos do código dos botões nos wireframes.
- **2026-09-23 — Cores fora dos tokens nos wireframes:** `#82282B`, `#641418`, `#4A3A33`, `#F5DCC8`, `#E6CFC0`, `#7A2A2C`. Usar o token mais próximo ou aprovar novos tokens.

## Soluções aplicadas

- Dados não confirmados ficam marcados como `⏳ PENDENTE` nas specs, em vez de preenchidos.
- Wireframes do Claude Design com cópia local: `referencias-site/Kanak · Home.html` e `referencias-site/Kanak · Landing Google Ads.html`, exportados em 2026-09-23. Mesmo conteúdo dos canvases.

## Pendências

1. Confirmar se a regulação térmica existe em todos os modelos (ajuste H3 da Home). Os ajustes H1–H10 já foram aprovados.
2. Nova copy do cliente (a ser enviada) — conferir contra os wireframes quando chegar.
3. Data de fim da campanha dos 55% OFF (entra em "[DATA]" na seção 5 da landing).
4. Confirmar o mais vendido (King?).
5. Dados técnicos por modelo e garantia do magnético — em espera.
6. Rodapé: endereço, horário, CNPJ, razão social, redes sociais — fica para depois.
7. ~~Plano da Hostinger e subdomínio do WordPress~~ — resolvido em 2026-09-24.
8. Volume de artigos do blog — o blog entrou em 2026-09-24; hoje só existe o post de exemplo ("Hello world!") em `cms.kanakcolchoes.com.br`.
9. IDs de GA4 e Meta Pixel.
10. Logo em SVG ou PNG transparente em alta resolução, com versão clara para o rodapé vinho.
11. Fotos pedidas pelos wireframes, 6 depoimentos reais, arte do banner da campanha.
12. As quatro fotos do banner não formam família. Queen, King e Casal são frontais geradas; o Solteiro entrou em 2026-09-24 com a foto real do showroom (verde, pillow top, três quartos). Medir a régua de escala e gerar a frontal do Solteiro antes de publicar.
13. Data da virada de `kanakcolchoes.com.br` para este site — sem previsão.
14. Reencodar os 14 PNGs de `public/images/` (3–4 MB cada) para WebP a ~2000 px — pesa a cada otimização em runtime, plano compartilhado.

## Próximos passos

1. Implementar a Home e a landing conforme o plano aprovado em 2026-09-23 (fundação com tokens e CTAs → Home → landing → mensuração → acabamento). **Concluído.**
2. Resolver a régua de escala das quatro fotos do banner (pendência 12).
3. Aprovar os dois tokens novos propostos para as cores de wireframe que não são token: superfície sobre vinho e texto secundário sobre vinho.
4. No hPanel: definir `SITE_INDEXAVEL=1` e trocar `NEXT_PUBLIC_SITE_URL`/`WORDPRESS_API_URL` só na virada para o domínio final.
5. Em `cms.kanakcolchoes.com.br`: instalar o Yoast SEO (hoje `yoast_head_json` vem vazio — `generateMetadata` já cai no fallback) e marcar "não indexar" em Configurações → Leitura (hoje o `robots.txt` de lá permite indexação).
