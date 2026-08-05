"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDE_DURATION = 2500;

const heroImages = [
  { src: "/hero-01.avif", alt: "Estágio Zamp — imagem 1" },
  { src: "/hero-02.avif", alt: "Estágio Zamp — imagem 2" },
  { src: "/hero-03.avif", alt: "Estágio Zamp — imagem 3" },
  { src: "/hero-04.avif", alt: "Estágio Zamp — imagem 4" },
];

export default function HeroGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setActiveIndex((currentIndex) => {
        return (currentIndex + 1) % heroImages.length;
      });
    }, SLIDE_DURATION);

    return () => window.clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <div className="flex items-end">
      <div className="relative aspect-960/997 w-full max-w-240 origin-bottom-right md:scale-150 lg:origin-right">
        {heroImages.map((image, index) => (
          <Image key={image.src} src={image.src} alt={image.alt} fill priority={index === 0} loading="eager" sizes="960px" className={["object-contain transition-opacity duration-700 ease-in-out", index === activeIndex ? "opacity-100" : "opacity-0"].join(" ")} />
        ))}
      </div>
      <div className="z-10 flex gap-4 py-10 max-md:hidden md:flex-col">
        {heroImages.map((image, index) => {
          const isActive = index === activeIndex;
          return (
            <button key={image.src} type="button" aria-label={`Mostrar imagem ${index + 1}`} aria-current={isActive ? "true" : undefined} onClick={() => setActiveIndex(index)} className={["relative aspect-square w-22 overflow-hidden rounded-xl lg:w-28", "transition-colors duration-700 ease-in-out", "focus-visible:ring-2 focus-visible:outline-none", "focus-visible:ring-accent focus-visible:ring-offset-2", isActive ? "bg-accent" : "bg-white"].join(" ")}>
              <Image src={image.src} alt="" fill sizes="112px" className={["translate-y-[60%] scale-[2.5] object-cover", "transition-opacity duration-700 ease-in-out", isActive ? "opacity-100" : "opacity-75"].join(" ")} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
