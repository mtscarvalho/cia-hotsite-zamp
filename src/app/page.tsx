import EstagZamp from "@/components/estag-zamp";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
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

      <section className="bg-brand-dark-blue bg-[url('/pattern-dark.svg')] bg-center bg-repeat py-20 text-white">
        <div className="container">
          <div className="mb-6 flex items-center justify-center gap-4">
            <h2 className="text-4xl font-bold">Z League</h2>
            <p className="max-w-[18ch]">Para crescer rápido é preciso protagonizar.</p>
          </div>
          <div className="grid gap-x-10 gap-y-4 md:grid-cols-2">
            <div className="space-y-4">
              <p>Nossos estagiários fazem parte da Z League, uma comunidade formada pelos participantes do programa que atuam em squads multidisciplinares. Isso mesmo! Aqui você atuará em desafios transversais, colaborando com colegas de diferentes áreas para construir soluções, propor melhorias e contribuir para fortalecer continuamente o Programa de Estágio Zamp.</p>
            </div>
            <div className="space-y-4">
              <p>Mais do que participar de projetos, você terá a oportunidade de deixar um legado para as próximas gerações do programa, ampliar sua rede de relacionamentos, ganhar visibilidade junto às lideranças e desenvolver uma visão ampla do negócio, indo além da experiência da sua área de atuação.</p>
              <p>
                <strong>Está esperando o que? Inscreva-se!</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-light">
                  Para quem tem <strong className="text-accent font-bold">fome de crescer</strong>
                </h2>
                <p>Nem toda carreira precisa seguir o mesmo ritmo. Na Zamp, buscamos estudantes que gostem de atuar com autonomia, pensem de forma criativa, sejam curiosos, colaborativos, tenham vontade de aprender, construir soluções, assumir responsabilidades e gerar resultados desde o início da jornada.</p>
              </div>
              <div className="border-brand-orange space-y-4 border-b pb-6">
                <h3 className="text-xl font-light">Cursos elegíveis, conhecimentos e áreas</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Check className="bg-brand-orange mt-0.75 size-5 shrink-0 rounded p-0.5 text-white" />
                    <p>Administração, Arquitetura, Ciências Contábeis, Direito, Economia, Engenharias, Psicologia, Tecnologia e demais cursos correlatos.</p>
                  </li>
                  <li className="flex gap-3">
                    <Check className="bg-brand-orange mt-0.75 size-5 shrink-0 rounded p-0.5 text-white" />
                    <p>Inglês desejável.</p>
                  </li>
                  <li className="flex gap-3">
                    <Check className="bg-brand-orange mt-0.75 size-5 shrink-0 rounded p-0.5 text-white" />
                    <p>Supply, Princing, Operações, Desenvolvimento/Expansão, Jurídico, Tecnologia, Gestão de Gente, Finanças e Marketing. </p>
                  </li>
                </ul>
              </div>
              <div className="border-brand-orange space-y-4 border-b pb-6">
                <h3 className="text-xl font-light">Graduação e disponibilidade</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Check className="bg-brand-orange mt-0.75 size-5 shrink-0 rounded p-0.5 text-white" />
                    <p>Previsão de conclusão de curso entre dez/27 e dez/28.</p>
                  </li>
                  <li className="flex gap-3">
                    <Check className="bg-brand-orange mt-0.75 size-5 shrink-0 rounded p-0.5 text-white" />
                    <p>Disponibilidade para estagiar 30 horas semanais.</p>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-light">Localidade e modelo de trabalho </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Check className="bg-brand-orange mt-0.75 size-5 shrink-0 rounded p-0.5 text-white" />
                    <p>Butantã - São Paulo/SP.</p>
                  </li>
                  <li className="flex gap-3">
                    <Check className="bg-brand-orange mt-0.75 size-5 shrink-0 rounded p-0.5 text-white" />
                    <p>Modelo híbrido, com 4 dias presenciais e um dia remoto.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <Image className="sticky top-10 mx-auto rounded-xl" src="/pre-requisitos.avif" alt="Estágio Zamp" width={768} height={761} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24"></section>
    </main>
  );
}
