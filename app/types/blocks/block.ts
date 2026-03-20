import { AccordionBlockType } from "./accordion";
import { ContentBlock } from "./content";
import { ImageBlockType } from "./imageBlock";
import { SliderBlockType } from "./slider";
import { SubSectionBlockType } from "./subsectionBlock";
import { TableBlockType } from "./table"; 
import { TextBlockType } from "./textBlock";

export type Block =
  | TextBlockType
  | ImageBlockType
  | TableBlockType
  | SliderBlockType
  | AccordionBlockType
  | SubSectionBlockType


export type NestedBlock =
  | ContentBlock
  | TextBlockType
  | ImageBlockType
  | TableBlockType
  | SliderBlockType