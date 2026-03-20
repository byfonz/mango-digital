import { Media } from "@/types/objects/media/media";
import { PortableTextBlock } from "next-sanity";

export type HeadingBlock = {
    _key: string;
    _type: "headingBlock";
    title?: string;
    subtitle?: string;
    description?: string;
    content?: PortableTextBlock[];
    coverImage?: Media;
}