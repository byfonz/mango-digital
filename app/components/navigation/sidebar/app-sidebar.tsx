"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavigationItem } from "@/types/navigationItem";
import { CollapsibleTrigger } from "@base-ui/react";
import { adminNavigation } from "@/config/sidebar-admin"; 
import {
  LucideFile,
  LucideChartBar,
  LucideUsersRound,
  LucideListChecks,
  LucideSettings,
  LucideSend,
  LucideLifeBuoy,
  LucideAperture,
} from "lucide-react";
import { NavigationMenu } from "./sidebar-menu";
import { SidebarUser } from "./sidebar-user";
import { User } from "@/types/user";
import { AppSidebarHeader } from "./sidebar-header";

const system: NavigationItem[] = [
  {
    key: 1,
    title: "Equipo",
    url: "/admin/equipo",
    icon: LucideUsersRound,
  },
  {
    key: 2,
    title: "Configuración",
    url: "/admin/configuracion",
    icon: LucideSettings,
  },
  {
    key: 3,
    title: "Feedback",
    url: "/admin/feedback",
    icon: LucideSend,
  },
  {
    key: 4,
    title: "Soporte",
    url: "/admin/soporte",
    icon: LucideAperture,
  },
];

const user: User = {
  name: "Mango Digital",
  email: "contact@mangodigital.com.mx",
  avatar:
    "https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg",
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <AppSidebarHeader/>
      <SidebarContent className="gap-3">
        <NavigationMenu 
          key={JSON.stringify(adminNavigation)}
          label="Plataforma"
          items={adminNavigation} 
        />
        <NavigationMenu 
          label="Sistema"
          items={system} 
        />
      </SidebarContent>
      <SidebarFooter>
        <SidebarUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
