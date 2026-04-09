import type { Metadata } from "next";
import type { ReactNode } from "react";
import { JetBrains_Mono } from "next/font/google";
import { AppProviders } from "./AppProviders";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

/** Fallback para rotas sem `generateMetadata` (ex.: _not-found). Home e projetos definem o próprio. */
export const metadata: Metadata = {
  title: "Thomas Roodson",
  description: "Desenvolvedor Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetBrainsMono.variable}`} suppressHydrationWarning>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
