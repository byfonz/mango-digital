import { PortableTextBlock } from "next-sanity";

export type TextBlockType = {
  _key: string;
  _type: "textBlock";
  title?: string;
  content: PortableTextBlock[];
}

export type ImageBlockType = {
  _key: string;
  _type: "imageBlock";
  asset: any;
  caption?: string;
}

export type TableBlockType = {
  _key: string;
  _type: "tableBlock";
  table: any;
}

export type SubSectionBlockType = {
  _key: string;
  _type: "subSectionBlock";
  title?: string;
  content?: PortableTextBlock[];
  blocks?: Block[];
}

export type Block =
  | TextBlockType
  | ImageBlockType
  | TableBlockType
  | SubSectionBlockType