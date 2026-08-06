import GTM from "@/components/gtm";
import "./globals.css";

import Footer from "@/components/ui/footer";
import { Poppins } from "next/font/google";

import Script from "next/script";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Footer />
        <GTM />
        <Script src="https://plugin.handtalk.me/web/latest/handtalk.min.js" strategy="afterInteractive" />
        <Script id="handtalk-init" strategy="afterInteractive">
          {`
            window.addEventListener("load", function () {
              if (window.HT) {
                new window.HT({
                  token: "5f61b7e219044db431772df0804cf289",
                  avatar: "MAYA",
                });
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}
