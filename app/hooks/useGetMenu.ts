import { menuQuery } from "@/lib/queries/menu";
import { client } from "@/lib/sanity";
import { NavMenuType } from "@/types/documents/navigation";

export async function getMenu(
    slug: string
): Promise<NavMenuType | null> {
    if (!slug) {
        return null
    };

    const menu = await client.fetch<NavMenuType | null>(
        menuQuery,
        { slug }
    )

    return menu;
}