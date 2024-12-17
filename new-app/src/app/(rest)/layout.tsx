import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mind Forge",
  description: "Forging minds for NET",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
