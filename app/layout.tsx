"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomNav from "@/components/navbar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [packageData, setPackageData] = useState(null);

  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomNav handleChange={(props: any) => setPackageData(props)} />
        {children}
      </body>
    </html>
  );
}
