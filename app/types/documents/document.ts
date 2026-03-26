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

export type DocumentTemplate = {
    type: DocumentType;
    sections: DocumentSection[];
}

export type DocumentSection = {
    id: string;
    title: string;
    blocks: DocumentBlock[];
}

export type DocumentBlock = {
    type: DocumentBlockType;
    title: string;
    path?: string;
}

export type DocumentType = 
| 'proposal'
| 'invoice'
| 'slideDeck';

export type DocumentBlockType = 
| 'text'
| 'richText'
| 'date'
| 'title';