import { linkResolver } from "@/lib/link-resolver";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
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
import type { NavigationItem } from "@/types/navigationItem";
import { navMenu } from "@/config/nav-menu";

const services = [
  {
    key: 1,
    title: "Estrategia Digital",
    url: "/servicios/estrategia",
  },
  {
    key: 2,
    title: "Creación de Contenido",
    url: "/servicios/estrategia",
  },
];

const ctaSection = {
    title: 'Cotiza',
    description: 'Inicia tu prueba gratuita',
    buttons: [
        {
            key: 1,
            label: 'Iniciar'
        },
        {
            key: 2,
            label: 'Ver Precios'
        }
    ]
}

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Incio */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Inicio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* Servicios */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[600px] p-4">
              <div className="grid grid-cols-[2fr_1fr] gap-4">
                {services.map((item) => (
                  <NavigationMenuLink key={item.key} href={item.url}>
                    {item.title}
                  </NavigationMenuLink>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <div className="space-y-2">
                    <h3>{ctaSection.title}</h3>
                    <p className="text-xs">{ctaSection.description}</p>
                </div>
                {ctaSection.buttons.map((item) => (
                    <Button key={item.key}>
                        {item.label}
                    </Button>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
