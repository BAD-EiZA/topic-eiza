import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Topic?",
  description: "Whats topic do you want to learn?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased min-h-screen pt-14")}>
        <Provider>
          <Navbar />
          {children}
          <Toaster/>
        </Provider>
      </body>
    </html>
  );
}
