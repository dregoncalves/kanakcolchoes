import type { Origem } from "@/content/ctas";
import { EMPRESA } from "@/lib/site";
import { cta } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Secao";
import { LinkWhatsApp } from "@/components/whatsapp/LinkWhatsApp";
import { BotaoPreferenciasCookies } from "@/components/analytics/BotaoPreferenciasCookies";
import { Marca } from "./Marca";

/**
 * Rodapé, igual na Home e na landing — só muda a origem dos três telefones.
 * ⏳ PENDENTE: endereço, horário, CNPJ, razão social, redes e mapa. Enquanto
 * não chegarem, ficam como espaço reservado, nunca preenchidos por conta própria.
 *
 * `linksInternos`: só a Home passa (com o link do Blog). A landing não
 * recebe — lá todo clique vai para o WhatsApp (specs/site.md §6.2).
 */
export function Rodape({
  origensTelefone,
  linksInternos,
}: {
  origensTelefone: readonly Origem[];
  linksInternos?: readonly { rotulo: string; href: string }[];
}) {
  return (
    <footer aria-labelledby="rodape-titulo" className="sobre-vinho bg-vinho-700 text-on-dark">
      <Container className="flex flex-col gap-7 py-12 md:gap-10 md:py-16">
        <h2 id="rodape-titulo" className="sr-only">
          Kanak Colchões: contato e informações da empresa
        </h2>
        <div className="grid gap-7 md:grid-cols-[1.2fr_repeat(3,1fr)_1.4fr] md:gap-10">
          <div className="flex flex-col gap-3">
            <Marca tom="escuro" />
            <p className="text-body-sm text-on-dark-muted">
              {EMPRESA.endereco ?? "[Endereço completo]"}
            </p>
            {linksInternos && linksInternos.length > 0 ? (
              <nav aria-label="Links do site" className="flex flex-col gap-1 pt-1">
                {linksInternos.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-body-sm text-on-dark no-underline hover:text-apricot-cream"
                  >
                    {link.rotulo}
                  </a>
                ))}
              </nav>
            ) : null}
          </div>

          <div className="flex flex-col gap-2.5 text-body-sm">
            <h3 className="font-sans font-semibold">Horário</h3>
            <p className="text-on-dark-muted">
              {EMPRESA.horario ?? "[Horário de atendimento]"}
            </p>
          </div>

          <div className="flex flex-col gap-1 text-body-sm">
            <h3 className="mb-1 font-sans font-semibold">Atendimento</h3>
            {origensTelefone.map((origem) => (
              <LinkWhatsApp
                key={origem}
                origem={origem}
                rotuloAcessivel={`Falar com a Kanak no WhatsApp ${cta(origem).rotulo}`}
                className="flex min-h-11 items-center whitespace-nowrap text-on-dark no-underline hover:text-apricot-cream md:min-h-0 md:py-0.5"
              >
                {cta(origem).rotulo}
              </LinkWhatsApp>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 text-body-sm">
            <h3 className="font-sans font-semibold">Redes</h3>
            {EMPRESA.redes.length > 0 ? (
              EMPRESA.redes.map((rede) => (
                <a
                  key={rede.url}
                  href={rede.url}
                  target="_blank"
                  rel="noopener"
                  className="text-on-dark no-underline hover:text-apricot-cream"
                >
                  {rede.nome}
                </a>
              ))
            ) : (
              <p className="text-on-dark-muted">[Redes sociais]</p>
            )}
          </div>

          {EMPRESA.mapaEmbedUrl ? (
            <iframe
              src={EMPRESA.mapaEmbedUrl}
              title="Mapa do showroom da Kanak Colchões"
              loading="lazy"
              className="h-40 w-full rounded-md border-0"
            />
          ) : (
            <p className="flex h-40 items-center justify-center rounded-md bg-[color-mix(in_srgb,var(--vinho-700)_78%,black)] text-caption text-on-dark-muted">
              MAPA · showroom
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1 border-t border-[color-mix(in_srgb,var(--vinho)_70%,var(--on-dark))] pt-6 text-caption text-on-dark-muted md:flex-row md:items-center md:justify-between md:gap-6">
          <span className="break-words">
            Kanak Colchões · CNPJ {EMPRESA.cnpj ?? "[00.000.000/0000-00]"}
          </span>
          <span className="break-words">{EMPRESA.razaoSocial ?? "[Razão social]"}</span>
          <BotaoPreferenciasCookies />
        </div>
      </Container>
    </footer>
  );
}
