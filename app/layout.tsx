import type { Metadata } from "next";

import { monument, satoshi } from "@/public/fonts/customFonts";
import "./globals.css";

export const metadata: Metadata = {
 title: "Niftable-frontend test",
 description: "A simple ui to test front end skill",
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang="en">
   <body className={`${monument.variable} ${satoshi.variable} relative`}>
    {children}
   </body>
  </html>
 );
}
