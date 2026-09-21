import Image from "next/image";
import type { ImagemSlot } from "@/lib/imagens-modelo";

type Props = {
  imagem: ImagemSlot;
  sizes: string;
  priority?: boolean;
  className?: string;
  objectPosition?: string;
  fill?: boolean;
};

export function ImagemKanak({
  imagem,
  sizes,
  priority = false,
  className = "",
  objectPosition,
  fill = false,
}: Props) {
  if (fill) {
    return (
      <Image
        src={imagem.src}
        alt={imagem.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={className}
        style={objectPosition ? { objectPosition } : undefined}
      />
    );
  }

  return (
    <Image
      src={imagem.src}
      alt={imagem.alt}
      width={imagem.width}
      height={imagem.height}
      sizes={sizes}
      priority={priority}
      className={className}
      style={objectPosition ? { objectPosition } : undefined}
    />
  );
}
