import { imageBlock } from "./blocks/imageBlock";
import { pricingBlock } from "./blocks/pricingBlock";
import { sliderBlock } from "./blocks/sliderBlock";
import { subsectionBlock } from "./blocks/subsectionBlock";
import { tableBlock } from "./blocks/tableBlock";
import { textBlock } from "./blocks/textBlock";
import { proposalType } from "./documents/proposal";
import { pricingItem } from "./objects/pricingItem";
import { sectionType } from "./objects/section";
import { slide } from "./objects/slide";

export const schemaTypes = [
    proposalType,
    sectionType,
    textBlock,
    imageBlock,
    tableBlock,
    sliderBlock,
    pricingBlock,
    subsectionBlock,
    slide,
    pricingItem
]
