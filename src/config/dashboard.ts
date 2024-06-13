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
      href: "/admin/dashboard",
      icon: "code",
    },
    {
      title: "Students",
      href: "/admin/dashboard/students",
      icon: "rocket",
    },
    {
      title: "Results",
      href: "/admin/dashboard/results",
      icon: "settings",
    },
  ],
} satisfies {
  mainNav: DashboardNavMainItem[];
  sidebarNav: DashboardNavSidebarItem[];
};
