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

const siteUrl = "https://sushant-portfolio-8cbg.onrender.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Sushant Prajapati | Model Portfolio",
    template: "%s | Sushant Prajapati",
  },

  description:
    "Sushant Prajapati is a model building a growing presence in fashion, bringing confidence, character, and individuality to every frame.",

  keywords: [
    "Sushant Prajapati",
    "Sushant Prajapati model",
    "Sushant Prajapati portfolio",
    "Nepal model",
    "Kathmandu model",
    "fashion model Nepal",
    "male model Nepal",
    "model portfolio",
  ],

  authors: [
    {
      name: "Sushant Prajapati",
      url: siteUrl,
    },
  ],

  creator: "Sushant Prajapati",
  publisher: "Sushant Prajapati",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "Sushant Prajapati | Model Portfolio",
    description:
      "Explore the portfolio, creative journey, and selected work of model Sushant Prajapati.",
    url: siteUrl,
    siteName: "Sushant Prajapati",
    type: "website",
    locale: "en_US",
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
    title: "Sushant Prajapati | Model Portfolio",
    description:
      "Explore the portfolio and creative work of model Sushant Prajapati.",
    images: ["/images/123.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/images/123.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Sushant Prajapati",
      alternateName: "Sushant Prajapati Model Portfolio",
      url: `${siteUrl}/`,
    },

    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Sushant Prajapati",
      url: `${siteUrl}/`,
      image: `${siteUrl}/images/123.png`,
      jobTitle: "Model",
      description:
        "Sushant Prajapati is a model building a growing presence in fashion, bringing confidence, character, and individuality to every frame.",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${siteUrl}/`,
      },
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}