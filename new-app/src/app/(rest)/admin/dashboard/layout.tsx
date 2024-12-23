import SidebarNav from "@/components/nav/sidebar-nav";
import { dashboardConfig } from "@/config/dashboard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // these are put in a container layout (inspect the containter class in the outer layout of this layout)
    <div className="max-w-7xl mx-auto grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
      <aside className="hidden w-[200px] flex-col md:flex">
        <SidebarNav items={dashboardConfig.sidebarNav} />
      </aside>
      <main className="flex w-full flex-1 flex-col gap-7 overflow-hidden">
        {children}
      </main>
    </div>
  );
}
