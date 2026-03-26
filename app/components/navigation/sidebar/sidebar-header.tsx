import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

export function AppSidebarHeader() {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <Image
            src="/images/logo-mango-digital.png"
            alt="logo"
            width={100}
            height={40}
          />
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}
