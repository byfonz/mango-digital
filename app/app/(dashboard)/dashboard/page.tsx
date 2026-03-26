import { getCurrentUser } from "@/lib/auth/getCurrentUser";
import { AdminDashboard } from "@/modules/dashboard/components/admin-dashboard";
import { ClientDashboard } from "@/modules/dashboard/components/client-dashboard";

export default async function Page() {
    const user = await getCurrentUser();
    
      return user.role === 'client'
      ? <AdminDashboard/>
      : <ClientDashboard/>
}