import Image from "next/image";

import { config } from "@/app/config";

export default function Footer() {
  return (
    <footer className="py-6">
      <div className="container">
        <div className="flex justify-center">
          <a className="block" href={`https://www.ciadeestagios.com.br/?utm_source=${config.utm.source}&utm_medium=${config.utm.medium}&utm_campaign=${config.utm.campaign}`} target="_blank" rel="noopener noreferrer">
            <Image src="/logo-ciadeestagios.svg" alt="Companhia de Estágios" width={200} height={49} />
          </a>
        </div>
      </div>
    </footer>
  );
}
