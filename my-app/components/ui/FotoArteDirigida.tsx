import { getImageProps } from "next/image";

/**
 * Duas artes para o mesmo espaço (celular e desktop), num <picture> só.
 * Com dois <Image> separados o navegador baixaria as duas, mesmo com uma
 * escondida por CSS — e a landing vem de anúncio no celular.
 */
export function FotoArteDirigida({
  mobile,
  desktop,
  larguraMinimaDesktop = 768,
  prioridade = false,
  className = "",
}: {
  mobile: { src: string; alt: string; largura: number; altura: number };
  desktop: { src: string; largura: number; altura: number };
  larguraMinimaDesktop?: number;
  prioridade?: boolean;
  className?: string;
}) {
  const comum = { alt: mobile.alt, sizes: "100vw", priority: prioridade };

  const {
    props: { srcSet: conjuntoDesktop },
  } = getImageProps({
    ...comum,
    src: desktop.src,
    width: desktop.largura,
    height: desktop.altura,
  });

  const {
    props: { srcSet: conjuntoMobile, ...resto },
  } = getImageProps({
    ...comum,
    src: mobile.src,
    width: mobile.largura,
    height: mobile.altura,
  });

  return (
    <picture>
      <source media={`(min-width: ${larguraMinimaDesktop}px)`} srcSet={conjuntoDesktop} />
      <source srcSet={conjuntoMobile} />
      <img {...resto} alt={mobile.alt} className={className} />
    </picture>
  );
}
