import { PortableTextBlock } from "next-sanity";

export type AccordionItemType = {
    _key: string;
    title: string;
    content: PortableTextBlock[];
}