import type { Block } from "../blocks";

export type AccordionItemType = {
    _key: string;
    title: string;
    content: Block[];
}