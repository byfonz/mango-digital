import { urlFor } from "@/lib/sanity-image";
import { NavMenuType } from "@/types/documents/navigation";
import Image from "next/image";
import Link from "next/link";

interface Props {
  nav?: NavMenuType | null;
}

export function ProposalHeader({ nav }: Props) {
  const logo = nav?.logo;

  const imageUrl = logo
      ? urlFor(logo).width(296).height(112).fit('fill').url()
      : null

  return (
    <header className="flex items-center py-4 px-6 max-w-7xl justify-between">
      {/* Logo */}
      {imageUrl && (
        <Link href='/'>
          <Image
            src={imageUrl}
            alt=''
            width={120}
            height={120}
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
