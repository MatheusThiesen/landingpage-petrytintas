import "aos/dist/aos.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Petry Tintas",
  description:
    "Atuamos no segmento de Lojas de Tintas, desde 1985, atendendo ao publico final e construtores. Ao longo dos anos,várias marcas foram incorporadas ao nosso portfólio, em virtude do reconhecimento ao trabalho desenvolvido.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className="scroll-smooth"
      suppressHydrationWarning
      data-lt-installed="true"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
