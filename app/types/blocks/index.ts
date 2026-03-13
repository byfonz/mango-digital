import { AccordionBlockType } from "./accordionBlock";
import { ImageBlockType } from "./imageBlock";
import { SliderBlockType } from "./sliderBlock";
import { SubSectionBlockType } from "./subsectionBlock";
import { TableBlockType } from "./tableBlock";
import { TextBlockType } from "./textBlock";

export type Block =
  | TextBlockType
  | ImageBlockType
  | TableBlockType
  | SliderBlockType
  | AccordionBlockType
  | SubSectionBlockType


export type NestedBlock =
  | TextBlockType
  | ImageBlockType
  | TableBlockType
  | SliderBlockType