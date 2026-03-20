import { FeatureItem } from "../objects/featureItem";

export type FeatureBlock = {
    _key: string;
    _type: "featureBlock";
    items: FeatureItem[]
}