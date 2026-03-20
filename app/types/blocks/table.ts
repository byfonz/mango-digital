import { TableItem } from "@/types/objects/table-item";
import { PortableTextBlock } from "next-sanity";

export type TableBlockType = {
  _key: string;
  _type: "tableBlock";
  title?: string;
  subtitle?: string;
  description?: string;
  content?: PortableTextBlock[];
  table: TableItem;
}