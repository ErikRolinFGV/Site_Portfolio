import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Erik Rolin · Comunicar é transformar dado em decisão",
  description:
    "Portfólio de Erik Rolin — estudante de Comunicação na FGV Comunicação, com formação complementar em Ciência de Dados na FGV EMAp. Construo as ferramentas que coletam e analisam os dados, e escrevo a leitura que sai deles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
