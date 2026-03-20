import { ImageAssetType } from "../image-item";

export type MediaImage = {
    type: 'image';
    image?: ImageAssetType;
    altText?: string;
    caption?: string;
}