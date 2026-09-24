import { Container, Secao } from "@/components/ui/Secao";

/** Esqueleto da lista do blog — mesmo espaço dos cards reais, sem CLS. */
export default function CarregandoBlog() {
  return (
    <Secao fundo="creme">
      <Container className="flex flex-col gap-10 md:gap-14">
        <div className="mx-auto flex h-24 w-full max-w-2xl animate-pulse flex-col items-center gap-3">
          <div className="h-9 w-40 rounded-md bg-borda" />
          <div className="h-5 w-72 rounded-md bg-borda" />
        </div>
        <div className="grid animate-pulse gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, indice) => (
            <div key={indice} className="flex flex-col gap-3">
              <div className="aspect-4/3 rounded-lg bg-borda" />
              <div className="h-4 w-24 rounded-md bg-borda" />
              <div className="h-6 w-full rounded-md bg-borda" />
              <div className="h-4 w-4/5 rounded-md bg-borda" />
            </div>
          ))}
        </div>
      </Container>
    </Secao>
  );
}
