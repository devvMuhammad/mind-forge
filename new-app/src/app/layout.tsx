import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/lib/react-query-provider";
import { UserContextProvider } from "@/contexts/user-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mind Forge",
  description: "Forging minds for NET",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </UserContextProvider>
      </body>
    </html>
  );
}
