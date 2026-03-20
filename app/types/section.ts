import { Block } from "./blocks/block";

export type Section = {
    _id: string;
    type: SectionType;
    variant: string;
    content: Block[];
}

export type SectionType =
| 'hero'
| 'features'
| 'pricing'
| 'faq'
| 'testimonial'
| 'stats'
| 'gallery'
| 'portfolio'
| 'blog'
| 'team'
| 'cta'
| 'contact';