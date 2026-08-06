"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type CrossFadeImage = {
  src: string;
  alt: string;
};

type CrossFadeImagesProps = {
  images: CrossFadeImage[];
  slideDuration?: number;
  activeIndex?: number;
  onActiveIndexChange?: (index: number) => void;
  className?: string;
  imageClassName?: string;
  sizes?: string;
};

export default function CrossFadeImages({ images, slideDuration = 2500, activeIndex, onActiveIndexChange, className, imageClassName, sizes = "100vw" }: CrossFadeImagesProps) {
  const isControlled = activeIndex !== undefined;
  const [internalIndex, setInternalIndex] = useState(0);
  const currentIndex = isControlled ? activeIndex : internalIndex;

  useEffect(() => {
    if (images.length <= 1) return;

    const timeout = window.setTimeout(() => {
      const nextIndex = (currentIndex + 1) % images.length;

      if (!isControlled) {
        setInternalIndex(nextIndex);
      }

      onActiveIndexChange?.(nextIndex);
    }, slideDuration);

    return () => window.clearTimeout(timeout);
  }, [currentIndex, images.length, isControlled, slideDuration, onActiveIndexChange]);

  return (
    <div className={["relative", className].filter(Boolean).join(" ")}>
      {images.map((image, index) => (
        <Image key={image.src} src={image.src} alt={image.alt} fill priority={index === 0} loading={index === 0 ? "eager" : "lazy"} sizes={sizes} className={["object-contain transition-opacity duration-700 ease-in-out", index === currentIndex ? "opacity-100" : "opacity-0", imageClassName].filter(Boolean).join(" ")} />
      ))}
    </div>
  );
}
