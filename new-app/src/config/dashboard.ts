import { DashboardNavMainItem, DashboardNavSidebarItem } from "@/types";

export const studentDashboardConfig = {
  mainNav: [
    { title: "Forum", href: "/forum" },
    {
      title: "Contact",
      href: "https://github.com/devvMuhammad",
    },
  ],
  sidebarNav: [
    {
      title: "Tests",
      href: "/student/dashboard",
      icon: "code",
    },
    {
      title: "Results",
      href: "/student/dashboard/results",
      icon: "result",
    },
  ],
} satisfies {
  mainNav: DashboardNavMainItem[];
  sidebarNav: DashboardNavSidebarItem[];
};

export const dashboardConfig = {
  mainNav: [
    { title: "Forum", href: "/forum" },
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
      title: "Students",
      href: "/admin/dashboard/students",
      icon: "registration",
    },
  ],
} satisfies {
  mainNav: DashboardNavMainItem[];
  sidebarNav: DashboardNavSidebarItem[];
};
