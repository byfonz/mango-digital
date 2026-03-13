import { ImageAssetType } from "../objects/image-item";

export type AuthorType = {
    name: string;
    slug: string;
    role: string;
    avatar: ImageAssetType;
}