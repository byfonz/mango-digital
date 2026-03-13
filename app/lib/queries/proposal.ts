import { groq } from "next-sanity"
import { sectionProjection } from "./projections/sectionProjection"
import { imageFragment } from "./fragments/image"

export const proposalQuery = groq`
*[_type == "proposal" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  coverImage{
    ${imageFragment}
  },
  meta{
    date,
    industry,
    location,
    tags
  },

  sections[]{
    ${sectionProjection}
  }
}
`