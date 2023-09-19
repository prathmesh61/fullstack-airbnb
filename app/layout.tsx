import Navbar from "@/components/base/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Kumbh_Sans } from "next/font/google";
import { NextAuthProvider } from "./Providers";

const inter = Inter({ subsets: ["latin"] });
const kumbh_sans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Book room with Airbnb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kumbh_sans.className}>
        <NextAuthProvider>
          <div className="max-w-[1380px] mx-auto">
            <Navbar />
            {children}
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
