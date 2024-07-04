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
      title: "Results",
      href: "/admin/dashboard/results",
      icon: "result",
    },
    {
      title: "Registrations",
      href: "/admin/dashboard/registration",
      icon: "registration",
    },
  ],
} satisfies {
  mainNav: DashboardNavMainItem[];
  sidebarNav: DashboardNavSidebarItem[];
};
