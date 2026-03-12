import { PortableTextBlock } from "next-sanity";

export type TextBlockType = {
  _key: string;
  _type: "textBlock";
  title?: string;
  content: PortableTextBlock[];
}