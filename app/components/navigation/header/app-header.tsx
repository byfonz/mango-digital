import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { LucideMessageCircle, LucideBell } from "lucide-react";

interface Props {
  title: string;
  user: string;
}

export function AppHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b ease-linear">
      <div className="flex items-center gap-1 lg:gap-2 px-4 lg:px-6">
        <SidebarTrigger className="-ml-1" />
      </div>
      <div className="flex flex-1">
        <Command className="w-full">
          <CommandInput placeholder="Type a command or search..."></CommandInput>
        </Command>
      </div>
      <div className="flex items-center gap-1.5 px-4 lg:px-6">
        <Button size="icon" variant="outline">
          <LucideMessageCircle />
        </Button>
        <Button size="icon" variant="outline">
          <LucideBell />
        </Button>
      </div>
    </header>
  );
}
