import { PortableTextBlock } from "next-sanity";
import { ImageAssetType } from "./image-item";

export type SlideItemType = {
    title: string,
    description?: PortableTextBlock[];
    image?: {
        asset: ImageAssetType;
    } 
}