import type { NestedBlock } from "../blocks";

export type AccordionItemType = {
    _key: string;
    title: string;
    content: NestedBlock[];
}