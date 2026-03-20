import { FaqItem } from "../objects/faqItem";

export type FaqBlock = {
    _key: string;
    _type: "faqBlock";
    items: FaqItem[];
}