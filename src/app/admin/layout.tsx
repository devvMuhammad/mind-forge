import MainNav from "@/components/nav/main-nav";
import UserProfile from "@/components/nav/user-profile";
import { dashboardConfig } from "@/config/dashboard";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
        <div className="container flex h-16 items-center justify-between py-2">
          <MainNav items={dashboardConfig.mainNav} />
          <UserProfile
            user={{
              email: "muhammadaljoufi@gmail.com",
              name: "Muhammad Amjad",
              image: "",
            }}
          />
        </div>
      </header>
      <div className="container pb-8">{children}</div>
    </div>
  );
}
