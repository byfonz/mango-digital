import { groq } from "next-sanity"
import { blockProjection } from "./block"

export const proposalQuery = groq`
*[_type == "proposal" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,

  meta{
    date,
    industry,
    location,
    tags
  },

  sections[]{
    _key,
    _type,
    title,

    blocks[]{
     ${blockProjection}
    }
  }
}
`