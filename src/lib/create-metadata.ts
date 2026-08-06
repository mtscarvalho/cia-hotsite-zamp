import { config } from "@/app/config";
import { Metadata } from "next";

type CreateMetadataProps = {
  title: string;
  description: string;
};

export function createMetadata({ title, description }: CreateMetadataProps): Metadata {
  const url = config.url;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      siteName: "Companhia de Estágios",
      locale: "pt_BR",
      type: "website",
      title,
      description,
      url,
      images: [
        {
          url: `${url}opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: "Companhia de Estágios",
        },
      ],
    },
  };
}
