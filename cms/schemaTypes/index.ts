import { accordionBlock } from "./blocks/accordionBlock";
import { featureBlock } from "./blocks/featureBlock";
import { galleryBlock } from "./blocks/galleryBlock";
import { imageBlock } from "./blocks/imageBlock";
import { pricingBlock } from "./blocks/pricingBlock";
import { sliderBlock } from "./blocks/sliderBlock";
import { subsectionBlock } from "./blocks/subsectionBlock";
import { tableBlock } from "./blocks/tableBlock";
import { textBlock } from "./blocks/textBlock";
import { timelineBlock } from "./blocks/timelineBlock";
import { authorType } from "./documents/author";
import { proposalType } from "./documents/proposal";
import { accordionItem } from "./objects/accordionItem";
import { buttonItem } from "./objects/buttonItem";
import { featureItem } from "./objects/featureItem";
import { navigationType } from "./documents/navigation";
import { pricingItem } from "./objects/pricingItem";
import { sectionType } from "./objects/section";
import { slideItem } from "./objects/slideItem";
import { timelineItem } from "./objects/timelineItem";

export const schemaTypes = [
    //Documents
    proposalType,
    sectionType,
    authorType,
    navigationType,
    //Blocks
    textBlock,
    imageBlock,
    tableBlock,
    galleryBlock,
    sliderBlock,
    accordionBlock,
    featureBlock,
    pricingBlock,
    timelineBlock,
    subsectionBlock,
    //Items
    slideItem,
    accordionItem,
    buttonItem,
    featureItem,
    pricingItem,
    timelineItem
]
