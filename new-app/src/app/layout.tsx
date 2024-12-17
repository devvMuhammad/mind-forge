import type { Metadata } from "next";
import ReactQueryProvider from "@/lib/react-query-provider";
import { UserContextProvider } from "@/contexts/user-context";
import { Inter } from "next/font/google";
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
