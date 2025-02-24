import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const latoThin = Lato({
  subsets: ["latin"],
  weight: "100",
  display: "swap",
  variable: "--font-lato-thin",
});

const latoLight = Lato({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
  variable: "--font-lato-light",
});

const latoRegular = Lato({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-lato-regular",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
