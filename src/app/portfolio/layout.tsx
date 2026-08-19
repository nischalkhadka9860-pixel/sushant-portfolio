import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Sushant Prajapati's modeling portfolio, selected work, collaborations, and creative projects.",
  alternates: {
    canonical: "/portfolio",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}