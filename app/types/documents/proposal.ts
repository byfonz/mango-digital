import { AuthorType } from "./author";
import { Section } from "./section";

export type Proposal = {
  _id: string;
  title: string;
  slug: string;
  meta: {
    author: AuthorType;
    date: string;
    tags?: string[];
  }
  sections: Section[];
}