import { PricingItemType } from "../objects/pricing-item";

export type PricingBlockType = {
    name: string;
    items: PricingItemType[];
    total: number;
}
