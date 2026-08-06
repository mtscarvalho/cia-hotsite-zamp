import { config } from "@/app/config";

export const getApplyProps = () => ({
  href: `https://carreira.ciadeestagios.com.br/?lang=pt&redirect=/empresas/${config.program.id}/?&utm_source=${config.utm.source}&utm_medium=${config.utm.medium}&utm_campaign=${config.utm.campaign}`,
  target: "_blank",
  rel: "noopener noreferrer",
});
