import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {

  metadataBase: new URL("http://localhost:3000"),
  title: "Argile — Furniture shaped by warmth.",
  description: "Designed in Belgium, hand-finished in clay and oak—pieces made to live in.",
  generator: "v0.app",
  alternates: {
    canonical: "https://argile.example/",
  },
  openGraph: {
    siteName: "Argile",
    title: "Furniture shaped by warmth. | Argile",
    description: "Designed in Belgium, hand-finished in clay and oak—pieces made to live in.",
    type: "website",
    url: "https://argile.example/",
    images: [
      {
        url: "/minimalist-furniture-showroom.png",
        alt: "Argile design furniture — clay-toned pieces, designed in Belgium",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_BE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Furniture shaped by warmth. | Argile",
    description: "Designed in Belgium, hand-finished in clay and oak—pieces made to live in.",
    images: [
      {
        url: "/minimalist-furniture-showroom.png",
        alt: "Argile design furniture — clay-toned pieces, designed in Belgium",
      },
    ],
    site: "@argile",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans bg-neutral-50 text-neutral-900 overflow-x-hidden">{children}</body>
    </html>
  )
}
