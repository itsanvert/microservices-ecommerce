<style>
  @import
  url(&#x27;https://fonts.googleapis.com/css2?family=Noto+Sans+Khmer:wght@100..900&display=swap&#x27;);
</style>;

import type { Metadata } from "next";
import { Noto_Sans_Khmer } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const notoSansKhmer = Noto_Sans_Khmer({
  variable: "--font-noto-sans-khmer",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VertStore - Best Clothes",
  description: "VertStore is the best place to find the best clothes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansKhmer.variable} antialiased `}>
        <div className="mx-auto p-4  sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
          <Navbar />
          {children}
          <Footer />
        </div>
        <ToastContainer position="bottom-right" />
      </body>
    </html>
  );
}
