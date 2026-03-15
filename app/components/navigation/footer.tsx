import { linkResolver } from "@/lib/link-resolver";
import { NavigationMenu } from "@/types/documents/navigation";
import Image from "next/image";
import Link from "next/link";

interface Props {
  navigation: NavigationMenu;
}

export function Footer({ navigation }: Props) {
  if (!navigation) {
    return null;
  }

  return (
    <footer className="flex">
        {navigation.logo?.url && (
            <Image
                src={navigation.logo?.url}
                alt="logo"
                width={240}
                height={40}
            />
        )}
        <nav className="flex gap-3">
            {navigation.items?.map((item) => {
                const href = linkResolver(item.link);

                return (
                    <Link
                        key={item._key}
                        href={href}
                        target={item.link?.target}
                    >
                        {item.label}
                    </Link>
                )
            })}
        </nav>
    </footer>
  );
}
