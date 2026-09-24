# Kanak Colchões — instruções do projeto

Site institucional (catálogo) + blog + landing pages de anúncio da Kanak Colchões (Curitiba/PR). Substitui o WordPress atual em kanakcolchoes.com.br. **Não é e-commerce**: todo CTA leva ao WhatsApp.

## Fontes de verdade (ler antes de qualquer tarefa)

- @specs/site.md — o que construir: objetivo, público, páginas, seções, CTAs, stack, escopo.
- @specs/design.md — como deve parecer: paleta, tipografia, componentes, fotografia, movimento, o que evitar.
- @memoria.md — decisões aprovadas e rejeitadas, pendências, próximos passos.
- `design-system/` — `DESIGN_SYSTEM.md`, `tokens.css`, `tokens.json` (tokens aprovados; não criar cores ou tamanhos fora deles sem aprovação).
- Wireframes do Claude Design — fonte de verdade da estrutura e da ordem das seções. Links em `specs/site.md`, seção 0.

## Next.js

O projeto fica em `my-app/` (Next.js 16, App Router). Esta versão tem mudanças de API em relação ao que você conhece. Antes de escrever código, leia a documentação em `my-app/node_modules/next/dist/docs/` e respeite os avisos de depreciação. Não edite o bloco `nextjs-agent-rules` de `my-app/AGENTS.md`.

## Regras

- Se algum pedido meu contradisser uma decisão registrada em @specs/site.md, @specs/design.md ou @memoria.md, pare e me avise antes de realizar qualquer alteração. Explique qual decisão seria afetada e pergunte se desejo substituí-la.
- Não altere a stack técnica sem minha autorização.
- Não remova uma decisão aprovada silenciosamente.
- Não invente informações comerciais, técnicas ou de qualquer outra natureza sobre o produto (densidade, garantia, preços, prazos, depoimentos, certificações). Sem dado confirmado, use marcador de pendência e registre em @memoria.md.
- A copy foi escrita pelo cliente e é imutável. Só entram as alterações já aprovadas: quadro "Ajustes de copy" do wireframe da landing e ajustes da Home aprovados em @specs/site.md (seção 6.4).
- Os wireframes do Claude Design são a fonte de verdade da estrutura e da ordem das seções.
- O site não é e-commerce: todo CTA leva ao WhatsApp, conforme o Mapa de CTAs. Nunca "Comprar" ou "Adicionar ao carrinho" no sentido de checkout.
- Sempre preserve a consistência visual e estrutural entre as seções.
- Antes de uma mudança grande, apresente um plano resumido.
- Depois de uma decisão importante aprovada, atualize @memoria.md (decisão + data, sem transcrever conversas).
- Idioma do site e da documentação: português do Brasil.
