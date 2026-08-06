"use client";

import { GoogleTagManager } from "@next/third-parties/google";

export default function GTM() {
  if (typeof window === "undefined") return null;

  if (window.location.hostname !== "www.ciadeestagios.com.br") {
    return null;
  }

  return <GoogleTagManager gtmId="GTM-5BNNQS" />;
}
