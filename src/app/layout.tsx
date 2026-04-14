import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import FilmGrain from "@/components/FilmGrain";
import CustomCursor from "@/components/CustomCursor";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prabhat & Shefali | The Royal Wedding",
  description: "Join us for our cinematic, traditional Hindu wedding celebration.",
  icons: {
    icon: "/wedding-favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-maroon)] text-[var(--color-ivory)] overflow-x-hidden">
        <CustomCursor />
        <FilmGrain />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
