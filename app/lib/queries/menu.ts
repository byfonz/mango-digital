import { groq } from "next-sanity"
import { imageFragment } from "./fragments/image"

export const menuQuery = groq`
*[_type == "navigation" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  logo{
    ${imageFragment}
  },
  items[]{
    _key,
    label,
    href,
    target
  }
}
`