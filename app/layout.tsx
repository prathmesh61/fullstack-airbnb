import Navbar from "@/components/base/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Kumbh_Sans } from "next/font/google";
import { NextAuthProvider } from "./Providers";
import CategoryNavbar from "@/components/base/CategoryNavbar";

const inter = Inter({ subsets: ["latin"] });
const kumbh_sans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb: Holiday Homes & Apartment Rentals",
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
          <div className="max-w-[1440px] mx-auto overflow-hidden">
            <Navbar />
            <CategoryNavbar />
            {children}
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
