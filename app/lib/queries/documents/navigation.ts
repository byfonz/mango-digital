import { groq } from "next-sanity"
import { imageFragment } from "../fragments/image"
import { navigationItemProjection } from "../projections/navigationItemProjection"

export const navigationQuery = groq`
*[
  _type == "navigation" &&
  placement == $placement &&
  context == $context
][0]{

  _id,
  title,

  "placement": placement,
  "context": context,

  logo{
    ${imageFragment}
  },

  items[]{
    ${navigationItemProjection}
  }
}
`