import { PortableTextBlock } from "next-sanity";

export type AccordionItem = {
    _key: string;
    title: string;
    content: PortableTextBlock[];
}