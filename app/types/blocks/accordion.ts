import { AccordionItemType } from "../objects/accordion-item";

export type AccordionBlockType = {
    _key: string;
    _type: "accordionBlock";
    items: AccordionItemType[];
}