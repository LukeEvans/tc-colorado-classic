import type { Metadata } from "next";
import { Inter, Libre_Franklin, Chivo } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin",
});
const chivo = Chivo({ subsets: ["latin"], variable: "--font-chivo" });

export const metadata: Metadata = {
  title: "TC Colorado Classic",
  description: "Join us for a day of golf and fundraising",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${libreFranklin.variable} ${chivo.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
