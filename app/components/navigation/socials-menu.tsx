import { linkResolver } from "@/lib/link-resolver";
import { SocialLink } from "@/types/objects/social-link";
import Link from "next/link";

interface Props {
    items: SocialLink[];
}

export function SocialsMenu({ items }: Props) {
    return (
        <div className="flex">
            {items.map((item) => {
                const href = linkResolver(item.link);

                return (
                    <Link 
                        key={item._key} 
                        href={href}
                    >
                        {item}
                    </Link>
                )
            })}
        </div>
    )
}