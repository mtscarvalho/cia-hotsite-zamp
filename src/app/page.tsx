import EstagZamp from "@/components/estag-zamp";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <section className="py-24">
        <div className="container">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-light">
                Algumas pessoas procuram um estágio. <strong className="text-accent font-bold">Outras procuram velocidade para crescer!</strong>
              </h2>
              <p>O Programa de Estágio Zamp 2027 foi criado para desenvolver jovens talentos que desejam acelerar sua carreira.</p>
              <p>Ao longo do programa, você viverá uma jornada personalizada de desenvolvimento, com desafios reais, autonomia, acompanhamento próximo e exposição ao negócio, preparando você para assumir responsabilidades cada vez maiores. </p>
              <p>Aqui, seu crescimento acontece na prática. Quem se destaca pode acelerar sua trajetória, avançar para novas posições, seguir para oportunidades como o Programa de Trainee e construir um caminho para futuras posições de liderança na Zamp.</p>
              <p>Porque, para a gente, estágio não é só uma porta de entrada.É o primeiro passo de uma carreira que pode ir muito mais longe e mais rápido. Aceita esse combo?</p>
              <Button>Inscreva-se</Button>
            </div>
            <div className="space-y-6">
              <EstagZamp className="mx-auto w-[70%] md:w-full lg:w-[70%]" />
              <p className="text-center text-balance">
                Você conhece nossas marcas. <strong className="block">Chegou a hora de conhecer o seu futuro!</strong>
              </p>
              <Image className="mx-auto" src="/logo-roll.svg" alt="Burger King, Popeyes, Starbucks e Subway" width={443} height={95} />
            </div>
          </div>
        </div>
      </section>

      <section></section>
    </main>
  );
}
