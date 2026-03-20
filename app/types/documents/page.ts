import { Seo } from "../objects/seo";
import { Section } from "./section";

export type Page = {
    _id: string;
    title:  string;
    slug: string;
    sections?: Section;
    seo?: Seo;
}