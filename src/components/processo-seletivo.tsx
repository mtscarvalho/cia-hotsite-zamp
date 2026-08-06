"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef, type CSSProperties } from "react";
import Headline from "./headline";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const steps = [
  {
    title: "Inscrições online até 20/09",
    description: "Você faz sua inscrição e dá o primeiro passo rumo à sua carreira na Zamp.",
    image: "/processo-seletivo-01.avif",
  },
  {
    title: "Testes",
    description: "Avaliações de lógica e inglês para conhecermos seu jeito de pensar, aprender e resolver desafios.",
    image: "/processo-seletivo-02.avif",
  },
  {
    title: "Entrevista com a Companhia de Estágios",
    description: "Uma conversa para explorarmos suas experiências, habilidades e expectativas.",
    image: "/processo-seletivo-03.avif",
  },
  {
    title: "Painéis presenciais",
    description: "Dinâmicas em grupo para explorar colaboração, criatividade e resolução de desafios inspirados no nosso negócio.",
    image: "/processo-seletivo-04.avif",
  },
  {
    title: "Entrevistas com RH e lideranças",
    description: "Um momento para conhecermos melhor sua trajetória, seu potencial e sua conexão com a Zamp.",
    image: "/processo-seletivo-05.avif",
  },
  {
    title: "Admissão e boas-vindas",
    description: "Se aprovado, sua jornada iniciará em janeiro de 2027 com integração e onboarding.",
    image: "/processo-seletivo-06.avif",
  },
];

const burgerZIndexes = [4, 5, 6, 3, 2, 1];

export default function ProcessoSeletivo() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const matchMedia = gsap.matchMedia();

      /*
       * GSAP only runs on screens at least 1024px wide.
       * When the viewport becomes smaller, matchMedia.revert()
       * removes the inline animation styles automatically.
       */
      matchMedia.add("(min-width: 1024px)", () => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const intro = section.querySelector<HTMLElement>("[data-process-intro]");
        const stepElements = gsap.utils.toArray<HTMLElement>("[data-process-step]", section);
        const burgerLayers = gsap.utils.toArray<HTMLElement>("[data-burger-layer]", section);

        /*
         * Intro animation.
         */
        if (intro) {
          gsap.fromTo(
            intro,
            {
              opacity: 0,
              y: reduceMotion ? 0 : 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: reduceMotion ? 0.01 : 0.7,
              ease: "power4.out",
              scrollTrigger: {
                trigger: section,
                start: "top 70%",
                once: true,
              },
            },
          );
        }

        /*
         * Six steps produce five scroll transitions.
         */
        const processTimeline = gsap.timeline({
          defaults: {
            ease: "none",
          },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        /*
         * Animated text steps on desktop.
         */
        stepElements.forEach((element, index) => {
          const isFirst = index === 0;
          const isLast = index === stepElements.length - 1;

          gsap.set(element, {
            y: reduceMotion || isFirst ? 0 : 132,
            opacity: isFirst ? 1 : index === 1 ? 0.38 : 0,
            scale: reduceMotion || isFirst ? 1 : 0.97,
            transformOrigin: "left center",
          });

          /*
           * Slightly reveal the upcoming item.
           */
          if (index > 1) {
            processTimeline.to(
              element,
              {
                opacity: 0.38,
                duration: 0.1,
              },
              index - 1.1,
            );
          }

          /*
           * Bring the item into the active position.
           */
          if (!isFirst) {
            processTimeline.to(
              element,
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
              },
              index - 1,
            );
          }

          /*
           * Move the current item out.
           */
          if (!isLast) {
            processTimeline.to(
              element,
              {
                y: reduceMotion ? 0 : -132,
                opacity: 0,
                scale: reduceMotion ? 1 : 0.97,
                duration: 1,
              },
              index,
            );
          }
        });

        /*
         * Burger layers on desktop.
         *
         * Previously revealed layers remain visible.
         * Each new layer appears over the existing stack.
         */
        burgerLayers.forEach((layer, index) => {
          const isFirst = index === 0;

          gsap.set(layer, {
            opacity: isFirst ? 1 : 0,
            y: reduceMotion || isFirst ? 0 : 36,
            scale: reduceMotion || isFirst ? 1 : 0.98,
            transformOrigin: "center bottom",
          });

          if (isFirst) {
            return;
          }

          processTimeline.to(
            layer,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
            },
            index - 0.7,
          );
        });

        return () => {
          processTimeline.kill();
        };
      });

      return () => {
        matchMedia.revert();
      };
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section ref={sectionRef} className="bg-brand-red relative text-white lg:h-[var(--process-height)]" style={{ "--process-height": `${steps.length * 100}svh` } as CSSProperties}>
      {/*
       * Mobile: regular document flow.
       * Desktop: sticky animated viewport.
       */}
      <div className="lg:sticky lg:top-0 lg:h-svh lg:overflow-hidden">
        <div className="relative z-10 container py-16 lg:h-full lg:py-0">
          <div className="grid gap-x-10 lg:h-full lg:grid-cols-2 lg:items-center">
            <div className="flex min-h-0 flex-col justify-center lg:py-16">
              <div data-process-intro className="space-y-5">
                <Headline icons="popeyes" color="light">
                  Processo Seletivo
                </Headline>
                <h2 className="max-w-[18ch] text-3xl leading-[1.05] font-bold text-balance md:text-5xl">Passo a passo do seu pedido Zamp</h2>
              </div>

              {/*
               * Mobile: all items are stacked vertically.
               * Desktop: items overlap in the animation area.
               */}
              <div className="relative mt-10">
                <div className="from-brand-red absolute top-0 left-0 z-20 h-10 w-full bg-linear-to-b max-lg:hidden"></div>
                <ol className="space-y-7 lg:relative lg:h-68 lg:space-y-0 lg:overflow-hidden">
                  {steps.map((step, index) => (
                    <li key={step.title} data-process-step className="flex gap-4 text-balance lg:absolute lg:inset-x-0 lg:top-0 lg:pt-10">
                      <span className="block min-w-10 text-2xl font-bold">{String(index + 1).padStart(2, "0")}.</span>
                      <div className="max-w-120 space-y-2">
                        <h3 className="text-lg leading-tight font-bold md:text-xl">{step.title}</h3>
                        <p className="text-sm leading-snug md:text-base">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/*
             * All images are absolutely positioned inside the same
             * container, creating one complete overlapping burger.
             *
             * Mobile: every layer is visible by default.
             * Desktop: GSAP controls the layer opacity.
             */}
            <div className="relative flex min-h-0 items-end justify-center max-lg:-mt-16 max-sm:-mt-10">
              <div role="img" aria-label="Hambúrguer montado com todas as etapas do processo seletivo" className="relative aspect-square w-full max-w-190">
                {steps.map((step, index) => (
                  <div
                    key={step.image}
                    data-burger-layer
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      zIndex: burgerZIndexes[index],
                    }}
                  >
                    <Image src={step.image} alt="" fill priority={index === 0} sizes="(max-width: 1024px) 100vw, 55vw" className="object-contain object-bottom" />
                  </div>
                ))}
              </div>
              <Image src="./processo-seletivo-00.avif" alt="" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-contain object-bottom" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
