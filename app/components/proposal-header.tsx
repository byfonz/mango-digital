import { NavMenuType } from "@/types/documents/navigation";
import Image from "next/image";
import Link from "next/link";

interface Props {
  nav?: NavMenuType | null;
}

export function ProposalHeader({ nav }: Props) {
  return (
    <header className="flex items-center py-4 px-6 mx-auto justify-between">
      {/* Logo */}
      {nav?.logo?.url && (
        <Link href='/'>
          <Image
            src={nav.logo.url}
            alt={nav.title ?? ""}
            width={120}
            height={40}
            className="object-contain"
            priority
          />
        </Link>
      )}
      <nav className="flex items-center gap-x-3">
        {/* Menu */}
        {nav?.items?.length
          ? nav.items?.map((item) => (
              <div 
                key={item._key} 
              >
                <Link
                  key={item._key}
                  href={item.href ?? ""}
                  target={item.target}
                >
                  <span className="font-heading text-xs md:text-sm">
                    {item.label}
                  </span>
                </Link>
              </div>
            ))
          : null}
      </nav>
    </header>
  );
}
