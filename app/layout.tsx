import type { Metadata } from "next";
import { Cormorant_Garamond, Crimson_Text } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "White Tree Systems | SAP Consultancy of Gondor",
  description:
    "Transform your realm with enterprise solutions from Gondor's most trusted SAP consultancy. Serving kingdoms across Middle-earth with wisdom passed down through ages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${crimson.variable}`}>
      <body className="font-serif-body bg-parchment text-midnight antialiased">
        {children}
      </body>
    </html>
  );
}
