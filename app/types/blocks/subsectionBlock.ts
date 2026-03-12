import { PortableTextBlock } from "next-sanity";
import { Block } from ".";

export type SubSectionBlockType = {
  _key: string;
  _type: "subsectionBlock";
  title?: string;
  content?: PortableTextBlock[];
  blocks?: Block[];
}
