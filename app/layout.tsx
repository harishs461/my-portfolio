import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import { IsSideBarVisibleContextProvider } from "@/lib/SidebarContext";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harish | Full-stack web developer",
  description: "I'm a full-stack web developer experienced in building cloud-native applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><IsSideBarVisibleContextProvider>
        <Navbar/>
        <main className="flex flex-col items-center justify-center w-full">
          {children}
          </main>
        </IsSideBarVisibleContextProvider></body>
    </html>
  );
}
