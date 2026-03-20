import { Block } from "../blocks/block";

export type Project = {
    _id: string;
    title?: string;
    slug: string;
    caseStudy?: Block[];
}