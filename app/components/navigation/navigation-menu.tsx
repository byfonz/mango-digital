import { linkResolver } from "@/lib/link-resolver";
import { NavigationMenuItem } from "@/types/objects/navigation/navigation-item";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface Props {
    items: NavigationMenuItem[];
}

export function NavigationItems({ items }: Props) {
    return (
        <>
            {items?.map((item) => {
                const href = linkResolver(item.link);

                if (!href) {
                    return null
                };

                if (item.children?.length) {
                    return (
                        <DropdownMenu key={item._key}>
                            <DropdownMenuTrigger>
                                {item.label}
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {item.children.map((child) => (
                                    <DropdownMenuItem key={child._key}>
                                        <Link href={linkResolver(item.link)}>
                                            {child.label}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )
                }

                return (
                    <Link
                        key={item._key}
                        href={href}
                        target={item.link?.target}
                        className="text-sm font-heading tracking-tighter"
                    >
                        {item.label}
                    </Link>
                )
            })}
        </>
    );
}