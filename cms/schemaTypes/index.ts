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
import { button } from "./objects/button";
import { featureItem } from "./objects/featureItem";
import { navigationType } from "./documents/navigation";
import { pricingPlan } from "./objects/pricingPlan";
import { sectionType } from "./objects/section";
import { slideItem } from "./objects/slideItem";
import { timelineItem } from "./objects/timelineItem";
import { tabBlock } from "./blocks/tabBlock";
import { tabItem } from "./objects/tabItem";
import { navigationItem } from "./objects/navigationItem";
import { heroSection } from "./sections/heroSection";
import { pricingSection } from "./sections/pricingSection";
import { ctaSection } from "./sections/ctaSection";
import { faqSection } from "./sections/faqSection";
import { faqItem } from "./objects/faqItem";
import { pageType } from "./documents/page";
import { postType } from "./documents/post";
import { caseStudy } from "./documents/caseStudy";
import { link } from "./objects/link";
import { serviceSection } from "./sections/serviceSection";

export const schemaTypes = [
    //Documents
    pageType,
    postType,
    proposalType,
    caseStudy,
    sectionType,
    authorType,
    navigationType,
    //Sections
    heroSection,
    serviceSection,
    pricingSection,
    faqSection,
    ctaSection,
    //Blocks
    textBlock,
    imageBlock,
    tableBlock,
    galleryBlock,
    sliderBlock,
    tabBlock,
    accordionBlock,
    featureBlock,
    pricingBlock,
    timelineBlock,
    subsectionBlock,
    //Objects
    link,
    navigationItem,
    slideItem,
    tabItem,
    accordionItem,
    faqItem,
    button,
    featureItem,
    pricingPlan,
    timelineItem
]
