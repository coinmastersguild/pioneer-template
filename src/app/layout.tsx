'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import { PioneerProvider } from "@coinmasters/pioneer-react"
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <PioneerProvider>
        {children}
      </PioneerProvider>
      </body>
      </html>
  );
}
