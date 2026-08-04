import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CIA Hotsite Zamp",
  description: "A statically exported Next.js hotsite.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
