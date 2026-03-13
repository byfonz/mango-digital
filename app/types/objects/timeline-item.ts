import { PortableTextBlock } from "next-sanity";

export type TimelineItemType = {
    title: string;
    date: string;
    description: PortableTextBlock[];
}