import { getCurrentUser } from "@/lib/auth/getCurrentUser";
import { AppHeader } from "@/components/navigation/header/app-header";
import { AppSidebar } from "@/components/navigation/sidebar/app-sidebar";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AdminLayout } from "@/components/layout/admin-layout";
import { ClientLayout } from "@/components/layout/client-layout";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  return user.role === 'admin'
  ? <AdminLayout>{children}</AdminLayout>
  : <ClientLayout>{children}</ClientLayout>
}
