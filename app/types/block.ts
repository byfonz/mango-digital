import { PortableTextBlock } from "next-sanity";
import { Table } from "./table";
import { ImageAsset } from "./image";

export type TextBlockType = {
  _key: string;
  _type: "textBlock";
  title?: string;
  content: PortableTextBlock[];
}

export type ImageBlockType = {
  _key: string;
  _type: "imageBlock";
  asset: ImageAsset;
  caption?: string;
}

export type TableBlockType = {
  _key: string;
  _type: "tableBlock";
  table: Table;
}

export type SubSectionBlockType = {
  _key: string;
  _type: "subsectionBlock";
  title?: string;
  content?: PortableTextBlock[];
  blocks?: Block[];
}

export type Block =
  | TextBlockType
  | ImageBlockType
  | TableBlockType
  | SubSectionBlockType
