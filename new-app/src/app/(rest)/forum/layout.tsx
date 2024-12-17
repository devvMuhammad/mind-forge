import MainNav from "@/components/nav/main-nav";
import UserProfile from "@/components/nav/user-profile";
import { studentDashboardConfig } from "@/config/dashboard";
import { PropsWithChildren } from "react";

export const metadata = {
  title: "MindForge Forum",
  description: "A professional forum for knowledge sharing and discussions",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="px-8 flex min-h-screen flex-col space-y-6">
      <header className="py-2 sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
        <div className="flex h-16 items-center justify-between py-2">
          <MainNav items={studentDashboardConfig.mainNav} />
          <UserProfile />
        </div>
      </header>
      <main>
        <div className="container py-6">{children}</div>
      </main>
    </div>
  );
}
