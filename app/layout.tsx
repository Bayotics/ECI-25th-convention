import type React from "react"
import type { Metadata } from "next"
import { Quicksand } from "next/font/google"
import "./globals.css"

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
})

export const metadata: Metadata = {
  title: "ECI@25 - 25th International Convention",
  description: "Bridging Generations, Building Communities - Newark, NJ | Sept 18-21, 2025",
    generator: 'Abdullahi Shobaloju'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body className={`${quicksand.className} antialiased`}>{children}</body>
    </html>
  )
}
