"use client";

import Image from "next/image";
import { useState } from "react";
import CrossFadeImages from "./ui/crossfade-images";

const SLIDE_DURATION = 2500;

const heroImages = [
  { src: "/hero-01.avif", alt: "Estagiária de óculos sorrindo e com a mão na cintura" },
  { src: "/hero-02.avif", alt: "Estagiário de óculos sorrindo de braços cruzados" },
  { src: "/hero-03.avif", alt: "Estagiária sorrindo feliz" },
  { src: "/hero-04.avif", alt: "Estagiário de cabelo azul sorrindo" },
];

export default function HeroGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex items-end">
      <div className="relative aspect-960/997 w-full max-w-240 origin-bottom-right md:scale-150 lg:origin-right">
        <CrossFadeImages images={heroImages} activeIndex={activeIndex} onActiveIndexChange={setActiveIndex} slideDuration={SLIDE_DURATION} sizes="960px" className="size-full" imageClassName="object-contain" />
      </div>
      <div className="z-10 hidden gap-4 py-10 md:flex md:flex-col">
        {heroImages.map((image, index) => {
          const isActive = index === activeIndex;
          return (
            <button key={image.src} type="button" aria-label={`Mostrar imagem ${index + 1}`} aria-current={isActive ? "true" : undefined} onClick={() => setActiveIndex(index)} className={["relative aspect-square w-22 cursor-pointer overflow-hidden rounded-xl lg:w-28", "transition-colors duration-700 ease-in-out", isActive ? "bg-accent" : "bg-white"].join(" ")}>
              <Image src={image.src} alt="" fill sizes="112px" className={["translate-y-[60%] scale-[2.5] object-cover", "transition-opacity duration-700 ease-in-out", isActive ? "opacity-100" : "opacity-75"].join(" ")} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
