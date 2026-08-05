import EstagZamp from "@/components/estag-zamp";
import Headline from "@/components/headline";
import { Button } from "@/components/ui/button";
import { BriefcaseMedical, Bus, Cake, Check, Dumbbell, HeartPlus, PiggyBank, Utensils } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <section className="py-24">
        <div className="container">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <Headline>Sobre o Programa / 2027</Headline>
              <h3 className="text-3xl font-light">
                Algumas pessoas procuram um estágio. <strong className="text-accent font-bold">Outras procuram velocidade para crescer!</strong>
              </h3>
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

      <section className="pt-24">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-4">
                <Headline icons="popeyes">Pré-requisitos</Headline>
                <h3 className="text-3xl font-light">
                  Para quem tem <strong className="text-accent font-bold">fome de crescer</strong>
                </h3>
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
            <div className="text-center">
              <Image className="sticky top-10 mx-auto rounded-xl" src="/pre-requisitos.avif" alt="Estágio Zamp" width={768} height={761} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-8 md:order-last">
              <Headline icons="popeyes">Benefícios</Headline>
              <h3 className="text-3xl font-light">
                Seu combo de <strong className="text-accent font-bold">benefícios</strong>
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <PiggyBank className="bg-brand-green size-12 shrink-0 rounded-full p-3 text-white" />
                  <p className="mt-3">Bolsa-auxílio de R$ 3.500</p>
                </li>
                <li className="flex gap-3">
                  <Utensils className="bg-brand-green size-12 shrink-0 rounded-full p-3 text-white" />
                  <p className="mt-3">Vale-refeição</p>
                </li>
                <li className="flex gap-3">
                  <Bus className="bg-brand-green size-12 shrink-0 rounded-full p-3 text-white" />
                  <p className="mt-3">Vale-transporte</p>
                </li>
                <li className="flex gap-3">
                  <BriefcaseMedical className="bg-brand-green size-12 shrink-0 rounded-full p-3 text-white" />
                  <p className="mt-3">Assistência médica</p>
                </li>
                <li className="flex gap-3">
                  <Check className="bg-brand-green size-12 shrink-0 rounded-full p-3 text-white" />
                  <p className="mt-3">Assistência odontológica</p>
                </li>
                <li className="flex gap-3">
                  <HeartPlus className="bg-brand-green size-12 shrink-0 rounded-full p-3 text-white" />
                  <p className="mt-3">Seguro de vida</p>
                </li>
                <li className="flex gap-3">
                  <Dumbbell className="bg-brand-green size-12 shrink-0 rounded-full p-3 text-white" />
                  <p className="mt-3">TotalPass</p>
                </li>
                <li className="flex gap-3">
                  <Cake className="bg-brand-green size-12 shrink-0 rounded-full p-3 text-white" />
                  <p className="mt-3">Day off no dia do aniversário</p>
                </li>
              </ul>
              <Button>Inscreva-se</Button>
            </div>
            <div className="flex flex-col gap-3.5">
              <Image className="rounded-xl" src="/beneficios-01.avif" alt="Estágio Zamp" width={960} height={612} />
              <div className="grid grid-cols-12 gap-3.5">
                <div className="col-span-5 grid gap-3.5">
                  <Image className="rounded-xl" src="/beneficios-02.avif" alt="Estágio Zamp" width={380} height={380} />
                  <Image className="rounded-xl" src="/beneficios-03.avif" alt="Estágio Zamp" width={380} height={380} />
                </div>
                <Image className="col-span-7 h-full flex-1 rounded-xl object-cover" src="/beneficios-04.avif" alt="Estágio Zamp" width={566} height={774} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#D62300] py-24 text-white">
        <div className="container">
          <Headline icons="popeyes" color="light">
            Processo Seletivo
          </Headline>
          <h3 className="text-3xl font-bold">Passo a passo do seu pedido Zamp</h3>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <Headline icons="popeyes">Pré-requisitos</Headline>
              <h3 className="text-3xl font-light">
                Os 5 ingredientes da <strong className="text-accent font-bold">sua aceleração</strong>
              </h3>
            </div>
            <div className="pt-20">
              <p>Criamos uma trajetória intensiva para quem quer construir em 18 meses o que a maioria leva quase meia década para alcançar. Se você tem fome de protagonismo, este é o seu lugar.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
