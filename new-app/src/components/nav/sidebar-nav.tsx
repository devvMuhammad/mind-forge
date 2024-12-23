"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from '@/lib/utils'
import { DashboardNavSidebarItem } from "@/types";
import { Icons } from "../icons";

export default function SidebarNav({
  items,
}: {
  items: DashboardNavSidebarItem[];
}) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        const Icon = Icons[item.icon];
        return (
          item.href && (
            <Link key={index} href={item.href}>
              <span
                className={cn(
                  "group flex items-center rounded-[0.35rem] px-3 py-2 text-sm font-medium hover:bg-primary/90 hover:text-white transition-all duration-100 ease-in-out",
                  path === item.href
                    ? "bg-primary/90 text-white"
                    : "transparent",
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
