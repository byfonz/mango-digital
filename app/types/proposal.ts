import { Section } from "./section"

export type Proposal = {
  _id: string;
  title: string
  slug: string
  meta: {
    date: string
    industry?: string
    location?: string
    tags?: string[]
  }
  sections: Section[]
}