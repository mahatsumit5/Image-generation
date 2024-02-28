import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IGEN",
  description: "Generat your image by providing prompt ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-tr from-purple-950 via-black to-blue-950 bg-cover`}
      >
        <Header />
        <main className="h-full max-w-screen-2xl mx-auto ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
