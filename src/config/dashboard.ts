import { DashboardNavMainItem, DashboardNavSidebarItem } from "@/types";

export const dashboardConfig = {
  mainNav: [
    {
      title: "Explore",
      href: "/",
    },
    {
      title: "Support",
      href: "#",
    },
    {
      title: "Contact",
      href: "https://github.com/devvMuhammad",
    },
  ],
  sidebarNav: [
    {
      title: "Tests",
      href: "/dashboard",
      icon: "code",
    },
    {
      title: "Students",
      href: "/dashboard/students",
      icon: "rocket",
    },
    {
      title: "Results",
      href: "/dashboard/results",
      icon: "settings",
    },
  ],
} satisfies {
  mainNav: DashboardNavMainItem[];
  sidebarNav: DashboardNavSidebarItem[];
};
