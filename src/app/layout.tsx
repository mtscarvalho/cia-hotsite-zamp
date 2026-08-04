import type { Metadata } from "next";
import { config } from "./config";
import "./globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: `Programa de Estágio ${config.company.name} ${config.program.year} | Companhia de Estágios`,
  description: "",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
