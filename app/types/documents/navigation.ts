import { ImageAssetType } from "../objects/image-item";
import { NavigationMenuItem } from "../objects/navigation-item";

export type NavigationMenu = {
    _id: string;
    title: string;
    placement: NavigationMenuPlacement;
    context: NavigationMenuContext;
    logo?: ImageAssetType;
    items: NavigationMenuItem[];
}

export type NavigationMenuPlacement =
| 'header'
| 'footer'

export type NavigationMenuContext = 
| 'client'
| 'dashboard'
| 'proposal'
| 'landing'