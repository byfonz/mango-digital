import { PortableTextBlock } from "next-sanity";
import { ImageAssetType } from "./image-item";

export type SlideItemType = {
    _key: string;
    title: string,
    description?: PortableTextBlock[];
    image?: {
        asset: ImageAssetType;
    } 
}