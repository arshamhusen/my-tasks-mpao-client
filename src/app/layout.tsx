import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MPAO - Tasks",
  description: "Mohamed Arusham Hussain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          "bg-gradient-to-tr from-blue-100 to-orange-200 h-screen"
        }
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
