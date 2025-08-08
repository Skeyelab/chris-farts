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
  title: "Chris Farts - Fun Bouncing Cat Website",
  description: "A fun interactive website featuring a bouncing emoji cat and flashing text. Welcome to the fun zone!",
  keywords: ["fun", "cat", "emoji", "animation", "bouncing", "interactive"],
  authors: [{ name: "Chris Farts Team" }],
  openGraph: {
    title: "Chris Farts - Fun Bouncing Cat Website",
    description: "A fun interactive website featuring a bouncing emoji cat and flashing text",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Farts - Fun Bouncing Cat Website",
    description: "A fun interactive website featuring a bouncing emoji cat and flashing text",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ec4899" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
