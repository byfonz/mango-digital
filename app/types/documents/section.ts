import { Block } from "../blocks/block";

export type Section = {
    _key: string;
    type: SectionType;
    title?: string;
    blocks?: Block[];
}

export type SectionType =
  | "hero"
  | "summary"
  | "context"
  | "workPlan"
  | "system"
  | "strategy"
  | "quotation"
  | "conditions"
  | "whyUs"