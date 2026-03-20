import { Button } from "../objects/button";
import { ImageAssetType } from "../objects/image-item";
import { NavigationMenuItem } from "../objects/navigation/navigation-item";
import { NavigationGroup } from "../objects/navigation/navigation-group";
import { SocialLink } from "../objects/social-link";

export type NavigationMenu = {
    _id: string;
    title: string;
    placement: NavigationMenuPlacement;
    context: NavigationMenuContext;
    logo?: ImageAssetType;
    items: NavigationMenuItem[];
    groups?: NavigationGroup[];
    ctas?: Button[];
    socials?: SocialLink[];
}

export type NavigationMenuPlacement =
| 'header'
| 'footer'

export type NavigationMenuContext = 
| 'client'
| 'dashboard'
| 'proposal'
| 'landing'