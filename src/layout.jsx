import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

function Layout({ children }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1">
          <div className=" border-b p-2">
            <SidebarTrigger />
          </div>

          {children}
        </main>
      </SidebarProvider>
    </>
  );
}

export default Layout;
