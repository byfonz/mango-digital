import { PortableTextBlock } from "next-sanity";

export type PricingItemType = {
    name: string;
    description?: PortableTextBlock[];
    price?: number;
    currency?: CurrencyType;
}

export type CurrencyType = 
    | 'mxn'
    | 'usd'