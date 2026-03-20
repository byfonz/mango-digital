import { Block } from "../blocks/block";
import { Meta } from "../objects/meta";
import { Seo } from "../objects/seo";

export type Document = {
    _id: string;
    title: string;
    slug: string;
    type: DocumentType;
    meta?: Meta;
    blocks?: Block[];
    seo?: Seo; 
}

export type DocumentType = 
| 'proposal'
| 'invoice'
| 'slideDeck';