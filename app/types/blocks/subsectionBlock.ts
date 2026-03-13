import { PortableTextBlock } from "next-sanity";
import { NestedBlock } from ".";

export type SubSectionBlockType = {
  _key: string;
  _type: "subsectionBlock";
  title?: string;
  content?: PortableTextBlock[];
  blocks?: NestedBlock[];
}
