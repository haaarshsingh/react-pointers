import "./globals.css";

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import clsx from "clsx";
import { FC, ReactNode } from "react";
import Providers from "./providers";

const inter = localFont({
  src: "./fonts/inter.woff2",
  weight: "700",
  variable: "--font-display",
  display: "swap",
});

const sohne = localFont({
  src: "./fonts/sohne.woff2",
  weight: "400",
  variable: "--font-sans",
  display: "swap",
});

const fira_code = localFont({
  src: [
    {
      path: "./fonts/fira.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-mono",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0ea5e9",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pointers.hxrsh.in"),
  title: {
    default: "Custom Pointer React",
    template: "%s — Custom Pointer React",
  },
  creator: "Harsh Singh",
  publisher: "Harsh Singh",
  description: "🌈 An animated and accessible command menu for React",
  keywords: [
    "cursor",
    "pointer",
    "custom cursor",
    "cursors",
    "change cursor",
    "animate cursor",
    "react cursor",
    "react animated cursor",
    "react pointer",
    "react animated pointer",
  ],
  authors: [{ name: "Harsh Singh", url: "https://harshsingh.xyz" }],
  openGraph: {
    title: "Custom Pointer React",
    description: "🌈 An animated and accessible command menu for React",
    url: "https://pointers.hxrsh.in",
    siteName: "Harsh Singh",
    images: [
      { url: "https://pointers.hxrsh.in/og.png", width: 1200, height: 630 },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Pointer React",
    description: "🌈 An animated and accessible command menu for React.",
    creator: "@harshhhdev",
    creatorId: "harshhhdev",
    images: {
      url: "https://pointers.hxrsh.in/og.png",
      alt: "",
    },
  },
  verification: {
    google: "VWhTtgTikPqvWIY4n2rlUj6Fe9YgkfFMEET3TM7Rce0",
    yandex: "cfc27cbb03eb0a9c",
    yahoo: "yahoo",
    other: { me: ["hi.harsh@pm.me"] },
  },
  alternates: { canonical: "https://pointers.hxrsh.in" },
  category: "technology",
};

export default (({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={clsx(
        inter.variable,
        sohne.variable,
        fira_code.variable,
        "bg-neutral-50 dark:bg-neutral-950",
      )}
    >
      <Providers>{children}</Providers>
    </body>
  </html>
)) as FC<{ children: ReactNode }>;
