import { mapNavigation } from "@/lib/mappers/navigationMapper";
import { navigationQuery } from "@/lib/queries/documents/navigation";
import { client } from "@/lib/sanity";
import type { NavigationMenu, NavigationMenuPlacement, NavigationMenuContext } from "@/types/documents/navigation";

export async function getNavigationMenu(
    placement: NavigationMenuPlacement,
    context: NavigationMenuContext
): Promise<NavigationMenu | null> {

    const data = await client.fetch(
        navigationQuery,
        { placement, context }
    );

    if (!data) return null;

    return mapNavigation(data);
}