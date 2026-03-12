import { PortableTextBlock } from "next-sanity";
import { ImageAsset } from "./image";

export type Slide = {
    title: string,
    description?: PortableTextBlock[];
    image?: {
        asset: ImageAsset
    } 
}