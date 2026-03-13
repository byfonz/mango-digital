import { ImageAssetType } from "../objects/image-item";
import { NavMenuItem } from "../objects/navigation-item";

export type NavMenuType = {
    _id: string;
    title: string;
    slug: string;
    logo?: {
        url: string;
    };
    items: NavMenuItem[];
}


