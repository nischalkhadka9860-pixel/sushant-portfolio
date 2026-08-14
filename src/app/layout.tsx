import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://sushant-portfolio-8cbg.onrender.com"
  ),

  title: "Sushant Prajapati — Model Portfolio",

  description:
    "Explore the portfolio of Sushant Prajapati, a model bringing confidence, character, and individuality to every frame.",

  keywords: [
    "Sushant Prajapati",
    "Sushant Prajapati model",
    "model portfolio",
    "Nepal model",
    "fashion model",
    "Sushant model",
  ],

  authors: [
    {
      name: "Sushant Prajapati",
    },
  ],

  creator: "Sushant Prajapati",

  openGraph: {
    title: "Sushant Prajapati — Model Portfolio",

    description:
      "The official portfolio of Sushant Prajapati — exploring fashion, presence, character, and creative work.",

    url: "https://sushant-portfolio-8cbg.onrender.com",

    siteName: "Sushant Prajapati",

    type: "website",

    images: [
      {
        url: "/images/123.png",
        width: 1200,
        height: 630,
        alt: "Sushant Prajapati — Model Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Sushant Prajapati — Model Portfolio",

    description:
      "Explore the portfolio and creative work of model Sushant Prajapati.",

    images: ["/images/123.png"],
  },

  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}