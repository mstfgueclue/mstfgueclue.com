import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const tankerRegular = localFont({
  src: "./assets/fonts/Tanker-Regular.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "mstfgueclue.com - Mustafa Gueclue",
  description:
    "A software engineer sharing architecture patterns, development tips and experiments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${tankerRegular.variable} text-slate-800`}
    >
      <body>
        <Header />
        <main className="break-words hyphens-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
