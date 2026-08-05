import EstagZamp from "@/components/estag-zamp";
import Headline from "@/components/headline";
import { Button } from "@/components/ui/button";
import { YouTubeEmbed } from "@/components/youtube-embed";
import { BriefcaseMedical, Bus, Cake, Check, Dumbbell, HeartPlus, PiggyBank, Utensils } from "lucide-react";
import Image from "next/image";

export default function Page() {
  const beneficios = [
    { icon: PiggyBank, text: "Bolsa-auxílio de R$ 3.500" },
    { icon: Utensils, text: "Vale-refeição" },
    { icon: Bus, text: "Vale-transporte" },
    { icon: BriefcaseMedical, text: "Assistência médica" },
    { icon: Check, text: "Assistência odontológica" },
    { icon: HeartPlus, text: "Seguro de vida" },
    { icon: Dumbbell, text: "TotalPass" },
    { icon: Cake, text: "Day off no dia do aniversário" },
  ];

  const ingredientes = [
    {
      title: "Antes de qualquer estratégia, a realidade do negócio",
      description: "No primeiro mês, você vai viver a operação das nossas marcas de perto! O ritmo, o cliente, os processos que sustentam o negócio. Essa vivência será a base de repertório para todas as etapas seguintes do programa.",
      image: { src: "/ingredientes-01.avif", alt: "" },
    },
    {
      title: "Assessment de Carreira",
      description: "Ao final do primeiro mês, você vai passar por um Assessment de Carreira estruturado, ancorado nas mesmas 11 competências que orientam o desenvolvimento de lideranças na ZAMP. O objetivo é entender seu perfil com profundidade e conectar esse entendimento às oportunidades de desenvolvimento mais adequadas para você ao longo do programa.",
      image: { src: "/ingredientes-02.avif", alt: "" },
    },
    {
      title: "Projeto real, com prazo e resultado",
      description: "Você vai atuar em um projeto estratégico pré-definido, de impacto direto para a companhia. Ao longo do programa, você vai diagnosticar o problema, testar hipóteses e apresentar resultados a um Vice-Presidente.",
      image: { src: "/ingredientes-03.avif", alt: "" },
    },
    {
      title: "Um plano de desenvolvimento construído a partir do seu diagnóstico",
      description: "A partir do seu Assessment de Carreira, você vai receber um Plano de Desenvolvimento Individual próprio, combinando conteúdos do nosso catálogo corporativo com formações buscadas especificamente para as suas necessidades. Você também vai passar por uma trilha contínua de capacitação em resolução estruturada de problemas.",
      image: { src: "/ingredientes-04.avif", alt: "" },
    },
    {
      title: "Conexão com C-Levels",
      description: "A partir do terceiro mês, você vai participar de encontros mensais com Vice-Presidentes da companhia, com oportunidades de troca sobre estratégia, carreira e negócio ao longo da jornada.",
      image: { src: "/ingredientes-05.avif", alt: "" },
    },
  ];

  return (
    <main>
      <section className="py-24">
        <div className="container">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <Headline>Sobre o Programa / 2027</Headline>
              <h3 className="text-3xl font-light text-balance">
                Algumas pessoas procuram um estágio. <strong className="text-accent font-bold">Outras procuram velocidade para crescer!</strong>
              </h3>
              <p>O Programa de Estágio Zamp 2027 foi criado para desenvolver jovens talentos que desejam acelerar sua carreira.</p>
              <p>Ao longo do programa, você viverá uma jornada personalizada de desenvolvimento, com desafios reais, autonomia, acompanhamento próximo e exposição ao negócio, preparando você para assumir responsabilidades cada vez maiores. </p>
              <p>Aqui, seu crescimento acontece na prática. Quem se destaca pode acelerar sua trajetória, avançar para novas posições, seguir para oportunidades como o Programa de Trainee e construir um caminho para futuras posições de liderança na Zamp.</p>
              <p>Porque, para a gente, estágio não é só uma porta de entrada.É o primeiro passo de uma carreira que pode ir muito mais longe e mais rápido. Aceita esse combo?</p>
              <div className="pt-2">
                <Button>Inscreva-se</Button>
              </div>
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
                <h3 className="text-3xl font-light text-balance">
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
              <h3 className="text-3xl font-light text-balance">
                Seu combo de <strong className="text-accent font-bold">benefícios</strong>
              </h3>
              <ul className="space-y-4">
                {beneficios.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex gap-3">
                    <Icon className="bg-brand-green size-12 shrink-0 rounded-full p-3 text-white" />
                    <p className="mt-3">{text}</p>
                  </li>
                ))}
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

      <section className="bg-brand-red py-24 text-white">
        <div className="container">
          <Headline icons="popeyes" color="light">
            Processo Seletivo
          </Headline>
          <h3 className="text-3xl font-bold">Passo a passo do seu pedido Zamp</h3>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
            <div className="space-y-6">
              <Headline icons="popeyes">Pré-requisitos</Headline>
              <h3 className="text-3xl font-light text-balance">
                Os 5 ingredientes da <strong className="text-accent font-bold">sua aceleração</strong>
              </h3>
            </div>
            <div className="md:pt-20">
              <p>Criamos uma trajetória intensiva para quem quer construir em 18 meses o que a maioria leva quase meia década para alcançar. Se você tem fome de protagonismo, este é o seu lugar.</p>
            </div>
          </div>
          <ul className="mt-10 space-y-6">
            {ingredientes.map(({ title, description, image }, index) => {
              const isEven = index % 2 !== 0;
              return (
                <li key={title} className="bg-brand-lighter-gray border-brand-light-gray grid min-h-80 overflow-hidden rounded-xl border md:grid-cols-12">
                  <div className={`relative md:col-span-5 lg:col-span-4 ${isEven ? "md:order-last" : ""}`}>
                    <Image className="h-full w-full rounded-xl object-cover max-md:aspect-4/3 md:absolute" src={image.src} alt={image.alt} width={380} height={380} />
                  </div>
                  <div className="space-y-2 p-8 md:col-span-7 md:px-12 md:py-16 lg:col-span-8">
                    <h4 className="text-brand-dark-gray text-lg font-bold text-balance md:text-xl">{title}</h4>
                    <p>{description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden pb-24">
        <div className="container">
          <div className="flex justify-center gap-4">
            <YouTubeEmbed className="bg-brand-lighter-gray aspect-9/16 max-w-82 rounded-xl" title="Estágio Zamp | Depoimento - Catarina" url="https://www.youtube.com/watch?v=88UmXQhkTuA" thumb="/depoimento-01.avif" />
            <YouTubeEmbed className="bg-brand-lighter-gray aspect-9/16 max-w-82 rounded-xl" title="Estágio Zamp | Depoimento - Catarina" url="https://www.youtube.com/watch?v=88UmXQhkTuA" thumb="/depoimento-02.avif" />
            <YouTubeEmbed className="bg-brand-lighter-gray aspect-9/16 max-w-82 rounded-xl" title="Estágio Zamp | Depoimento - Catarina" url="https://www.youtube.com/watch?v=88UmXQhkTuA" thumb="/depoimento-03.avif" />
          </div>
          <div className="mt-10 text-center">
            <Button>Inscreva-se</Button>
          </div>
        </div>

        <svg className="absolute right-0 bottom-10 left-1/2 -z-10 -translate-x-1/2" width="1406" height="435" viewBox="0 0 1406 435" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M298.438 3.03273C287.961 3.03273 278.415 10.0611 275.716 20.6225C272.521 33.1098 280.115 45.8018 292.673 48.9785L1372.76 322.007C1374.7 322.5 1376.64 322.735 1378.56 322.735C1389.04 322.735 1398.58 315.707 1401.28 305.145C1404.48 292.658 1396.88 279.966 1384.32 276.789L304.241 3.76058C302.304 3.26776 300.359 3.03273 298.446 3.03273M298.446 0C300.642 0 302.845 0.272945 304.995 0.818836L1385.07 273.855C1399.24 277.434 1407.83 291.809 1404.23 305.896C1401.24 317.595 1390.68 325.768 1378.55 325.768C1376.35 325.768 1374.15 325.495 1372 324.949L291.926 51.9127C277.759 48.3341 269.166 33.959 272.765 19.8719C275.754 8.1732 286.314 0 298.446 0Z"
            fill="#FF373F"
          />
          <path
            d="M26.5068 4.46083C16.0275 4.46083 6.47879 11.4985 3.77889 22.0739C0.590867 34.5777 8.17957 47.2864 20.741 50.4674L1205.62 350.338C1207.55 350.831 1209.5 351.067 1211.41 351.067C1221.89 351.067 1231.44 344.029 1234.14 333.453C1237.33 320.95 1229.74 308.241 1217.18 305.06L32.3033 5.18206C30.3661 4.68859 28.4212 4.45324 26.5068 4.45324M26.5068 1.4165C28.7034 1.4165 30.9076 1.68981 33.0584 2.23642L1217.93 302.114C1232.07 305.69 1240.67 320.039 1237.12 334.122L1237.09 334.197C1234.1 345.912 1223.54 354.096 1211.41 354.096C1209.22 354.096 1207.01 353.822 1204.86 353.276L19.9859 53.4055C5.81526 49.8221 -2.7802 35.428 0.819669 21.3223C3.80939 9.60051 14.3725 1.4165 26.4992 1.4165H26.5068Z"
            fill="#00662E"
          />
          <path
            d="M118.945 106.771C108.455 106.771 98.8962 113.801 96.1935 124.365C93.0021 136.855 100.599 149.551 113.173 152.728L978.614 371.254C980.553 371.747 982.5 371.982 984.416 371.982C994.906 371.982 1004.47 364.952 1007.17 354.388C1010.36 341.897 1002.76 329.202 990.188 326.024L124.748 107.499C122.809 107.006 120.862 106.771 118.945 106.771ZM118.945 103.396C121.175 103.396 123.412 103.677 125.588 104.223L991.028 322.748C1005.4 326.373 1014.12 340.934 1010.47 355.207C1007.44 367.06 996.723 375.341 984.424 375.341C982.194 375.341 979.957 375.061 977.781 374.515L112.334 155.997C97.9648 152.372 89.2458 137.811 92.8953 123.538C95.9263 111.685 106.638 103.404 118.938 103.404L118.945 103.396Z"
            fill="#FF6900"
          />
          <path
            d="M29.3499 160.263C18.8665 160.263 9.31394 167.318 6.61299 177.92C3.4161 190.455 11.0155 203.196 23.5818 206.385L909.586 431.054C911.524 431.549 913.47 431.785 915.385 431.785C925.868 431.785 935.421 424.729 938.121 414.127C941.318 401.592 933.719 388.851 921.153 385.662L35.1485 160.993C33.2105 160.499 31.2649 160.263 29.3499 160.263ZM29.3499 157.218C31.5473 157.218 33.7522 157.492 35.9038 158.04L921.9 382.717C936.077 386.309 944.675 400.74 941.074 414.881C938.083 426.625 927.516 434.829 915.377 434.829C913.18 434.829 910.975 434.555 908.823 434.007L22.8263 209.338C8.65015 205.746 0.0514395 191.316 3.65271 177.174C6.6436 165.431 17.2108 157.226 29.3499 157.226V157.218Z"
            fill="#FFB800"
          />
        </svg>
      </section>

      <section className="bg-accent pt-24 text-white">
        <div className="container">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <Headline color="light">Sobre o Programa / 2027</Headline>
              <h3 className="text-3xl font-light text-balance">
                A marca por trás <strong className="font-bold">das marcas que você ama</strong>
              </h3>
              <p>A Zamp é um grande ecossistema de restaurantes que reúne marcas internacionais como Burger King®, Popeyes®, Starbucks® e Subway®.</p>
              <p>E, por trás de cada receita de sucesso, estão os Zampers: gente que faz acontecer, que joga junto e que deixa sua marca todos os dias.</p>
              <p>Aqui, a gente acredita que o verdadeiro sabor do sucesso é ter espaço pra criar, crescer, liderar e ser quem você é. Usamos tecnologia, inovação e muita parceria para entregar experiências que surpreendem nossos clientes e geram oportunidades para o nosso time.</p>
              <p>Temos apetite pelo futuro e ousadia para conquistar novos mercados, novos sabores e novas conexões. </p>
              <div className="pt-2">
                <Button variant="white">Inscreva-se</Button>
              </div>
            </div>
            <div className="space-y-6">
              <EstagZamp className="mx-auto w-[70%] md:w-full lg:w-[70%]" />
              <p className="text-center text-balance">
                Você conhece nossas marcas. <strong className="block">Chegou a hora de conhecer o seu futuro!</strong>
              </p>
              <Image className="mx-auto" src="/logo-roll.svg" alt="Burger King, Popeyes, Starbucks e Subway" width={443} height={95} />
            </div>
          </div>

          <div className="text-body mt-16 grid gap-10 rounded-xl bg-white p-12 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-accent text-lg font-bold text-balance md:text-xl">As marcas que você ama vão dar mais sabor à sua carreira</h3>
              <p>Porque grandes marcas só existem quando grandes pessoas constroem algo maior do que elas mesmas.</p>
              <p>Isso é a Zamp: um ecossistema de restaurantes e pessoas em constante evolução.</p>
            </div>
            <div className="flex justify-center">
              <Image className="mx-auto" src="/logo-roll.svg" alt="Burger King, Popeyes, Starbucks e Subway" width={443} height={95} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent relative z-0 overflow-hidden pt-36 text-white">
        <div className="container">
          <div className="grid grid-cols-2 items-end gap-x-10">
            <div className="space-y-6 pb-36">
              <div className="space-y-2">
                <h2 className="uppercase">Estágio Zamp 2027</h2>
                <p className="text-3xl font-bold text-balance lg:text-4xl">E aí, aceita esse combo de sucesso?</p>
              </div>
              <Button variant="white">Inscreva-se</Button>
            </div>
            <div>
              <Image className="pointer-events-none w-full origin-bottom translate-x-[-20%] scale-125" src="/call-to-action.avif" alt="Burger King, Popeyes, Starbucks e Subway" width={960} height={594} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 -z-10 h-[14%] w-full bg-white"></div>
      </section>

      <section className="py-24"></section>
    </main>
  );
}
