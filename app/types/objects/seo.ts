import { ImageAssetType } from "./image-item";

export type Seo = {
    _id: string;
    title: string;
    description: string;
    canonical?: string;
    ogImage?: ImageAssetType;
    noIndex?: boolean;
}