import Image from "next/image";
import Headline from "./headline";

export default function ProcessoSeletivo() {
  return (
    <section className="bg-brand-red py-24 text-white">
      <div className="container">
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-10">
            <div className="space-y-4">
              <Headline icons="popeyes" color="light">
                Processo Seletivo
              </Headline>
              <p className="max-w-[20ch] text-3xl font-bold text-balance">Passo a passo do seu pedido Zamp</p>
            </div>
            <ol className="space-y-6">
              <li className="flex gap-4 text-balance">
                <span className="block min-w-10 text-2xl font-bold">01.</span>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Inscrições online até 20/09</h3>
                  <p>Você faz sua inscrição e dá o primeiro passo rumo à sua carreira na Zamp.</p>
                </div>
              </li>
              <li className="flex gap-4 text-balance">
                <span className="block min-w-10 text-2xl font-bold">02.</span>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Testes</h3>
                  <p>Avaliações de lógica e inglês para conhecermos seu jeito de pensar, aprender e resolver desafios.</p>
                </div>
              </li>
              <li className="flex gap-4 text-balance">
                <span className="block min-w-10 text-2xl font-bold">03.</span>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Entrevista com a Companhia de Estágios</h3>
                  <p>Uma conversa para explorarmos suas experiências, habilidades e expectativas.</p>
                </div>
              </li>
              <li className="flex gap-4 text-balance">
                <span className="block min-w-10 text-2xl font-bold">04.</span>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Painéis presenciais</h3>
                  <p>Dinâmicas em grupo para explorar colaboração, criatividade e resolução de desafios inspirados no nosso negócio.</p>
                </div>
              </li>
              <li className="flex gap-4 text-balance">
                <span className="block min-w-10 text-2xl font-bold">05.</span>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Entrevistas com RH e lideranças</h3>
                  <p>Um momento para conhecermos melhor sua trajetória, seu potencial e sua conexão com a Zamp.</p>
                </div>
              </li>
              <li className="flex gap-4 text-balance">
                <span className="block min-w-10 text-2xl font-bold">06.</span>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Admissão e boas-vindas</h3>
                  <p>Se aprovado, sua jornada iniciará em janeiro de 2027 com integração e onboarding.</p>
                </div>
              </li>
            </ol>
          </div>
          <div className="relative">
            <Image className="" src="./processo-seletivo-01.avif" alt="Estágio Zamp" width={768} height={761} />
            <Image className="absolute top-0" src="./processo-seletivo-02.avif" alt="Estágio Zamp" width={768} height={761} />
            <Image className="absolute top-0" src="./processo-seletivo-03.avif" alt="Estágio Zamp" width={768} height={761} />
            <Image className="absolute top-0" src="./processo-seletivo-04.avif" alt="Estágio Zamp" width={768} height={761} />
            <Image className="absolute top-0" src="./processo-seletivo-05.avif" alt="Estágio Zamp" width={768} height={761} />
            <Image className="absolute top-0" src="./processo-seletivo-06.avif" alt="Estágio Zamp" width={768} height={761} />
          </div>
        </div>
      </div>
    </section>
  );
}
