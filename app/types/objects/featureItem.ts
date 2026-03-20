import { NestedBlock } from "../blocks/block";
import { ImageAssetType } from "./image-item";

export type FeatureItem = {
    _key: string;
    title: string;
    content: NestedBlock[];
    icon: ImageAssetType;
}