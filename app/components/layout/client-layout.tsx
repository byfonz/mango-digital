import { AppHeader } from "../navigation/header/app-header";
import { AppSidebar } from "../navigation/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "../ui/sidebar";

export function ClientLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <main className="flex flex-col flex-1">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
