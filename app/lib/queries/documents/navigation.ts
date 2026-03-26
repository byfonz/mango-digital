import { groq } from "next-sanity"
import { imageFragment } from "../fragments/image"
import { navigationItemProjection } from "../projections/navigationItemProjection"
import { ctaBlockProjection } from "../projections/ctaBlockProjection" 
import { navigationSectionProjection } from "../projections/navigationSectionProjection"
import { socialLinkProjection } from "../projections/socialLinkProjection"

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
  },

  ctas[]{
    ${ctaBlockProjection}
  },

  socials[]{
    ${socialLinkProjection}
  },

  sections[]{
    ${navigationSectionProjection}
  }
}
`