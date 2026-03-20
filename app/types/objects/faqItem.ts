import { PortableTextBlock } from "next-sanity";

export type FaqItem = {
    _key: string;
    question: string;
    answer: PortableTextBlock[];
}