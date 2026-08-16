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
    "Official portfolio of Sushant Prajapati, a professional model showcasing his creative journey, selected work, portfolio, and modeling presence.",

  keywords: [
    "Sushant Prajapati",
    "Sushant Prajapati model",
    "Sushant model",
    "Nepal model",
    "Kathmandu model",
    "model portfolio",
    "Nepali model",
    "fashion model Nepal",
  ],

  authors: [
    {
      name: "Sushant Prajapati",
    },
  ],

  creator: "Sushant Prajapati",

  alternates: {
    canonical: "/",
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
        alt: "Sushant Prajapati - Model Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sushant Prajapati | Model Portfolio",
    description:
      "Explore the portfolio, creative journey, and selected work of Sushant Prajapati.",
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
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sushant Prajapati",
  url: siteUrl,
  image: `${siteUrl}/images/123.png`,
  jobTitle: "Model",
  description:
    "Sushant Prajapati is a model from Nepal with a creative portfolio featuring modeling work, fashion, and visual storytelling.",
  sameAs: [],
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
            __html: JSON.stringify(personSchema),
          }}
        />
      </head>

      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}