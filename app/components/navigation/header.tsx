import Link from "next/link";
import Image from "next/image";
import { linkResolver } from "@/lib/link-resolver";
import { NavigationMenu } from "@/types/documents/navigation";

interface Props {
  navigation: NavigationMenu | null;
}

export function Header({ navigation }: Props) {
  if (!navigation) {
    return null;
  }

  return (
    <header className="flex items-center justify-between">
      {navigation.logo?.url && (
        <Image src={navigation.logo?.url} alt="logo" width={120} height={40} />
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
          );
        })}
      </nav>
    </header>
  );
}
