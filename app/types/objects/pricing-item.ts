import { PortableTextBlock } from "next-sanity";

export type PricingItem = {
    name: string;
    description?: PortableTextBlock[];
    price?: number;
    currency?: Currency;
}

export type Currency = 
    | 'mxn'
    | 'usd'