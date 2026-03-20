import type { NestedBlock } from "../blocks/block";

export type AccordionItemType = {
    _key: string;
    title: string;
    content: NestedBlock[];
}